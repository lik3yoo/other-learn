import { type Config } from "tailwindcss";
import daisyui from 'daisyui';

export default {
  content: [
    "{routes,islands,components}/**/*.{ts,tsx}",
  ],
  plugins:[
    //@ts-ignore
    daisyui
  ]
} satisfies Config;
