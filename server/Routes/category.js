const express = require('express');
const Category = require('../Model/category');
const slugify = require('slugify');
const { addCategory, getCategories } = require('../controller/category');
const router = express.Router();

router.post('/category/create', addCategory);
router.get('/category/getcategory', getCategories);
module.exports = router;