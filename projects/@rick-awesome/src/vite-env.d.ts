/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly RICK_AUTHOR: string;
  readonly RICK_GITHUB: string;
  readonly RICK_JUEJIN: string;
}

export interface ImportMeta {
  readonly env: ImportMetaEnv;
}
