const pool = require('../config/connectDB').pool

function findALlPlants() {

    return new Promise((resolve, reject) => {
        pool.query('SELECT * FROM plants',(error,results) => {
            if(error) {
                reject(error);
            } else {
                resolve(results)
            }
        })
    })
}

function createPlant(data) {
    const query = `INSERT INTO plants (
        name,
        category_id,
        new_arrival,
        in_sale,
        price,
        short_info,
        description,
        rate
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;

    const newData = [
        data.name,
        data.category_id,
        data.new_arrival,
        data.in_sale,
        data.price,
        data.short_info,
        data.description,
        data.rate,
    ]

    return new Promise((resolve, reject) => {
        pool.query(query, newData, (error, result) => {
            if(error){
                reject(error)
                return;
            }
            resolve(result)
        })
    })
}

function DeletePlant(id) {
    const query = 'DELETE FROM plants WHERE id = ?'

    return new Promise((resolve, reject) => {
        pool.query(query, id, (error, result) => {
            if(error){
                reject(error)
                return;
            }
            resolve(result)
        })
    })
}

function findPlantById(id) {
    const query = 'SELECT * FROM plants WHERE id = ?'

    return new Promise((resolve, reject) => {
        pool.query(query, id, (error, result) => {
            if(error){
                reject(error)
                return;
            }
            resolve(result)
        })
    })
}

module.exports = { findALlPlants, createPlant, DeletePlant, findPlantById }
