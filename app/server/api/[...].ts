import { joinURL } from 'ufo'

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()

  const backendBase = config.public.apiBaseUrl

  const target = joinURL(backendBase, event.path)

  return proxyRequest(event, target)
})