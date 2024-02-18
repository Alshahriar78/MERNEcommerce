const mongoose=require('mongoose');

const DataSchema =mongoose.Schema({
    img1:{type:String, required:true},
    img2:{type:String, required:true},
    img3:{type:String, required:true},
    img4:{type:Boolean, required:true},
    img5:{type:String, required:true},
    img6:{type:String, required:true},
    img7:{type:String, required:true},
    img8:{type:Boolean, required:true},
    des:{type:String, required:true},
    color:{type:String, required:true},
    size:{type:String, required:true},
    productID:{type:mongoose.Schema.Types.ObjectId, required:true},

} , { timestamps:true ,versionKey: false});

const productDetailModel = mongoose.model('productDetails', DataSchema);

module.exports=productDetailModel;