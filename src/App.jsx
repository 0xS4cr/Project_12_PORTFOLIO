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
            <h1><FormattedMessage id="learn.title" defaultMessage="Independant Web Developer" /></h1>
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
