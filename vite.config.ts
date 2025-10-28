import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import tsconfigPaths from "vite-tsconfig-paths";

// https://vite.dev/config/
export default defineConfig({
  // ADD YOUR CONFIGURATION HERE AS NEEDED PATHS ALIAS, PROXY, ETC.
  plugins: [react(), tailwindcss(),tsconfigPaths()],
})
