let controladorMenu =  {
    
    login: (req,res) =>{
        res.render('login');
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



module.exports = controladorMenu; 