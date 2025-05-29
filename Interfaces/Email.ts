import { EmailType } from "../Enums/enumType.enum";


export interface emailAttributes {
    id: number;
    type: EmailType;
    subject : string;
    content : string;
    
}

export interface sendEmail {

    from : string;
    to: string;
    type: EmailType;
  

}

export interface emailData {

    subject : string;
    content : string

}

export interface emailResponse {
    message : string;
    info : any
}

export interface errorResponse {
    message: string;
    error?: any
}

export interface emailType {
    type: EmailType
}