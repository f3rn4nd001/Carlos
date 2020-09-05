const productoModel = require('../Model/ProductoModel');

const fs = require('fs');
const excel = require('exceljs');

const productoController ={}

productoController.productosGet= async (req,res)=>{
    const productos = await productoModel.find();
    //excel--->
    let workbook = new excel.Workbook(); //creating workbook
    let worksheet = workbook.addWorksheet('Customers'); //creating worksheet
    worksheet.columns = [
        { header: 'Id', key: '_id', width: 20 },
        { header: 'Precio', key: 'precio', width: 10 },
        { header: 'Token', key: 'token', width: 10 },
        { header: 'Name', key: 'nombre', width: 30 },
        { header: 'imagen', key: 'imagen', width: 30},
        { header: 'Age', key: 'fecha', width: 12,}
      ];
      worksheet.addRows(productos);
      workbook.xlsx.writeFile("customer.xlsx")
    .then(function() {
      console.log("file saved!");
    });//<----------excel
    return res.json(productos);
  
}

productoController.productosPost= async (req,res)=>{
    const {nombre,imagen,precio,token}=(req.body);
   
    const producto =new productoModel({nombre,imagen,precio,token});
            await producto.save();   
            console.log(producto);
            res.json(producto);
}
module.exports=productoController;