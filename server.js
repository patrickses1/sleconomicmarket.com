import express from 'express';
import path from 'path';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 4000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

serve frontend files
app.use(express.static(path.join(__dirname, 'public')));

tiny env endpoint so footer can show numbers
app.get('/env.json', (req, res) => {
  res.json({
    AFRIMONEY_NUMBER: process.env.AFRIMONEY_NUMBER || '',
    ORANGEMONEY_NUMBER: process.env.ORANGEMONEY_NUMBER || ''
  });
});

// start server
app.listen(PORT, () => {
  console.log(`Sleconomicmarket running on http://localhost:${PORT}`);
});
