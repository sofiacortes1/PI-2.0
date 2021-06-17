const db = require('../database/models');
const Op = db.Sequelize.Op;

let controladorIndex =  {
    index: (req,res) =>{

        db.Producto.findAll().then(todo =>{
            console.log(todo);
            if (req.session.resultado){
                res.render('index', {usuario: req.session.resultado, productos: todo});
            }
            else {
                res.render('index', {usuario: "anonimo", productos: todo });
            } 
        }).catch(error => console.log(error));

    },

    products: (req,res) =>{
        res.render('products');
    },

    productsAdd: (req,res) =>{
        res.render('products-add');
    },

    productDetalle: (req,res) => {
       let id = req.params.id;
       console.log(id);
       db.Producto.findByPk(id).then(resultado => {
        res.render('products', {resultado: resultado});
        
       })
    },

    crearProducto: (req, res) => {
        db.Producto.create({
        color: req.body.color,
        name_producto: req.body.modelo,
        fecha: req.body.fecha,
       }).then(productoCreado =>{ 
           res.redirect('/products/' + productoCreado.id)
       });
    },

    logout: (req, res) => {
        req.session.destroy();
        res.clearCookie('userId');
        res.redirect('/');
    },
    AgregarComentario: (req, res) => {
        db.Comentario.create({
            texto: req.body.agregar,
        }).then(comentarioAgregado =>{
            res.redirect('/products/' )
        }).catch(error => console.log(error));

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