import Head from "next/head";
import axios from "axios";
import url from "../data/data";
import reStyles from "../styles/re.module.css";
function RawEngineering(props) {
  let rawEngineering = props.rawEngineering[0];
  return (
    <div>
      <Head>
        <title>Raw Engineering</title>
      </Head>
      <div>
        <div className={reStyles.header}>
          <nav className={reStyles.navigation}>
            <img
              className={reStyles.companyLogo}
              src={rawEngineering.rawEngineeringLogo}
              alt="Logo"
            />
            <div className={reStyles.navLinks}>
              {rawEngineering.navigationLinks.map((link, i) => {
                return (
                  <p className={reStyles.navItem} key={i}>
                    {link}
                  </p>
                );
              })}
            </div>
          </nav>
          <div className={reStyles.banner}>
            <div className={reStyles.bannerText}>
              <p className={reStyles.bannerTitle}>{rawEngineering.title}</p>
              <p className={reStyles.bannerSubtitle}>
                {rawEngineering.subtitle}
              </p>
            </div>
            <img
              className={reStyles.bannerImage}
              src={rawEngineering.bannerImage}
              alt="Banner"
            />
          </div>
        </div>
      </div>
      <div>
        <p className={reStyles.introText}>{rawEngineering.shortIntro}</p>
        <p className={reStyles.sectionHeading}>WHAT WE DO</p>
        {rawEngineering.whatWeDo.map((task, i) => {
          return (
            <div className={reStyles.whatWeDo} key={i}>
              <img
                className={reStyles.whatWeDoImage}
                src={task.imageUrl}
                alt="What we do"
              />
              <div className={reStyles.whatWeDoText}>
                <p className={reStyles.whatWeDoHeading}>{task.heading}</p>
                <p className={reStyles.whatWeDoSubheading}>{task.subHeading}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div>
        <p className={reStyles.sectionHeading}>LATEST WORK</p>
        <div className={reStyles.latestWorkContainer}>
          {rawEngineering.latestWork.map((work, i) => {
            return (
              <div className={reStyles.latestWork} key={i}>
                <div className={reStyles.latestWorkImage}>
                  <img src={work.imageUrl} alt="Work" />
                </div>
                <div className={reStyles.latestWorkText}>
                  <p>{work.title}</p>
                  <p>{work.caseStudyHeading}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div>
        <p className={reStyles.sectionHeading}>TESTIMONIALS</p>
        <div className={reStyles.testimonialContainer}>
          {rawEngineering.testimonials.map((testimony, i) => {
            return (
              <div key={i}>
                <img
                  className={reStyles.testimonailImage}
                  src={testimony.imageUrl}
                  alt="Testimony"
                />
                <p>{testimony.name}</p>
                <p>{testimony.companyName}</p>
                <p>"{testimony.message}"</p>
              </div>
            );
          })}
        </div>
      </div>
      <footer className={reStyles.footerContainer}>
        <p className={reStyles.footerHeading}>
          Ready to get started on your next project?
        </p>
        <div className={reStyles.copyrightContainer}>
          <div className={reStyles.copyrightLinks}>
            <p>Privacy</p>
            <p>Backend Terms of use</p>
          </div>
          <p>Copyright © 2021 Raw Engineering LLC. All Rights Reserved.</p>
          <div className={reStyles.copyrightImage}>
            <img
              src="https://www.raweng.com/v3/assets/bltaacb6b0c9b693c2d/blt67d1684f23bec105/5e31575101e4f445b22f4bde/soc_logo.png?width=100"
              alt="AICPA"
            />
          </div>
        </div>
      </footer>
    </div>
  );
}
export const getStaticProps = async () => {
  let { data } = await axios.get(url + "raw-engineering.json");
  return {
    props: {
      rawEngineering: [...data],
    },
  };
};
export default RawEngineering;
