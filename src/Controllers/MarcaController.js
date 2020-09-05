
const marcaModel = require('../Model/MarcaModel');

const marcaController ={}

marcaController.marcaGet= async (req,res)=>{    
    const marca = await marcaModel.find();
    return res.json(marca);
}
marcaController.marcaPost= async (req,res)=>{    
    const {marca}=(req.body);
    const errors = [];
    const guardado = [];
    if (!marca) {
        res.send({'success':false, message:'El campo marca no puede estar vacio'});
        errors.push({ text: 'El campo marca no puede estar vacio' });
    }
    if (errors.length > 0) {
        console.log({
            errors,
        });
    } else {
        const marcaz =await marcaModel.findOne({marca:marca});
        if(marcaz) {res.send({message:"marca ya registrado",'success':false});
            console.log("marca ya registrado");}
        else{
            guardado.push({ text: 'Datos de marca guardados' ,message:'Datos de marca guardados','success':true});
            const marcaa =new marcaModel({marca});
            await marcaa.save();   
            console.log(marcaa);
            res.json(marcaa);
        } 
    }
}
module.exports=marcaController;