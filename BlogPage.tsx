import React from 'react';
import { Page, Destination } from '../types';

const destinations: Destination[] = [
    {
        id: 'paris',
        title: 'A Whirlwind Romance in Paris',
        image: 'https://images.unsplash.com/photo-1522093007474-d86e9bf7ba6f?q=80&w=2070&auto=format&fit=crop',
        content: 'Paris, the city of light and love, is a timeless destination. Stroll along the Seine, get lost in the charming streets of Montmartre, and gaze upon the city from the top of the Eiffel Tower. Every corner holds a piece of history, a work of art, or a culinary delight waiting to be discovered. From the grandeur of the Louvre to the quaint cafes, Paris promises an unforgettable experience.'
    },
    {
        id: 'tokyo',
        title: 'Tokyo: Where Tradition Meets the Future',
        image: 'https://images.unsplash.com/photo-1542051841857-5f90071e7989?q=80&w=2070&auto=format&fit=crop',
        content: 'Experience the exhilarating contrast of Tokyo. One moment you can be wandering through the serene gardens of the Imperial Palace, and the next you\'re crossing the world-famous Shibuya Crossing. The city is a hub of innovation, fashion, and gastronomy. Savor the freshest sushi at Tsukiji Market, explore the vibrant pop culture of Akihabara, and find peace in ancient temples nestled among skyscrapers.'
    },
    {
        id: 'rome',
        title: 'Rome: Echoes of the Empire',
        image: 'https://images.unsplash.com/photo-1529260830199-42c24129f196?q=80&w=2070&auto=format&fit=crop',
        content: 'Walk through history in Rome, the Eternal City. The Colosseum, Roman Forum, and Pantheon stand as testaments to a powerful empire. Toss a coin in the Trevi Fountain, climb the Spanish Steps, and marvel at Michelangelo\'s masterpiece in the Sistine Chapel. Beyond the ancient wonders, Rome is a bustling modern city with a vibrant street life and a food scene that will capture your heart.'
    },
    {
        id: 'kyoto',
        title: 'The Serene Spirit of Kyoto',
        image: 'https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d?q=80&w=2070&auto=format&fit=crop',
        content: 'Escape to the cultural heart of Japan in Kyoto. This city is a beautiful tapestry of traditional temples, sublime gardens, and graceful geishas. Visit the iconic Fushimi Inari Shrine with its thousands of red torii gates, wander through the magical Arashiyama Bamboo Grove, and experience a traditional tea ceremony. Kyoto offers a tranquil retreat and a deep dive into Japanese heritage.'
    },
    {
        id: 'santorini',
        title: 'Santorini: Sunsets and Sea',
        image: 'https://images.unsplash.com/photo-1563789031959-4c02bcb40312?q=80&w=2070&auto=format&fit=crop',
        content: 'Discover the breathtaking beauty of Santorini, a Greek island paradise. Famous for its whitewashed villages clinging to cliffs, blue-domed churches, and stunning sunsets over the Aegean Sea. Relax on the unique black sand beaches, explore the ancient ruins of Akrotiri, and enjoy the delicious local cuisine with a glass of Assyrtiko wine. Santorini is the perfect postcard destination come to life.'
    }
];


interface BlogPageProps {
  onNavigate: (page: Page) => void;
}

const BlogPage: React.FC<BlogPageProps> = ({ onNavigate }) => {
  return (
    <div className="bg-white">
      <nav className="sticky top-0 bg-white shadow-md z-10">
        <div className="container mx-auto px-4">
          <div className="flex justify-center items-center h-16">
            <div className="flex space-x-8">
              {destinations.map(dest => (
                <a key={dest.id} href={`#${dest.id}`} className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition">
                  {dest.title.split(':')[0]}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-8">
        <h1 className="text-5xl font-extrabold text-center text-gray-800 mb-12">Travel Blog & Destination Showcase</h1>
        <div className="space-y-16">
          {destinations.map((dest, index) => (
            <section key={dest.id} id={dest.id} className={`pt-16 -mt-16 flex gap-8 items-center ${index % 2 !== 0 ? 'flex-row-reverse' : 'flex-row'}`}>
              <div className="w-1/2">
                <img src={dest.image} alt={dest.title} className="rounded-lg shadow-2xl w-full h-96 object-cover" />
              </div>
              <div className="w-1/2">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">{dest.title}</h2>
                <p className="text-gray-600 leading-relaxed">{dest.content}</p>
              </div>
            </section>
          ))}
        </div>
         <div className="text-center mt-16">
            <button onClick={() => onNavigate('calculator')} className="bg-blue-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-blue-700 transition duration-300 text-lg">
                Plan Your Itinerary
            </button>
        </div>
      </main>
    </div>
  );
};

export default BlogPage;