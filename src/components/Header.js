import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <h1>Math Magicians</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/calculator">Calculator</Link>
        </li>
        <li>
          <Link to="/qoute">Quote</Link>
        </li>
      </ul>
    </header>
  );
}
