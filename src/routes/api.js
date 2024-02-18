const express=require('express');
let ProductController =require('../controllers/ProductController');
const router=express.Router();


// Product Routing
router.get('/ProductBrandList',ProductController.ProductBrandList);
router.get('/ProductCategoryList',ProductController.ProductCategoryList);
router.get('/ProductSliderList',ProductController.ProductSliderList);
router.get('/ProductDetails/:ProductId',ProductController.ProductDetails);
router.get('/ProductListByBrands/:BrandID',ProductController.ProductListByBrands);
router.get('/ProductListByCategory/:CategoryID',ProductController.ProductListByCategory);
router.get('/ProductListBySimilar/:Keyword',ProductController.ProductListBySimilar);
router.get('/ProductListByKeyword/:Keyword',ProductController.ProductListByKeyword);
router.get('/ProductListByRemark/:Remark',ProductController.ProductListByRemark);
router.get('/ProductReviewList/:ProductId',ProductController.ProductReviewList);








module.exports=router;