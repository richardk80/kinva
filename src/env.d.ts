/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface ImportMetaEnv {
    readonly SMTP_USER: string;
    readonly SMTP_PASS: string;
    readonly API_KEY: string;
}