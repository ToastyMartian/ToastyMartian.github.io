import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

function Header() {
    return (
        <header className='p-1 py-10 inline flex items-center'>
            <h1 className='ml-10 cursor-pointer font-overpass font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-light to-cyan'>Celine Kallemein</h1>
            <nav className='m-auto font-overpass font-thin'>
                <ul className='flex justify-self-center'>
                    <li className='my-5 mx-10 px-3 py-1 bg-gradient-to-r rounded hover:from-cyan-light hover:to-cyan'><Link to='/'>Home</Link></li>
                    <li className='my-5 mx-10 px-3 py-1 bg-gradient-to-r rounded hover:from-cyan-light hover:to-cyan'><Link to='/about'>About</Link></li>
                    <li className='my-5 mx-10 px-3 py-1 bg-gradient-to-r rounded hover:from-cyan-light hover:to-cyan'><Link to='/portfolio'>Portfolio</Link></li>
                    <li className='my-5 mx-10 px-3 py-1 bg-gradient-to-r rounded hover:from-cyan-light hover:to-cyan'><Link to='/contact'>Contact</Link></li>
                </ul>
            </nav>
        </header>
    );
  }
  
  export default Header;