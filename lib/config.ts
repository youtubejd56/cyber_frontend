const DEFAULT_API_BASE = 'http://localhost:8000'

function normalizeApiBase(rawValue?: string): string {
    const trimmed = rawValue?.trim()
    if (!trimmed) return DEFAULT_API_BASE

    const candidate = /^https?:\/\//i.test(trimmed) ? trimmed : `http://${trimmed}`

    try {
        const parsed = new URL(candidate)
        return parsed.origin
    } catch {
        return DEFAULT_API_BASE
    }
}

export const API_BASE = normalizeApiBase(process.env.NEXT_PUBLIC_API_URL)
