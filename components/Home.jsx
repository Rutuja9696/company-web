import { Component } from "react";
import Link from "next/link";
import HomeStyles from "../styles/Index.module.css";

class HomeMarkup extends Component {
  render() {
    return (
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
      </div>
    );
  }
}
export default HomeMarkup;
