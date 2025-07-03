import mongoose from 'mongoose';

//to handle the order items here we will declare the mini model of orderItem of each item from items..
const orderItemSchema = new mongoose.Schema(
  {
    productId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Product',
    },
    quantity: {
      type: Number,
      required: true,
    },
  } // of per item.
);

const orderSchema = new mongoose.Schema(
  {
    orderPrice: {
      type: Number,
      required: true,
    },
    customer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    orderItems: {
      //now i know that this orderITEMS will an array where i will be able to store mutliple items.
      type: [orderItemSchema],
    },// can also another way to do that which is used in Subtodos.
    address:{
      type : String,
      required : true
    },
    status: {
      type : String,
      //will provide the choices for this by using the enum.
      enum : ["PENDING", "CANCELLED", "DELIVERED"],//options.
      default: "PENDING"
    }

  },
  {
    timestamps: true,
  }
);

export const Order = mongoose.model('Order', orderSchema);
