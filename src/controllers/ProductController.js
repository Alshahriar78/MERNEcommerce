
const { BrandListService,
    CategoryListService,
    SliderListService,
    DetailsService,
    ListByBrandsService,
    ListByCategoryService,
    ListBySimilarService,
    ListByKeywordService,
    ListByRemarkService,
    ReviewService} = require('../services/ProductServices')


exports.ProductBrandList= async (req,res)=>{
  let result= await BrandListService();
  return res.status(200).json(result);
}

exports.ProductCategoryList= async (req,res)=>{
    let result= await CategoryListService();
    return res.status(200).json(result);
}

exports.ProductSliderList= async (req,res)=>{
    let result= await SliderListService();
    return res.status(200).json(result);
}

exports.ProductDetails= async (req,res)=>{

}

exports.ProductListByBrands= async (req,res)=>{
    let result= await ListByBrandsService(req);
    return res.status(200).json(result);
}

exports.ProductListByCategory= async (req,res)=>{
    let result= await ListByCategoryService(req);
    return res.status(200).json(result);
}

exports.ProductListByRemark= async (req,res)=>{
    let result= await ListByRemarkService(req);
    return res.status(200).json(result);
}
exports.ProductListBySimilar= async (req,res)=>{
    let result= await ListBySimilarService(req);
    return res.status(200).json(result);
}

exports.ProductListByKeyword= async (req,res)=>{

}


exports.ProductReviewList= async (req,res)=>{

}

