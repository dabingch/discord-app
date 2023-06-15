const express = require('express')
const http = require('http')
const cors = require('cors')
const mongoose = require('mongoose')
require('dotenv').config()

const PORT = process.env.PORT || 5000
const app = express()

app.use(express.json())
app.use(cors())

app.use('/api/auth', require('./routes/authRoutes'))

const server = http.createServer(app)

mongoose
	.connect(process.env.MONGO_URI)
	.then(() => {
		console.log('Database connection successful')
		server.listen(PORT, () => {
			console.log(`Server is running on port ${PORT}`)
		})
	})
	.catch((err) => {
		console.log('Database connection failed, server not started')
		console.error(err)
	})
