import Link from "next/link";
import axios from "axios";
import url from "../data/data";
import sbStyles from "../styles/sb.module.css";
function Surfboard(props) {
  let surfboard = props.surfboard[0];
  console.log(surfboard);
  return (
    <div>
      <title>Surfboard</title>
      {/* nav */}
      <div>
        <div className={sbStyles.header}>
          <nav className={sbStyles.navigation}>
            <img
              className={sbStyles.companyLogo}
              src={surfboard.surfboardLogo}
              alt="Logo"
            />

            <div className={sbStyles.navLinks}>
              {surfboard.navigationLinks.map((link, i) => {
                return (
                  <p className={sbStyles.navItem} key={i}>
                    {link}
                  </p>
                );
              })}
            </div>
          </nav>
          <div className={sbStyles.banner}>
            <div className={sbStyles.bannerText}>
              <p className={sbStyles.bannerTitle}>{surfboard.bannerHeading}</p>
              <p className={sbStyles.bannerSubtitle}>
                {surfboard.bannerSubHeading}
              </p>
            </div>
          </div>
          <div>
            <p className={sbStyles.sectionHeading}>Our Portfolio Companies</p>
            <div className={sbStyles.portfolioContainer}>
              <img
                className={sbStyles.portfolioImage}
                src={surfboard.portfolioImage}
                alt=""
              />
              <div>
                {surfboard.companies.map((company, i) => {
                  return (
                    <div key={i}>
                      <Link href={company.siteLink}>
                        <p className={sbStyles.companyName}>
                          {company.companyName}
                        </p>
                      </Link>
                      <p className={sbStyles.companyDescription}>
                        {company.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div>
            <p className={sbStyles.sectionHeading}>Team</p>
            {surfboard.team.map((team, i) => {
              return (
                <div className={sbStyles.teamContainer} key={i}>
                  <img className={sbStyles.teamImage} src={team.image} alt="" />
                  <div className={sbStyles.teamText}>
                    <p>{team.name}</p>
                    <p>{team.message}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className={sbStyles.philosophyContainer}>
            {/* our philosophy */}
            <h1>Our Philosophy</h1>
            <div className={sbStyles.philosophy}>
              {surfboard.philosophy.map((philosophy, i) => {
                return (
                  <div className={sbStyles.pContent} key={i}>
                    <img src={philosophy.image} alt="" />
                    <h2>{philosophy.title}</h2>
                    <p>{philosophy.content}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export const getStaticProps = async () => {
  let { data } = await axios.get(url + "surfboard.json");
  return {
    props: {
      surfboard: [...data],
    },
  };
};
export default Surfboard;
