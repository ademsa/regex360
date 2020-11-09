import React from 'react';
import HomeIntroduction from './HomeIntroduction'

export default class Home extends React.Component {
  constructor(props) {
    super(props);

    document.title = "RegEx360";

    this.scrollToIntroductionSection = this.scrollToIntroductionSection.bind(this);
  }

  scrollToIntroductionSection() {
    let introduction = document.getElementById("introduction");
    introduction.scrollIntoView({ "behavior": "smooth", "block": "start" });
  }

  render() {
    return (
      <React.Fragment>
        <section className="hero hero-main is-fullheight">
          <div className="hero-body">
            <div className="container">
              <div className="columns is-vcentered is-centered">
                <div className="column is-12 has-text-centered">
                  <p className="title hero-title has-text-centered">RegEx</p>
                  <p className="subtitle is-size-4 has-text-centered mt-0 mb-5">
                    Learn how to search/replace strings with patterns
                  </p>
                  <button className="button is-primary is-rounded is-large mt-5" onClick={this.scrollToIntroductionSection}>Let's Start</button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <HomeIntroduction />
      </React.Fragment>
    );
  }
}
