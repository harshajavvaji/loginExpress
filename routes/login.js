const express = require('express');
const { register,updateUser, deleteUser, deleteAll, getUserById, getAllUsers } = require('../controllers/users');

const router = express.Router()

router.post('/register', register)
router.put('/update/:id', updateUser)
router.delete('/deleteuser/:id', deleteUser)
router.delete('/deleteall', deleteAll)
router.get('/get/:id', getUserById)
router.get('/getall', getAllUsers)

module.exports = router;