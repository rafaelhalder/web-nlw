import { defineConfig } from 'orval'

export default defineConfig({
  api: {
    input: 'https://server-nlw-w9yt.onrender.com/docs/json',
    output: {
      target: 'src/services/api.ts',
      client: 'fetch',
      httpClient: 'fetch',
      clean: true,
      baseUrl: 'https://server-nlw-w9yt.onrender.com',
      override: {
        fetch: {
          includeHttpResponseReturnType: false, // não pegar status code
        },
      },
    },
  },
})
