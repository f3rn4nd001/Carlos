const mongoose =require('mongoose');
const {Schema} =mongoose;


const productosShema =Schema({
    modelo:{type:String,require:true,unique: 1,maxlength: 50},
    imagen:{type:Array,require:false},
    talla:{type:String,require:true,unique: 1,maxlength: 20},
    color:{type:String,require:true,unique: 1,maxlength: 20},
    description: {required: true, type: String, maxlength: 1000},
    precio:{type:String,require:true},
    fecha: { type: Date, default: Date.now },
    stok:{type:Number,require:true},
    marca: {type:String,require:true,unique: 1,maxlength: 50},
});
module.exports=mongoose.model('productoModel',productosShema);