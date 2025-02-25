const User = require('../schema/user')
const bcrypt = require('bcrypt')

const register = async (req, res) => {
    try {
        const { name, email, password} = req.body;
    const existingUser = await User.findOne({email})

    if(existingUser){
        return res.status(200).json({message: 'User already exists'})
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt)

    // create new user
    const newUser = new User({
        name,
        email,
        password: hashedPassword
    });

    await newUser.save();
    return res.send(200).json({message: 'User created sucessfully'})
    } catch (error) {
        console.log(error)
    }
}

const updateUser = async (req, res) => {
    
}


module.exports = { register }