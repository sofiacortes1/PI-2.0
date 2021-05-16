
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
        title: req.body.creador
       }).then(productoCreado =>{ 
           res.redirect('/profile/' + productoCreado.id);
       });

    }

};



module.exports = controladorIndex; 