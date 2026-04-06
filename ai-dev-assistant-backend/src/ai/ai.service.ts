import { Injectable } from '@nestjs/common';
import OpenAI from 'openai';

@Injectable()
export class AiService {
  private client: OpenAI;

  constructor() {
    this.client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
  }

  async generateResponse(prompt: string): Promise<string> {
    try {
      const completion = await this.client.chat.completions.create({
        model: 'gpt-3.5-turbo',
        messages: [{ role: 'user', content: prompt }],
      });

      const aiText: string = completion.choices?.[0]?.message?.content ?? '';
      return aiText;
    } catch (error) {
      console.error('Error generating AI response:', error);
      return 'Sorry, there was an error generating the response. Please try again later.';
    }
  }
}
