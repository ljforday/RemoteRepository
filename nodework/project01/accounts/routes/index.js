var express = require('express');
var router = express.Router();

//require lowdb

const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
 
const adapter = new FileSync(__dirname + '/../data/db.json')
const db = low(adapter)

/* 记账本列表*/
router.get('/account', function(req, res, next) {
  res.render('list');
});

//添加记录
router.get('/account/create', function(req, res, next) {
  res.render('create');
});

//新增记录
router.post('/account',(req,res)=>{
  
  // write file
  db.get('accounts').push(req.body).write();
  res.send('添加记录')
})

module.exports = router;
