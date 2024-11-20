import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative bg-white pt-16">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-white"></div>
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24">
        <div className="text-center">
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block">Connect with Your</span>
            <span className="block text-indigo-600">Perfect Opportunity</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            We bridge the gap between exceptional talent and leading companies. 
            Whether you're seeking your next career move or looking to build your dream team, 
            we're here to help.
          </p>
          <div className="mt-10 flex justify-center gap-4">
            <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
              Find Jobs
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-indigo-100 hover:bg-indigo-200">
              Hire Talent
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}