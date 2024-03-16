import React from 'react';
import Navigation from '../navigation/navigation';
const PodcastPage = () => {
  return (
    <>
    <Navigation />
    <div className="bg-gray-100 min-h-screen mt-20">
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-4">Featured Podcasts</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
         
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src="https://via.placeholder.com/400" alt="Podcast Cover" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">Podcast Title</h3>
              <p className="text-gray-600">Podcast description or episode details...</p>
            </div>
          </div>
         
        </div>

       
        <div className="mt-8 bg-white rounded-lg shadow-md p-4">
          
        </div>
      </div>
    </div>
    </>
  );
};

export default PodcastPage;