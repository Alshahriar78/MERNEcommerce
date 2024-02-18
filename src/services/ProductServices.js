const brandsModel=require('../models/brandsModel');
const categoriesModel=require('../models/categoriesModel');
const productsModel=require('../models/productsModel');
const productSlidersModel=require('../models/productslidersModel')
const reviewModel= require('../models/reviewModel')
const productDetailsModel=require('../models/productdetailsModel')
const mongoose =require('mongoose');
let ObjectId= mongoose.Types.ObjectId;


const BrandListService=async ()=>{
   try{
             let data= await brandsModel.find();
             return {status:"Success", data:data}

   }
   catch (e){
       return {status:"Failed", data:e}.toString();
   }
}
const CategoryListService=async ()=>{
    try{
        let data= await categoriesModel.find();
        return {status:"Success", data:data}
    }
    catch (e){
        return {status:"Failed", data:e}.toString();
    }
}
const SliderListService=async ()=>{
    try{
        let data= await productSlidersModel.find();
        console.log(data)
        return {status:"Success", data:data}
    }
    catch (e){
        return {status:"Failed", data:e}.toString();
    }
}




const ListByBrandsService=async (req)=>{
    try{
        let BrandId= new ObjectId(req.params.BrandID) ;
        let MatchStage={$match:{brandID:BrandId}}
        let joinWithBrandStage={$lookup:{from:"brands",localField:"brandID",foreignField:"_id",as:"brand"}};
        let joinWithCategoryStage={$lookup:{from:"categories",localField:"categoryID",foreignField:"_id",as:"category"}};;
        let UnwindBrandStage={$unwind:"$brand"};
        let UnwindCategoryStage={$unwind:"$category"};
        let Projection={$project:{'brand._id':0,'category._id':0,brandID:0,categoryID:0}}
        let data= await productsModel.aggregate([
            MatchStage,
            joinWithBrandStage,UnwindBrandStage,
            joinWithCategoryStage,UnwindCategoryStage,Projection
        ])

        return {status:"success", data:data};
    }catch (e) {
        return {status:"Failed", data:e}.toString();
    }

}
const ListByCategoryService=async (req)=>{
    try{
        let CategoryID= new ObjectId(req.params.CategoryID) ;
        let MatchStage={$match:{categoryID:CategoryID}}
        let joinWithBrandStage={$lookup:{from:"brands",localField:"brandID",foreignField:"_id",as:"brand"}};
        let joinWithCategoryStage={$lookup:{from:"categories",localField:"categoryID",foreignField:"_id",as:"category"}};;
        let UnwindBrandStage={$unwind:"$brand"};
        let UnwindCategoryStage={$unwind:"$category"};
        let Projection={$project:{'brand._id':0,'category._id':0,brandID:0,categoryID:0}}
        let data= await productsModel.aggregate([
            MatchStage,
            joinWithBrandStage,UnwindBrandStage,
            joinWithCategoryStage,UnwindCategoryStage,Projection
        ])

        return {status:"success", data:data};
    }catch (e) {
        return {status:"Failed", data:e}.toString();
    }

}
const ListByRemarkService=async (req)=>{
    try{
        let Remark= req.params.Remark ;
        let MatchStage={$match:{remark:Remark}}
        let joinWithBrandStage={$lookup:{from:"brands",localField:"brandID",foreignField:"_id",as:"brand"}};
        let joinWithCategoryStage={$lookup:{from:"categories",localField:"categoryID",foreignField:"_id",as:"category"}};;
        let UnwindBrandStage={$unwind:"$brand"};
        let UnwindCategoryStage={$unwind:"$category"};
        let Projection={$project:{'brand._id':0,'category._id':0,brandID:0,categoryID:0}}
        let data= await productsModel.aggregate([
            MatchStage,
            joinWithBrandStage,UnwindBrandStage,
            joinWithCategoryStage,UnwindCategoryStage,Projection
        ])

        return {status:"success", data:data};
    }catch (e) {
        return {status:"Failed", data:e}.toString();
    }
}

const DetailsService=async ()=>{

}
try{
    let ProductId= new ObjectId(req.params.ProductId);
    let MatchStage={$match:{_id:ProductId}};
    let joinWithBrandStage={$lookup:{from:"brands",localField:"brandID",foreignField:"_id",as:"brand"}};
    let joinWithCategoryStage={$lookup:{from:"categories",localField:"categoryID",foreignField:"_id",as:"category"}};;


    let UnwindBrandStage={$unwind:"$brand"};
    let UnwindCategoryStage={$unwind:"$category"};


    return {status:"success", data:data};
}catch (e) {
    return {status:"Failed", data:e}.toString();
}

const ListBySimilarService=async (req)=>{
    try{
        let Remark= req.params.Remark ;
        let MatchStage={$match:{remark:Remark}}
        let limitStage={$limit:25}
        let joinWithBrandStage={$lookup:{from:"brands",localField:"brandID",foreignField:"_id",as:"brand"}};
        let joinWithCategoryStage={$lookup:{from:"categories",localField:"categoryID",foreignField:"_id",as:"category"}};;
        let UnwindBrandStage={$unwind:"$brand"};
        let UnwindCategoryStage={$unwind:"$category"};
        let Projection={$project:{'brand._id':0,'category._id':0,brandID:0,categoryID:0}}
        let data= await productsModel.aggregate([
            MatchStage,limitStage
            ,joinWithBrandStage,UnwindBrandStage,
            joinWithCategoryStage,UnwindCategoryStage,Projection
        ])

        return {status:"success", data:data};
    }catch (e) {
        return {status:"Failed", data:e}.toString();
    }

}




const ListByKeywordService=async ()=>{

}


const ReviewListService=async ()=>{

}

module.exports={
    BrandListService,
    CategoryListService,
    SliderListService,
    DetailsService,
    ListByBrandsService,
    ListByCategoryService,
    ListBySimilarService,
    ListByKeywordService,
    ListByRemarkService,
    ReviewListService,



}