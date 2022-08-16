const houses = require('./db.json');
let globalId = 4;


module.exports = {
    //send all houses in object array
    getHouses: (req, res) => {
        res.status(200).send(houses);
    },
    deleteHouse: (req, res) => {
        //find index of house you want to delete
        let index = houses.findIndex(elem => elem.id === +req.params.id)
        //splice it out of the object array and resend
        houses.splice(index, 1)
        res.status(200).send(houses)
    },
    createHouse: (req, res) => {
        //request inputs from front-end
        let { address, price, imageURL } = req.body;
        //create object, provide it with the global id
        let newHouse = {
            id: globalId,
            address, 
            price,
            imageURL
        }
        //add it to the array and send to front end and update id 
        houses.push(newHouse)
        res.status(200).send(houses)
        globalId++
    },
    updateHouse: (req, res) => {
        //request id from endpoint params so you know which house to update
        let { id } = req.params
        //capture type (string either plus or minus)
        let { type } = req.body
        let index = houses.findIndex(elem => +elem.id === +id)
        //conditional checks to see if type is minus or plus
        if (houses[index].rating === 5 && type === 'plus') {
            res.status(400).send('cannot go above 5') //user error handling
        } else if (movies[index].rating === 0 && type === 'minus') {
            res.status(400).send('cannot go below 0')
        } else if (type === 'plus') {
            houses[index].rating++
            res.status(200).send(houses) //increase rating if plus
        } else if (type === 'minus') {
            houses[index].rating--
            res.status(200).send(houses)
        } else {
            res.sendStatus(400)
        }
    }
    }
  