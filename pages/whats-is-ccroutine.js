import Head from 'next/head'
import Link from "next/link";

export default function WhatsIsCcroutine(){
    return(
        <div className='container'>
            <Head>
                <title>What Is CCRoutine?</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <h1>What Is CCRoutine?</h1>
                <p>Lorem ipsum sit dolor</p>
                <Link href="/">
                <button>Back to home</button>
                </Link>
            </main>
        </div>
    )
}