import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);

export default defineConfig({
  plugins: [vue()],
  // You can enable vue devtools in a browser by setting environment variables instead of referring to vueDevTools directly.
  server: {
    port: 3000
  }
});
