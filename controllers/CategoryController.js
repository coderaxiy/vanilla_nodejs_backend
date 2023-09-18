const { getBodyData } = require("../middlewares/getBody");
const CategoryDto = require("../greenshop.dto/category.dto");
const { createCategory, getAllCategory } = require('../models/CategoryModel')

async function addCategory(req, res){
    try{
        const body = await getBodyData(req)

        const { category_name } = JSON.parse(body)

        const validData = new CategoryDto(category_name).validate()

        if(!validData){
            const error = {
                success: false,
                message: 'Invalid Data'
            }

            res.writeHead(422, {'Content-Type': 'application/json'})
            res.end(JSON.stringify(error))
            return
        }

        await createCategory(JSON.parse(body)).then(() => {
            const resp = {
                success: true,
                message: 'Created'
            }

            res.writeHead(200, {'Content-Type': 'application/json'})
            res.end(JSON.stringify(resp))
        })
    } catch (err) {
        console.log(err)
    }
}

async function getCategories(req, res){
    try {
        const categories = await getAllCategory()

        const resp = {
            success: true,
            data: categories
        }

        res.writeHead(200, {'Content-Type': 'application/json'})
        res.end(JSON.stringify(resp))
    } catch (e) {
        console.log(e)
    }
}

module.exports = { addCategory, getCategories }
