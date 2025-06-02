import fs from 'fs';
import path from 'path';
import { format } from '@fast-csv/format';
import { Request, Response } from 'express';
import { Usermodel } from '../models';

export const getCsv = async (req: Request, res: Response) => {
  try {
    const users = await Usermodel.findAll({ attributes: ['name', 'email', 'age'] });

    const filePath = path.join(__dirname, '../exports', 'users.csv');

    
    if (!fs.existsSync(path.dirname(filePath))) {
      fs.mkdirSync(path.dirname(filePath), { recursive: true });
    }

    const ws = fs.createWriteStream(filePath);
    const csvStream = format({ headers: true });

    csvStream.pipe(ws);

    users.forEach(user => {
      const { name, email, age } = user.toJSON();
      csvStream.write({ name, email, age });
    });

    csvStream.end();

    res.status(200).json({ message: 'CSV File Created Successfully at /exports/users.csv' });
  } catch (error) {
    console.error('CSV Export Failed:', error);
    res.status(500).json({ message: 'CSV Export Failed' });
  }
};
