const mongoose = require('mongoose'); 
    const MarcaSchema = mongoose.Schema({     
        marca: {required: true,type: String,unique: 1,maxlength: 100
            } 
        }) 
module.exports=mongoose.model('marcaModel',MarcaSchema);