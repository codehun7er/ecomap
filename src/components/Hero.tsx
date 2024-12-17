import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative bg-green-800">
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover"
          src="https://images.unsplash.com/photo-1497250681960-ef046c08a56e"
          alt="Nature background"
        />
        <div className="absolute inset-0 bg-green-800 mix-blend-multiply" />
      </div>
      
      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
          Make a Difference in Your Community
        </h1>
        <p className="mt-6 max-w-3xl text-xl text-green-100">
          Join EcoMap to report environmental issues, participate in local initiatives,
          and help create a sustainable future for our planet.
        </p>
        <div className="mt-10">
          <a
            href="#get-started"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-green-700 bg-white hover:bg-green-50"
          >
            Get Started
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </div>
    </div>
  );
}