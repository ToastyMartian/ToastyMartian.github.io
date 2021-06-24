function Contact() {
    return (
        <div className="contact">
            <h1 className='text-4xl font-overpass m-auto mt-16 text-center'>Contact</h1>
            <aside className='pt-16 flex'>
                <div className='m-auto sm:max-w-1/2 bg-cyan-dark px-14 pt-3 pb-10 rounded-tl-large'>
                    <h1 className='font-overpass pt-5'>Contact details:</h1>
                    <h4 className='font-overpass font-light text-purple-light pt-10'>Email: <a className='text-cyan hover:text-cyan-medium' target='_blank' rel='noreferrer' href='mailto:cakallemein@gmail.com'>cakallemein@gmail.com</a></h4>
                    <h4 className='font-overpass font-light text-purple-light pt-10'>Phone: <span className='text-cyan'>+31 6 13306261</span></h4>
                    <h4 className='font-overpass font-light text-purple-light pt-10'>Company website: <a className='text-cyan hover:text-cyan-medium' target='_blank' rel='noreferrer' href='https://www.codetexx.com/'>www.codetexx.com</a></h4>
                </div>
            </aside>
        </div>
    );
  }
  
  export default Contact;