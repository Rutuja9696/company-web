import Link from "next/link";
import axios from "axios";
import url from "../data/data";
import sbStyles from "../styles/sb.module.css";
function Surfboard(props) {
  let surfboard = props.surfboard[0];
  console.log(surfboard);
  return (
    <>
      <title>Surfboard</title>
      {/* nav */}
      <div>
        <nav className={sbStyles.nav}>
          <img src={surfboard.surfboardLogo} alt="" />
          <div>
            {surfboard.navigationLinks.map((link, i) => {
              return <p key={i}>{link}</p>;
            })}
          </div>
        </nav>
        <div>
          <h1>{surfboard.bannerHeading}</h1>
          <h3>{surfboard.bannerSubHeading}</h3>
        </div>
        <div>
          <img src={surfboard.portfolioImage} alt="" />
          {surfboard.companies.map((company, i) => {
            return (
              <div key={i}>
                <Link href={company.siteLink}>
                  <a>{company.companyName}</a>
                </Link>
                <p>{company.description}</p>
              </div>
            );
          })}
        </div>
        <div>
          {surfboard.team.map((team, i) => {
            return (
              <div key={i}>
                <img src={team.image} alt="" />
                <p>{team.name}</p>
                <p>{team.message}</p>
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
    </>
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
