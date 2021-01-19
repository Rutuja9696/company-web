import axios from "axios";
import url from "../data/data";
//components
import HomeMarkup from "../components/Home";

//function to render data on home page
function Home(props) {
  let home = props.home[0];
  console.log(home);
  return (
    <>
      <title>Home</title>
      <div>
        <HomeMarkup />
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
