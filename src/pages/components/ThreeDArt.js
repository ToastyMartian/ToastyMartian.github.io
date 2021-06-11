function ThreeDArt() {
    return(
        <div className='font-overpass'>
            <h1 className='text-center'>3D Art</h1>

            <section className='bg-cyan-dark mx-8 rounded-tl-large mt-10'>
                <h2 className='text-center py-5'>Afternoon Bistro</h2>
                <div className='text-purple-light font-thin max-w-prose m-auto'>
                    <h4>This is one of the very first 3D projects I've done using Blender. Here, I followed a well known tutorial and experimented with modeling, lighting and texturing in the different objects</h4>
                    <h4 className='py-5'>Though the scene setup is very similar to the original, I tried my best to make my own creative version of the scenery for extra practice</h4>
                </div>
                <h3 className='ml-10 pb-5'>Gallery</h3>
            </section>

            <section className='bg-cyan-dark mx-8 rounded-tl-large mt-20'>
                <h2 className='text-center py-5'>Industrial Living Room (Work in progress)</h2>
                <div className='text-purple-light font-thin max-w-prose m-auto'>
                    <h4>This is a small 3D project that I started independently to really challenge myself and practice modeling realistic real life objects</h4> 
                    <h4 className='py-5'>Added to this, I decided to turn a single chair into a personalized living room scenery to also practice composition and proper scaling of certain objects.</h4>
                </div>
                <h3 className='ml-10 pb-5'>Gallery</h3>
            </section>

            <section className='bg-cyan-dark mx-8 rounded-tl-large mt-20'>
                <h2 className='text-center py-5'>Personalized Avatar</h2>
                <div className='text-purple-light font-thin max-w-prose m-auto'>
                    <h4>This is where I decided to practice 3D modeling outside of my comfort zone. Though I had learned to create realistic 3D scenery, I wanted to practice adapting a certain artsyle while modeling</h4> 
                    <h4 className='py-5'>Hence why I created this little character, meant to represent myself in a 3D voxel style similar to games like Minecraft or certain mobile indie games.</h4>
                    <h4 className='py-5'>I enjoy working with this style and realized here the potential of applying this to a videogame, making it more accessible for players graphics-wise.</h4>
                </div>
                <h3 className='ml-10 pb-5'>Gallery</h3>
            </section>
        </div>
    );
}

export default ThreeDArt;