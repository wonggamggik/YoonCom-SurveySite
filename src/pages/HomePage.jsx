import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div>
      <Link to="/first">
        <button>1안</button>
      </Link>
      <Link to="/second">
        <button>2안</button>
      </Link>
      <Link to="/third">
        <button>3안</button>
      </Link>
    </div>
  );
}
