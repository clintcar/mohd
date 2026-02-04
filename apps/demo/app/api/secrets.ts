export const API_KEY = "82aa6f5f-fc13-11f0-a99e-066a7fa2e369";
export const API_URL = "https://api.liveavatar.com";
export const AVATAR_ID = "998e5637-cfca-4700-891e-8a40ce33f562";

// When true, we will call everything in Sandbox mode.
// Useful for integration and development.
export const IS_SANDBOX = false;

// FULL MODE Customizations
// Wayne's avatar voice and context
export const VOICE_ID = process.env.LIVEAVATAR_VOICE_ID ?? "";
export const CONTEXT_ID = "f0f3a6e8-cce5-4de6-9ffa-bd8c7ed18f83";
export const LANGUAGE = "en";

// CUSTOM MODE Customizations
export const ELEVENLABS_API_KEY = process.env.ELEVENLABS_API_KEY ?? "";
export const OPENAI_API_KEY = process.env.OPENAI_API_KEY ?? "";
