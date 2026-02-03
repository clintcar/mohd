export const API_KEY = process.env.LIVEAVATAR_API_KEY ?? "";
export const API_URL =
  process.env.LIVEAVATAR_API_URL ?? "https://api.liveavatar.com";
export const AVATAR_ID =
  process.env.LIVEAVATAR_AVATAR_ID ?? "dd73ea75-1218-4ef3-92ce-606d5f7fbc0a";

// When true, we will call everything in Sandbox mode.
// Useful for integration and development.
export const IS_SANDBOX =
  (process.env.LIVEAVATAR_IS_SANDBOX ?? "true") === "true";

// FULL MODE Customizations
// Wayne's avatar voice and context
export const VOICE_ID = process.env.LIVEAVATAR_VOICE_ID ?? "";
export const CONTEXT_ID =
  process.env.LIVEAVATAR_CONTEXT_ID ?? "5b9dba8a-aa31-11f0-a6ee-066a7fa2e369";
export const LANGUAGE = process.env.LIVEAVATAR_LANGUAGE ?? "en";

// CUSTOM MODE Customizations
export const ELEVENLABS_API_KEY = process.env.ELEVENLABS_API_KEY ?? "";
export const OPENAI_API_KEY = process.env.OPENAI_API_KEY ?? "";
