const { isString, isBoolean, isNumberStrict } = require('../DataTypeCheckers')
class PlantsDto{
    constructor(name, category_id, new_arrival, in_sale, price, short_info, description, rate) {
        this.name = name
        this.category_id = category_id
        this.new_arrival = new_arrival
        this.in_sale = in_sale
        this.price = price
        this.short_info = short_info
        this.description = description
        this.rate = rate
    }

    validate() {
        if (!this.name) {
            return false;
        }

        if (
            !isString(this.name)
            && !isString(this.short_info)
            && !isString(this.description
            && !isBoolean(this.new_arrival)
            && !isBoolean(this.in_sale)
            && !isNumberStrict(this.category_id)
            && !isNumberStrict(this.price)
            && !isNumberStrict(this.rate)
            )) {
            return false;
        }

        if(!isBoolean(this.new_arrival) || !isBoolean(this.in_sale))

        return true;
    }
}

module.exports = { PlantsDto }
