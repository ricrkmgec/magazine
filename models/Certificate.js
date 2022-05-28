import mongoose from "mongoose";

const CertificateSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      default: "",
      required: [true, "Please provide the Name"],
      maxlength: [30, "Name cannot be more than 60 characters"],
    },
    email: {
      type: String,
      required: [true, "Please provide the  Email"],
      maxlength: [30, "Email cannot be more than 60 characters"],
    },
    roll: {
      type: Number,
      required: [true, "Please provide the Roll No"],
      maxlength: [30, "Roll No cannot be more than 60 characters"],
    },
    year: {
      type: String,
      required: [true, 'Please Enter your year.'],
      maxlength: [30, "year cannot be more than 60 characters"],
    },
    pre: {
      type: String,
      required: [true, 'Please Enter your prefix.'],
      maxlength: [30, "prefix cannot be more than 60 characters"],
    },
    id: {
      type: String,
      required: true,
    },
    editor: {
      type: Boolean,
    }
  },
  { timestamps: true }
);

export default mongoose.models.Certificate || mongoose.model("Certificate", CertificateSchema);