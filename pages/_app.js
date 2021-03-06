/* pages/_app.js */
import '../styles/globals.css'
import Link from 'next/link'
import Image from 'next/image'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

function MyApp({ Component, pageProps }) {

  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = url => {
      window.gtag('config', 'G-TRTWDYX2D0', {
        page_path: url,
      })
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])


  return (
    <div>
      <nav className="border-b p-6"> 
        <img src="studioseni.gif"  alt="StudioSeni.online" />
        <div className="flex mt-4">
          <Link href="/">
            <a className="mr-4 text-yellow-600">
              Home
            </a>
          </Link>
          <Link href="/create-item">
            <a className="mr-6 text-yellow-600">
              Sell Digital Asset
            </a>
          </Link>
          <Link href="/my-assets">
            <a className="mr-6 text-yellow-600">
              My Digital Assets
            </a>
          </Link>
          <Link href="/creator-dashboard">
            <a className="mr-6 text-yellow-600">
              Creator Dashboard
            </a>
          </Link>
          <Link href="/how-to">
            <a className="mr-6 text-yellow-600">
              How To
            </a>
          </Link>
          <Link href="http://yankeat.tech" >
            <a className="mr-6 text-yellow-600" target="_blank">
              yankeat.tech
            </a>
          </Link>
        </div>
      </nav>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp