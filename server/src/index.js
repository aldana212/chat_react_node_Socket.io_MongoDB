
import express from "express";
import morgan from "morgan";
import { Server as SocketServer } from "socket.io";
import http from "http";
import cors from "cors"
import { PORT } from "./config.js";
import mongoose from "mongoose";
import authRouter from "./router/auth.js"

mongoose.connect('mongodb+srv://danielaldana212:SYNUXa9J1m3qz1Uq@cluster0.b1dv4p5.mongodb.net/chats?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("DB Connetion Successfull");
})
.catch((err) => {
        console.log(err.message);
});

// inicializamos express
const app = express()


app.use(express.json());

// express no es compatible compatible con este otro modulo por eso 
// creamos un servidor con http y le pasamos la confi de express
// server seria el servidor http
const server = http.createServer(app)

// el servidor http se lo pasamos a sockeit
// io confi inicial de sockeit
const io = new SocketServer(server, {
    // permita que el otro puerto se pueda comunicar (*) permite cualquier servidor se conecte 
    cors: {
        origin: 'http://localhost:3000',
    }
})

// cualquier servidor externo va a poder conectarse cors
app.use(cors())

app.use("/api/auth", authRouter);


// para tener mejor vision a las peticiones del servidor morgan 
app.use(morgan('dev'))

// cuando el client intente conectarse ejecutame una funcion
io.on('connection', (socket) => {
    // console.log(socket.id);

    // cuando te envie un evento escucha
    // el parametro message es el mensaje que envian o emiten
    socket.on('message', (message) => {
        //cuando recibimos el evento y haces su proceso deseado lo devolveremos al cliente
        // broadcast es enviar a los otros cliente y emitimos un evento parametros(nombre y valor)
        socket.broadcast.emit('message', {
            body: message,
            from: socket.id
        })
    })
})


server.listen(PORT, () => {
    console.log("server started on port " + PORT);
})