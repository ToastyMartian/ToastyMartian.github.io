import profile from '../img/profile.jpg';

function About() {
    return (
        <div>
            <h1 className='text-4xl font-overpass m-auto mt-16 text-center'>About Me</h1>
            <aside className='pt-16 flex'>
                <div className='ml-20 max-w-1/3 bg-gray-500'>
                    <img className='mix-blend-overlay' src={profile} alt='What i look like'/>
                </div>
                <div className='m-auto mr-0 sm:max-w-1/2 bg-cyan-dark px-14 pt-3 pb-10 rounded-tl-large'>
                    <h1 className='font-overpass pt-5'>Hi there!</h1>
                    <h4 className='font-overpass font-light text-purple-light pt-10'>My name is Celine Kallemein, and I am a 20 year old Dutch student currently studying Creative Media &amp; Game Technologies at the Rotterdam University of Applied Sciences. Here, we learn programming and design in several different areas such as: Web development, app development, game design and development, UI/UX design, and much more. Throughout college we work with team-based projects that last either one period, or a full semester.</h4>
                    <h4 className='font-overpass font-light text-purple-light pt-10'>As for my personal expertise, I specialize in Front-End development, game art and design, game development, 3D-art, and lastly UI/UX design. Next to that, I also have experience in using Photoshop, Illustrator, Microsoft Word, Figma, Unity, Blender3D and Github. As a game- and 3D-artist I am mostly self taught, though I have pursued some professional courses to help learn the more advanced features of certain programs and techniques.</h4>
                    <h4 className='font-overpass font-light text-purple-light pt-10 pb-7'>I have a great passion for game art and development and wish to find a future career as an indie game developer or artist. I seek a lot of inspiration from existing indie game developers, who made it big on the gaming market through ambition and determination. I’m always eager to learn something new or further expand my current skillset to match that of my teammates and/or colleagues. I love being part of a team of social and ambitious people.</h4>
                </div>
            </aside>
        </div>
    );
  }
  
  export default About;