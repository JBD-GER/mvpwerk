// src/lib/consent.ts
export type ConsentState = {
  v: number
  ts: number
  necessary: true
  analytics: boolean
  marketing: boolean
}

export const CONSENT_VERSION = 1
export const CONSENT_KEY = 'mvpwerk_consent_v1'

export function readConsent(): ConsentState | null {
  if (typeof window === 'undefined') return null
  try {
    const raw = window.localStorage.getItem(CONSENT_KEY)
    if (!raw) return null
    const parsed = JSON.parse(raw) as ConsentState
    if (!parsed || typeof parsed !== 'object') return null
    if (parsed.v !== CONSENT_VERSION) return null
    if (parsed.necessary !== true) return null
    return parsed
  } catch {
    return null
  }
}

export function writeConsent(next: Omit<ConsentState, 'v' | 'ts' | 'necessary'>) {
  if (typeof window === 'undefined') return
  const payload: ConsentState = {
    v: CONSENT_VERSION,
    ts: Date.now(),
    necessary: true,
    analytics: !!next.analytics,
    marketing: !!next.marketing,
  }
  window.localStorage.setItem(CONSENT_KEY, JSON.stringify(payload))
  window.dispatchEvent(new CustomEvent('mvpwerk:consent-changed', { detail: payload }))
}

export function clearConsent() {
  if (typeof window === 'undefined') return
  window.localStorage.removeItem(CONSENT_KEY)
  window.dispatchEvent(new CustomEvent('mvpwerk:consent-cleared'))
}
