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

export { addMoveController }
