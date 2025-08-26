import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { ChakraProvider } from "@chakra-ui/react"
import { system } from "../theme"
import { Provider } from "@/components/ui/provider"


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ChakraProvider value={system}>
      <Provider>
        <App />
      </Provider>
    </ChakraProvider>
  </StrictMode>,
)
