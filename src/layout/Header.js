import { Link } from 'react-router-dom';

function Header() {
    return (
        <header className='p-1 py-10 inline flex items-center'>
            <h1 className='ml-10 cursor-pointer font-overpass font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-light to-cyan'>Celine Kallemein</h1>
            <nav className='m-auto font-overpass font-thin'>
                <ul className='flex justify-self-center'>
                    <li><Link to='/' className='my-5 mx-10 px-4 py-1 bg-gradient-to-r rounded hover:from-cyan-light hover:to-cyan'>Home</Link></li>
                    <li><Link to='/about' className='my-5 mx-10 px-4 py-1 bg-gradient-to-r rounded hover:from-cyan-light hover:to-cyan'>About</Link></li>
                    <li><Link to='/portfolio' className='my-5 mx-10 px-4 py-1 bg-gradient-to-r rounded hover:from-cyan-light hover:to-cyan'>Portfolio</Link></li>
                    <li><Link to='/contact' className='my-5 mx-10 px-4 py-1 bg-gradient-to-r rounded hover:from-cyan-light hover:to-cyan'>Contact</Link></li>
                </ul>
            </nav>
        </header>
    );
  }
  
  export default Header;