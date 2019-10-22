const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const Users = require('../users/users-model.js');
const secrets = require('../config/secrets.js');

/**
 *
 * @api {post} /auth/register Register new user
 * @apiName RegisterUser
 * @apiGroup Auth
 * @apiVersion 1.0.0
 *
 * @apiParam {String} username User username
 * @apiParam {String} password User password
 * @apiParam {String} role User role
 *
 * @apiSuccess {Number} id User ID
 * @apiSuccess {String} username User's username
 * @apiSuccess {String} role User's role
 *
 * @apiParamExample {json}
 *  {
 *    "username": "lambdastudent",
 *    "password": "password",
 *    "role": "student"
 *  }
 *
 * @apiSuccessExample {json} Success-Response:
 *  HTTP/1.1 201 Created
 * {
 *   "id": 1,
 *   "username": "lambdastudent",
 *   "role": "student"
 * }
 * 
 * @apiError MissingParameters Missing required parameters
 *
 * @apiErrorExample {json} Missing required parameters
 *  HTTP/1.1 400
 *  {
 *    "message": "Missing user parameters"
 *  }
 *
 * @apiError MissingParameters Missing required parameters
 *
 * @apiErrorExample {json} Register error
 *  HTTP/1.1 500 Internal Server Error
 *
 */

router.post('/register', validateRole, (req, res) => {
    const { username, password, role } = req.body;
    if (username && password && role) {
      let user = req.body;
      const hash = bcrypt.hashSync(user.password, 10);
      user.password = hash;
    
      Users.add(user)
        .then(saved => {
          res.status(201).json({
            id: saved.id,
            username: saved.username,
            token: generateToken(saved)
          })
        })
        .catch(error => {
          res.status(500).json({ message: 'cannot add the user', error });
        });
    } else res.status(400).json({ message: "Missing user parameters" });
});

/**
 *
 * @api {post} /auth/login Login user
 * @apiName LoginUser
 * @apiGroup Auth
 * @apiVersion 1.0.0
 *
 * @apiParam {String} username User username
 * @apiParam {String} password User password
 *
 * @apiSuccess {String} message Welcome message
 * @apiSuccess {String} token User's Authorization token
 *
 * @apiParamExample {json}
 *  {
 *    "username": "lambdastudent",
 *    "password": "password"
 *  }
 *
 * @apiSuccessExample {json} Success-Response:
 *  HTTP/1.1 200 OK
 * {
 *   "message": "Welcome lambdastudent!",
 *   "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0IjozLCJ1c2VybmFtZSI6ImplZmYiLCJyb2xlIjoic3R1ZGVudCIsImlhdCI6MTU3MTY5MjU2OCwiZXhwIjoxNTcxNzAzMzY4fQ.szvk7Z1GqU9vPD8Jaj_4fkIXgpWVfmF9GipThZhGKjQ"
 * }
 *
 * @apiError InvalidCredentials Invalid user credentials
 *
 * @apiErrorExample {json} Invalid credentials
 *  HTTP/1.1 401
 *  {
 *    "message": "Invalid user credentials"
 *  }
 * 
 * @apiError MissingParameters Missing required parameters
 *
 * @apiErrorExample {json} Login error
 *  HTTP/1.1 500 Internal Server Error
 *
 */

router.post('/login', (req, res) => {
    let { username, password } = req.body;
  
    Users.findBy({ username })
      .first()
      .then(user => {
        if (user && bcrypt.compareSync(password, user.password)) {
          const token = generateToken(user);
          res.status(200).json({
            message: `Welcome ${user.username}!`,
            id: user.id,
            username: user.username,
            token,
          });
        } else {
          res.status(401).json({ message: 'Invalid user credentials' });
        }
      })
      .catch(error => {
        res.status(500).json(error);
      });
});

function generateToken(user) {
    const payload = {
      subject: user.id,
      username: user.username,
      role: user.role
    };
    const options = {
      expiresIn: '3h',
    };
  
    return jwt.sign(payload, secrets.jwtSecret, options);
}

function validateRole(req, res, next) {
  const { role } = req.body;
  role === 'helper' || role === 'student' ?
  next()
  : res.status(400).json({ message: 'Invalid role being sent.' });
}

module.exports = router;
