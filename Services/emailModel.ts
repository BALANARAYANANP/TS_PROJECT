
import { emailAttributes, sendEmail } from "../Interfaces/Email";
import {  Emailmodel } from "../models";

export class emailService {


   async emailCreation (data: emailAttributes) {

        return await Emailmodel.create(data)
    }
    async getEmailType ( data:sendEmail){
        return await Emailmodel.findOne({where : {type : data.type}})
    }






    
}