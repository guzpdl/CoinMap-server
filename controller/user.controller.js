const router = require("express").Router();
const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
const saltRounds = 10;
const userModel =  require('../models/User.model')





const createUser = (req, res, next) => {

    const { username, password, email } = req.body;

    if (!username || !email) {
        return res
          .status(400)
          .json({ errorMessage: "Please provide your username and email." });
      }
    
      if (password.length < 8) {
        return res.status(400).json({
          errorMessage: "Your password needs to be at least 8 characters long.",
        });
      }    
    
      
      userModel.findOne({ username }).then((found) => {
        
        if (found) {
          return res.status(400).json({ errorMessage: "Username already taken." });
        }
    
        
        return bcrypt
          .genSalt(saltRounds)
          .then((salt) => bcrypt.hash(password, salt))
          .then((hashedPassword) => {
            return userModel.create({
              username,
              password: hashedPassword,
              email
            });
          })
          .then(() => {
            res.sendStatus(201)
          })
          .catch((error) => {
            if (error instanceof mongoose.Error.ValidationError) {
              return res.status(400).json({ errorMessage: error.message });
            }
            if (error.code === 11000) {
              return res.status(400).json({
                errorMessage:
                  "Username need to be unique. The username you chose is already in use.",
              });
            }
            return res.status(500).json({ errorMessage: error.message });
          });
      });    

}

const loginUser = () => {

    const { username, password } = req.body;

  if (!username) {
    return res
      .status(400)
      .json({ errorMessage: "Please provide your username." });
  }

  if (password.length < 8) {
    return res.status(400).json({
      errorMessage: "Your password needs to be at least 8 characters long.",
    });
  }

  userModel.findOne({ username })
    .then((user) => {
      if (!user) {
        return res.status(400).json({ errorMessage: "Wrong credentials." });
      }

     bcrypt.compare(password, user.password).then((isSamePassword) => {
        if (!isSamePassword) {
          return res.status(400).json({ errorMessage: "Wrong credentials." });
        }
      });
    })

    .catch((err) => {
      next(err);
    });

}

const updateUser = () => {
  
}

module.exports = {
    createUser,
    loginUser
}

