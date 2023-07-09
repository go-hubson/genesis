import express from 'express'

const app = express()

app.get('/', (_, res) => res.json({ message: 'Hello World' }))

app.listen(3000, () => console.log('demo-svc listening on port 3000'))
