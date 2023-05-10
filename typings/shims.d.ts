declare module "*.vue" {
  import Vue from "vue";
  export default Vue;
}

interface ImportMetaEnv {
  readonly VITE_PORT: string;
  readonly VITE_HOST: string;
  readonly DEV: boolean;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

declare const __APP_VERSION__: number;
declare const __APP_MODE__: any;
