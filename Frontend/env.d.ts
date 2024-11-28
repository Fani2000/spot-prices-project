/// <reference types="vite/client" />

declare namespace NodeJS {
    interface ProcessEnv {
        readonly VITE_BASE_URL: string;
    }
}