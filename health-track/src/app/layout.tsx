import type { Metadata } from 'next'
import { Poppins } from "next/font/google";
import './globals.css'

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
export const metadata: Metadata = {
  title: "Health Track Web APp",
  description: "Site to track your real-time data by EdmondGOAT",
}


interface Props {
  children: React.ReactNode;
}


export default function RootLayout(props: Props) {
  return (
    <html lang="en">
      <body className={poppins.className}>{props.children}</body>
    </html>
  )
}
