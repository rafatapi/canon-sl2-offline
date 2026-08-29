import type { Metadata, Viewport } from 'next';
import './globals.css';
export const metadata:Metadata={title:'SL2 de bolso — Manual visual Canon EOS Rebel SL2',description:'Guia visual e offline para fotografar com a Canon EOS Rebel SL2 e lente 18–55 mm.',manifest:'/manifest.webmanifest',appleWebApp:{capable:true,title:'SL2 de bolso',statusBarStyle:'black-translucent'}};
export const viewport:Viewport={themeColor:'#f6f1e7',width:'device-width',initialScale:1,viewportFit:'cover'};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="pt-BR"><body>{children}</body></html>}
