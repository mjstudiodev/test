import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to MJ_Studio Test Site!" />
        <p className="description">
          Get ready for new Roblox games! 
        </p>
      </main>

    <main>
        <Header title="Just leave already" />
        <p className="description">
          We not ready to launch :( 
        </p>
      </main>

      <Footer />
    </div>
  )
}
