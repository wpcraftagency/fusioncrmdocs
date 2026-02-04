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
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/dokumentacio/"
          >
            Kezdd itt!
          </Link>
        </div>
      </div>
    </header>
  );
}

// ─── Dokumentációk szekció ───────────────────────────────────────────────────
// Itt adjuk meg a három kategória kártyáját.
// Bővíthető: Csak egy új objektumot kell beadni a tömbbe.
const dokCategories = [
  {
    title: "Alapbeállítások",
    icon: "fa-solid fa-sliders fa-2xl text-success",
    description:
      "Az alapvető beállítások elvégzése: fiók konfiguráció, csomag kezelés, téma és általános rendszer elállítások.",
    link: "/docs/dokumentacio/Alapbeallitasok/",
  },
  {
    title: "Vezérlőpult",
    icon: "fa-solid fa-gauge-high fa-2xl text-success",
    description:
      "A vezérlőpult áttekintése: widgetek, statisztikák, gyors elérhetők és a munkafelület testre szabása.",
    link: "/docs/dokumentacio/Vezerlopult/",
  },
   {
    title: "Leads",
    icon: "fa-solid fa-users fa-2xl text-success",
    description:
      "Potenciális ügyfelek (leads) kezelése: rögzítés, nyomon követés, szűrés és érdeklődők kezelési folyamata.",
    link: "/docs/dokumentacio/Leads/",
},
{
   title: "Ügyfelek",
   icon: "fa-solid fa-building fa-2xl text-success",
   description: "Ügyfelek rögzítése és kezelése: kontaktok, céginformációk és kapcsolattartás.",
  link: "/docs/dokumentacio/Leads/",
 },
 {
  title: "HR",
  icon: "fa-solid fa-people-group fa-2xl text-success",
  description: "Emberi erőforrások kezelése: munkatársakok, szerepkörök és szervezeti struktúra.",
  link: "/docs/dokumentacio/HR/",
 },
  {
    title: "Munka",
    icon: "fa-solid fa-briefcase fa-2xl text-success",
    description: "Munkaelosztás és feladatkezelés: projektek, feladatok és hatáskör-kezelés.",
    link: "/docs/dokumentacio/Munka/",
  },
  {
    title: "Pénzügy",
    icon: "fa-solid fa-dollar-sign fa-2xl text-success",
    description: "Pénzügyi tranzakciók, számolás és pénzügyi kimutatások kezelése.",
    link: "/docs/dokumentacio/Penzugy/",
  },
  {
    title: "Termékek",
    icon: "fa-solid fa-box fa-2xl text-success",
    description: "Termék-katalógus kezelése: termékek rögzítése, árazás és kategorizáció.",
    link: "/docs/dokumentacio/Termekek/",
  },
  {
    title: "Rendelések",
    icon: "fa-solid fa-cart-shopping fa-2xl text-success",
    description: "Rendelések feldolgozása: rögzítés, állapotok nyomon követése és teljesítés.",
    link: "/docs/dokumentacio/Rendelesek/",
  },
  {
    title: "Jegyek",
    icon: "fa-solid fa-headset fa-2xl text-success",
    description: "Támogatási jegyek kezelése: bejelentések, prioritás-kezelés és megoldások.",
    link: "/docs/dokumentacio/jegyek/",
  },
  {
    title: "Események",
    icon: "fa-solid fa-calendar-check fa-2xl text-success",
    description: "Események tervezése és kezelése: naptár, meghívások és résztvevők.",
    link: "/docs/dokumentacio/Esemenyek/",
  },
  {
    title: "Üzenetek",
    icon: "fa-solid fa-envelope fa-2xl text-success",
    description: "Üzenetek és kommunikáció kezelése: levelezés, értesítések és csoportos üzenetek.",
    link: "/docs/dokumentacio/Uzenetek/",
  },
  {
    title: "GDPR",
    icon: "fa-solid fa-lock fa-2xl text-success",
    description: "Adatvédelmi szabályozás betartása: hozzájárulások, adatkezelés és jogok.",
    link: "/docs/dokumentacio/Alapbeallitasok/gdprbeallitasok",
  },
  {
    title: "Faliújság",
    icon: "fa-solid fa-newspaper fa-2xl text-success",
    description: "Belső kommunikáció és értesítések: hír-bejegyzések és közlemények kezelése.",
    link: "/docs/dokumentacio/Faliujsag/",
  },
  {
    title: "Tudásbázis",
    icon: "fa-solid fa-book fa-2xl text-success",
    description: "Tudásbázis cikkek kezelése: dokumentumok, FAQ és belső tudás tárálása.",
    link: "/docs/dokumentacio/Tudasbazis/",
  },
];

function Dokumentaciok() {
  return (
    <div className="gallery-home">
      <div className="container">
        <div className="row">
          <div className="gallery">
            <div className="sub-heading">
              <h2>Dokumentációk</h2>
            </div>
            {dokCategories.map((item, idx) => (
              <div className="card" key={idx}>
                <div className="card-header">
                  <FontAwesomeIcon icon={item.icon} />
                  <h4>{item.title}</h4>
                </div>
                <p>{item.description}</p>
                <VersionedLink to={item.link}>
                  Megnyitás <ArrowRight className="arrow" />
                </VersionedLink>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Gyakoriak szekció (eredeti) ─────────────────────────────────────────────
function Gyakoriak() {
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
                <FontAwesomeIcon icon="fa-solid fa-repeat text-primary fa-2xl text-success" />
                <h4>Csomagváltás</h4>
              </div>
              <p>
                Az előfizetésed csomagját (amennyiben van több csomag) bármikor
                megváltoztathatod.
              </p>
              <VersionedLink to="/docs/dokumentacio/Alapbeallitasok/csomagvaltas">
                Előfizetés csomagváltása <ArrowRight className="arrow" />
              </VersionedLink>
            </div>
            <div className="card">
              <div className="card-header">
                <FontAwesomeIcon icon="fa-solid fa-palette text-primary fa-2xl text-success" />
                <h4>FusionCRM téma testreszabása</h4>
              </div>
              <p>Szabd testre a CRM-et a saját céged brandjére.</p>
              <VersionedLink to="/docs/dokumentacio/Alapbeallitasok/temabeallitasok">
                Probléma megoldása <ArrowRight className="arrow" />
              </VersionedLink>
            </div>
              <div className="card">
              <div className="card-header">
                <FontAwesomeIcon icon="fa-solid fa-file-signature fa-2xl text-primary" />
                <h4>Szerződés küldés</h4>
              </div>
              <p>Szerződéskötés és szerződés küldés ügyfeleknek.</p>
              <VersionedLink to="/docs/dokumentacio/Munka/szerzodesek">
                Probléma megoldása <ArrowRight className="arrow" />
              </VersionedLink>
            </div>
              <div className="card">
              <div className="card-header">
                <FontAwesomeIcon icon="fa-solid fa-file-invoice-dollar fa-2xl text-primary" />
                <h4>Számla küldés</h4>
              </div>
              <p>Számla kiállítása ügyfeleknek.</p>
              <VersionedLink to="/docs/dokumentacio/Munka/szerzodesek">
                Probléma megoldása <ArrowRight className="arrow" />
              </VersionedLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Főoldal ─────────────────────────────────────────────────────────────────
export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title="FusionCRM"
      description="FusionCRM Document and Knowledge base"
    >
      <HomepageHeader />
      <main>
              <Dokumentaciok />
      </main>
      <Gyakoriak />
    </Layout>
  );
}