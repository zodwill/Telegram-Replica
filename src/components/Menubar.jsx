import { useEffect, useRef, useState } from 'react';
import { GrGroup } from "react-icons/gr";
import { IoIosArrowDown } from "react-icons/io";
import ToggleTheme from './ToggleTheme';
import { HiBars3 } from 'react-icons/hi2';
import { LuBookmark, LuSettings } from 'react-icons/lu';
import { GrChannel } from "react-icons/gr";
import { IoCallOutline } from "react-icons/io5";
import { MdOutlinePersonOutline } from 'react-icons/md';
import { RxMoon } from 'react-icons/rx';


const Menubar = () => {
    const [showMenu, setShowMenu] = useState(false);
    const menubarRef = useRef(null);

    const toggleMenu = () => {
        setShowMenu(prevState => !prevState);
    };

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (menubarRef.current && !menubarRef.current.contains(e.target)) {
                setShowMenu(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [menubarRef]);

    return (
        <div className={`py-2 pr-3 h-14 bg-sideBG`}>
            {/* Sandwich Menu Icon */}
            <div className="flex items-center gap-2">
                <div ref={menubarRef}>
                    <HiBars3 className="w-11 h-11 text-2xl cursor-pointer rounded-full p-2 hover:bg-[#2b2b2b75] transition-all duration-500 flex-1" onClick={toggleMenu} />
                    {/* Dropdown Menu */}
                    {showMenu && (
                        <div className={`absolute top-0 left- w-80 h-100  mt-1 bg-sideBG shadow-sm shadow-gray-600 rounded-lg select-none transition-all duration-300 transform origin-top-left ${showMenu ? 'animate-slide-in' : 'animate-slide-out'
                            }`} style={{  minHeight: "700px" }}>
                            <br />
                            <div>
                                <div
                                    className={`rounded-full aspect-square w-14 flex items-center justify-center font-bold text-white text-2xl ml-5 mb-5`}
                                    style={{ backgroundColor: "red", boxShadow: `0 4px 4px -4px ` }}
                                >
                                    LY
                                </div>
                                <div className='ml-5 cursor-pointer ' style={{ display:"flex", alignItems:"stretch" }}>
                                    <span style={{ flexGrow:"9" }} >Lalit Yadav </span> <span style={{ flexGrow:"1" }} > <IoIosArrowDown /> </span>
                                </div>
                                <div className='ml-5 mb-5 cursor-pointer ' style={{ color:"blue",  fontSize:"13px" }} >
                                    <span> Set Emoji Status </span>
                                </div>

                            </div>
                            <hr />
                            <ul className='p-1 space-y-1'>
                                
                                <li className="py-1 px-4 hover:bg-[#e5e5e6b9] transition-all duration-700 cursor-pointer rounded-lg flex items-center gap-6"><GrGroup /> New Group</li>
                                <li className="py-1 px-4 hover:bg-[#e5e5e6b9] transition-all duration-700 cursor-pointer rounded-lg flex items-center gap-6"><GrChannel />Channel</li>
                                <li className="py-1 px-4 hover:bg-[#e5e5e6b9] transition-all duration-700 cursor-pointer rounded-lg flex items-center gap-6"><MdOutlinePersonOutline />Contacts</li>
                                <li className="py-1 px-4 hover:bg-[#e5e5e6b9] transition-all duration-700 cursor-pointer rounded-lg flex items-center gap-6"><IoCallOutline />Calls</li>
                                <li className="py-1 px-4 hover:bg-[#e5e5e6b9] transition-all duration-700 cursor-pointer rounded-lg flex items-center gap-6"><LuBookmark />Saved Messages</li>
                               
                                <li className="py-1 px-4 hover:bg-[#e5e5e6b9] transition-all duration-700 cursor-pointer rounded-lg flex items-center gap-6"><LuSettings />Settings</li>
                                <li className="py-1 px-4 hover:bg-[#e5e5e6b9] transition-all duration-700 flex items-center justify-between gap-3 rounded-lg"><span className="flex items-center gap-6"><RxMoon />Night Mode</span> <ToggleTheme /></li>
                            </ul>
                        </div>
                    )}
                </div>

                {/* Search Bar */}
                <div className=" w-full flex-1 " >
                    <input
                        type="text"
                        placeholder="Search"
                        className={`bg-gray w-full bg-[#e5e5e671] rounded-full py-2 px-5 pl-8 focus:outline-none focus:border-none focus:ring-1 focus:ring-telegramChange `}
                    />

                </div>
            </div>
        </div>
    );
};

export default Menubar;
