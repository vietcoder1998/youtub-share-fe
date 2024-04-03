/// <reference types="vite/client" />

interface CustomImportMeta extends ImportMeta {
    env: {
      VITE_WS: string;
      VITE_BASE_URL: string;
      VITE_BASE_API: string;
      // Add other environment variables here if needed
    };
  }
