import '@mantine/carousel/styles.css'
import { MantineProvider } from '@mantine/core'
import { DatesProvider } from '@mantine/dates'
import '@mantine/dates/styles.css'
import { QueryClientProvider } from '@tanstack/react-query'
import 'dayjs/locale/ru'
import React from 'react'
import ReactDOM from 'react-dom/client'
import 'swiper/css'
import 'swiper/css/mousewheel'
import App from './App.tsx'
import { queryClient } from './api/query-client.ts'
import './index.css'
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primereact/resources/themes/lara-light-blue/theme.css";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <MantineProvider>
        <DatesProvider settings={{ locale: 'ru', consistentWeeks: true }}>
          <App />
        </DatesProvider>
      </MantineProvider>
    </QueryClientProvider>
  </React.StrictMode>
)
