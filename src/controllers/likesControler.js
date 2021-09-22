const likes = {
  like: 0
}

exports.MostraLikes = (req, res) => res.json(likes)



exports.addLike = (req, res) => {
  likes.like ++
  return res.json(likes)
}