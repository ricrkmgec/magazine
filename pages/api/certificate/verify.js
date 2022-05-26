import Certificate from "../../../models/Certificate";
import dbConnect from "../../../lib/mongodb";
import { toast } from "react-toastify";


export default async function handler(req, res) {
  await dbConnect();
  const { method } = req;
  const { roll } = req.body;
  switch (method) {
    case "POST":
      try {
        const user = await Certificate.findOne( {roll} )
        if (!user) {
          res.status(404).json({ error: true, message: "This certificate  is not valid " });
        }
        else {
          try {
            return res.status(200).json({
              success: true, user,
              message:
                "This Certificate validation is true",
            });
          } catch (error) {
            toast.error(error.name)
          }
        }

      } catch (err) {
        toast.error(err.name)
        return res.status(400).json({ message: err.message });
      }
  }
}
