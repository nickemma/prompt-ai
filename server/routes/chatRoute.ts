import OpenAI from 'openai';
import express from 'express';
import { Request, Response } from 'express';
import dotenv from 'dotenv';

dotenv.config();

const router = express.Router();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

router.post('/chat', async (req: Request, res: Response) => {
  const { prompt } = req.body;

  try {
    const response = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'assistant',
          content: prompt,
        },
      ],
      temperature: 1,
      max_tokens: 256,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
    });
    res.status(200).json(response?.choices[0]?.message?.content);
  } catch (error) {
    console.log(error);
  }
});

export default router;
