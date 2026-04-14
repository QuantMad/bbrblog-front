// server/utils/api.ts
import type { NitroFetchOptions } from 'nitropack'

/**
 * Универсальная обёртка для запросов к .NET API
 */
export const apiFetch = <T = unknown>(
  url: string,
  options: NitroFetchOptions<any, any> = {}
): Promise<T> => {
  const config = useRuntimeConfig()

  return $fetch<T>(url, {
    baseURL: config.apiBaseUrl,

    ...options,

    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },

    // Глобальная обработка ошибок (можно расширить позже)
    onResponseError(context) {
      console.error(`[API Error] ${context.response?.status} ${url}`, context.response?._data)
    },
  })
}