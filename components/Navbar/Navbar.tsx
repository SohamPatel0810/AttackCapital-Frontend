import Link from 'next/link';
import { NavbarContainer } from './Navbar.style'

interface NavbarProps {
}

const Navbar: React.FC<NavbarProps> = () => {
  return (
    <NavbarContainer>
      <Link href="/" passHref className='link'>Home</Link>
      <div className='link-container'>
        <Link href="/signup" passHref className='link'>Sign Up</Link>
        <Link href="/login" passHref  className='link'> Login</Link>
        <Link href="/dashboard" passHref className='link'>Dashboard</Link>
      </div>
    </NavbarContainer>
  );
};

export default Navbar;
