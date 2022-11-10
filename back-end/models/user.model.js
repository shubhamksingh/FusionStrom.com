const mongoose = require('mongoose')
const validator = require('validator')

const userSchema = mongoose.Schema({
    name: {
        type: String,
        require: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        unique: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Email is invalid')
            }
        }
    },
    password: {
        type: String,
        required: true,
        trim: true,
        minlength: 7,
        validate(value) {
            if (value.toLowerCase().includes('password')) {
                throw new Error('Password cannot contain "Password"')
            }
        }
    }

})

const bcrypt = require('bcryptjs');

userSchema.pre('save', async function (next) {
    const user = this

    if (user.isModified('password')) {
        user.password = await bcrypt.hash(user.password, 8)
    }
    console.log("just before")
    next()
})

userSchema.methods.generateAuthToken = async function () {
    const user = this
    // console.log("hey")
    const token = jwt.sign({ _id: user._id.toString() }, "thisismynewcourse")

    user.tokens = user.tokens.concat({ token })
    console.log(user.tokens)

    await user.save()

    return token
}


userSchema.statics.findByCredentials = async ({ user_id, password }) => {
    const user = await User.findOne({
        $or:
            [{ "email": user_id },
            { "user_id": user_id }
            ]
    }
    )

    if (!user) {
        throw new Error('Invalid Credentials!')
    }

    const isMatch = await bcrypt.compare(password, user.password)

    if (!isMatch) {
        throw new Error('Invalid Credentials!')
    }
    
    return user
}

const User = mongoose.model('user', userSchema)

module.exports = User

