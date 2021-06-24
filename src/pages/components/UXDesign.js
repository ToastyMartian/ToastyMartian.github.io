//Protos & Wire imports
import prowiThumb from '../../img/protos/prototype6.png';
import prowi1 from '../../img/protos/prototype5.png';
import prowi2 from '../../img/wires/wireframe4.png';
import prowi3 from '../../img/wires/wireframe5.png';

//User research imports
import userThumb from '../../img/user/user4.png';
import user1 from '../../img/user/user5.png';
import user2 from '../../img/user/user6.png';

//Visual design imports
import visualThumb from '../../img/visual/visual4.png';
import visual1 from '../../img/visual/visual6.png';
import visual2 from '../../img/visual/visual5.png';


function UXDesign() {
    return(
        <div className='font-overpass'>
            <h1 className='text-center'>UI/UX Design</h1>

            <section className='bg-cyan-dark mx-8 rounded-tl-large mt-10'>
                <h2 className='text-center py-5'>Prototypes and Wireframes</h2>
                <div className='flex justify-evenly'>
                    <img className='max-w-1/5 my-auto' src={prowiThumb} alt='Screenshot of early prototype of a green roof website'/>
                    <div className='text-purple-light font-thin max-w-prose self-center'>
                        <h4>In order to begin designing a good looking webpage, UI or game assets, you first need to make wireframes and prototypes to be able to test the design with your users. That way the design can easily be changed early on in the design process, which can save a lot of time.</h4>
                        <h4 className='py-5'>Because it is a significant part of the design process, I have created wireframes and/or prototypes for nearly each project that i've done in the past.</h4>
                        <h4 className='py-5'>Below are some visual examples of these prototypes and wireframes and how i go about designing them and optimizing them for testing.</h4>
                    </div>
                </div>
                <h3 className='ml-10 pb-5'>Gallery</h3>
                <div className='flex ml-10 pt-5 pb-10'>
                    <img className='max-w-1/10 overflow-hidden mr-7' src={prowiThumb} alt='Screenshot of early prototype of a green roof website'/>
                    <img className='max-w-1/10 overflow-hidden mr-7' src={prowi1} alt='Screenshot of early prototype of a plant care app'/>
                    <img className='max-w-1/10 overflow-hidden mr-7' src={prowi2} alt='Rough sketch of page layout for the service company website Scorpio'/>
                    <img className='max-w-1/10 overflow-hidden' src={prowi3} alt='Refined wireflow of page navigation for Scorpio'/>
                </div>
            </section>

            <section className='bg-cyan-dark mx-8 rounded-tl-large mt-20'>
                <h2 className='text-center py-5'>User Research</h2>
                <div className='flex justify-evenly'>
                    <img className='max-w-1/5 my-auto' src={userThumb} alt='Visualisation of a made up persona with distinct personality traits and skills'/>
                    <div className='text-purple-light font-thin max-w-prose self-center'>
                        <h4>In order to create the best user experience possible, it is useful to conduct the research neccessary to find out more about your target audience and what they want to see in your product(s).</h4> 
                        <h4 className='py-5'>To accomplish this, you could interviews and tests with the users, but you could also do some desk research, something that has grown in popularity since the recent developments surrounding the Covid pandemic.</h4>
                        <h4 className='py-5'>I have done a variety of these in my projects, mostly depending on what type of research was most applicable to the project and its goals.</h4>
                        <h4 className='py-5'>Below are some examples of the results and how me and my teammates ended up using the information we got from this research.</h4>
                    </div>
                </div>
                <h3 className='ml-10 pb-5'>Gallery</h3>
                <div className='flex ml-10 pt-5 pb-10'>
                    <img className='max-w-1/10 overflow-hidden mr-7' src={userThumb} alt='Visualisation of a made up persona with distinct personality traits and skills'/>
                    <img className='max-w-1/10 overflow-hidden mr-7' src={user1} alt='Activity map of crowds around Markthal at 10 am'/>
                    <img className='max-w-1/10 overflow-hidden' src={user2} alt='Activity map of crowds around Markthal at 1 pm'/>
                </div>
            </section>

            <section className='bg-cyan-dark mx-8 rounded-tl-large mt-20'>
                <h2 className='text-center py-5'>Styleguides and Visual Design</h2>
                <div className='flex justify-evenly'>
                    <img className='max-w-1/5 my-auto' src={visualThumb} alt='Poster of Blaak train station application idea'/>
                    <div className='text-purple-light font-thin max-w-prose self-center'>
                        <h4>Next to prototypes and wireframes, it is also possible to create a styleguide for the website or application in question. That way the application keeps a consistent style and color palette.</h4> 
                        <h4 className='py-5'>Outside of the website design, I have also created a few promotional or visual works regarding the project. This helped establish the function of the product and at the same time created something to show to potential users.</h4>
                        <h4 className='py-5'>Below are some visual examples of these works. I used each of these designs either to show off my product or apply them to the project in question.</h4>
                    </div>
                </div>
                <h3 className='ml-10 pb-5'>Gallery</h3>
                <div className='flex ml-10 pt-5 pb-10'>
                    <img className='max-w-1/10 overflow-hidden mr-7' src={visualThumb} alt='Poster of Blaak train station application idea'/>
                    <img className='max-w-1/10 overflow-hidden mr-7' src={visual1} alt='Poster of Markthal application idea'/>
                    <img className='max-w-1/10 overflow-hidden' src={visual2} alt='Styleguide for a Scorpio'/>
                </div>
            </section>
        </div>
    );
}

export default UXDesign;