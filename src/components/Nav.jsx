import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav style={{
      padding: '10px 20px',
      background: '#f8f9fa',
      display: 'flex',
      gap: '16px',
      borderBottom: '1px solid #ddd',
    }}>
      <Link to="/adresses">Adresses</Link>
      <Link to="/gestionnaires">Gestionnaires</Link>
    </nav>
  );
}

export default Nav;

