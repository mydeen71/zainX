import Head from "next/head";
import {ToastProvider} from "react-toast-notifications";
import "antd/dist/antd.css";

// import "bootstrap/dist/css/bootstrap.min.css";

function MyApp({ Component, pageProps }) {
    return (
    
    <>
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <link href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css?ver=5.3.2" rel="stylesheet" type="text/css" />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css" />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.theme.default.min.css" />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.2.3/animate.min.css" />
            <link href="https://kit-pro.fontawesome.com/releases/v5.11.2/css/pro.min.css?ver=5.3.2" rel="stylesheet" type="text/css" />
            <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet" />
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/fancyapps/fancybox@3.5.7/dist/jquery.fancybox.min.css" />
            <link rel="stylesheet" type="text/css" href={`/css/style.css`} />
        </Head>
        
        <ToastProvider
            autoDismiss={true}
            autoDismissTimeout="2000"
            placement="bottom-right"
            style={{zIndex:"2000"}}
        >
        <Component {...pageProps} />
        </ToastProvider>
    </>
        
    );
}

export default MyApp;