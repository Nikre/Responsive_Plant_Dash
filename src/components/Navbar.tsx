import Link from 'next/link';
import Image from 'next/image';

/* TODO: Aggiungere il routing */
const Navbar: React.FC = () => {
    return (
        <nav className='navbar'>
            <div className="navbar-content">
                <div>
                    <Link className="logo" href="/">
                        <Image src="/logo.png"
                            alt="Logo"
                            width={50}
                            height={50} />
                        <p className='sub-logo-text'>
                            Plant DashBoard
                        </p>
                    </Link>
                </div>
                <ul className="nav-links"> 
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/">Control</Link></li>
                    <li><Link href="/">About</Link></li>
                </ul>
            </div>
        </nav>
    )
};

export default Navbar;