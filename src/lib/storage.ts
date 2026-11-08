import {defineStorage} from 'strata-storage';

/**
 * The one thing on this site that touches web storage.
 *
 * Fleet rule: localStorage, sessionStorage, indexedDB, cookies and the Cache API all go through
 * strata-storage, never a direct call. The site keeps one small value today, the first-visit bar's
 * "seen" mark; the analytics SDKs keep their own identifiers in their own storage.
 *
 * Nothing outside this module reads a physical key, so the library's default `strata:` prefix stays.
 */
export const storage = defineStorage({namespace: 'netcage-docs'});

const LOCAL = {storage: 'localStorage'} as const;

/**
 * Synchronous read. Storage can be unavailable (private mode, blocked site data, a thumbnailer), so
 * every call is wrapped and every caller works with the fallback.
 */
export function readSync<T>(key: string, fallback: T): T {
  try {
    const value = storage.getSync<T>(key, LOCAL);
    return value ?? fallback;
  } catch {
    return fallback;
  }
}

/** Synchronous write. A failed write leaves the page working; the value is simply not kept. */
export function writeSync<T>(key: string, value: T): void {
  try {
    storage.setSync(key, value, LOCAL);
  } catch {
    // Storage is unavailable; nothing to keep.
  }
}
