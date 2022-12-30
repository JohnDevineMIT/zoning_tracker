import '../styles/globals.css'
import Head from "next/head";
import Script from "next/script";

function MyApp({ Component, pageProps }) {
return (

<>
<Head>
  <link rel="preconnect" href="https://fonts.googleapis.com"/>
  <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
  <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@400;700&display=swap" rel="stylesheet"/>
  <link href="https://api.mapbox.com/mapbox-gl-js/v0.51.0/mapbox-gl.css" rel="stylesheet" />
</Head>
<Component {...pageProps} />
</>

);
}
export default MyApp;