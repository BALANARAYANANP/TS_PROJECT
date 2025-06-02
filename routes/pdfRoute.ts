
import express, { NextFunction, Request, Response } from 'express';
import {pdfupload} from '../middleware/pdfupload'; 
import multer from 'multer';
import puppeteer from 'puppeteer';
import path from 'path'
import fs from 'fs'


const pdfrouter  = express.Router();

pdfrouter.post('/pdf', pdfupload.single('file'), async(req:Request, res:Response) => {
  try{
    if(!req.file?.path)
      res.status(400).json({Error :"No file Uploaded"})
    else{
    const filePath = req.file?.path

    const htmlContent = fs.readFileSync(filePath, 'utf-8')
    
    const browser = await puppeteer.launch()
    const page = await browser.newPage()

    await page.setContent(htmlContent, { waitUntil: 'networkidle0' });


    const pdfPath = path.join('uploads/documents', `${Date.now()}.pdf`)

    await page.pdf({path: pdfPath , format : "A4"})
    await browser.close()
    res.status(200).send("Pdf Convert Sucessfully")
 } }catch(err){
    res.status(400).json("Unable to Create Pdf")
  }
  
});

export default pdfrouter;
