import Link from "next/link";
import axios from "axios";
import url from "../data/data";
function Home(props) {
  let home = props.home[0];
  console.log(home);
  return (
    <>
      <title>Home</title>
      <div>
        <h1>Home</h1>
        <div>
          <Link href="/contentstack">
            <button>Contentstack</button>
          </Link>
          <Link href="/surfboard">
            <button>Surfboard</button>
          </Link>
          <Link href="/rawEngineering">
            <button>Raw Engineering</button>
          </Link>
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
