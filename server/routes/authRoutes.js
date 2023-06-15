const router = require('express').Router()

router.post('/signup', (req, res) => {
	res.send('signup')
})

router.post('signin', (req, res) => {
	res.send('signin')
})

module.exports = router
