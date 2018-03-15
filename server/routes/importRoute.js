const express = require('express');
const router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;
const path = require('path');
const multer = require('multer');
const csvtojson=require('csvtojson')
const fs = require('fs');
var mongoose = require('mongoose');
var mongojs = require('mongojs');
var db = mongojs('mongodb://localhost:27017/mean',['data']);

// Connect


module.exports = router;
