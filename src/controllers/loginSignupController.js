import bcrypt from 'bcrypt'

const signupController = async (req, res) => {
  // Your implementation for signupController
  const { name, pass, email } = req.body
  console.log(name)

  try {
    const hash = await bcrypt.hash(pass, 10)

    res.status(200).json(hash)
  } catch {
    res.status(500).json('Internal server errors')
  }
}

export { signupController }
