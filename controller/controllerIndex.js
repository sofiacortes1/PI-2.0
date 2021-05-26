const db = require('../database/models');
const Op = db.Sequelize.Op;

let controladorIndex =  {
    index: (req,res) =>{
        res.render('index');
    },

    products: (req,res) =>{
        res.render('products');
    },

    productsAdd: (req,res) =>{
        res.render('products-add');
    },
    crear: (req, res) => {
        db.Producto.create({
        color: req.body.color,
        name_producto: req.body.modelo,
        fecha: req.body.fecha,
       }).then(productoCreado =>{ 
           res.redirect('/datos/profile')
       });

    }, 

    agregar: (req,res) => {
        db.Comentario.create({
            texto: re.body.agregar
        }).then(comentAgregado => {
            res.redirect('/products' + comentAgregado);

        }) 
    }






    //borrar: (req,res) => {
    //    db.Comentario.destroy({
     //       where: {
       //         id: req.body.id
    //        }
     //   }).then(() => {
     //       res.redirect('/products')
     //   })

  //  },

};



module.exports = controladorIndex; 