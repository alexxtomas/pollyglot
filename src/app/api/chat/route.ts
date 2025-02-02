import { createOpenAI } from '@ai-sdk/openai';
import { streamText } from 'ai';

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

const openai = createOpenAI({
  apiKey: process.env.OPENAI_API_KEY,
  compatibility: 'strict',
});

export async function POST(req: Request) {
  const { messages, language } = await req.json();
  messages[messages.length - 1] = {
    ...messages[messages.length - 1],
    content: `
      Translate to: ${language}
      ${messages[messages.length - 1].content}
    `,
  };

  const result = streamText({
    model: openai('gpt-4o'),

    system: 'You are a helpful assistant.',
    messages: [
      {
        role: 'system',
        content: `You are a highly accurate multilingual translator. Your task is to automatically detect the source language of any input text, then translate it into the specified target language. Always return only the translated text, nothing else.`,
      },
      {
        role: 'user',
        content: `
         Text: "Hello, how are you?"  
         Translate to: Spanish  
         `,
      },
      {
        role: 'assistant',
        content: 'Hola, ¿cómo estás?',
      },
      {
        role: 'user',
        content: `
                   Text: "Je m'appelle Claire et j'aime les croissants."  
                   Translate to: Japanese  
                  `,
      },
      {
        role: 'assistant',
        content: '「私の名前はクレールです。クロワッサンが大好きです。」',
      },
      ...messages,
    ],
  });

  return result.toDataStreamResponse();
}
