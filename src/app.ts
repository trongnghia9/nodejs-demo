import express from 'express';
import path from 'path';
import dotenv from 'dotenv';
import webrouter from './routes/web';

const app = express();
dotenv.config();

const port = process.env.PORT || 8080;

// Thiết lập EJS làm view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
webrouter(app);
// Route chính
app.get('/', (req, res) => {
  res.render('home', {
    title: 'Trang chủ',
    message: 'Chào mừng đến với ứng dụng Express.js'
  });
});

app.get('/hello', (req, res) => {
  res.render('home', {
    title: 'test 2',
    message: 'Chào mừng đến với ứng dụng Express.js'
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
  console.log("env port:", process.env.PORT);
});