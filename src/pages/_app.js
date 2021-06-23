import React from "react";
import Navbar from "components/Navbar";
import Footer from "components/Footer";
import { ThemeProvider } from "util/theme.js";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <>
        <Navbar
          color="default"
          logo="https://uploads.divjoy.com/logo.svg"
          logoInverted="https://uploads.divjoy.com/logo-white.svg"
        />

        <Component {...pageProps} />

        <Footer
          bgColor="light"
          size="normal"
          bgImage=""
          bgImageOpacity={1}
          description="A short description of what you do here"
          copyright="© 2020 Company"
          logo="https://uploads.divjoy.com/logo.svg"
          logoInverted="https://uploads.divjoy.com/logo-white.svg"
          sticky={true}
        />
      </>
    </ThemeProvider>
  );
}

export default MyApp;
