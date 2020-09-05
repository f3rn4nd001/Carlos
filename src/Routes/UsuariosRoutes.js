const express =require('express');
const router = express.Router();
//const {verificarToken} = require('../Mid/token');
const usuarioController=require('../Controllers/UsuariosController');
router.get('/',usuarioController.usuariosGet);
router.get('/:id',usuarioController.usuarioGet);
router.put('/:id',usuarioController.usuarioPut);
router.post('/',usuarioController.usuarioCreatet);
router.post('/login/',usuarioController.usuarioLoginPut);
router.delete('/:id',usuarioController.usuarioDelete);
module.exports = router;