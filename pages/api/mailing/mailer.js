import nodemailer from "nodemailer";
import { toast } from "react-toastify";
import Certificate from "../../../models/Certificate";
const sendResetPasswordEmail = async function ({ toEmail }) {
    var allUser = await Certificate.find({});
    return new Promise((res, rej) => {
        const transporter = nodemailer.createTransport({
            service: "gmail",
            host: 'smtp.gmail.com',
            port: 465,
            secure: true,
            auth: {
                user: process.env.GOOGLE_USER,
                pass: process.env.GOOGLE_PASSWORD,
            }
        })
        for (let i = 0; i < allUser.length; i++) {
            const message = {
                to: allUser[i].email,
                subject: "RKMGEC - ECE MAGAZINE CERTIFICATE",
                html: `
            <h3 > Hello <h2>${allUser[i].name}</h2> </h3>
            <p>To get certificate check here <a target="_" href="${process.env.DOMAIN}">Click</a></p>
            <p>Thanks</p>
            <h4>RKMGEC ECE MAGAZINE ADMIN</h4>
          `,
            }
            transporter.sendMail(message, function (err, info) {
                if (err) {
                    rej(err);
                    toast.error(err.name)
                } else {
                    res(info);
                    toast.info(info)
                }
            })

        }


    })
}

export default sendResetPasswordEmail;