import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="header">
      <div className="nav_bar">
        <h1>Math Magicians</h1>
        <ul className="nav_items">
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
      </div>
    </header>
  );
}
