const express =require('express');
const router = express.Router();
//const {verificarToken} = require('../Mid/token');
const marcaController=require('../Controllers/MarcaController');
router.get('/',marcaController.marcaGet);
router.post('/',marcaController.marcaPost );
/*router.get('/:id',usuarioController.usuarioGet);
router.put('/:id',usuarioController.usuarioPut);
router.post('/',usuarioController.usuarioCreatet);
router.post('/login/',usuarioController.usuarioLoginPut);
router.delete('/:id',usuarioController.usuarioDelete);*/
module.exports = router;