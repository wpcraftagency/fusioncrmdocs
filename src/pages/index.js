import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import FontAwesomeIcon from "@site/src/components/FontAwesomeIcon";
import ArrowRight from "@site/static/icons/arrow_right.svg";

import VersionedLink from "@site/src/components/VersionedLink";

import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title"> {siteConfig.title} </h1>{" "}
        <p className="hero__subtitle"> {siteConfig.tagline} </p>{" "}
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/dokumentacio/"
          >
            Kezd itt!{" "}
          </Link>{" "}
        </div>{" "}
      </div>{" "}
    </header>
  );
}

function Gyakoriak() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <div className="gallery-home">
      <div className="container">
        <div className="row">
          <div className="gallery">
            <div className="sub-heading">
              <h2>Gyakran felkeresett dokumentációk</h2>
            </div>

            <div className="card">
              <div className="card-header">
                <FontAwesomeIcon icon="fa-duotone fa-repeat fa-2xl text-success" />
                <h4>Csomagváltás</h4>
              </div>
              <p>
                Az előfizetésed csomagját (amennyiben van több csomag) bármikor
                megváltoztathatod.
              </p>
              <VersionedLink to="/docs/dokumentacio/Alapbeállítások/csomagvaltas">
                Előfizetés csomagváltása <ArrowRight className="arrow" />
              </VersionedLink>
            </div>

            <div className="card">
              <div className="card-header">
                <FontAwesomeIcon icon="fa-duotone fa-paintbrush-pencil fa-2xl text-success" />
                <h4>FusionCRM téma testreszabása</h4>
              </div>
              <p>Szabd testre a CRM-et a saját céged brandjére.</p>
              <VersionedLink to="/docs/dokumentacio/Alapbeállítások/temabeallitasok">
                Probléma megoldása <ArrowRight className="arrow" />
              </VersionedLink>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title="FusionCRM"
      description=" FusionCRM Document and Knowledge base "
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>{" "}
      <Gyakoriak />
    </Layout>
  );
}
