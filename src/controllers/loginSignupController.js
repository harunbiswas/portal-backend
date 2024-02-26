import bcrypt from 'bcrypt'
import User from '../Model/user.js'
import { EncodeToken } from '../utility/TokenHelper.js'

const signupController = async (req, res) => {
  const { name, pass, email } = req.body

  try {
    const hash = await bcrypt.hash(pass, 10)

    const newUser = new User({
      name,
      pass: hash,
      email,
    })

    // Save the user to the database
    await newUser.save()

    res.status(200).json('User created successfully')
  } catch (error) {
    res.status(500).json('Internal server errors')
  }
}
const loginController = async (req, res) => {
  const { email, pass } = req.body

  try {
    // Fetch user from the database by username
    const user = await User.findOne({ email })

    if (!user) {
      return res.status(401).json('User not found')
    }
    // Compare the provided password with the stored hashed password
    const passwordMatch = await bcrypt.compare(pass, user.pass)

    if (passwordMatch) {
      const token = EncodeToken(user?.email, user?.name, user?.role, user?._id)

      return res.status(200).json({
        token,
        name: user?.name,
        role: user?.role,
        id: user?._id,
        email: user?.email,
      })
    } else {
      return res.status(401).json({
        pass: {
          msg: 'Invalid password',
        },
      })
    }
  } catch (error) {
    res.status(500).json('Internal server errors')
  }
}

export { loginController, signupController }
