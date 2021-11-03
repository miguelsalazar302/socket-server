import { Router, Request, Response } from "express";
import Server from "../classes/server";

const router = Router();

router.get('/mensaje', ( req:Request, res:Response ) => {

    res.json({
        ok:true,
        mensaje:'Todo esta bien !!'
    })

})

router.post('/mensaje', ( req:Request, res:Response ) => {

    const server = Server.instance;

    const cuerpo = req.body.cuerpo;
    const de = req.body.de;
    const id =  req.params.id;

    const payload = {
        de,
        cuerpo
    }
    

    server.io.emit('mensaje-nuevo', payload)

    res.json({
        ok:true,
        cuerpo,
        de 
    })

})


router.post('/mensaje/:id', ( req:Request, res:Response ) => {

    const server = Server.instance;

    const cuerpo = req.body.cuerpo;
    const de = req.body.de;
    const id =  req.params.id;

    const payload = {
        de,
        cuerpo
    }
    

    server.io.in( id ).emit('mensaje-privado', payload)

    res.json({
        ok:true,
        cuerpo,
        de 
    })

})


export default router;