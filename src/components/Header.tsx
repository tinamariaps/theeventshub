import React from 'react';
import { Calendar, Menu } from 'lucide-react';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export default function Header({ currentPage, onNavigate }: HeaderProps) {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center cursor-pointer" onClick={() => onNavigate('home')}>
            <Calendar className="h-8 w-8 text-indigo-600" />
            <span className="ml-2 text-xl font-bold text-gray-900">EventHub</span>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <button 
              onClick={() => onNavigate('home')}
              className={`${currentPage === 'home' ? 'text-indigo-600' : 'text-gray-700'} hover:text-indigo-600`}
            >
              Home
            </button>
            <button 
              onClick={() => onNavigate('directory')}
              className={`${currentPage === 'directory' ? 'text-indigo-600' : 'text-gray-700'} hover:text-indigo-600`}
            >
              Directory
            </button>
            <button 
              onClick={() => onNavigate('events')}
              className={`${currentPage === 'events' ? 'text-indigo-600' : 'text-gray-700'} hover:text-indigo-600`}
            >
              Events
            </button>
            <button 
              onClick={() => onNavigate('blog')}
              className={`${currentPage === 'blog' ? 'text-indigo-600' : 'text-gray-700'} hover:text-indigo-600`}
            >
              Blog
            </button>
            <button 
              onClick={() => onNavigate('contact')}
              className={`${currentPage === 'contact' ? 'text-indigo-600' : 'text-gray-700'} hover:text-indigo-600`}
            >
              Contact
            </button>
          </nav>
          
          <div className="md:hidden">
            <Menu className="h-6 w-6 text-gray-600" />
          </div>
        </div>
      </div>
    </header>
  );
}