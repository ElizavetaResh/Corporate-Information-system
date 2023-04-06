const express = require('express')
const userRouter = require('./src/app/router/userRoutes')
const PORT = process.env.PORT || 8080

const app = express()
var cors = require('cors')

app.use(cors())
app.use(express.json())
app.use('/api', userRouter)

app.listen(PORT, () => console.log('server started on post ' + PORT))
