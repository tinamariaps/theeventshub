import React, { useState } from 'react';
import MainLayout from './components/layout/MainLayout';
import HomePage from './components/home/HomePage';
import DirectoryPage from './components/directory/DirectoryPage';
import EventsPage from './components/events/EventsPage';
import BlogPage from './components/blog/BlogPage';
import { SearchProvider } from './contexts/SearchContext';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'directory':
        return <DirectoryPage />;
      case 'events':
        return <EventsPage />;
      case 'blog':
        return <BlogPage />;
      default:
        return <HomePage onNavigate={setCurrentPage} />;
    }
  };

  return (
    <SearchProvider>
      <MainLayout currentPage={currentPage} onNavigate={setCurrentPage}>
        {renderPage()}
      </MainLayout>
    </SearchProvider>
  );
}

export default App;