import './Header.css';
import Button from '../Button/button';

export default function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img src="https://upload.wikimedia.org/wikipedia/commons/d/db/Zeronet_logo.png" alt="" />
      </div>
      <div>
        <Button>Main</Button>
      </div>
      <div>
        <Button>Sign Up</Button>
      </div>
    </header>
  )
}

