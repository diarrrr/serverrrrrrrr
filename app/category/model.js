const mongoose = require('mongoose');
const {model, Schema} = mongoose;

let categorySchema = Schema({
    name: {
        type: String,
        minlength: [3, 'Panjang nama kategory minimal 3 karakter'],
        maxLength: [20, 'Panjang nama kategory maksimal 20 karakter'],
        required: [true, 'Nama kategory harus diisi']
    }
})
module.exports = model('Category', categorySchema);