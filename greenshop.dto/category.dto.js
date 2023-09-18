const {isString, isBoolean, isNumberStrict} = require("../DataTypeCheckers");

class CategoryDto {
    constructor(category_name) {
        this.category_name = category_name
    }

    validate() {
        if (!this.category_name) {
            return false;
        }

        if (!isString(this.category_name)) {
            return false;
        }

        if(!isBoolean(this.new_arrival) || !isBoolean(this.in_sale))

            return true;
    }
}

module.exports = CategoryDto
