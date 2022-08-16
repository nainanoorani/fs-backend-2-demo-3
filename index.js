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
app.post(`/api/houses`, createHouse);
app.put(`/api/houses/:id`, updateHouse); //error
app.delete(`/api/houses/:id`, deleteHouse);

//set up basic functionality app.listen
app.listen(4004, () => console.log(`running on 4004`))
//