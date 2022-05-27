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
            <h3 >Dear <span style='font-size:bold'>${allUser[i].name}</span>, </h3>
            <p>Congratulations!!🎊🎉🪘  your content is selected for ECE,RKMGEC departmental magazine - "MOUNISH".You can collect your certificate from <a target="_" href="${process.env.DOMAIN}">here</a></p>
            <p>Thanks</p>
            <h4>RKMGEC ECE MAGAZINE TEAM</h4>
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