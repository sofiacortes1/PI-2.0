let controladorDatos =  {
    
    login: (req,res) =>{
        res.render('login');
    },

    profile: (req,res) =>{
        res.render('profile');
    },

    profileEdits: (req,res) =>{
        res.render('profile-edits');
    },

    register: (req,res) =>{
        res.render('register');
    },

    searchResults: (req,res) =>{
        let buscador = req.query.search;
        if ( buscador !== '') {
            res.render('search-results', {title: 'Tu resultado es...'})
        } else {
            
        }


        console.log(buscador);
        console.log(req.query);





        res.render('search-results');
       
    },

};



module.exports = controladorDatos; 