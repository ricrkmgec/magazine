import Certificate from "../../../models/Certificate";
import dbConnect from "../../../lib/mongodb";
import sendResetPasswordEmail from './mailer'
import { toast } from "react-toastify";

export default async function handler(req, res) {
  await dbConnect();

//   switch (method) {
//     case "POST":
               try {
           await sendResetPasswordEmail({});
           return  res.status(200).json({
              success: true,
              message:
                "Successfully send email...",
            })
      } catch (err) {
     toast.error(err.name)
        return res.status(400).json({ message: err.message });
      }
//   }
}
