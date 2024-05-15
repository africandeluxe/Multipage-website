import express from 'express';
import historyRouter from './routes/history.js';
import mathRouter from './routes/math.js';
import scienceRouter from './routes/science.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.render('pages/home', {
    pageTitle: 'Home Page',
    subTitle: 'Welcome to LearnHub'
  });
});

app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.static('public'));

app.use('/history', historyRouter);
app.use('/math', mathRouter);
app.use('/science', scienceRouter);

app.get('/', (req, res) => {
  res.render('pages/home');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});