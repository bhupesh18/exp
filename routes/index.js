var express = require('express');
const async = require('hbs/lib/async');
const { home, author, addAuthor, users, addPerson, about, getArt } = require('../database/connection');
var router = express.Router();

router.get('/',async function(req, res, next) {
  const a = await home();
  // console.log('a', a);
  res.render('index',{data:a});
});


router.get('/admin',async function(req, res, next) {
  const a = await home();
  res.render('admin',{data:a});
});

router.get('/art/:id',async function(req, res, next) {
    const id = req.params.id;
    console.log(id);
    const data = await getArt(id);
    res.render('art',{data});
});

router.post('/api/admin', async function(req, res) {
  const {authorname,articletitle,atext} = req.body;
  console.log("data",{authorname,articletitle,atext});
  const addData = await addAuthor(authorname,articletitle,atext);
  res.send(addData);
});

router.get('/article',async function(req, res, next) {
  const a = await author();
  res.render('article',{data:a});
});


router.get('/contact', function(req, res, next) {
  res.render('contact');
});

router.post('/api/contact', async function(req, res) {
  const {fname,lname,phone,email,message} = req.body;
  console.log("data",{fname,lname,phone,email,message});
  const addData = await addPerson(fname,lname,phone,email,message);
  res.send(addData);
});

router.get('/user', async function(req, res, next) {
  const a = await users();
  res.render('user',{data:a});
});


router.get('/about',async function(req, res, next) {
  const a = await about();
  res.render('about',{data:a});
});

module.exports = router;