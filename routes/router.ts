import { Router, Request, Response } from 'express';

const router = Router();

router.get('/mensajes', (req: Request, res: Response) => {
    res.status(200).json({
        ok: true,
        mensajes: 'todo esta bien'
    });
});

router.post('/mensajes', (req: Request, res: Response) => {
    const { cuerpo, de } = req.body;

    res.status(200).json({
        ok: true,
        mensajes: { cuerpo, de}
    });
});

router.post('/mensajes/:id', (req: Request, res: Response) => {
    const { cuerpo, de } = req.body;
    const id = req.params.id;

    res.status(200).json({
        ok: true,
        mensajes: { cuerpo, de, id}
    });
});

export default router;