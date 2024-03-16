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
import Navigation from '../navigation/navigation';

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
];

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
];

const Community = (props) => {
    const [posts, setPosts] = useState([]);
    console.log(props);
    const [like, setLike] = useState(false);
    const [latest , setLatest] = useState(false);
    const [comment , setComment] = useState(false);
    const [top ,settop] =useState(false);
    const [loggedusername , setloggedusername] = useState('');
    const [post , setpost ] = useState(false);
    const [commnet_content, setComment_content] = useState('');
    const [post_content , setpost_content] = useState('');  
   
    const loggeduserid = localStorage.getItem('userid');
    
   
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
                // setLike(like => !like)
                setPosts(posts.map(post => ({ ...post, liked: false })));
            } catch (error) {
                console.error('Error fetching posts:', error);
            }
        };
        fetchData();
    }, [like,latest , comment,post]);
    


    useEffect(() => {
        const username = async () => {
            const response = await fetch(`https://sehyogini.onrender.com/api/getUserByID/${loggeduserid}`);
            const responseData = await response.json();
            const username = responseData;
            setloggedusername(username.user.name)
        };
        username();
       },[])


    const toggleComments = (index) => {
        const newPosts = [...posts];
        newPosts[index].showComments = !newPosts[index].showComments;
        setPosts(newPosts);
    };

    const handleScroll = () => {
        window.scroll({
            top: 0,
            behavior: "smooth"
        });
    };

    const handleInputChange = (event) => {
        setComment_content(event.target.value);
        
    };

    const updatepostcontent = (event) => {
        setpost_content(event.target.value);
    };


    
    const handleLike = async (index,id) => {
        const newPosts = [...posts];
        newPosts[index].liked = !newPosts[index].liked;
        setPosts(newPosts);
        try {
            const response = await fetch('https://sehyogini.onrender.com/api/do-like', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ 
                    name:loggeduserid,
                    post: id
                })
            });
            setLike(newPosts[index].liked);
            if (!response.ok) {
                throw new Error('Failed to update like count');
            }
        } catch (error) {
            console.error('Error updating like count:', error);
        }
    
    };



    const handleComments = async (index,id) => {

        try {
            const response = await fetch('https://sehyogini.onrender.com/api/do-comment', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ 
                    name: loggedusername,
                    post: id,
                    comment:commnet_content
                })
            });
            commnet_content= '';
            if (!response.ok) {
                throw new Error('Failed to update comment count');
            }
        } catch (error) {
            console.error('Error updating comments', error);
        }
    };

    const handlepost = async () => {

        try {
            const response = await fetch('https://sehyogini.onrender.com/api/createPost', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ 
                    author: loggedusername,
                    title:"",
                    authorID:loggeduserid,
                    content:post_content,
                    comments:[],
                    likes:[]
                })
            }).then(res => res.json()).then(data => JSON.stringify(data)).then(value =>{
                if(!value.isposted){
                    alert("absuvie content");
                }
            })
            console.log("i ran");
            if (!response.ok) {
                throw new Error('Failed to update 1 count');
            }
        } catch (error) {
            console.error('Error updating', error);
        }
    };

    return (
        <>
        <Navigation />
        <div className="w-full h-screen flex justify-start items-start relative bg-slate-100/100 text-black">
            <div className=" w-full h-full flex relative">
                <section className="w-64 fixed flex flex-col h-[87%] bg-white mt-24 ml-3 rounded-xl z-10 ">
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
                <main className="ml-[289px] w-full h-auto mr-80 mt-28 rounded-xl text-black">
                    <h1 className="text-2xl text-reqtext">POSTS</h1>
                    <div className=" bg-slate-400/10 w-full h-44 rounded-xl mt-6">
                        <div>
                            <input type="text" className="bg-slate-200/10 w-[93%] h-36 rounded-xl mt-4 ml-8 border-none p-3" placeholder="start typing ... " onChange={updatepostcontent}/>
                            <div className="flex justify-center items-center">
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded" onClick={() => {handlepost();setpost(!post);}}>
                              Button
                            </button>
                            </div>
                        </div>  
                    </div>
                    <h1 className=" fixed right-36 top-24 text-reqtext text-2xl">Featured Blogs</h1>
                    <div className="flex justify-center items-center mt-20 mb-10">
                        <div className="w-80 h-12 grid grid-cols-2 bg-white text-md font-medium fixed stick backdrop-blur rounded-3xl bg-black/10 z-50">
                            <button id="scroller" className="hover:border-solid hover:border-slate-300 hover:border-2 hover:text-theme rounded-3xl" onClick={() => {setLatest(!latest) ; handleScroll() ;}}>Latest</button>
                            <button className="hover:border-solid hover:border-gray-400 hover:border-2 hover:text-theme rounded-3xl" onClick={() => {settop(!latest) ; handleScroll() ;}}>Top</button>
                        </div>
                    </div>
                    <div className="w-auto flex flex-col">
                        {posts.map((data, index) => (
                            <div className="w-full h-fit mb-10" key={index}>
                                <div className="w-full bg-white h-fit rounded-xl p-5 relative">
                                    <div className="flex flex-row">
                                        <div className="flex rounded-full bg-sky-400 w-10 h-10"/>
                                        <div className="flex flex-row ml-3 mt-2 font-normal text-md ">
                                            {data.author}
                                        </div>
                                    </div>
                                    <div className="flex text-md font-normal pt-3 ml-2">
                                        {data.content}
                                    </div>
                                    <div className="flex flex-row justify-center items-center mt-8">
                                        <div className="mr-auto flex flex-row cursor-pointer" onClick={() => toggleComments(index)}>
                                            <button>
                                                <GoComment className="w-7 h-7"/>
                                            </button>
                                            <div className="ml-2">
                                                {data.comments.length}
                                            </div>
                                        </div>
                                        <div className="flex flex-row">
                                            <button onClick={() => {handleLike(index,data._id)}}>
                                                {data.liked ? <FcLike className="w-8 h-8  mb-1" /> : <FcLikePlaceholder className="w-8 h-8  mb-1" />}
                                            </button>
                                            <div className="ml-3 mt-1">
                                                {data.likes.length}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col" style={{ opacity: data.showComments ? 1 : 0, height: data.showComments ? "auto" : 0 }}>
                                        {data.comments.length > 0 ? (
                                            data.comments.map((comment, commentIndex) => (
                                                <div key={commentIndex} className="flex flex-row mt-5">
                                                    <div>{comment.name}</div>
                                                    <p>:</p>
                                                    <div className="ml-5 flex justify-center items-center">{comment.comment}</div>
                                                </div>
                                            ))
                                        ) : (
                                            <div className="flex justify-center items-center">No comments</div>
                                        )}
                                        
                                    </div>
                                    <div className="flex flex-row mt-2 rounded-2xl justify-center items-center ">
                                            <input type="text" placeholder="Add a comment" className=" h-20 rounded-2xl px-2 py-1 w-[60%] outline-none focus:border-gray-500 placeholder:text-black"  onChange={handleInputChange}/>
                                            <button className="ml-2 bg-blue-500 text-white px-3 py-1  hover:bg-blue-600 rounded-2xl p-3"  onClick={() => {handleComments(index,data._id);setComment(!comment);}}>Post</button>
                                        </div>
                                    
                                </div>
                            </div>
                        ))}
                    </div>
                </main>
                <section className=" bg-white w-72 rounded-xl text-black h-[80%] top-36 right-3 flex flex-col fixed z-10">
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
        </div>
        </>
    );
};

export default Community;