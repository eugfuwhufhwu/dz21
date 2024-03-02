const express = require('express')
const cors = require('cors')
const path = require('path')

const PORT = 3000
const app = express()
const allowedOrigins = ['127.0.0.1:3000']

const createPath = (page, ext) => path.resolve(__dirname, 'pages', `${page}.${ext}`)

app.use(express.static(__dirname + '/pages'))

app.use(
    cors({
        origin: allowedOrigins,
        credential: true
    })
)

app.get('/page1', (req, res) => {
    res.sendFile(createPath('page1', 'html'))
})
app.get('/page2', (req, res) => {
    res.sendFile(createPath('page2', 'html'))
})
app.get('/page3', (req, res) => {
    res.sendFile(createPath('page3', 'html'))
})
app.get('/page4', (req, res) => {
    res.sendFile(createPath('page4', 'html'))
})
app.get('/page5', (req, res) => {
    res.redirect('/page4')
})
app.use((req, res) => {
    res.sendFile(createPath('error', 'html'))
})

app.listen(PORT, () => {
    try {
        console.log(`сервер успешно запущен на порту:${PORT}`)
    }
    catch (err) {
        console.error(`ошибка при прослуше сервера${err}`)
    }
})