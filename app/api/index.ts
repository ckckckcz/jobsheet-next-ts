import { HelloResponse } from '@/types';


const BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';

/**
 * Fetch wrapper
 */
async function apiFetch<T>(endpoint: string, options?: RequestInit): Promise<T> {
    const res = await fetch(`${BASE_URL}${endpoint}`, {
        cache: 'no-store',
        ...options,
    });

    if (!res.ok) {
        throw new Error(`API Error: ${res.status} ${res.statusText}`);
    }

    return res.json();
}

/**
 * API Collection
 */
export const api = {
    hello: {
        get: () => apiFetch<HelloResponse>('/api/hello'),
    },
};
