import { ChatGPTAPI } from "chatgpt";
import { OPENAI_API_KEY } from "./config";

export const getMessage = async() => {
  const api = new ChatGPTAPI({
    apiKey: OPENAI_API_KEY
  })

  const res = await api.sendMessage('hello')
  console.log(res)
}

