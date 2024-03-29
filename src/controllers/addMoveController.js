import Moves from '../Model/Moves.js'

const addMoveController = async function (req, res) {
  req.body.userId = req.user.user_id

  const newMove = new Moves(req.body)

  try {
    const result = await newMove.save()
    res.status(200).json(result)
  } catch (err) {
    res.status(500).json('Internal server errors!')
  }
}

const getMoves = async function (req, res) {
  try {
    const { user_id, role } = req.user
    let result
    if (role === 'admin') {
      result = await Moves.find()
    } else {
      result = await Moves.find({ userId: user_id })
    }

    res.status(200).json(result)
  } catch (err) {
    res.status(500).json('Internal server errors')
  }
}

// get single move

const getMove = async function (req, res) {
  try {
    const { id } = req.params
    const result = await Moves.findOne({ _id: id })
    res.status(200).json(result)
  } catch (err) {
    res.status(500).json('Internal server errors')
  }
}

// update move
const updateMove = async function (req, res) {
  console.log(res.body)
  try {
    const { id } = req.params
    const result = await Moves.findByIdAndUpdate(id, req.body, { new: true })
    res.status(200).json(result)
  } catch (err) {
    res.status(500).json('Internal server errors')
  }
}

export { addMoveController, getMove, getMoves, updateMove }
