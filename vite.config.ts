import { defineConfig } from 'vite';
import injectHTML from 'vite-plugin-html-inject';

export default defineConfig({
  base: '/Unlock-the-Wonders-of-Ukraine/',
  plugins: [injectHTML()],
});