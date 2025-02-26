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
    try {
        const { id } = req.params;
        const { name, email, password } = req.body;
        console.log(name)
        updatedFields = {};
        if(name) updatedFields.name = name;
        if(email) updatedFields.email = email
        if(password) {
            const salt = await bcrypt.genSalt(10);
            updatedFields.password = await bcrypt.hash(password, salt);
        }
        console.log(updatedFields)
        const updated = await User.findByIdAndUpdate(
            id,
            updatedFields,
            {
            new: true, runValidators: true
            }
    )

    if(!updated){
        return res.status(404).json({message: "User not found"})
    }
        return res.status(200).json(updated)

    } catch (error) {
        console.log(error)
    }
}



module.exports = { register, updateUser }