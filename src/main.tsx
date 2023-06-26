import React, {Suspense, lazy} from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import LogoLoader from './components/LogoLoader/index.tsx'
import { StateProvider } from './context/store.tsx'
import 'animate.css'

const LazyRouter = lazy(() => import('./App'));

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Suspense
    fallback={<LogoLoader/>}
    >
      <StateProvider>
        <LazyRouter/>
      </StateProvider>
    </Suspense>

  </React.StrictMode>,
)
