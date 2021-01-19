import { Component } from "react";
import Link from "next/link";

class HomeMarkup extends Component {
  render() {
    return (
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
    );
  }
}
export default HomeMarkup;
