import App from './App'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Layout from 'layouts/layout'
import 'styles/index.css'
import 'styles/tailwind.css'

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const app = createRoot(document.getElementById('root')!)

app.render(
  <StrictMode>
    <Layout>
      <App />
    </Layout>
  </StrictMode>
)
