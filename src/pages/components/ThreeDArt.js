//Afternoon bistro imports
import bistroThumb from '../../img/bistro/bistro1.png';
import bistro1 from '../../img/bistro/bistro2.png';
import bistro2 from '../../img/bistro/bistro5.png';
import bistro3 from '../../img/bistro/bistro6.png';

//Industrial imports
import induThumb from '../../img/industrial/indu1.png';
import indu1 from '../../img/industrial/indu3.png';

//Avatar imports
import avatarThumb from '../../img/avatar/avatar1.png';

function ThreeDArt() {
    return(
        <div className='font-overpass'>
            <h1 className='text-center'>3D Modeling</h1>

            <section className='bg-cyan-dark mx-8 rounded-tl-large mt-10'>
                <h2 className='text-center py-5'>Afternoon Bistro</h2>
                <div className='flex justify-evenly'>
                    <img className='max-w-1/5' src={bistroThumb} alt='Render of a red glazed donut and glass cup of hot chocolate'/>
                    <div className='text-purple-light font-thin max-w-prose self-center'>
                        <h4>This is one of the very first 3D projects I've done using Blender. Here, I followed a well known tutorial and experimented with modeling, lighting and texturing in the different objects</h4>
                        <h4 className='py-5'>Though the scene setup is very similar to the original, I tried my best to make my own creative version of the scenery for extra practice.</h4>
                        <h4 className='py-5'>This was also done through following different tutorials and walkthroughs, but I also frequently consulted 3D art communities for tips and feedback.</h4>
                    </div>
                </div>
                <h3 className='ml-10 pb-5'>Gallery</h3>
                <div className='flex ml-10 pt-5 pb-10'>
                    <img className='max-w-1/10 overflow-hidden mr-7' src={bistroThumb} alt='Render of a red glazed donut and glass cup of hot chocolate'/>
                    <img className='max-w-1/10 overflow-hidden mr-7' src={bistro1} alt='Work in progress of final render donut and hot chocolate'/>
                    <img className='max-w-1/10 overflow-hidden mr-7' src={bistro2} alt='Work in progress of red glazed donut'/>
                    <img className='max-w-1/10 overflow-hidden' src={bistro3} alt='Work in progress of the hot chocolate cup'/>
                </div>
            </section>

            <section className='bg-cyan-dark mx-8 rounded-tl-large mt-20'>
                <h2 className='text-center py-5'>Industrial Living Room (Work in progress)</h2>
                <div className='flex justify-evenly'>
                    <img className='max-w-1/5' src={induThumb} alt='Render of a black leather dining chair with metal legs'/>
                    <div className='text-purple-light font-thin max-w-prose self-center'>
                        <h4>This is a small 3D project that I started independently to really challenge myself and practice modeling realistic real life objects.</h4> 
                        <h4 className='py-5'>Added to this, I decided to turn a single chair into a personalized living room scenery to also practice composition and proper scaling of certain objects. The scene itself is how I visualize my very own studio apartment or living room.</h4>
                        <h4 className='py-5'>I made this by taking inspiration from existing furniture and using these as reference to make my own preferred interpretation of them.</h4>
                    </div>
                </div>
                <h3 className='ml-10 pb-5'>Gallery</h3>
                <div className='flex ml-10 pt-5 pb-10'>
                    <img className='max-w-1/10 overflow-hidden mr-7' src={induThumb} alt='Render of a black leather dining chair with metal legs'/>
                    <img className='max-w-1/10 overflow-hidden' src={indu1} alt='Work in progress of chair base with legs'/>
                </div>
            </section>

            <section className='bg-cyan-dark mx-8 rounded-tl-large mt-20'>
                <h2 className='text-center py-5'>Personalized Avatar</h2>
                <div className='flex justify-evenly'>
                    <img className='max-w-1/5' src={avatarThumb} alt='Render of myself as a blocky voxel character'/>
                    <div className='text-purple-light font-thin max-w-prose self-center'>
                        <h4>This is where I decided to practice 3D modeling outside of my comfort zone. Though I had learned to create realistic 3D scenery, I wanted to practice adapting a certain artsyle while modeling</h4> 
                        <h4 className='py-5'>Hence why I created this little character, meant to represent myself in a 3D voxel style similar to games like Minecraft or certain mobile indie games.</h4>
                        <h4 className='py-5'>I enjoy working with this style and realized here the potential of applying this to a videogame, making it more accessible for players graphics-wise.</h4>
                    </div>
                </div>
                <h3 className='ml-10 pb-5'>Gallery</h3>
                <div className='flex ml-10 pt-5 pb-10'>
                    <img className='max-w-1/10 overflow-hidden mr-7' src={avatarThumb} alt='Render of myself as a blocky voxel character'/>
                </div>
            </section>
        </div>
    );
}

export default ThreeDArt;