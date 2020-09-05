const express =require('express');
const router = express.Router();
const productoController=require('../Controllers/ProductosController');

router.get('/',productoController.productosGet);
//router.get('/:id',productoController.productoGet);
router.post('/',productoController.productosPost);
//router.put('/:id',usuarioController.usuarioPut);


module.exports = router;