const {pool} = require("../config/connectDB");

function createCategory(data) {
    const query = `INSERT INTO category ( category_name ) VALUE (?)`;

    const newData = [
        data.category_name,
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

function getAllCategory() {
    const query = `
        SELECT c.*, COUNT(p.id) AS plant_count
        FROM category AS c
        LEFT JOIN plants AS p ON c.id = p.category_id
        GROUP BY c.id;
    `
    return new Promise((resolve, reject) => {
        pool.query(query, (error, result) => {
            if(error){
                reject(error)
                return;
            }
            resolve(result)
        })
    })
}

module.exports = {
    createCategory,
    getAllCategory
}
