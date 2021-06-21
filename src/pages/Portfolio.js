import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Gameart from './components/Gameart';
import ThreeDArt from './components/ThreeDArt';
import Webdev from './components/Webdev';
import UXDesign from './components/UXDesign';

function Portfolio() {
    return (
      <Router>
        <div>
            <h1 className='text-4xl font-overpass m-auto mt-16 text-center'>My Work</h1>
            <h4 className='m-auto max-w-1/3 pt-5 font-overpass font-light text-purple-light'>Below you will find some of my previous work in both college and personal projects. Select one of the categories to view all related projects.</h4>

            <section className='flex flex-wrap justify-evenly mx-20 mt-20 font-sans font-semibold mb-10'>
              <div className='bg-cyan-dark w-60 h-64 self-end mx-20 mt-5 rounded-tl-large'>
                <Link to='/gameart'>
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
                  <h3 className='mt-5 text-center'>Game Art</h3>
                  <p className='text-xs m-2 ml-5 pt-2 font-overpass font-light text-purple-light'>Character and environment designs. Modelling, rigging and rendering game models.</p>
                </Link>
              </div>

              <div className='bg-cyan-dark w-60 h-64 self-end mx-20 mt-5 rounded-tr-large'>
                <Link to='/3dart'>
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
                  <h3 className='mt-5 text-center'>3D modeling</h3>
                  <p className='text-xs m-2 ml-5 pt-2 font-overpass font-light text-purple-light'>Detailed 3D renders. Modelling and rendering objects and environments</p>
                </Link>
              </div>

              <div className='bg-cyan-dark w-60 h-64 self-end mx-20 mt-5 rounded-br-large'>
                <Link to='/webdev'>
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
                  <h3 className='mt-5 text-center'>Front-End</h3>
                  <p className='text-xs m-2 ml-5 pt-2 font-overpass font-light text-purple-light'>Web-layout design and styling. Event-based programming and customized routing</p>
                </Link>
              </div>

              <div className='bg-cyan-dark w-60 h-64 self-end mx-20 mt-5 rounded-tl-large'>
                <Link to='/uxdesign'>
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
                  <h3 className='mt-5 text-center'>UI/UX Design</h3>
                  <p className='text-xs m-2 ml-5 pt-2 font-overpass font-light text-purple-light'>Design based on user experience. Prototyping and testing new designs</p>
                </Link>
              </div>
            </section>

            <section>
                <Route path='/gameart' render={ props => (
                  <Gameart />
                )}/>

                <Route path='/3dart' render={ props => (
                  <ThreeDArt />
                )}/>

               <Route path='/webdev' render={ props => (
                 <Webdev />
               )}/>
                
                <Route path='/uxdesign' render={ props => (
                  <UXDesign />
                )}/>  
            </section>
        </div>
      </Router> 
    );
  }
  
  export default Portfolio;