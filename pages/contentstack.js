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
        <div>
          <h1>Why Choose Contentstack?</h1>
          {contentstack.whyChooseContentstack.map((whyChoose, i) => {
            return (
              <div key={i}>
                <h3>{whyChoose.title}</h3>
                <p>{whyChoose.content}</p>
              </div>
            );
          })}
        </div>
        <div>
          <h1>{contentstack.bottomBanner.title}</h1>
          <button>REQUEST A DEMO</button>
          <button>TRY FOR FREE</button>
        </div>
        <hr />
        <div>
          {contentstack.footer.map((footerLinks, i) => {
            return <li key={i}>{footerLinks}</li>;
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
