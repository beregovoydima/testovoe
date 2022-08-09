interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string;
  readonly VITE_CORE_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
