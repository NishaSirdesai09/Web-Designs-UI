const express = require("express");
const res = require("express/lib/response");
const router = express.Router();
const User = require("../models/user");
var validator = require("email-validator");
var nameValidator = require('validator');
const {upload} = require('../middleware/multerConfig')
const bcrypt = require("bcrypt");
const saltRounds = 10;

var passwordValidator = require("password-validator");
const user = require("../models/user");

// Create a schema
var schema = new passwordValidator();


// Add properties to it
schema
    .is()
    .min(8) // Minimum length 8
    .is()
    .max(100) // Maximum length 100
    .has()
    .uppercase() // Must have uppercase letters
    .has()
    .lowercase() // Must have lowercase letters
    .has()
    .digits(2) // Must have at least 2 digits
    .has()
    .not()
    .spaces() // Should not have spaces
    .is()
    .not()
    .oneOf(["Password", "Password123"]); // Blacklist these values

router.get("/getAll", async(req, res) => {
    try {
        let users = await User.find();
        // , { fullName: 1, email: 1, password: 1 });

        res.status(200).json(users);
    } catch (err) {
        res.status(500).send("Error" + err);
        // res.status(500).send('Internal Server Error');
    }
});

router.post("/create", async(req, res) => {
    let tempPassword = null;
    const email = req.body.email;
    if (validator.validate(req.body.email) == false ||  !email.includes('@northeastern.edu')) {
        return res.status(400).send("Incorrect Email. Please change the email");
    } else if (schema.validate(req.body.password) == false) {
        return res.status(400).send("Not a Strong Password, please change the password");
    }else if(nameValidator.isAlpha(req.body.name) == false){
        return res.status(400).send("Invalid Name, please change the name");
    } else {
        await bcrypt.hash(req.body.password, saltRounds).then(function(hash) {
            tempPassword = hash;
            console.log(hash);
        });
        console.log(tempPassword);

        const user = new User({
            name:req.body.name,
            email: req.body.email,
            password: tempPassword,
        });
        console.log(user);

        try {
            const a1 = await user.save();
            res.status(200).json(a1);
        } catch (err) {
            res.status(500).send(err);
        }
    }
});

router.put("/edit", async (req, res) => {
    
        const { name, email, password } = req.body;
 
      try {
        const user = await User.findOne({ email });
 
        if (!user) {
          return res.status(403).json({
            errors: [
              {
                msg: `No user found with email ${email}. Please enter a valid email ID`,
              },
            ],
          });
        }
 
        const updatedUser = user;
 
        if (name) updatedUser.name = name;
        if (password) updatedUser.password = password;
 
        await user.updateOne({
          $set: {
            name: updatedUser.name,
            password: updatedUser.password,
          },
        });
 
        await user.updateOne({
          $set: { updated: true },
        });
 
        res.status(200).json(`User details updated for ${email}`);
    } catch (error) {
        res.status(500).json(error.message);
    }
}
);

router.delete("/delete", async(req, res) => {
    const tempuser = await User.findOne({email:req.body.email});
    console.log(tempuser);
    if(!tempuser){
        res.status(400).send("User not found"); // Use 400 to indicate that the request was understood, but it could not be processed because the user was not found.
    }
    else{
        const user = await User.findOneAndDelete({ email: req.body.email });
        console.log(user);
        res.status(200).send("Success");
    }
});


router.post('/uploadImage', upload.single('image'), async (req, res) => {
    const { email } = req.body; // Assuming the email is provided to identify the user
 
    if (!req.file) {
        return res.status(400).send('No image file uploaded.');
    }
 
    try {
        // Update the user document with the image path
        const updatedUser = await User.findOneAndUpdate(
            { email: email },
            { imagePath: req.file.path }, // req.file.path contains the path to the saved image
            { new: true } // Return the updated document
        );
 
        if (!updatedUser) {
            return res.status(404).send('User not found.');
        }
 
        res.status(200).json({
            message: 'Image uploaded successfully!',
            imagePath: updatedUser.imagePath
        });
    } catch (error) {
        console.error(error);
        res.status(500).send('Server error');
    }
});


module.exports = router;