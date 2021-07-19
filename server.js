const express = require('express')
const cors = require('cors')
const path = require('path')
const mysql = require('mysql2')
const db = require('./models')

const app = express()
require('dotenv').config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));


db.sequelize.sync().then(() => {
  app.listen(process.env.PORT || 5000, () => {
    console.log(`Server running on port: ${process.env.PORT || 5000}`);
  })
})


app.post('/sellerapplication', (req, res) => {
    let { 
      firstName, 
      lastName, 
      shopCategory, 
      portfolioLink, 
      onlineStores, 
      perspectiveOnQuality,
      sellerExperienceLevel,
      businessMarketingUnderstanding 
    } = req.body;
  
    console.log(req.body);
    
    db.SellerApplication.create({
      firstName, 
      lastName, 
      shopCategory, 
      portfolioLink, 
      onlineStores, 
      perspectiveOnQuality,
      sellerExperienceLevel,
      businessMarketingUnderstanding 
    })
    .then(newItem => res.send(newItem))
    .catch(error => {
      console.log(error)
      res.send(error)
    })
});

app.get('*', function (req, res) {
  res.sendFile('public/index.html' , { root : './'})
});