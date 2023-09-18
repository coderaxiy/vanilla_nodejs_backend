const { findALlPlants, createPlant, DeletePlant, findPlantById } = require('../models/PlantsModel')
const { getBodyData } = require('../middlewares/getBody')
const { PlantsDto } = require('../greenshop.dto/plants.dto')

async function getPlants(req, res) {
    try {
        const plants = await findALlPlants()

        const response = {
            success: true,
            data: plants
        }

        res.writeHead(200, {'Content-Type': 'application/json'})
        res.end(JSON.stringify(response))
    } catch (err) {
        console.log(err)
    }
}

async function addPlant(req, res) {
    try{
        const body = await getBodyData(req)

        const {
            name,
            category_id,
            new_arrival,
            in_sale,
            price,
            short_info,
            description,
            rate
        } = JSON.parse(body)

        const validData = new PlantsDto(
            name,
            category_id,
            new_arrival,
            in_sale,
            price,
            short_info,
            description,
            rate).validate()

        if(validData){
            await createPlant(JSON.parse(body)).then(() => {
                const resp = {
                    success: true,
                    message: 'Created'
                }

                res.writeHead(200, {'Content-Type': 'application/json'})
                res.end(JSON.stringify(resp))
            })
        }

        const error = {
            success: false,
            message: 'Invalid Data'
        }

        res.writeHead(422, {'Content-Type': 'application/json'})
        res.end(JSON.stringify(error))
    } catch (err) {
        console.log(err)
    }
}

async function removePlant(req, res, id) {
    try {
        await DeletePlant(id)

        const resp = {
            success: true,
            message: 'Deleted'
        }

        res.writeHead(200, {'Content-Type': 'application/json'})
        res.end(JSON.stringify(resp))
    } catch (e){
       console.log(e)
    }
}

async function getPlant(req, res, id) {
    try {
        const plant = await findPlantById(id)

        const resp = {
            success: true,
            data: plant,
            id
        }

        res.writeHead(200, {'Content-Type': 'application/json'})
        res.end(JSON.stringify(resp))
    } catch (e){
        console.log(e)
    }
}

module.exports = { getPlants, addPlant, removePlant, getPlant }
