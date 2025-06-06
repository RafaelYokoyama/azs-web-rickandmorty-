import React from 'react'
import ReactDOM from 'react-dom/client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { RouterProvider } from 'react-router-dom'
import '../presentation/style/index.css'
import { router } from '../presentation/AppRouter'
import { ApolloProvider } from '@apollo/client'
import { TooltipProvider } from '@/presentation/components/ui/tooltip'

import { EpisodeProvider } from '@/presentation/context/EpisodeContext.tsx'
import { client } from '@/infra/client-config'
import AppProvider from '@/presentation/context/AppProvider'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <AppProvider>
            <EpisodeProvider>
              <RouterProvider router={router} />
            </EpisodeProvider>
          </AppProvider>
        </TooltipProvider>
      </QueryClientProvider>
    </ApolloProvider>
  </React.StrictMode>
)
