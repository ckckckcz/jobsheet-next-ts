import { HelloResponse, GithubUser } from '@/types';

const BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';

/**
 * Fetch wrapper
 */
async function apiFetch<T>(url: string, options?: RequestInit): Promise<T> {
    const res = await fetch(url.startsWith('http') ? url : `${BASE_URL}${url}`, {
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
    github: {
        getUser: (username: string) => apiFetch<GithubUser>(`https://api.github.com/users/${username}`),
    }
};
