import express from "express";
import { 
    paginaInicio, 
    paginaNosotros, 
    paginaTestimonios, 
    paginaViajes, 
    paginaDetalleViajes 
} from "../controlers/paginasControler.js";
import {
    guardarTestimonial
} from "../controlers/testimonialControles.js";

const router = express.Router();

router.get('/', paginaInicio);

router.get('/nosotros', paginaNosotros);

router.get('/viajes', paginaViajes);

router.get('/viajes/:slug', paginaDetalleViajes);

router.get('/testimoniales', paginaTestimonios);
router.post('/testimoniales', guardarTestimonial)

export default router;