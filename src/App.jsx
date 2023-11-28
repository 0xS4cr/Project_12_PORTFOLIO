import React, { Component } from "react";
import { IntlProvider, FormattedMessage  } from "react-intl";
import { Helmet } from "react-helmet";
import messagesFr from "./locales/fr.json";
import messagesEn from "./locales/en.json";
import MenuBar from "./components/MenuBar";
import Banner from "./components/Banner";
import Projects from "./components/Projects";

const messages = {
  fr: messagesFr,
  en: messagesEn,
};

class App extends Component {
  state = {
    language: navigator.language.split(/[-_]/)[0],
  };

  changeLanguage = (lang) => {
    this.setState({ language: lang });
  };

  render() {
    const { language } = this.state;

    return (
      <IntlProvider locale={language} messages={messages[language]}>
        <Helmet>
              <!-- script For schema.org local ref-->
		<script type="application/ld+json">
      {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Clément RENAUD",
            "address": {
            "@type": "PostalAddress",
            "streetAddress": "20 grande rue",
            "postalCode": "70180",
            "addressLocality": "Vereux"
            },
            "openingHours": "Mo, Tu, We, Th, Fr 09:00-17:00",
            "telephone": "07 69 91 39 09",
            "url": "www.clementrenaud.fr/",
            "image": "",
            "priceRange" : "developer front-end: à partir de 350€/journée"
      }
  </script>
  <!-- Meta for Facebook -->
  <meta property="og:title" content="Clément RENAUD" />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://clementrenaud.fr/" />
  <meta property="og:image" content="" />
  <meta property="og:description"
  content="Clément RENAUD, dévellopeur web front-end. intégration, react, javascript, full-remote.">
  <!-- Meta for twitter -->
  <meta name="twitter:title" content="Nina Carducci">
  <meta name="twitter:description"
    content="Clément RENAUD, dévellopeur web front-end. intégration, react, javascript, full-remote.">
  <meta name="twitter:image" content="">
          <title>CR | Portfolio</title>
        </Helmet>

        <div className="App">
          <section className="home-section">
            <MenuBar changeLanguage={this.changeLanguage} />
            <Banner />
          </section>
          <section className="projects-section">
            <Projects />
          </section>
          <section className="learn-section">
            <h1 id='More'><FormattedMessage id="learn.title" defaultMessage="Independant Web Developer" /></h1>
            <p>
            <FormattedMessage id="learn.subtitle1" defaultMessage="Independant Web Developer" />
            </p>
            <br />
            <p>
            <FormattedMessage id="learn.subtitle2" defaultMessage="Independant Web Developer" />
            </p>
          </section>
          <section className="footer-section">
            <p>© 2023 - Clément RENAUD</p>
          </section>
        </div>
      </IntlProvider>
    );
  }
}

export default App;
