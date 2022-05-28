import Certificate from "../../../models/Certificate";
import dbConnect from "../../../lib/mongodb";
import { toast } from "react-toastify";

export default async function handler(req, res) {
  await dbConnect();
  const { method } = req;
  const { email } = req.body;
  switch (method) {
    case "POST":
      try {
        const user = await Certificate.findOne({ email })
        if (!user) {
          res.status(404).json({ error: true, message: "Sorry,Your email is not Selected..." });
        }
        else {
          if (!user.editor) {
            res.status(404).json({ error: true, message: "You are not a editor" });
          } else {
            try {
              return res.status(200).json({
                success: true, _id: user.email,
                message:
                  "Congratulations, Your Content is selected",
              });
            } catch (error) {
              toast.error(error.name)
            }
          }
         
        }

      } catch (err) {
        toast.error(err.name)
        return res.status(400).json({ message: err.message });
      }
  }
}
