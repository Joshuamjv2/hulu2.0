import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header/Header'
import Nav from '../components/Nav/Nav'
import Results from '../components/Results/Results'
import requests from '../Utils/requests'


export default function Home({results}) {
  return (
    <div>
      <Head>
        <title>Hulu 2.0</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <Header />
      {/* NavBar */}
      <Nav />
      {/* Results (main) */}
      <Results results = {results} />
    </div>
  )
}

export async function getServerSideProps(context){
  const genre = context.query.genre;
  
   const request = await fetch(
    `https://api.themoviedb.org/3${requests[genre]?.url || requests.fetchRomanceMovies.url}`

    ).then((res) => res.json())

    return {
      props: {
        results: request.results,
      }
    }
}
