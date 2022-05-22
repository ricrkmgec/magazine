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
      // default: "",
      required: [true, "Please provide the  Email"],
      maxlength: [30, "Email cannot be more than 60 characters"],
    },
    // session: {
    //   type: String,
    //   required: [true, 'Please Enter your Session.'],
    //   maxlength: [30, "session cannot be more than 60 characters"],
    // },
    id: {
      type: String,
      required: true,
    }
  },
  { timestamps: true }
);

export default mongoose.models.Certificate || mongoose.model("Certificate", CertificateSchema);