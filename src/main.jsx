import { createRoot } from 'react-dom/client'
import './index.css'
import AppRouter from './routers/AppRouter'
import './i18n/i18n';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';


const queryClient = new QueryClient();


createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={queryClient}>
    <AppRouter />
  </QueryClientProvider>,
)
