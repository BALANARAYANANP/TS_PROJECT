import { Request, Response } from "express";
// import db from "../models/index";
import { transporter} from "../mailServices/Transporter";
import { emailAttributes, emailType } from "../Interfaces/Email";
import {
  sendEmail,
  emailData,
  emailResponse,
  errorResponse,
} from "../Interfaces/Email";
import { Emailmodel } from "../models";
import { emailService } from "../Services/emailModel";
// import { any } from "zod";

const emailServices = new emailService



export const Postemail = async (req: Request , res: Response): Promise<void> =>{
    const data : emailAttributes = req.body

    try{
        const result = await emailServices.emailCreation(data)
        res.status(200).json(result)
    }catch(err:any){
        res.status(400).send(err.message)
    }
}



export const sendTestEmail = async (req: Request, res: Response): Promise<void> => {
  const data: sendEmail = req.body;
 

  try {
    const mailOption: emailData | null = await emailServices.getEmailType(data);

    if (!mailOption) {
      const response: errorResponse = {
        message: `No template found for type: ${data.type}`,
      };
      res.status(404).json(response);
      return;
    }

    transporter.sendMail(
      {
        ...mailOption,
        from: data.from,
        to: data.to,
        subject:  mailOption.subject,
        html: mailOption.content,
      },
      (error:any, info:any) => {
        if (error) {
          res.status(500).json({ message: "Email send failed", error });
        } else {
          res.status(200).json({ message: "Email sent", info });
        }
      }
    );
  } catch (err:any) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};
