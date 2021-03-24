import Head from 'next/head'
import Header from '../components/Header'
import Main from '../components/Main'
import Bootstrap from 'react-bootstrap'

export default function Home() {
    return (
        <div>
            <Head>
                <title>Thiago Araujo's Portfolio</title>
                <link rel="icon" href="/favicon.ico" />
                <link
                    href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css"
                    rel="stylesheet"
                    integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl"
                    crossOrigin="anonymous"
                />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Roboto&display=swap"
                    rel="stylesheet"
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Rubik&display=swap"
                    rel="stylesheet"
                />
            </Head>

            <main>
                <Header />
                <Main />
            </main>
        </div>
    )
}
