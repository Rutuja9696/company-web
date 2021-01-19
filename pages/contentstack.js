import Link from "next/link";
import axios from "axios";
import url from "../data/data";
import CsStyles from "../styles/cs.module.css";
function Contentstack(props) {
  let contentstack = props.contentstack[0];
  console.log(contentstack);
  return (
    <>
      <title>Contentstack</title>
      <div>
        <div className={CsStyles.banner}>
          {/* navigation bar */}
          <nav className={CsStyles.nav}>
            <img
              src={contentstack.contentstackLogo}
              alt=""
              className={CsStyles.bannerLogo}
            />
            <div className={CsStyles.options}>
              {contentstack.navigationLinks.map((link, i) => {
                return (
                  <p key={i} className={CsStyles.lists}>
                    {link}
                  </p>
                );
              })}
            </div>
          </nav>
          {/* banner */}
          <div>
            <h1 className={CsStyles.heading}>{contentstack.heading}</h1>
            <h3 className={CsStyles.subHeading}>{contentstack.subHeading}</h3>
            <button className={CsStyles.buttons}>TRY FOR FREE</button>
            <p className={CsStyles.linkText}>Request a Demo</p>
          </div>
        </div>
        {/* end of main div */}
        <div className={CsStyles.banner2}>
          <h2>Why Choose Contentstack?</h2>
          <div className={CsStyles.whyBox}>
            {contentstack.whyChooseContentstack.map((whyChoose, i) => {
              return (
                <div key={i} className={CsStyles.whyBoxItems}>
                  <h3>{whyChoose.title}</h3>
                  <p>{whyChoose.content}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div className={CsStyles.believeBox}>
          <h1>{contentstack.bottomBanner.title}</h1>
          <button className={CsStyles.buttons}>REQUEST A DEMO</button>
          <button className={CsStyles.buttton2}>TRY FOR FREE</button>
        </div>
        <hr />
        <div className={CsStyles.footerSection}>
          {contentstack.footer.map((footerLinks, i) => {
            return (
              <li key={i} className={CsStyles.list}>
                {footerLinks}
              </li>
            );
          })}
        </div>
      </div>
    </>
  );
}
export const getStaticProps = async () => {
  let { data } = await axios.get(url + "contentstack.json");
  return {
    props: {
      contentstack: [...data],
    },
  };
};
export default Contentstack;
