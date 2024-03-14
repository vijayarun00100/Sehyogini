import React, { useEffect, useState } from "react";
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
import { GoComment } from "react-icons/go";
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
        title:"aloo bada1",
        about:"empowering women"
    },
    {
        title:"aloo bada2",
        about:"empowering women"
    },
    {
        title:"aloo bada3",
        about:"empowering women"
    },
    {
        title:"aloo bada4",
        about:"empowering women"
    },
    {
        title:"aloo bada5",
        about:"empowering women"
    },
    {
        title:"aloo bada6",
        about:"empowering women"
    },
    {
        title:"aloo bada7",
        about:"empowering women"
    }
]

const Community = () => {
    const [posts, setPosts] = useState([]);
    const [showComments, setShowComments] = useState(false);
    const [backtotop, setbacktotop] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://sehyogini.onrender.com/api/getPosts');
                if (!response.ok) {
                    throw new Error('Failed to fetch posts');
                }
                const responseData = await response.json();
                const { posts } = responseData;
                if (!Array.isArray(posts)) {
                    throw new Error('Invalid data format: posts is not an array');
                }
                setPosts(posts);
            } catch (error) {
                console.error('Error fetching posts:', error);
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setbacktotop(true);
            } else {
                setbacktotop(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const toggleComments = () => {
        setShowComments(prevState => !prevState);
    };

    const scrollTo = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <div className="w-full h-screen flex justify-start items-start relative bg-slate-100/100 text-black">
            <div className=" w-full h-full flex relative">
                <section className="w-64 fixed flex flex-col h-[87%] bg-white mt-24 ml-3 rounded-xl ">
                    <div className="flex flex-row">
                        <img src={Logo} alt='logo' className="h-16 p-5" />
                        <button>
                            <HiMenuAlt2 className=" w-8 h-8 ml-12"/>
                        </button>
                    </div>
                    {icons.map((item, index) => (
                        <button
                            className="text-black flex items-start justify-start space-x-4 rounded-xl p-3 hover:bg-theme hover:text-white hover:w-64"
                            href={`./${item.title.toLowerCase()}`}
                            key={index}
                        >
                            <div>
                                <item.icon className="w-8 h-6"/>
                            </div>
                            <div className="text-md font-medium">
                                {item.title}
                            </div>
                        </button>
                    ))}
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
                            <button className="hover:border-solid hover:border-slate-300 hover:border-2 hover:text-theme"
                                    onClick={scrollTo}>Latest</button>
                            <button className="hover:border-solid hover:border-gray-400 hover:border-2 hover:text-theme">Top</button>
                        </div>
                    </div>
                    <div className=" w-auto flex flex-col">
                        {posts.map((data, index) => (
                            <div className="w-full h-fit mb-10" key={index}>
                                <div className="w-full bg-white h-fit rounded-xl p-5">
                                    <div className="flex flex-row">
                                        <div className="flex rounded-full bg-sky-400 w-10 h-10"/>
                                        <div className="flex flex-row ml-3 mt-2 font-normal text-md ">
                                            {data.author}
                                        </div>
                                    </div>
                                    <div className="flex text-md font-normal pt-3 ml-2">
                                        {data.content}
                                    </div>
                                    <div className="flex flex-row justify-center items-center">
                                        <div className="mr-auto mt-4 flex flex-row">
                                            <button onClick={toggleComments} className="cursor-pointer">
                                                <GoComment className="w-7 h-7"/>
                                            </button>
                                            <div className="mt-1 ml-2">
                                                {data.comments.length}
                                            </div>
                                        </div>
                                        <div className="flex flex-row mt-4 mr-5">
                                            <button>
                                                <FcLikePlaceholder className="w-8 h-8"/>
                                            </button>
                                            <div className="mt-1 ml-3">
                                                {data.likes.length}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex justify-start flex-col items-start" style={{ opacity: showComments ? 1 : 0, height: showComments ? "auto" : 0 }}>
                                        {data.comments.map((comment, index) => (
                                            data.comments.length >= 1 && (
                                                <div key={index}>
                                                    <div className="flex flex-col pb-10 mt-10">
                                                        <div>{comment.name}</div>
                                                        <div>{comment.comment}</div>
                                                    </div>
                                                </div>
                                            )
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </main>
                <section className=" bg-white w-72 rounded-xl text-black h-[80%] top-36 right-3 flex flex-col fixed hover:overflow-y-auto hover:no-scrollbar">
                    {aloo.map((item, index) => (
                        <div className="w-full h-24 text-black rounded-xl mt-4 flex flex-col p-5" key={index} >
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
                    ))}
                </section>
            </div>
            {backtotop && (
                <button
                    className="fixed bottom-5 right-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                    onClick={scrollTo}
                >
                    Back to Top
                </button>
            )}
        </div>
    );
};

export default Community;
