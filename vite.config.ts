import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
//to get rid of '../../compn..;
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve:{
    alias : [{find:'@',replacement:path.resolve(__dirname,"src")}]
  },
})
