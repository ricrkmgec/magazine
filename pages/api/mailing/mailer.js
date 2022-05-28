import nodemailer from "nodemailer";
import { toast } from "react-toastify";
import Certificate from "../../../models/Certificate";
const sendResetPasswordEmail = async function ({ toEmail }) {
    // var allUser = ['jhs1941jhs@gmail.com','ricrkmgecsquad@gmail.com']
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
            setTimeout(() => {  
                const message = {
                    // to: allUser[i].email,
                    to: "jhs1941jhs@gmail.com",
                    subject: "RKMGEC - ECE MAGAZINE CERTIFICATE",
                    html: `
                    <h3 >Dear <span style='font-size:bold'></span>, </h3>
                <p>You already know that your creative content has been selected for ECE,RKMGEC departmental magazine - "MOUNISH" - 2022.For decorative printing one passport size photograph is required, kindly upload the photograph ,using this google form  <a target="_" href="https://docs.google.com/forms/d/10DpM62-wNAlBG07KnqMfP6Cp7K8AnwzJaVmtlrLiOrQ">link</a></p>
                <p>Thank You🙏</p>
                <h4>RKMGEC ECE MAGAZINE TEAM</h4>
              `,
            //   you already know that your creatuibe cntect ihasbeen selected for mousnish 2022 . for decorative printing one passport size pphoto graph is required ,kindly upload the photo graph ,using this google form..... 
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
            }, 1000);

        }


    })
}

export default sendResetPasswordEmail;