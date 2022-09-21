const express = require('express')
const checkJwt = require('../auth0')
const db = require('../db/users')
const router = express.Router()

// GET api/v1/users
router.get('/', checkJwt, (req, res) => {
  const auth0_id = req.user?.sub
  if (!auth0_id) {
    res.send(null)
  } else {
    db.getUser(auth0_id)
      .then((user) => {
        res.json(user ? user : null)
      })
      .catch((err) => res.status(500).send(err.message))
  }
})

// POST createUser
router.post('/', checkJwt, (req, res) => {
  const auth0_id = req.user?.sub
  const { username } = req.body
  const userDetails = {
    auth0_id,
    username,
  }

  db.userExists(username)
    .then((usernameTaken) => {
      if (usernameTaken) throw new Error('Username taken')
    })
    .then(() => db.createUser(userDetails))
    .then(() => res.sendStatus(201))
    .catch((err) => {
      console.error(err)
      if (err.message === 'Username taken') {
        res.status(403).send('Username taken')
      } else {
        res.status(500).send(err.message)
      }
    })
})

module.exports = router
