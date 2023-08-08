import mongoose, { Types } from "mongoose";


export default Produto = mongoose.model('Produto', {
    tipo: String,
    nome: String,
    genero: String,
    preco: Number,
    desconto: Number,
})