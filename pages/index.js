import Head from 'next/head'
import Filter from '../components/Filter'
import SpaceXproducts from '../components/SpaceXproducts'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react';

export async function getServerSideProps(ctx) {
  let data;
  console.log(ctx)
  let searchParams = {};
  const { launch_year, launch_success, land_success } = ctx.query
  if (launch_year) searchParams.launch_year = launch_year;
  if (launch_success) searchParams.launch_success = launch_success;
  if (land_success) searchParams.land_success = land_success;

  try {
    const res = await fetch(`https://api.spacexdata.com/v3/launches?` + new URLSearchParams(searchParams));
    data = await res.json()
  }
  catch (e) {
    data = null;
  }
  return { props: { data } }
}

function Home(props) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleStart = (url) => setLoading(true);
    const handleComplete = (url) => setLoading(false);

    router.events.on('routeChangeStart', handleStart)
    router.events.on('routeChangeComplete', handleComplete)
    router.events.on('routeChangeError', handleComplete)

    return () => {
      router.events.off('routeChangeStart', handleStart)
      router.events.off('routeChangeComplete', handleComplete)
      router.events.off('routeChangeError', handleComplete)
    }
  })

  return (
    <div className="container">
      <Head>
        <title>Space-x App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {loading && <div className="loader">
          <div className="spinner"></div>
          </div>}
        <div className="app-container">
          <h1>   SpaceX Launch Programs</h1>
          <div className="content-wrapper">
            <Filter></Filter>
            <div className="spacexcard-wrapper">
              {props.data === null ? <h1> &nbsp; Failed to fetch data from the server</h1> :
                <SpaceXproducts items={props.data}></SpaceXproducts>}
            </div>
          </div>

        </div>
      </main>

      <footer>
        <h3 >
          Developed by: Akram
        </h3>
      </footer>
    </div>
  )
}

export default Home