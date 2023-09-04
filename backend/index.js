const express = require('express')
const cors = require('cors')
const app = express()

app.use(
	cors({
		credentials: true,
		origin: '*',
	})
)

app.get('/api/data', (req, res) => {
	res.send(JSON.stringify('Hello World!'))
})

app.listen(3000, () => {
	console.log('Server listening on port 3000')
})
