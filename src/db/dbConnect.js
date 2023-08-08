import mongoose from "mongoose";
import 'dotenv/config'

const USER = process.env.DB_USER
const PASS = process.env.DB_PASS

console.log(USER, PASS);

export default mongoose.connect(
    `mongodb+srv://${USER}:${PASS}@cluster0.y1ua7jh.mongodb.net/drip-store?retryWrites=true&w=majority`
)
.then(() => console.log("BD conectado com sucesso!"))
.catch(error => console.log(`Erro ao conectar ao banco:${error}`))