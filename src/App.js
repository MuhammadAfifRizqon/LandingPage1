import IconLaslesVpn from "./assets/Logo.png";
import Afif1 from "./assets/afif_1.png";

import Ilustration2 from "./assets/Illustration_2.png";
import Check from "./assets/Check.png";

import Facebook from "./assets/sosmed/Facebook.png";
import Instagram from "./assets/sosmed/Instagram.png";
import Twitter from "./assets/sosmed/Twitter.png";



function App() {
  
  const about = [
    "PHP",
    "C++",
    "Javascript",
    "HTML",
    "SQL",
    "Back End : Node JS (Express Js) ",
    "Front End : React JS ",
    "Css : Tailwinds"
  ];

  return (
    <div className="bg-white">
      
    <nav class="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
      <div class="container flex flex-wrap justify-between items-center mx-auto">
        <a href="https://flowbite.com/" class="flex items-center">
            <img src="https://flowbite.com/docs/images/logo.svg" class="mr-3 h-6 sm:h-9" alt="Flowbite Logo"></img>
            <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">M Afif R</span>
        </a>
        <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
          <span class="sr-only">Open main menu</span>
          <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
        </button>
        <div class="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul class="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <a href="#" class="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" aria-current="page">Home</a>
            </li>
            <li>
              <a href="#" class="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About</a>
            </li>
            <li>
              <a href="#" class="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    
          <main>
            <div className="container max-w-5xl mx-auto  grid grid-cols-2 py-24">
              <div>
                <h1 className="font-bold text-4xl pb-4">
                  Hello !! My Name is Muhammad Afif Rizqon
                </h1>
                <div className="font-normal text-2xl pb-12">
                  Saya adalah seorang IT Entusiast.
                  <br/> Saya menguasai
                  bahasa pemrogaman PHP, C++, HTML, CSS, Javascript
                  dan database MySQL. 
                </div>
              </div>
              <div>
                <img src={Afif1} alt="ilustration-laslesvpn" />
              </div>
            </div>
              <div className="container max-w-5xl mx-auto grid grid-cols-2 py-24  items-center ">
                <img src={Ilustration2} alt={"about-lasles-vpn"} />
              <div className="px-16 space-y-4 ">
                <div className="font-Bold text-3xl">
                I made this with 
                </div>
                {about.map((val, index) => {
                  return (
                    <div className="flex items-center space-x-3" key={index}>
                      <img
                        src={Check}
                        alt="about-check-laslesvpn"
                        className="w-6 h-6"
                      />
                      <div className="text-2xl">{val}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </main>
          <footer className="bg-gray-100 py-20">
            <div className="container mx-auto max-w-5xl flex flex-row  space-x-24">
              <div className="flex-1 space-y-5">
                {/* <img src={IconLaslesVpn} alt="logo lasles vpn" className="w-36" /> */}
                <div>
                  My Contact and Social Media
                </div>
                <div className="flex flex-row">
                  <img src={Facebook} alt="facebook icon" className="w-16 h-16" />
                  <div>
                    <ul>
                      <li><a href="https://www.facebook.com/bocahkalemafif/">Facebook</a></li>
                    </ul>
                  </div>
                  <img src={Twitter} alt="twitter icon" className="w-16 h-16" />
                  <div>
                    <ul>
                      <li><a href="https://twitter.com/AfifGreatagain">Twitter</a></li>
                    </ul>
                  </div>
                  <img src={Instagram} alt="IG icon" className="w-16 h-16" />
                  <div>
                    <ul>
                      <li><a href="https://www.instagram.com/afifrizqon36/?hl=en">Instagram</a></li>
                    </ul>
                  </div>
                </div>
                <div>©2022</div>
              </div>
            </div>
          </footer>
        </div>
      );
    }
    
    export default App;
    