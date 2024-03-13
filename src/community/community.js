import React from "react";
import { CiSearch } from "react-icons/ci";
import { RxDashboard } from "react-icons/rx";
import { LuUser2 } from "react-icons/lu";
import { BiMessageAltDetail } from "react-icons/bi";
import { CiMicrophoneOn } from "react-icons/ci";
import { RiGroupLine } from "react-icons/ri";
import { IoHeartOutline } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";
import { IoLogOutOutline } from "react-icons/io5";
import { HiMenuAlt2 } from "react-icons/hi";
import Logo from '../images/vector.svg';
import User from '../images/user.png'
const icons = [
    {
        title:'Search',
        icon:CiSearch
    },
    {
        title:'Dashboard',
        icon:RxDashboard
    },
    {
        title:'User',
        icon:LuUser2
    },
    {
        title:'Message',
        icon: BiMessageAltDetail
    },
    {
        title:'Podcast',
        icon:CiMicrophoneOn
    },
    {
        title:'Community',
        icon:RiGroupLine
    },
    {
        title:'Saved',
        icon: IoHeartOutline
    },
    {
        title:'Settings',
        icon:IoSettingsOutline
    }
]
const community = () => {
    return(
        <div className="w-full h-screen flex justify-start items-start relative bg-slate-100/100 text-black">
            <div className="w-full h-full flex relative">
                <section className="w-64 fixed flex flex-col h-[87%] bg-white mt-24 ml-3 rounded-xl ">
                    <div className="flex flex-row">
                        <img src={Logo} alt='logo' className="h-16 p-5" />
                        <button>
                            <HiMenuAlt2 className=" w-8 h-8 ml-12"/>
                        </button>

                    </div>
                        {
                            icons.map((item) => (
                                <button
                                className="text-black flex items-start justify-start space-x-4 rounded-xl p-3 hover:bg-theme hover:w-64"
                                href={`./${item.title.toLowerCase()}`}
                                key={item.title} 
                                >
                                <div>
                                    <item.icon className="w-8 h-6"/>
                                </div>
                                <div className="text-md font-medium">
                                    {item.title}
                                </div>
                                </button>
                            ))
                        }
                    <div className="bg-user w-full h-16 float-end mt-auto rounded-sm flex flex-row space-x-5 p-2">
                        <button>
                            <img src={User} alt='' className="rounded-full"/>
                        </button>
                        <div className="flex flex-row space-x-7">
                            <div className="flex flex-col">
                                <div className="text-md font-medium">Kamla Devi</div>
                                <div className="text-sm font-semibold">LOGOUT</div>    
                            </div>
                            <button>
                                <IoLogOutOutline className="w-8 h-8 mt-2"/>
                            </button>
                        </div>
                    </div>
                </section>
                <main>

                </main>
                <section>

                </section>

            </div>
        </div>
    );
}

export default community;