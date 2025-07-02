import { Timestamp } from 'bson';
import mongoose, { mongo } from 'mongoose';

const todoSchema = new mongoose.Schema(
  {
    //will be to many subtodos here in it.
    content: {
      type: String,
      required: true,
      // first we will take that the major sub todo's should have a name
    },
    complete: {
      // if all sub_todos will be complete then will be ticked.
      type: Boolean,
      default: false,
    },
    createdBy: {
      //now how to make a relation who created this. like relation this with user.
      //Then here we will take care of two things - 1. special type, 2. reference.

      type: mongoose.Schema.Types.ObjectId, // this is how to write a type.
      ref: 'User', // if you are writing a type then it is compulsary to write a ref in next line.
      // and the ref will be same to the targeted schema - model(the name given in the model.).
    },
    subTodos: [
      // will get multiple subtodo here will use array.
      {
        //reference of other model.
        type: mongoose.Schema.Types.ObjectId,
        ref: 'SubTodo',
      },
    ],
  },
  {
    timestamps: true,
  }
);

export const Todo = mongoose.model('Todo', todoSchema);
