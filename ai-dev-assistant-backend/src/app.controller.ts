import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { CreatePromptDto } from './dto/create-prompt.dto';
import { AiService } from './ai/ai.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly aiService: AiService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('prompt')
  async getPrompt(@Body() createPromptDto: CreatePromptDto) {
    const { prompt } = createPromptDto;
    const aiText = await this.aiService.generateResponse(prompt);
    return {
      response: aiText,
    };
  }
}
