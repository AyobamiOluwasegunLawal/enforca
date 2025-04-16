import React , {useEffect} from 'react'
import logo from "../assets/enforcaImage.png"
import { GiHamburgerMenu } from "react-icons/gi";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import Button from "../components/Button.jsx";
import {Link, NavLink} from "react-router";
import { RxCross2 } from "react-icons/rx";
import {links, services} from "../constants/data.jsx";
import { IoIosArrowUp } from "react-icons/io";
import {motion} from "framer-motion";
import { IoIosArrowDown } from "react-icons/io";

const Header = () => {
    const [navBg, setNavBg] = React.useState(false)
    const [isSideBarOpen, setIsSideBarOpen] = React.useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);


    const handleNavBg = () => {
        if (window.scrollY >= 90) {
            setNavBg(true)
        } else{
            setNavBg(false);
        }
    }

    const handleDropdown = () => {
        setIsDropdownOpen(prev => !prev);
    }

    const handleSidebarOpen = () => {
        setIsSideBarOpen(prev => !prev);
        console.log(isSideBarOpen)
    }

    useEffect(() => {
        window.addEventListener("scroll", handleNavBg);

        return () => {
            window.removeEventListener("scroll", handleNavBg);
        };
    }, []);

    return (
        <header className={`w-full ${navBg ? 'bg-white transition shadow-xl ease-out' : 'bg-transparent '} z-2 fixed`}>
            <nav className={'max-w-[1400px] mx-auto py-5'}>
               <div className={'flex items-center justify-between px-4 sm:px-20 md:px-10'}>
                   <div className={'flex items-center gap-10 '}>
                       <Link to={'/'}>
                           <img src={logo} alt={'logo'} className={'w-32 sm:w-36 md:w-40'}/>
                       </Link>

                       <ul className={'text-black hidden lg:flex gap-10 font-semibold'}>

                           {
                               links.map((link, idx) => (
                                  <div key={idx}>
                                      <NavLink to={link.link}>{link.title}</NavLink>
                                  </div>
                               ))
                           }

                       </ul>
                   </div>

                   <div className={'xl:flex hidden xl:gap-10'}>
                       <div className={'items-center flex gap-10'}>
                           <FaLinkedin className={'text-primary'}/>
                           <FaGithub className={'text-primary'}/>
                       </div>


                       <div className={'relative'}>
                              <button onClick={handleDropdown} className={'flex items-center gap-2 text-black'}>
                                  <p>Our Services</p>
                              {isDropdownOpen ? <IoIosArrowDown className={'text-black'}/> : <IoIosArrowUp className={'text-black'}/> }
                              </button>

                           {
                               isDropdownOpen && (
                                   <motion.div initial={{height: 0}} transition={{duration: .3}} animate={{height: 200}}  className={'text-black w-52 flex flex-col absolute -inset-x-16 inset-0 mt-10 bg-gray-100 h-50 p-5 space-y-3'}>
                                       {
                                           services.map((link, idx) => (
                                               <NavLink onClick={() => setIsDropdownOpen(false)} key={idx} to={link.link}>{link.title}</NavLink>
                                           ))
                                       }
                                   </motion.div>

                               )}
                       </div>




                   </div>

                   <div className={'flex gap-4 xl:hidden'}>
                       <div onClick={handleSidebarOpen} className={'border border-gray-400 px-2 rounded-md cursor-pointer md:hidden'}>
                           <GiHamburgerMenu className={'text-black size-10 p-1.5'}/>
                       </div>
                   </div>
               </div>
            </nav>

            {isSideBarOpen ?  (
                <motion.div initial={{width: 0}} transition={{duration: .3}} animate={{width: 200}} className={' absolute top-0 left-0  max-xl:w-[90%] max-sm:w-[60%] h-screen bg-white z-50 gap-10 md:hidden shadow-xl pt-3 px-5'}>
                    <div className={'right-0 mb-5'}>
                        <RxCross2 className={'size-6 text-black font-bold'} onClick={ () => setIsSideBarOpen(false)}/>
                    </div>
                    <ul className={'text-black flex flex-col gap-5 font-semibold mb-5'}>
                        {
                            links.map(link => (
                                <div  key={link.id}>
                                    <NavLink onClick={() => setIsSideBarOpen(false)} to={link.link}>{link.title}</NavLink>


                                </div>
                            ))
                        }

                        {
                            services.map(link => (
                                <NavLink onClick={() => setIsSideBarOpen(false)} to={link.link}>{link.title}</NavLink>
                            ))
                        }
                    </ul>

                </motion.div>
            ) : null}
        </header>
    )
}
export default Header
