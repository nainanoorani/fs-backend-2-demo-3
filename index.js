//set up basic functionality (express, cors, json)
const express = require('express')
const cors = require('cors')


const app = express()

app.use(express.json())
app.use(cors())
const ctrl = require('./controller')

const {
    getHouses,
    createHouse, 
    updateHouse, 
    deleteHouse
} = require('./controller')
//part 2
app.get(`/api/houses`, getHouses);
app.get(`/api/houses`, createHouse);
app.get(`/api/houses/:id`, updateHouse)
app.get(`/api/houses/:id`, deleteHouse)

//set up basic functionality app.listen
app.listen(4004, () => console.log(`running on 4004`))
//