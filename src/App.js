import { HashRouter, Route, Link } from 'react-router-dom';

//components
import Header from './layout/Header';
import Footer from './layout/Footer';

//pages
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';

function App() {
  return (
    <HashRouter>
      <div className='relative min-h-screen bg-backdrop bg-cover bg-left bg-repeat-y text-gray-50 pb-20 overflow-x-hidden'>  
        <Header />

        {/* Home */}
        <Route exact path='/' render={ props => (
          <div>
            <div className='ml-20 mt-20 max-w-prose'>
              <h1 className='text-4xl font-overpass'>Game art, 3D art, UI/UX Design, Programming &amp; more...</h1>
              <h2 className='font-overpass font-light'>For any creative environment</h2>
              <p className='pt-2 font-overpass font-light text-purple-light'>Experience in HTML, CSS, JS, React, Bootstrap, Blender3D, Unity and UE 4</p>
              <div className='mt-7 font-overpass font-light'>
                <Link to='/about' className='py-3 px-3 bg-gradient-to-r rounded from-cyan-light to-cyan-medium hover:from-cyan'>Learn more</Link>
              </div>
            </div>

            <section className='flex flex-nowrap justify-evenly m-auto mt-20'>
              <svg className='mt-5 fill-current text-purple-light h-16 w-auto' version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 299.215 299.215" style={{"enable-background":"new 0 0 299.215 299.215;"}}>
	              <g id="XMLID_106_">
		              <path id="XMLID_107_" d="M22.347,0c-2.75,0-4.799,2.241-4.555,4.98l23.184,260.047c0.244,2.739,2.611,5.582,5.262,6.318 l98.381,27.316c2.65,0.736,6.986,0.736,9.637,0.002l98.68-27.361c2.65-0.735,5.02-3.578,5.264-6.316L281.422,4.98
			              c0.246-2.739-1.805-4.98-4.555-4.98H22.347z M232.049,59.641c-0.219,2.443-0.598,6.684-0.842,9.423l-0.611,6.823 c-0.246,2.738-0.596,6.654-0.781,8.701c-0.184,2.048-0.359,3.723-0.391,3.723c-0.031,0-2.307,0-5.057,0h-69.76
			              c-2.75,0-5.023,0-5.053,0s-2.305,0-5.055,0h-36.74c-2.75,0-4.799,2.241-4.555,4.98l2.143,23.955c0.244,2.738,2.695,4.98,5.445,4.98 H144.5c2.75,0,5.025,0,5.055,0s2.303,0,5.053,0h57.939c2.75,0,7.006,0,9.457,0c2.449,0,4.273,1.999,4.051,4.442
			              c-0.223,2.443-0.604,6.685-0.848,9.423l-6.891,77.228c-0.246,2.739-0.557,6.238-0.691,7.776c-0.137,1.537-2.416,3.396-5.066,4.131 l-58.133,16.119c-2.65,0.734-4.852,1.342-4.893,1.351c-0.041,0.009-2.242-0.586-4.893-1.321l-58.195-16.148
			              c-2.65-0.735-5.018-3.578-5.262-6.317l-3.746-42.045c-0.244-2.739,1.807-4.98,4.557-4.98h5.311c2.75,0,7.25,0,10,0h7.92 c2.75,0,5.199,2.241,5.445,4.98l1.469,16.459c0.244,2.739,2.615,5.566,5.271,6.283l27.221,7.351
			              c2.654,0.717,4.836,1.304,4.848,1.304s2.193-0.588,4.848-1.305l27.27-7.369c2.654-0.717,5.027-3.545,5.273-6.283l2.957-32.976 c0.246-2.739-1.803-4.98-4.553-4.98h-30.666c-2.75,0-5.023,0-5.053,0s-2.305,0-5.055,0H80.511c-2.75,0-5.199-2.242-5.443-4.98
			              l-7.256-81.306c-0.244-2.739-0.623-6.979-0.842-9.423c-0.217-2.443,1.854-4.442,4.604-4.442H144.5c2.75,0,5.025,0,5.055,0 s2.303,0,5.053,0h72.838C230.195,55.198,232.267,57.197,232.049,59.641z"
                  />
	              </g>
              </svg>

              <svg className='mt-5 fill-current text-purple-light h-16 w-auto' viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z"/>
              </svg>

              <svg className='mt-5 fill-current text-purple-light h-16 w-auto' version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 58 58" style={{"enable-background":"new 0 0 58 58;"}}>
                <g>
                  <path d="M6.5,41v15c0,1.009,1.22,2,2.463,2h40.074c1.243,0,2.463-0.991,2.463-2V41H6.5z M27.021,51.566 c0,0.474-0.087,0.873-0.26,1.196c-0.174,0.323-0.406,0.583-0.697,0.779c-0.292,0.196-0.627,0.333-1.005,0.41
                    s-0.769,0.116-1.169,0.116c-0.201,0-0.436-0.021-0.704-0.062s-0.547-0.104-0.834-0.191s-0.563-0.185-0.827-0.294 c-0.265-0.109-0.488-0.232-0.67-0.369l0.697-1.107c0.091,0.063,0.221,0.13,0.39,0.198s0.353,0.132,0.554,0.191
                    c0.2,0.06,0.41,0.111,0.629,0.157s0.424,0.068,0.615,0.068c0.482,0,0.868-0.094,1.155-0.28s0.439-0.504,0.458-0.95v-7.711h1.668 V51.566z M34.958,52.298c-0.15,0.342-0.362,0.643-0.636,0.902s-0.611,0.467-1.012,0.622c-0.401,0.155-0.857,0.232-1.367,0.232
                    c-0.219,0-0.444-0.012-0.677-0.034s-0.468-0.062-0.704-0.116c-0.237-0.055-0.463-0.13-0.677-0.226s-0.399-0.212-0.554-0.349 l0.287-1.176c0.127,0.073,0.289,0.144,0.485,0.212s0.398,0.132,0.608,0.191c0.209,0.06,0.419,0.107,0.629,0.144
                    c0.209,0.036,0.405,0.055,0.588,0.055c0.556,0,0.982-0.13,1.278-0.39s0.444-0.645,0.444-1.155c0-0.31-0.105-0.574-0.314-0.793 c-0.21-0.219-0.472-0.417-0.786-0.595s-0.654-0.355-1.019-0.533c-0.365-0.178-0.707-0.388-1.025-0.629
                    c-0.319-0.241-0.584-0.526-0.793-0.854c-0.21-0.328-0.314-0.738-0.314-1.23c0-0.446,0.082-0.843,0.246-1.189 s0.385-0.641,0.663-0.882s0.602-0.426,0.971-0.554s0.759-0.191,1.169-0.191c0.419,0,0.843,0.039,1.271,0.116
                    c0.428,0.077,0.774,0.203,1.039,0.376c-0.055,0.118-0.119,0.248-0.191,0.39c-0.073,0.142-0.142,0.273-0.205,0.396 c-0.064,0.123-0.119,0.226-0.164,0.308c-0.046,0.082-0.073,0.128-0.082,0.137c-0.055-0.027-0.116-0.063-0.185-0.109
                    s-0.167-0.091-0.294-0.137c-0.128-0.046-0.297-0.077-0.506-0.096c-0.21-0.019-0.479-0.014-0.807,0.014 c-0.183,0.019-0.355,0.07-0.52,0.157s-0.311,0.193-0.438,0.321c-0.128,0.128-0.229,0.271-0.301,0.431
                    c-0.073,0.159-0.109,0.313-0.109,0.458c0,0.364,0.104,0.658,0.314,0.882c0.209,0.224,0.469,0.419,0.779,0.588 c0.31,0.169,0.646,0.333,1.012,0.492c0.364,0.159,0.704,0.354,1.019,0.581s0.576,0.513,0.786,0.854
                    c0.209,0.342,0.314,0.781,0.314,1.319C35.184,51.603,35.108,51.956,34.958,52.298z"/>
                  <path d="M51.5,39V13.978c0-0.766-0.092-1.333-0.55-1.792L39.313,0.55C38.964,0.201,38.48,0,37.985,0H8.963 C7.777,0,6.5,0.916,6.5,2.926V39H51.5z M29.5,32c0,0.552-0.447,1-1,1s-1-0.448-1-1v-3c0-0.552,0.447-1,1-1s1,0.448,1,1V32z
                    M37.5,3.391c0-0.458,0.553-0.687,0.877-0.363l10.095,10.095C48.796,13.447,48.567,14,48.109,14H37.5V3.391z M36.5,23v-4 c0-0.551-0.448-1-1-1c-0.553,0-1-0.448-1-1s0.447-1,1-1c1.654,0,3,1.346,3,3v4c0,1.103,0.897,2,2,2c0.553,0,1,0.448,1,1
                    s-0.447,1-1,1c-1.103,0-2,0.897-2,2v4c0,1.654-1.346,3-3,3c-0.553,0-1-0.448-1-1s0.447-1,1-1c0.552,0,1-0.449,1-1v-4 c0-1.2,0.542-2.266,1.382-3C37.042,25.266,36.5,24.2,36.5,23z M28.5,21c0.828,0,1.5,0.672,1.5,1.5S29.328,24,28.5,24
                    S27,23.328,27,22.5S27.672,21,28.5,21z M16.5,25c1.103,0,2-0.897,2-2v-4c0-1.654,1.346-3,3-3c0.553,0,1,0.448,1,1s-0.447,1-1,1 c-0.552,0-1,0.449-1,1v4c0,1.2-0.542,2.266-1.382,3c0.84,0.734,1.382,1.8,1.382,3v4c0,0.551,0.448,1,1,1c0.553,0,1,0.448,1,1
                    s-0.447,1-1,1c-1.654,0-3-1.346-3-3v-4c0-1.103-0.897-2-2-2c-0.553,0-1-0.448-1-1S15.947,25,16.5,25z"/>
                </g>
              </svg>

              <svg className='mt-5 fill-current text-purple-light h-16 w-auto' viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 9.861A2.139 2.139 0 1 0 12 14.139 2.139 2.139 0 1 0 12 9.861zM6.008 16.255l-.472-.12C2.018 15.246 0 13.737 0 11.996s2.018-3.25 5.536-4.139l.472-.119.133.468a23.53 23.53 0 0 0 1.363 3.578l.101.213-.101.213a23.307 23.307 
                    0 0 0-1.363 3.578l-.133.467zM5.317 8.95c-2.674.751-4.315 1.9-4.315 3.046 0 1.145 1.641 2.294 4.315 3.046a24.95 24.95 0 0 1 1.182-3.046A24.752 24.752 0 0 1 5.317 8.95zM17.992 16.255l-.133-.469a23.357 23.357 0 0 0-1.364-3.577l-.101-.213.101-.213a23.42 
                    23.42 0 0 0 1.364-3.578l.133-.468.473.119c3.517.889 5.535 2.398 5.535 4.14s-2.018 3.25-5.535 4.139l-.473.12zm-.491-4.259c.48 1.039.877 2.06 1.182 3.046 2.675-.752 4.315-1.901 4.315-3.046 0-1.146-1.641-2.294-4.315-3.046a24.788 24.788 0 0 1-1.182 
                    3.046zM5.31 8.945l-.133-.467C4.188 4.992 4.488 2.494 6 1.622c1.483-.856 3.864.155 6.359 2.716l.34.349-.34.349a23.552 23.552 0 0 0-2.422 2.967l-.135.193-.235.02a23.657 23.657 0 0 0-3.785.61l-.472.119zm1.896-6.63c-.268 0-.505.058-.705.173-.994.573-1.17 
                    2.565-.485 5.253a25.122 25.122 0 0 1 3.233-.501 24.847 24.847 0 0 1 2.052-2.544c-1.56-1.519-3.037-2.381-4.095-2.381zM16.795 22.677c-.001 0-.001 0 0 0-1.425 0-3.255-1.073-5.154-3.023l-.34-.349.34-.349a23.53 23.53 0 0 0 2.421-2.968l.135-.193.234-.02a23.63 
                    23.63 0 0 0 3.787-.609l.472-.119.134.468c.987 3.484.688 5.983-.824 6.854a2.38 2.38 0 0 1-1.205.308zm-4.096-3.381c1.56 1.519 3.037 2.381 4.095 2.381h.001c.267 0 .505-.058.704-.173.994-.573 1.171-2.566.485-5.254a25.02 25.02 0 0 1-3.234.501 24.674 24.674 
                    0 0 1-2.051 2.545zM18.69 8.945l-.472-.119a23.479 23.479 0 0 0-3.787-.61l-.234-.02-.135-.193a23.414 23.414 0 0 0-2.421-2.967l-.34-.349.34-.349C14.135 1.778 16.515.767 18 1.622c1.512.872 1.812 3.37.824 6.855l-.134.468zM14.75 7.24c1.142.104 2.227.273 
                    3.234.501.686-2.688.509-4.68-.485-5.253-.988-.571-2.845.304-4.8 2.208A24.849 24.849 0 0 1 14.75 7.24zM7.206 22.677A2.38 2.38 0 0 1 6 22.369c-1.512-.871-1.812-3.369-.823-6.854l.132-.468.472.119c1.155.291 2.429.496 3.785.609l.235.02.134.193a23.596 23.596 
                    0 0 0 2.422 2.968l.34.349-.34.349c-1.898 1.95-3.728 3.023-5.151 3.023zm-1.19-6.427c-.686 2.688-.509 4.681.485 5.254.987.563 2.843-.305 4.8-2.208a24.998 24.998 0 0 1-2.052-2.545 24.976 24.976 0 0 1-3.233-.501zM12 16.878c-.823 0-1.669-.036-2.516-.106l-.235-.02-.135-.193a30.388 
                    30.388 0 0 1-1.35-2.122 30.354 30.354 0 0 1-1.166-2.228l-.1-.213.1-.213a30.3 30.3 0 0 1 1.166-2.228c.414-.716.869-1.43 1.35-2.122l.135-.193.235-.02a29.785 29.785 0 0 1 5.033 0l.234.02.134.193a30.006 30.006 0 0 1 2.517 4.35l.101.213-.101.213a29.6 29.6 0 0 1-2.517 
                    4.35l-.134.193-.234.02c-.847.07-1.694.106-2.517.106zm-2.197-1.084c1.48.111 2.914.111 4.395 0a29.006 29.006 0 0 0 2.196-3.798 28.585 28.585 0 0 0-2.197-3.798 29.031 29.031 0 0 0-4.394 0 28.477 28.477 0 0 0-2.197 3.798 29.114 29.114 0 0 0 2.197 3.798z"
                />
              </svg>

              <svg className='mt-5 fill-current text-purple-light h-16 w-auto' viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.51 13.214c.046-.8.438-1.506 1.03-2.006a3.424 3.424 0 0 1 2.212-.79c.85 0 1.631.3 2.211.79.592.5.983 1.206 1.028 2.005.045.823-.285 1.586-.865 2.153a3.389 3.389 0 0 1-2.374.938 3.393 3.393 0 0 1-2.376-.938c-.58-.567-.91-1.33-.865-2.152M7.35 14.831c.006.314.106.922.256 
                    1.398a7.372 7.372 0 0 0 1.593 2.757 8.227 8.227 0 0 0 2.787 2.001 8.947 8.947 0 0 0 3.66.76 8.964 8.964 0 0 0 3.657-.772 8.285 8.285 0 0 0 2.785-2.01 7.428 7.428 0 0 0 1.592-2.762 6.964 6.964 0 0 0 .25-3.074 7.123 7.123 0 0 0-1.016-2.779 7.764 7.764 0 0 0-1.852-2.043h.002L13.566 
                    2.55l-.02-.015c-.492-.378-1.319-.376-1.86.002-.547.382-.609 1.015-.123 1.415l-.001.001 3.126 2.543-9.53.01h-.013c-.788.001-1.545.518-1.695 1.172-.154.665.38 1.217 1.2 1.22V8.9l4.83-.01-8.62 6.617-.034.025c-.813.622-1.075 1.658-.563 2.313.52.667 1.625.668 2.447.004L7.414 14s-.069.52-.063.831zm12.09 1.741c-.97.988-2.326 1.548-3.795 
                    1.55-1.47.004-2.827-.552-3.797-1.538a4.51 4.51 0 0 1-1.036-1.622 4.282 4.282 0 0 1 .282-3.519 4.702 4.702 0 0 1 1.153-1.371c.942-.768 2.141-1.183 3.396-1.185 1.256-.002 2.455.41 3.398 1.175.48.391.87.854 1.152 1.367a4.28 4.28 0 0 1 .522 1.706 4.236 4.236 0 0 1-.239 1.811 4.54 4.54 0 0 1-1.035 1.626"
                />
              </svg>

              <svg className='mt-5 fill-current text-purple-light h-16 w-auto' viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.9 19.2L15.6 12l4.3-7.2L22 12l-2.1 7.2zm-9.5-.7L5 13.2h8.6l4.3 7.2-7.5-1.9zm0-13.1l7.5-1.9-4.3 7.2H4.9c0 .1 5.5-5.3 5.5-5.3zm11-5.4l-9.8 2.5L10.1 5H7.2L0 12l7.2 7h2.9l1.4 2.5 9.8 2.5 2.6-9.5-1.4-2.5L24 9.5 21.4 0z"/>
              </svg>

              <svg className='mt-5 fill-current text-purple-light h-16 w-auto' viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.999 0C5.427 0 .1 5.373.1 12c0 6.628 5.327 12 11.899 12 6.571 0 11.899-5.372 11.899-12 0-6.627-5.328-12-11.9-12zm0 .528c3.038 0 5.895 1.194 8.043 3.36A11.446 11.446 0 0 1 
                  23.374 12c0 3.064-1.183 5.945-3.332 8.112A11.254 11.254 0 0 1 12 23.472a11.253 11.253 0 0 1-8.044-3.36A11.447 11.447 0 0 1 .623 12c0-3.064 1.184-5.945 3.332-8.112A11.252 11.252 0 0 1 12 
                  .528zm-.595 4.223c-1.938.52-3.732 1.516-6.123 4.258-2.392 2.742-1.938 5.006-1.938 5.006s.66-1.558 2.247-3.199c.752-.777 1.314-1.037 1.698-1.038a.598.598 0 0 1 .632.602v5.567c0 .55-.354.669-.68.663-.279-.005-.537-.102-.537-.102 
                  1.63 2.368 5.526 2.7 5.526 2.7l1.711-1.828.04.035 1.568 1.336c2.866-1.703 4.248-4.86 4.248-4.86-1.279 1.353-2.094 1.669-2.578 1.667-.429-.003-.597-.255-.597-.255-.023-.117-.063-1.81-.078-3.505-.014-1.756-.001-3.513.087-3.518.494-.929 
                  2.073-2.802 2.073-2.802-2.948.581-4.556 2.513-4.556 2.513-.475-.374-1.444-.311-1.444-.311.454.25.907.976.907 1.578v5.92s-.99.873-1.752.873c-.451 0-.729-.247-.881-.449a1.182 1.182 0 0 1-.15-.258V8.033a.634.634 
                  0 0 1-.363.123c-.162 0-.33-.082-.444-.32-.086-.18-.141-.45-.141-.842 0-1.35 1.525-2.243 1.525-2.243z"
                />
              </svg>
            </section>

            <section className='flex flex-wrap justify-evenly mx-20 mt-20 font-sans font-semibold mb-10'>
              <div className='bg-cyan-dark w-60 h-64 self-end mx-20 mt-5 rounded-tl-large'>
                <svg className='m-auto mt-5 fill-current text-cyan h-1/3 w-auto' version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 59 59" style={{'enable-background': 'new 0 0 59 59;'}}>
                  <g>
                    <path d="M44.246,27.028H31v-11.5c0-1.93,1.57-3.5,3.5-3.5s3.5,1.57,3.5,3.5v3.5c0,2.757,2.243,5,5,5s5-2.243,5-5v-16
                      c0-0.553-0.448-1-1-1s-1,0.447-1,1v16c0,1.654-1.346,3-3,3s-3-1.346-3-3v-3.5c0-3.032-2.467-5.5-5.5-5.5s-5.5,2.468-5.5,5.5v11.5
                      H14.972C6.716,27.028,0,33.743,0,42c0,7.149,5.209,14.872,12.963,14.972c0.069,0.001,0.14,0.001,0.213,0.001
                      c2.072,0,5.679-0.354,9.378-1.367c4.359-1.194,9.764-1.195,14.107-0.001c3.952,1.087,8.169,1.381,9.596,1.367l0,0
                      C52.386,56.867,59,51.112,59,42C59,33.743,52.381,27.028,44.246,27.028z M46.225,54.971c-1.278,0.021-5.327-0.276-9.033-1.295
                      c-4.669-1.285-10.481-1.284-15.166-0.001c-3.629,0.994-7.12,1.317-9.038,1.296C7.682,54.903,2,49.674,2,42
                      c0-7.152,5.819-12.972,12.972-12.972h29.274C51.278,29.028,57,34.847,57,42C57,48.174,52.67,54.861,46.225,54.971z"/>
                    <path d="M33.631,32.028c0-0.553-0.448-1-1-1H28c-0.552,0-1,0.447-1,1c0,0.553,0.448,1,1,1h4.631 C33.184,33.028,33.631,32.581,33.631,32.028z"/>
                    <path d="M37,38.028c-2.206,0-4,1.794-4,4s1.794,4,4,4s4-1.794,4-4S39.206,38.028,37,38.028z M37,44.028c-1.103,0-2-0.897-2-2 s0.897-2,2-2s2,0.897,2,2S38.103,44.028,37,44.028z"/>
                    <path d="M51,38.028c-2.206,0-4,1.794-4,4s1.794,4,4,4s4-1.794,4-4S53.206,38.028,51,38.028z M51,44.028c-1.103,0-2-0.897-2-2 s0.897-2,2-2s2,0.897,2,2S52.103,44.028,51,44.028z"/>
                    <path d="M44,45.028c-2.206,0-4,1.794-4,4s1.794,4,4,4s4-1.794,4-4S46.206,45.028,44,45.028z M44,51.028c-1.103,0-2-0.897-2-2 s0.897-2,2-2s2,0.897,2,2S45.103,51.028,44,51.028z"/>
                    <path d="M44,39.028c2.206,0,4-1.794,4-4s-1.794-4-4-4s-4,1.794-4,4S41.794,39.028,44,39.028z M44,33.028c1.103,0,2,0.897,2,2 s-0.897,2-2,2s-2-0.897-2-2S42.897,33.028,44,33.028z"/>
                    <path d="M23,38.028h-3v-3c0-0.553-0.448-1-1-1h-6c-0.552,0-1,0.447-1,1v3H9c-0.552,0-1,0.447-1,1v6c0,0.553,0.448,1,1,1h3v3 c0,0.553,0.448,1,1,1h6c0.552,0,1-0.447,1-1v-3h3c0.552,0,1-0.447,1-1v-6C24,38.474,23.552,38.028,23,38.028z M22,44.028h-3 c-0.552,0-1,0.447-1,1v3h-4v-3c0-0.553-0.448-1-1-1h-3v-4h3c0.552,0,1-0.447,1-1v-3h4v3c0,0.553,0.448,1,1,1h3V44.028z"/>
                  </g>
                </svg>
                <h3 className='mt-5 text-center'><Link to='/portfolio/gameart'>Game Art</Link></h3>
                <p className='text-xs m-2 ml-5 pt-2 font-overpass font-light text-purple-light'>Character and environment designs. Modelling, rigging and rendering game models.</p>
              </div>

              <div className='bg-cyan-dark w-60 h-64 self-end mx-20 mt-5 rounded-tr-large'>
                <svg className='m-auto mt-5 fill-current text-cyan h-1/3 w-auto' version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 457.478 457.478" enable-background="new 0 0 457.478 457.478">
                  <g>
                    <path d="m423.173,110.709l-189.434-109.369c-3.094-1.786-6.906-1.786-10-3.33067e-15l-189.433,109.369c-3.094,1.786-5,5.087-5,8.66v218.739c0,3.573 1.906,6.874 5,8.66l189.434,109.37c1.547,0.893 3.273,1.34 5,1.34s3.453-0.447 5-1.34l189.434-109.37c3.094-1.786 5-5.087 5-8.66v-218.739c-0.001-3.572-1.908-6.874-5.001-8.66zm-15,206.884l-6.459-3.729c-4.781-2.762-10.898-1.123-13.66,3.66-2.762,4.783-1.123,10.899 3.66,13.661l9.226,5.327-162.201,93.647v-188.638c0.128,0.005 0.255,0.024 0.383,0.024 3.456,0 6.817-1.793 8.67-5.001 1.421-2.46 1.669-5.271 0.932-7.799l159.449-92.058v180.906zm-338.747-.069c-2.761-4.782-8.874-6.422-13.66-3.66l-6.46,3.729v-180.905l159.449,92.058c-0.737,2.527-0.488,5.338 0.932,7.798 1.853,3.208 5.213,5.001 8.67,5.001 0.127,0 0.255-0.02 0.383-0.024v188.637l-162.202-93.647 9.227-5.327c4.784-2.761 6.422-8.877 3.661-13.66zm159.314-275.941c5.522,2.84217e-14 10-4.477 10-10v-4.263l159.431,92.048-159.634,92.165c-0.931-4.559-4.964-7.989-9.797-7.989-4.834,0-8.867,3.43-9.798,7.99l-159.635-92.166 159.433-92.048v4.264c0,5.522 4.478,9.999 10,9.999z"/>
                    <path d="m304.003,280.544l17.839,10.3c1.575,0.909 3.294,1.341 4.99,1.341 3.456,0 6.817-1.793 8.67-5.001 2.762-4.783 1.123-10.898-3.66-13.66l-17.839-10.3c-4.784-2.761-10.898-1.123-13.66,3.66s-1.123,10.898 3.66,13.66z"/>
                    <path d="m260.147,255.224l17.84,10.299c1.575,0.91 3.294,1.341 4.99,1.341 3.456,0 6.818-1.793 8.67-5.001 2.762-4.783 1.123-10.899-3.66-13.66l-17.84-10.299c-4.784-2.763-10.899-1.123-13.66,3.66-2.762,4.783-1.123,10.899 3.66,13.66z"/>
                    <path d="m347.857,305.864l17.84,10.3c1.575,0.909 3.294,1.341 4.99,1.341 3.456,0 6.818-1.793 8.67-5.001 2.762-4.783 1.123-10.899-3.66-13.66l-17.84-10.3c-4.784-2.762-10.9-1.123-13.66,3.66-2.762,4.783-1.123,10.899 3.66,13.66z"/>
                    <path d="m174.501,266.865c1.696,0 3.416-0.432 4.99-1.341l17.84-10.3c4.783-2.761 6.422-8.877 3.66-13.66-2.761-4.783-8.877-6.421-13.66-3.66l-17.84,10.3c-4.783,2.761-6.422,8.877-3.66,13.66 1.852,3.209 5.213,5.001 8.67,5.001z"/>
                    <path d="m86.791,317.505c1.696,0 3.415-0.432 4.99-1.341l17.84-10.299c4.783-2.761 6.422-8.877 3.66-13.66-2.76-4.782-8.874-6.421-13.66-3.66l-17.84,10.299c-4.783,2.761-6.422,8.877-3.66,13.66 1.852,3.208 5.213,5.001 8.67,5.001z"/>
                    <path d="m130.646,292.185c1.696,0 3.416-0.432 4.99-1.341l17.839-10.3c4.783-2.762 6.422-8.877 3.66-13.66-2.761-4.783-8.877-6.421-13.66-3.66l-17.839,10.3c-4.783,2.762-6.422,8.877-3.66,13.66 1.853,3.208 5.213,5.001 8.67,5.001z"/>
                    <path d="M218.74,82.223c0,5.523,4.478,10,10,10s10-4.477,10-10V61.624c0-5.523-4.478-10-10-10s-10,4.477-10,10V82.223z"/>
                    <path d="m228.74,102.264c-5.522,0-10,4.477-10,10v20.599c0,5.523 4.478,10 10,10s10-4.477 10-10v-20.599c0-5.523-4.477-10-10-10z"/>
                    <path d="m228.74,152.904c-5.522,0-10,4.477-10,10v20.599c0,5.523 4.478,10 10,10s10-4.477 10-10v-20.599c0-5.523-4.477-10-10-10z"/>
                  </g>
                </svg>
                <h3 className='mt-5 text-center'><Link to='/portfolio/3dart'>3D modeling</Link></h3>
                <p className='text-xs m-2 ml-5 pt-2 font-overpass font-light text-purple-light'>Detailed 3D renders. Modelling and rendering objects and environments</p>
              </div>

              <div className='bg-cyan-dark w-60 h-64 self-end mx-20 mt-5 rounded-br-large'>
                <svg className='m-auto mt-5 fill-current text-cyan h-1/3 w-auto' version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 511 511" enable-background="new 0 0 511 511">
                  <g>
                    <path d="m487.5,16h-464c-12.958,0-23.5,10.542-23.5,23.5v432c0,12.958 10.542,23.5 23.5,23.5h464c12.958,0 23.5-10.542 23.5-23.5v-432c0-12.958-10.542-23.5-23.5-23.5zm-464,15h464c4.687,0 8.5,3.813 8.5,8.5v40.5h-481v-40.5c0-4.687 3.813-8.5 8.5-8.5zm464,449h-464c-4.687,0-8.5-3.813-8.5-8.5v-376.5h481v376.5c0,4.687-3.813,8.5-8.5,8.5z"/>
                    <path d="m39.5,63c1.97,0 3.91-0.8 5.3-2.2 1.4-1.39 2.2-3.33 2.2-5.3 0-1.97-0.8-3.91-2.2-5.3-1.39-1.4-3.32-2.2-5.3-2.2-1.97,0-3.91,0.8-5.3,2.2-1.4,1.39-2.2,3.33-2.2,5.3 0,1.97 0.8,3.91 2.2,5.3 1.39,1.399 3.33,2.2 5.3,2.2z"/>
                    <path d="m63.5,63c1.97,0 3.91-0.8 5.3-2.2 1.4-1.39 2.2-3.33 2.2-5.3 0-1.97-0.8-3.91-2.2-5.3-1.39-1.4-3.32-2.2-5.3-2.2-1.97,0-3.91,0.8-5.3,2.2-1.4,1.39-2.2,3.33-2.2,5.3 0,1.97 0.8,3.91 2.2,5.3 1.39,1.399 3.33,2.2 5.3,2.2z"/>
                    <path d="m87.5,63c1.97,0 3.91-0.8 5.3-2.2 1.4-1.39 2.2-3.33 2.2-5.3 0-1.97-0.8-3.91-2.2-5.3-1.39-1.4-3.32-2.2-5.3-2.2-1.97,0-3.91,0.8-5.3,2.2-1.4,1.39-2.2,3.33-2.2,5.3 0,1.97 0.8,3.91 2.2,5.3 1.39,1.399 3.33,2.2 5.3,2.2z"/>
                    <path d="m215,271.5c0-12.958-10.542-23.5-23.5-23.5-10.336,0-19.128,6.71-22.266,16h-43.469c-1.096-3.244-2.879-6.171-5.179-8.609l11.051-16.577c1.064,0.11 2.135,0.186 3.218,0.186h48.645c17.369,0 31.5-14.131 31.5-31.5v-56c0-4.142-3.358-7.5-7.5-7.5h-123.477l-3.64-7.148c-2.556-5.383-8.033-8.852-14.002-8.852h-10.881c-4.142,0-7.5,3.358-7.5,7.5s3.358,7.5 7.5,7.5h10.881c0.194,0 0.373,0.114 0.454,0.29 0.041,0.088 0.083,0.175 0.127,0.261l39.358,77.289c2.438,5.214 6.23,9.539 10.828,12.668l-9.867,14.8c-1.232-0.2-2.494-0.308-3.781-0.308-12.958,0-23.5,10.542-23.5,23.5s10.542,23.5 23.5,23.5c10.336,0 19.128-6.71 22.266-16h43.469c3.138,9.29 11.93,16 22.266,16 12.957,0 23.499-10.542 23.499-23.5zm-123.338-112.5h108.338v48.5c0,9.098-7.402,16.5-16.5,16.5h-48.644c-6.413,0-12.294-3.763-14.981-9.586-0.041-0.087-0.083-0.174-0.126-0.26l-28.087-55.154zm11.838,121c-4.687,0-8.5-3.813-8.5-8.5s3.813-8.5 8.5-8.5 8.5,3.813 8.5,8.5-3.813,8.5-8.5,8.5zm88,0c-4.687,0-8.5-3.813-8.5-8.5s3.813-8.5 8.5-8.5 8.5,3.813 8.5,8.5-3.813,8.5-8.5,8.5z"/>
                    <path d="m303.5,320h-96c-8.547,0-15.5,6.953-15.5,15.5v48c0,8.547 6.953,15.5 15.5,15.5h96c8.547,0 15.5-6.953 15.5-15.5v-48c0-8.547-6.953-15.5-15.5-15.5zm.5,63.5c0,0.276-0.224,0.5-0.5,0.5h-96c-0.276,0-0.5-0.224-0.5-0.5v-48c0-0.276 0.224-0.5 0.5-0.5h96c0.276,0 0.5,0.224 0.5,0.5v48z"/>
                    <path d="m159.5,320h-96c-8.547,0-15.5,6.953-15.5,15.5v48c0,8.547 6.953,15.5 15.5,15.5h96c8.547,0 15.5-6.953 15.5-15.5v-48c0-8.547-6.953-15.5-15.5-15.5zm.5,63.5c0,0.276-0.224,0.5-0.5,0.5h-96c-0.276,0-0.5-0.224-0.5-0.5v-48c0-0.276 0.224-0.5 0.5-0.5h96c0.276,0 0.5,0.224 0.5,0.5v48z"/>
                    <path d="m447.5,320h-96c-8.547,0-15.5,6.953-15.5,15.5v48c0,8.547 6.953,15.5 15.5,15.5h96c8.547,0 15.5-6.953 15.5-15.5v-48c0-8.547-6.953-15.5-15.5-15.5zm.5,63.5c0,0.276-0.224,0.5-0.5,0.5h-96c-0.276,0-0.5-0.224-0.5-0.5v-48c0-0.276 0.224-0.5 0.5-0.5h96c0.276,0 0.5,0.224 0.5,0.5v48z"/>
                    <path d="m167.5,416h-112c-4.142,0-7.5,3.358-7.5,7.5s3.358,7.5 7.5,7.5h112c4.142,0 7.5-3.358 7.5-7.5s-3.358-7.5-7.5-7.5z"/>
                    <path d="m311.5,416h-112c-4.142,0-7.5,3.358-7.5,7.5s3.358,7.5 7.5,7.5h112c4.142,0 7.5-3.358 7.5-7.5s-3.358-7.5-7.5-7.5z"/>
                    <path d="m455.5,416h-112c-4.142,0-7.5,3.358-7.5,7.5s3.358,7.5 7.5,7.5h112c4.142,0 7.5-3.358 7.5-7.5s-3.358-7.5-7.5-7.5z"/>
                    <path d="m399.5,448h-56c-4.142,0-7.5,3.358-7.5,7.5s3.358,7.5 7.5,7.5h56c4.142,0 7.5-3.358 7.5-7.5s-3.358-7.5-7.5-7.5z"/>
                    <path d="m255.5,448h-56c-4.142,0-7.5,3.358-7.5,7.5s3.358,7.5 7.5,7.5h56c4.142,0 7.5-3.358 7.5-7.5s-3.358-7.5-7.5-7.5z"/>
                    <path d="m111.5,448h-56c-4.142,0-7.5,3.358-7.5,7.5s3.358,7.5 7.5,7.5h56c4.142,0 7.5-3.358 7.5-7.5s-3.358-7.5-7.5-7.5z"/>
                    <path d="m263.5,143h72c4.142,0 7.5-3.358 7.5-7.5s-3.358-7.5-7.5-7.5h-72c-4.142,0-7.5,3.358-7.5,7.5s3.358,7.5 7.5,7.5z"/>
                    <path d="m455.5,160h-192c-4.142,0-7.5,3.358-7.5,7.5s3.358,7.5 7.5,7.5h192c4.142,0 7.5-3.358 7.5-7.5s-3.358-7.5-7.5-7.5z"/>
                    <path d="m455.5,208h-152c-4.142,0-7.5,3.358-7.5,7.5s3.358,7.5 7.5,7.5h152c4.142,0 7.5-3.358 7.5-7.5s-3.358-7.5-7.5-7.5z"/>
                    <path d="m455.5,240h-152c-4.142,0-7.5,3.358-7.5,7.5s3.358,7.5 7.5,7.5h152c4.142,0 7.5-3.358 7.5-7.5s-3.358-7.5-7.5-7.5z"/>
                    <path d="m455.5,272h-152c-4.142,0-7.5,3.358-7.5,7.5s3.358,7.5 7.5,7.5h152c4.142,0 7.5-3.358 7.5-7.5s-3.358-7.5-7.5-7.5z"/>
                    <path d="m263.5,223h8c4.142,0 7.5-3.358 7.5-7.5s-3.358-7.5-7.5-7.5h-8c-4.142,0-7.5,3.358-7.5,7.5s3.358,7.5 7.5,7.5z"/>
                    <path d="m263.5,255h8c4.142,0 7.5-3.358 7.5-7.5s-3.358-7.5-7.5-7.5h-8c-4.142,0-7.5,3.358-7.5,7.5s3.358,7.5 7.5,7.5z"/>
                    <path d="m263.5,287h8c4.142,0 7.5-3.358 7.5-7.5s-3.358-7.5-7.5-7.5h-8c-4.142,0-7.5,3.358-7.5,7.5s3.358,7.5 7.5,7.5z"/>
                  </g>
                </svg>
                <h3 className='mt-5 text-center'><Link to='/portfolio/frontend'>Front-End</Link></h3>
                <p className='text-xs m-2 ml-5 pt-2 font-overpass font-light text-purple-light'>Web-layout design and styling. Event-based programming and customized routing</p>
              </div>

              <div className='bg-cyan-dark w-60 h-64 self-end mx-20 mt-5 rounded-tl-large'>
                <svg className='m-auto mt-5 fill-current text-cyan h-1/3 w-auto' version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 496 496" style={{'enable-background':'new 0 0 496 496;'}}>
                  <g>
                      <path d="M0,0v400h496V0H0z M480,384H16V16h464V384z"/>
                      <path d="M312,32H32v176h280V32z M296,192H48V48h248V192z"/>
                      <rect x="328" y="32" width="136" height="16"/>
                      <rect x="328" y="64" width="136" height="16"/>
                      <rect x="328" y="96" width="136" height="16"/>
                      <rect x="328" y="128" width="136" height="16"/>
                      <rect x="328" y="160" width="136" height="16"/>
                      <rect x="328" y="192" width="136" height="16"/>
                      <path d="M168,224H32v144h136V224z M152,352H48V240h104V352z"/>
                      <path d="M184,368h128V224H184V368z M200,240h96v112h-96V240z"/>
                      <path d="M464,224H328v144h136V224z M448,352H344V240h104V352z"/>
                      <path d="M168,176c30.88,0,56-25.12,56-56s-25.12-56-56-56s-56,25.12-56,56S137.12,176,168,176z M168,80c22.056,0,40,17.944,40,40 c0,22.056-17.944,40-40,40c-22.056,0-40-17.944-40-40C128,97.944,145.944,80,168,80z"/>
                      <path d="M456,416H77.872l-70,40l70,40H456c22.056,0,40-17.944,40-40C496,433.944,478.056,416,456,416z M80,478.784L40.128,456 L80,433.216V478.784z M384,480H96v-48h288V480z M416,480h-16v-48h16V480z M456,480h-24v-48h24c13.232,0,24,10.768,24,24 S469.232,480,456,480z"/>
                  </g>
                </svg>
                <h3 className='mt-5 text-center'><Link to='/portfolio/uxdesign'>UI/UX Design</Link></h3>
                <p className='text-xs m-2 ml-5 pt-2 font-overpass font-light text-purple-light'>Design based on user experience. Prototyping and testing new designs</p>
              </div>
            </section>
          </div>
        )}/>

        {/* About */}
        <Route path='/about' render={ props => (
          <About />
        )}/>

        {/* Portfolio */}
        <Route exact path='/portfolio' render={ props => (
          <Portfolio />
        )}/>

        {/* Contact */}
        <Route path='/contact' render={ props => (
          <Contact />
        )}/>

        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;
