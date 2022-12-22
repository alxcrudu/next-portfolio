import '../styles/globals.css'
import { ThemeProvider } from "../context/ThemeProvider";

import { Epilogue } from '@next/font/google'

const epilogue = Epilogue({ subsets: ['latin'] })


export default function App({ Component, pageProps }) {
  return (
  <ThemeProvider>
    <style jsx global>{`
        * {
          font-family: ${epilogue.style.fontFamily};
        }
      `}</style>
    <Component {...pageProps} />
  </ThemeProvider>
  )
}
