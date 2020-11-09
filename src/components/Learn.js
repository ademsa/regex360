import React from 'react';
import LearnBasics from './LearnBasics';
import LearnAssertions from './LearnAssertions';
import LearnCharacterClasses from './LearnCharacterClasses';
import LearnGroupsAndRanges from './LearnGroupsAndRanges';
import LearnQuantifiers from './LearnQuantifiers';
import LearnMisc from './LearnMisc';
import LearnMethodsAndProps from './LearnMethodsAndProps';

export default function Learn() {
  React.useEffect(() => {
    document.title = "RegEx360 - Learn";
  }, []);

  function handleTabClick(event) {
    event.preventDefault();
    let target = event.currentTarget;

    // Tabs
    document.querySelectorAll(".tabs ul li a").forEach(element => {
      if (element.dataset.tab === target.dataset.tab) {
        element.parentElement.className = "is-active";
      } else {
        element.parentElement.className = "";
      }
    });

    // Tab content
    document.querySelectorAll(".box-tab").forEach(element => {
      element.className = "box-tab is-hidden"
    });
    document.getElementById(target.dataset.tab).className = "box-tab";
  }

  return (
    <React.Fragment>
      <section className="section">
        <div className="container">
          <div className="columns is-vcentered is-centered">
            <div className="column is-10">
              <div className="tabs is-rounded is-centered">
                <ul>
                  <li className="is-active"><a href="#learn" data-tab="tab1" onClick={handleTabClick}>Basics</a></li>
                  <li><a href="#learn" data-tab="tab2" onClick={handleTabClick}>Assertions</a></li>
                  <li><a href="#learn" data-tab="tab3" onClick={handleTabClick}>Character Classes</a></li>
                  <li><a href="#learn" data-tab="tab4" onClick={handleTabClick}>Groups &amp; Ranges</a></li>
                  <li><a href="#learn" data-tab="tab5" onClick={handleTabClick}>Quantifiers</a></li>
                  <li><a href="#learn" data-tab="tab6" onClick={handleTabClick}>Misc.</a></li>
                  <li><a href="#learn" data-tab="tab7" onClick={handleTabClick}>Methods and Properties</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="columns is-vcentered is-centered">
            <div className="column is-10 has-text-centered">
              <div className="box-tab" id="tab1">
                <LearnBasics />
              </div>
              <div className="box-tab is-hidden" id="tab2">
                <LearnAssertions />
              </div>
              <div className="box-tab is-hidden" id="tab3">
                <LearnCharacterClasses />
              </div>
              <div className="box-tab is-hidden" id="tab4">
                <LearnGroupsAndRanges />
              </div>
              <div className="box-tab is-hidden" id="tab5">
                <LearnQuantifiers />
              </div>
              <div className="box-tab is-hidden" id="tab6">
                <LearnMisc />
              </div>
              <div className="box-tab is-hidden" id="tab7">
                <LearnMethodsAndProps />
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}
