import React from 'react';
import { X, ChevronDown } from 'lucide-react';
import { planningGuide } from '../../data/planningGuide';

interface PlanningGuideProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PlanningGuide({ isOpen, onClose }: PlanningGuideProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 overflow-y-auto">
      <div className="min-h-screen px-4 text-center">
        <div className="inline-block w-full max-w-4xl my-8 text-left align-middle bg-white rounded-lg shadow-xl transform transition-all">
          <div className="relative p-6">
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            >
              <X className="h-6 w-6" />
            </button>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Exhibition Planning Guide</h2>
            
            <div className="space-y-6">
              {planningGuide.map((category, index) => (
                <details key={index} className="group">
                  <summary className="flex items-center justify-between cursor-pointer p-4 bg-gray-50 rounded-lg hover:bg-gray-100">
                    <h3 className="text-xl font-semibold text-gray-900">{category.title}</h3>
                    <ChevronDown className="h-5 w-5 text-gray-500 group-open:rotate-180 transition-transform" />
                  </summary>
                  <div className="mt-4 ml-4 space-y-2">
                    {category.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-start">
                        <div className="flex-shrink-0 h-2 w-2 mt-2 rounded-full bg-indigo-500" />
                        <p className="ml-4 text-gray-600">{item}</p>
                      </div>
                    ))}
                  </div>
                </details>
              ))}
            </div>

            <div className="mt-8 text-center">
              <button
                onClick={onClose}
                className="inline-flex items-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
              >
                Close Guide
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}