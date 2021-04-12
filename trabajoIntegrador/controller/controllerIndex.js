
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

};



module.exports = controladorIndex; 