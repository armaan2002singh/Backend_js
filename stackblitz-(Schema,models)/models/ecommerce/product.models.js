import mongoose from 'mongoose'

const productSchema = new mongoose.Schema(
  {
    description:{
      type : String,
      required : true,
    },
    name : {
      type : String,
      required : true,
    },
    productImage : {
      //mogodb is a strong database where we can store images in buffer but its not a good practice - will db heavier.
      // Url based third party bucket use.
      // here we do stores the URL  of the images in db.
      type : String
    },
    price:{
      type : Number,
      default : 0,
    },
    stock :{
      default : o,
      type : Number,
    },
    //ref of categoru
    category : {
      type : mongoose.Schema.Types.ObjectId,
      ref : "Category",
      required : true,
    },

    owner:{
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required : true,
    }
  },
  {
    timestamps : true,
  }
  )

export const Product = mongoose.model("Product", productSchema)