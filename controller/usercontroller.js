const userModel = require('./../models/user');

const info = (req, res) => {
    res.render('info.ejs');
 }

const fetchUser = async(req, res) => {
    //console.log('this is an example');
    try {
        const users = await userModel.find().exec();
        if(users) res.render('index', {users: users});
    } catch(error) {
        console.log(error);
    }
}

const renderUsers = (req, res) => {
    res.render('addUser');
}

const addToDatabase = (req, res) => {
    //console.log('file---------', req.file);
    const allusers = userModel.find();
    if(allusers) res.render('index', {allusers: allusers});
}

const addUser = async (req, res) => {

    try {
        const { firstName, lastName, age, phone, email, image} = req.body;
        const user = new userModel({
          firstName,
          lastName,
          age,
          phone,
          email,
          image: req.file.filename
          //image: req.file.filename
    })
    //const dataStore = new userModel(user);
        const response = await user.save();
       if(response) res.redirect('/');
        //if(response)res.status(201).send(response);
    } catch(error) {
        console.log(error);
    }
    
}

module.exports = {
    fetchUser,
    renderUsers, 
    addUser,
    addToDatabase, 
    info
}

