import { Router, Request, Response } from "express";

const router = Router();

router.get('/mensaje', ( req:Request, res:Response ) => {

    res.json({
        ok:true,
        mensaje:'Todo esta bien !!'
    })

})

router.post('/mensaje', ( req:Request, res:Response ) => {

    const cuerpo = req.body.cuerpo;
    const de = req.body.de;

    const body = req.body;

    res.json({
        ok:true,
        cuerpo,
        de,
        body
    })

})


router.post('/mensaje/:id', ( req:Request, res:Response ) => {

    const cuerpo = req.body.cuerpo;
    const de = req.body.de;
    const body = req.body;

    const id =  req.params.id;

    res.json({
        ok:true,
        cuerpo,
        de,
        id
    })

})


export default router;