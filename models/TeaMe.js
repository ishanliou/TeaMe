const
mongoose = require('mongoose'),
teaMeSchema = new mongoose.Schema({
    teaType: {type: String, require: true, min :3},
    name: {type: String, require: true},
    brand: {type: String, default: "N/A"},
    orgin: {type: String, require: true},
    price: {type: Number, defaul: 0},
    preparation: [String]
}, {timestamp: true})

const TeaMe = mongoose.model("TeaMe", teaMeSchema)
module.exports = TeaMe