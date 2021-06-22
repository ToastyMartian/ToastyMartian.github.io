//Soundworld imports
import soundThumb from '../../img/soundworld/sound1.PNG';
import sound1 from '../../img/soundworld/sound3.png';
import sound2 from '../../img/soundworld/sound5.png';

function Webdev() {
    return(
        <div className='font-overpass'>
            <h1 className='text-center'>Web Development</h1>

            <section className='bg-cyan-dark mx-8 rounded-tl-large mt-10'>
                <h2 className='text-center py-5'>Soundworld</h2>
                <div className='flex justify-evenly'>
                    <img className='max-w-1/5' src={soundThumb} alt='Screenshot of Soundworlds homepage'/>
                    <div className='text-purple-light font-thin max-w-prose self-center'>
                        <h4>Soundworld is a small project that I made as a programming assignment for the second period of year 2. Here I had to develop a fullstack application and create my own database to use in the application</h4>
                        <h4 className='py-5'>While the first few weeks of the project focused on creating the data and the database using Nodejs and MongoDB, the last few focused on developing a fully functioning React application, that uses CRUD to fetch and display the data given from the database.</h4>
                        <h4 className='py-5'>As a bonus, I could add routing and pagination to the application to more easily navigate through the data. For this project, i decided to create a musician application that displays some information on the musician, including a well-known album and concert.</h4>
                    </div>
                </div>
                <h3 className='ml-10 pb-5'>Gallery</h3>
                <div className='flex ml-10 pt-5 pb-10'>
                    <img className='max-w-1/10 overflow-hidden mr-7' src={soundThumb} alt='Screenshot of Soundworlds homepage'/>
                    <img className='max-w-1/10 overflow-hidden mr-7' src={sound1} alt='Screenshot of the detail page of the musician Rammstein'/>
                    <img className='max-w-1/10 overflow-hidden' src={sound2} alt='Screenshot of the edit page of a test musician'/>
                </div>
            </section>

            <section className='bg-cyan-dark mx-8 rounded-tl-large mt-20'>
                <h2 className='text-center py-5'>Machine Learning</h2>
                <div className='text-purple-light font-thin max-w-prose m-auto'>
                    <h4>Though this isn't a full-on project, I did make small applications and prototypes to test out different types of AI and Machine Learning applications for the third period of my second year.</h4> 
                    <h4 className='py-5'>Here I mainly experimented with tools, programs and plugins such as ML5, Kaggle, the Google Teachable Machine, MobileNet- and KNN-classifiers.</h4>
                    <h4 className='py-5'>Though I had a try with each, I did favor the Google Teachable Machine and ML5 in combination with the MobileNet classifier. This allowed me to create applications that could scan and classify image and/or webcam input</h4>
                    <h4 className='py-5'>Examples of this are a scanner that can identify a species of cacti through webcam input, a scanner that can translate sign language and lastly a small game where you upload an image of a snake and score points when the snake species is non-venomous.</h4>
                </div>
                <h3 className='ml-10 pb-5'>Gallery</h3>
            </section>

            <section className='bg-cyan-dark mx-8 rounded-tl-large mt-20'>
                <h2 className='text-center py-5'>Natuurdekkers</h2>
                <div className='text-purple-light font-thin max-w-prose m-auto'>
                    <h4>Natuurdekkers is the latest team project I did for year 2. Here, me and a team of 6 total worked on making an AI-based website that helps users determine what type of green roof they can get for their house and/or building.</h4> 
                    <h4 className='py-5'>We were tasked to find a way to make Rotterdam and the surrounding area more environmentally friendly. After researching how Rotterdam and other cities try to be more sustainable, we came up with the idea to make an application that informs and encourages private home owners to install a green roof.</h4>
                    <h4 className='py-5'>In this project, my task was to develop the homepage and create a color and structural theme for the entire website based on a prototype the entire team put together in Figma.</h4>
                </div>
                <h3 className='ml-10 pb-5'>Gallery</h3>
            </section>

            <section className='bg-cyan-dark mx-8 rounded-tl-large mt-20'>
                <h2 className='text-center py-5'>Reptileshop</h2>
                <div className='text-purple-light font-thin max-w-prose m-auto'>
                    <h4>The reptileshop is a Laravel web application that I made as a programming assignment in the first period of year 2. Here, we were learning frameworks for the first time and started with a PHP framework, combined with a MySQL database.</h4> 
                    <h4 className='py-5'>As this was an e-commerce application, I created a database structure with different reptiles and/or products that would be for sale in a reptile shop, and fetched this data using Laravel and CRUD.</h4>
                    <h4 className='py-5'>I also implemented a filtering system that allowed users to sort the products using a set of categories, added a user role system that gave more access to someone with an admin role or less to a regular user, and experimented with using Bootstrap.</h4>
                </div>
                <h3 className='ml-10 pb-5'>Gallery</h3>
            </section>
        </div>
    );
}

export default Webdev;