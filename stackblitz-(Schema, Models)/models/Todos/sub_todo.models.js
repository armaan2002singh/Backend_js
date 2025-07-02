import mongoose from 'mongoose';

const subTodoSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
    },
    complete: {
      type: Boolean,
      default: false,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId, // type's ref is in next line.
      ref: 'User',
    },
  },
  {
    timestamps: true,
  }
);

export const SubTodo = mongoose.model('SubTodo', subTodoSchema);
// now the main thing is that in todos there will to many sub todo. So, what about Relation.
