import { defineConfig } from 'vite'
import federation from "@originjs/vite-plugin-federation";
import react from '@vitejs/plugin-react'

const deps = require("./package.json")

export default defineConfig({
  plugins: [
    federation({
      name: 'card-picker',
      filename: 'remoteEntry.js', // standard method
      exposes: {
        './CardPicker': './src/CardPicker.tsx',
      },
      shared: Object.keys(deps.dependencies)
    }),
    react()
  ],
})