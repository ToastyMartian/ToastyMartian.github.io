function Gameart() {
    return(
        <div className='font-overpass'>
            <h1 className='text-center'>Game art</h1>

            <section className='bg-cyan-dark mx-8 rounded-tl-large mt-10'>
                <h2 className='text-center py-5'>Billy</h2>
                <div className='text-purple-light font-thin max-w-prose m-auto'>
                    <h4>Billy is a 2D pixel horror game that me and a team of 4 people made during our fourth period in year 1 in Unity. Here we were given the challenge to design and develop a small game based on three random categories. Ours were Exploration, Discovery and Worms.</h4>
                    <h4 className='py-5'>In this project, i created all the 2D character sprites and animations, and the dialogue boxes. I also frequently jumped in on the programming side in to adjust animations, align the different scenes and make sure the transitions between scenes was done right.</h4>
                </div>
                <h3 className='ml-10 pb-5'>Gallery</h3>
            </section>

            <section className='bg-cyan-dark mx-8 rounded-tl-large mt-20'>
                <h2 className='text-center py-5'>Androchtizo</h2>
                <div className='text-purple-light font-thin max-w-prose m-auto'>
                    <h4><a className='hover:text-cyan' href='https://globalgamejam.org/2020/games/androchtizo-8' target='_blank' rel='noreferrer'>Androchtizo</a> is a 3D Unity horror game made by me and a group of seven total during the <a className='hover:text-cyan' href='https://globalgamejam.org/' target='_blank' rel='noreferrer'>Global Game Jam</a> in 2020. During this event, you are given 48 hours to build a game based on a specific theme.</h4> 
                    <h4 className='py-5'>The theme of 2020 was 'Repair', where we took this concept and created a horror game where the player wakes up with only an arm and no eyes. The goal of the game is to collect different bodyparts and 'repair' yourself while recollecting memories of what happened.</h4>
                    <h4 className='py-5'>Though we largely used pre-existing free assets for this project, I did set up and build the terrain that the story takes place in, and helped with some of the details and decor of the scenery. This was my first time ever using Unity.</h4>
                </div>
                <h3 className='ml-10 pb-5'>Gallery</h3>
            </section>

            <section className='bg-cyan-dark mx-8 rounded-tl-large mt-20'>
                <h2 className='text-center py-5'>Uganda Unexplored</h2>
                <div className='text-purple-light font-thin max-w-prose m-auto'>
                    <h4>Uganda Unexplored is a serious game that me and a team of 5 worked on during the first semester of year 2. Here we met up with the team behind Hack The Planet, a project organisation started by the Dutch company <a className='hover:text-cyan' href='https://www.q42.nl/en' target='_blank' rel='noreferrer'>Q42</a>.</h4> 
                    <h4 className='py-5'>Here we were given the task to develop a continuation on their <a className='hover:text-cyan' href='https://meetthesoldier.com/' target='_blank' rel='noreferrer'>Meet The Soldier</a> project, which is a documentary that takes a deeper look into the current injustices and wars taking place in Uganda. For this, we decided to make a serious game that would bring more awareness to the situation and promote any related charities</h4>
                    <h4 className='py-5'>We spent the first half of the semester planning and designing a concept for the project. After this I mainly worked on creating the 3D lowpoly models of the characters, setting up the terrain, and jumping in to help with the programming where needed.</h4>
                </div>
                <h3 className='ml-10 pb-5'>Gallery</h3>
            </section>
        </div>
    );
}

export default Gameart;