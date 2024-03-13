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
import User from '../images/user.png';
import { FaRegComment } from "react-icons/fa";
import { FcLikePlaceholder } from "react-icons/fc"; //before like 
import { FcLike } from "react-icons/fc"; //after like

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

const aloo = [
    {
        title:"aloo",
        about:"empowering women"
    },
    {
        title:"aloo bada",
        about:"empowering women"
    },
    {
        title:"aloo bada",
        about:"empowering women"
    },
    {
        title:"aloo bada",
        about:"empowering women"
    },
    {
        title:"aloo bada",
        about:"empowering women"
    },
    {
        title:"aloo bada",
        about:"empowering women"
    },
    {
        title:"aloo bada",
        about:"empowering women"
    },
    {
        title:"aloo bada",
        about:"empowering women"
    },
    {
        title:"aloo bada",
        about:"empowering women"
    }
]

const posts = [
    {
        name:'aloo',
        post:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
        like:10,
        comments:'bai'
    },
    {
        name:'aloo',
        post:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
        like:10,
        comments:'bai'
    },
]


const community = () => {
    return(
        <div className="w-full h-screen flex justify-start items-start relative bg-slate-100/100 text-black">
            <div className=" w-full h-full flex relative">
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
                                className="text-black flex items-start justify-start space-x-4 rounded-xl p-3 hover:bg-theme hover:text-white hover:w-64"
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
                <main className="ml-[289px] w-full h-28 mr-80 mt-28 rounded-xl text-black">
                    <h1 className="text-2xl text-reqtext">POSTS</h1>
                    <h1 className=" fixed right-36 top-24 text-reqtext text-2xl">Featured Blogs</h1>
                    <div className="flex justify-center items-center mt-20 mb-10">
                        <div className="w-80 h-12 grid grid-cols-2 bg-white text-md font-medium fixed stick backdrop-blur bg-white/10">
                            <button className="hover:border-solid hover:border-slate-300 hover:border-2 hover:text-theme">Latest</button>
                            <button className="hover:border-solid hover:border-gray-400 hover:border-2 hover:text-theme">Top</button>
                        </div>
                    </div>
                    
                <div className=" w-auto flex flex-col">
                    {
                        posts.map((data) => (
                                <div className="w-full h-fit mb-10">
                                <div className="w-full bg-white h-fit rounded-xl p-5">
                                    <div className="flex rounded-full bg-sky-400 w-10 h-10">
                                        <div className="flex flex-row justify-center items-center ml-12 font-medium text-xl">
                                            {data.name}
                                        </div>
                                    </div>
                                    <div className="flex text-md font-normal pt-3">
                                        {data.post}
                                    </div>
                                    <div className="flex flex-row justify-center items-center">
                                        <div className="mr-auto mt-4">
                                            <FaRegComment className="w-7 h-7"/>
                                        </div>
                                        <div className="flex mt-4">
                                            <FcLikePlaceholder className="w-8 h-8"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                        }
                </div>
                    
                </main>
                <section className=" bg-white w-72 rounded-xl text-black h-[80%] top-36 right-3 flex flex-col fixed hover:overflow-y-scroll hover:no-scrollbar">  
                {
                    aloo.map((item) => (
                        <div className="w-full h-24 text-black rounded-xl mt-4 flex flex-col p-5">
                            <div className="flex rounded-full bg-sky-400 w-14 h-14">
                                <div className="flex flex-row justify-start items-start">
                                    <div className="text-md ml-24">
                                        {item.title}
                                        <div className="text-sm ">
                                        {item.about}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
                        
                </section>
            </div> 
        </div>
    );
}

export default community;