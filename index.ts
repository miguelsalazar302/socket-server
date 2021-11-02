import Server from "./classes/server";
import router from "./routes/router"; 
import express from 'express';
import cors from 'cors'

const server = Server.instance;

//CORS
server.app.use( cors({ origin:true, credentials:true }) );

//Lectura y parseo del body
server.app.use(express.urlencoded({extended:true})); 
server.app.use(express.json());

//Rutas de servicios
server.app.use('/',router);


server.start( ()=>{
    console.log(`Servidor corriendo en el puerto ${server.port}`);
})
