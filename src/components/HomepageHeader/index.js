import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import clsx from "clsx";
import styles from "./styles.module.css";
import Link from "@docusaurus/Link";
import { Carousel } from "antd";

export default function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Carousel autoplay={true} effect="fade" dotPosition="bottom" easing="liner" autoplaySpeed={5000}>
      <div>
        <header className={clsx('hero hero--primary', styles.heroBanner)}>
          <div className="container">
            <h1 className="hero__title">{siteConfig.title}</h1>
            <p className="hero__subtitle">{siteConfig.tagline}</p>
            <div className={styles.buttons}>
              <Link
                className="button button--secondary button--lg"
                to="/docs/intro">
                我要預約 ⏱️
              </Link>
            </div>
          </div>
        </header>
      </div>
      <div>
        <h3 className={styles.contentStyle}>
          Slide 2
        </h3>
      </div>
      <div>
        <h3 className={styles.contentStyle}>
          Slide 3
        </h3>
      </div>
    </Carousel>
  );
}