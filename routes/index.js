/*
File : index.js
Name : Rutvik Patel
Student ID : 301302391
Date : 07 Feb 2023
*/

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home', { title: 'Home' });
});

router.get('/home', function(req, res, next) {
  res.render('home', { title: 'Home' });
});

router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Login' });
});

router.get('/about', function(req, res, next) {
  if(req.isAuthenticated())
  {
    res.render('about', { title: 'About' });
  }
  else
  {
    res.render('login', {title: 'Login'});
  }
});

router.get('/projects', function(req, res, next) {
  if(req.isAuthenticated())
  {
    res.render('projects', { title: 'Projects' });
  }
  else
  {
    res.render('login', {title: 'Login'});
  }
});

router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact' });
});

router.get('/services', function(req, res, next) {
  res.render('services', { title: 'Services' });
});

router.get('/contactlist', function(req, res, next){
  res.render('contactlist', )
})
module.exports = router;
