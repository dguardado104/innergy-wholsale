import '@/styles/globals.css'
import 'react-toastify/dist/ReactToastify.css';
import { StoreProvider } from '@/utils/Store'
import { AuthProvider } from "@/utils/Auth"


export default function App({ Component, pageProps }) {

  return(
    <AuthProvider>
        <StoreProvider>
          <Component {...pageProps} />
        </StoreProvider>
    </AuthProvider>
  )
}
