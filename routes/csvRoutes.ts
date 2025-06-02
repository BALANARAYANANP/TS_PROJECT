import express, { Request, Response } from 'express'
import { csvUploads } from '../middleware/csvUploaded'
import { User } from '../Interfaces/User'
import fs from 'fs'
import csv from 'csv-parser'
import { Usermodel } from '../models'
import { getCsv } from '../Controllers/csvConroller'

export const csvrouters = express.Router()

csvrouters.post('/csv', csvUploads.single('csvfile'), async (req:Request, res:Response) =>{
    
        if(!req.file?.path)
            res.status(404).json({message : "No csv file found"})

        else{
        const result: Promise<any>[] = [];

        fs.createReadStream(req.file?.path)
        .pipe(csv())
        .on('data', (data:any)=>{
            result.push(
                Usermodel.create(data)
            )
        })
        .on('end', async()=>{
            try{
                await Promise.all(result)
                res.json({message : "Csv Parsed Sucessfuly  & DB Integrated", result})
       
    }catch(err){
        res.status(400).send("Csv Parsing Process Failed & DB Not Integrated")
        }});
}
})


csvrouters.get('/getcsv', getCsv)