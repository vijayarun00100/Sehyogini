import { type } from "@testing-library/user-event/dist/type";
import Navigation from '../navigation/navigation';
import React, { useState, useEffect } from "react";

const Opportunities = () => {
  const [scheme, setScheme] = useState([]);

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const response = await fetch(
          "https://sehyogini.onrender.com/api/getSchemes"
        );
        const responseData = await response.json();
        setScheme(responseData);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };
    fetchdata();
  }, []);

  return (
    <div>
        <Navigation />
      {console.log("scheme here ", typeof scheme)}

      <div class="container w-full mx-auto mt-10">
    <div class="mt-9 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 p-5">
        {scheme.map((data, index) => (
            <div class="transition-transform transform hover:scale-105 mt-20 bg-slate-600/20 border border-gray-200 rounded-lg shadow">
                <div class="flex flex-row p-5">
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ8zti9Gycb7BjG2xS8Asf08K0m_ry_daVFjbc7NIbNg&s"
                        alt="Ministry Emblem"
                        className="w-10 h-10"
                    />
                    <div className="ml-4">
                        <h2 className="text-md font-semibold text-black">
                            {data.ministry_name}
                        </h2>
                    </div>
                </div>
                <div className="pl-5">
                    <img
                        src={data.icon}
                        alt="Scheme Icon"
                        className="mt-2 h-28 w-full object-contain"
                    />
                    <div class="mt-2 pt-2 pb-2 mb-2 pd-2">
                        <a href="#">
                            <h5 class=" pt-2 pb-2 mb-2 text-xl font-bold tracking-tight text-gray-900">
                                {data.scheme_name}
                            </h5>
                        </a>
                        <p class=" pt-2 pb-2 pd-2  mb-3 font-normal text-gray-700 ">
                            {data.scheme_description}
                        </p>
                        <a
                            href={data.url}
                            class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-theme rounded-lg hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                            Details
                            <svg
                                class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 14 10"
                            >
                                <path
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M1 5h12m0 0L9 1m4 4L9 9"
                                />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Opportunities;
