import OpenAI from 'openai';
import { OPENAI_APIKEY } from './constants';

const openai = new OpenAI({
  apiKey: OPENAI_APIKEY,
  dangerouslyAllowBrowser: true,
});


export default openai;