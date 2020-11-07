import { Schema, model } from "mongoose";

const todoSchema = new Schema(
  {
    todo: {
      type: String,
      required: true,
      trim: true,
    },
    done: {
        type: Boolean
      },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

export default model("todo", todoSchema);
