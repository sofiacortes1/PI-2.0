let controlador =  {
    index: (req,res) =>{
        res.render('index');
    },

    login: (req,res) =>{
        res.render('login');
    },

    products: (req,res) =>{
        res.render('products');
    },

    productsAdd: (req,res) =>{
        res.render('productsAdd');
    },

    profile: (req,res) =>{
        res.render('profile');
    },

    profileEdits: (req,res) =>{
        res.render('profileEdits');
    },

    register: (req,res) =>{
        res.render('register');
    },

    searchResults: (req,res) =>{
        res.render('searchResults');
    },

};



module.exports = controlador; 