import React from 'react';
import Header from '../Header';

interface MainLayoutProps {
  children: React.ReactNode;
  currentPage: string;
  onNavigate: (page: string) => void;
}

export default function MainLayout({ children, currentPage, onNavigate }: MainLayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header currentPage={currentPage} onNavigate={onNavigate} />
      <main>{children}</main>
    </div>
  );
}