import './globals.css';
import Script from 'next/script';



export default function RootLayout({ children }) {
  return <html lang="en">{children}
    <head>
  <script id="cookieyes" type="text/javascript" src="https://cdn-cookieyes.com/client_data/683c0c58275241080fccc16d/script.js" 
  strategy="beforeInteractive"></script>
    </head>
  </html>;
}

