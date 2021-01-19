import axios from "axios";
import url from "../data/data";
import Link from "next/link";

//components
// import HomeMarkup from "../components/Home";
import HomeStyles from "../styles/Index.module.css";

//function to render data on home page
function Home(props) {
  let home = props.home[0];
  console.log(home);
  return (
    <>
      <title>Home</title>
      <div className={HomeStyles.container}>
        <h2>Alone We Create...Together We Rule !</h2>
        <h3>Explore more to know who we are...</h3>
        <div className={HomeStyles.buttonContainer}>
          <Link href="/contentstack">
            <button className={HomeStyles.button1}>Contentstack</button>
          </Link>
          <Link href="/surfboard">
            <button className={HomeStyles.button2}>Surfboard</button>
          </Link>
          <Link href="/rawEngineering">
            <button className={HomeStyles.button1}>Raw Engineering</button>
          </Link>
        </div>
        <div className={HomeStyles.logoContainer}>
          {home.companies.map((company, i) => {
            return (
              <img
                src={company.logo}
                alt="company logo"
                className={HomeStyles.logoImg}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}
export const getStaticProps = async () => {
  let { data } = await axios.get(url + "home.json");
  return {
    props: {
      home: [...data],
    },
  };
};
export default Home;
