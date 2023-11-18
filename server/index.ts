import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';

// import chatRoute from './routes/chatRoute';

const app = express();
//============= Middlewares
app.use(express.json());
app.use(
  cors({
    origin: process.env.ORIGIN || 'http://localhost:3000',
    credentials: true,
  })
);
app.use(morgan('dev'));

app.get('/', (req, res) => {
  res.send('Welcome to the Chat-GPT API!');
});

//============= Routes
// app.use('/api/chat', chatRoute);

//============= Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}`);
});
