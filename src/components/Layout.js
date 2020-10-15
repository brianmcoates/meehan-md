import React, {useEffect} from 'react'
import { Helmet } from 'react-helmet'
import { Announcement } from './Announcement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import './all.sass'
import useSiteMetadata from './SiteMetadata'
import { withPrefix } from 'gatsby'
import { ThemeProvider } from "styled-components";
import { theme } from '../styles/theme'

const customConfig = {
  columns: {
    xs: 12,
    sm: 12,
    md: 12,
    lg: 12,
    xl: 12,
  }
};

const TemplateWrapper = ({ children }) => {
  const { title, description, image, twitterImage, } = useSiteMetadata()
  useEffect(()=>{
    (function(h,o,t,j,a,r){
      h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
      h._hjSettings={hjid:1821792,hjsv:6};
      a=o.getElementsByTagName('head')[0];
      r=o.createElement('script');r.async=1;
      r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
      a.appendChild(r);
    })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
  }, []);
  
  return (
    <ThemeProvider theme={{ theme, awesomegrid: customConfig }}>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />

        {/*<link*/}
        {/*  rel="apple-touch-icon"*/}
        {/*  sizes="180x180"*/}
        {/*  href={`${withPrefix('/')}img/apple-touch-icon.png`}*/}
        {/*/>*/}
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix('/')}img/meehan-logo-white-32x32.png`}
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix('/')}img/meehan-logo-white-16x16.png`}
          sizes="16x16"
        />

        {/*<link*/}
        {/*  rel="mask-icon"*/}
        {/*  href={`${withPrefix('/')}img/safari-pinned-tab.svg`}*/}
        {/*  color="#3879F6"*/}
        {/*/>*/}
        <meta name="theme-color" content="#fff" />
        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="https://meehanmd.com" />
        <meta
          property="og:image"
          content='https://meehanmd.com/img/md-facebook.jpg'
        />

        <meta property="twitter:card" content="summary_large_image"/>
        <meta property="twitter:image" content='https://meehanmd.com/img/md-twitter.jpg'/>

        <script type='text/javascript' src='https://platform-api.sharethis.com/js/sharethis.js#property=5e6d0baec4717a00120d076a&product=inline-share-buttons' async='async'></script>

      </Helmet>
      <Navbar />
      <Announcement/>
      <div>{children}</div>
      <Footer />
    </ThemeProvider>
  )
};

export default TemplateWrapper
