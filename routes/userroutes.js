const express = require('express');
const multer = require('multer');
const userModel = require('./../models/user');

const userController = require('./../controller/usercontroller');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + file.originalname;
      cb(null, file.fieldname + '-' + uniqueSuffix)
    }
  })
  
  const upload = multer({ storage: storage });
//const upload = multer({dest: 'uploads/'});

const router = express.Router();

router.get('/', userController.fetchUser);

router.get('/info', userController.info);

router.get('/users', userController.renderUsers);

//router.post('/', userController.addUser);

router.post('/users', upload.single('image'), userController.addUser);



module.exports = router;