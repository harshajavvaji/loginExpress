const express = require('express');
const { register,updateUser } = require('../controllers/users');

const router = express.Router()

router.post('/register', register)
router.put('/update/:id', updateUser)

module.exports = router;