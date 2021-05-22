import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

function Header() {
    return (
        <header className='p-1 pb-10 inline flex items-center bg-gradient-to-b from-black via-black'>
            <h1 className='ml-10 cursor-pointer'>Celine Kallemein</h1>
            <nav className='m-auto'>
                <ul className='flex justify-self-center'>
                    <li className='my-5 mx-10 hover:text-green-600'><Link to='/'>Home</Link></li>
                    <li className='my-5 mx-10 hover:text-green-600'><Link to='/about'>About Me</Link></li>
                    <li className='my-5 mx-10 hover:text-green-600'><Link to='/portfolio'>Portfolio</Link></li>
                    <li className='my-5 mx-10 hover:text-green-600'><Link to='/contact'>Contact</Link></li>
                </ul>
            </nav>
        </header>
    );
  }
  
  export default Header;