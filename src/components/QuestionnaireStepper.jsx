import React, { useState } from 'react';
import { Text, Img } from './index';

const QuestionnaireStepper = ({ classifications, currentQuestion, onQuestionClick }) => {
  const [expandedCategories, setExpandedCategories] = useState({
    General: false,
    Environmental: false,
    Social: false,
    Governance: false
  });
  const [isStepperOpen, setIsStepperOpen] = useState(true);

  const truncateText = (text, maxLength = 30) => {
    if (!text) return '';
    return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
  };

  const toggleCategory = (category) => {
    setExpandedCategories(prev => ({
      ...prev,
      [category]: !prev[category]
    }));
  };

  return (
    <div className="relative">
      <div 
        className={`transition-all duration-300 ${
          isStepperOpen ? 'translate-x-0' : '-translate-x-[calc(100%-24px)]'
        }`}
      >
        <div className="w-80 min-h-full bg-white p-4 border-r border-gray-200">
          {Object.entries(classifications).map(([category, questions]) => (
            <div key={category} className="mb-6">
              <div 
                className="flex items-center mb-2 cursor-pointer hover:bg-gray-50 p-2 rounded"
                onClick={() => toggleCategory(category)}
              >
                <div className={`w-4 h-4 rounded-full ${
                  questions.answered === questions.total ? 'bg-green-500' : 'bg-gray-300'
                }`} />
                <Text className="ml-2 flex-1 font-semibold text-gray-900">
                  {category} ({questions.answered}/{questions.total})
                </Text>
                <Img
                  src="images/img_arrow_down.svg"
                  alt="toggle"
                  className={`h-4 w-4 transition-transform duration-200 ${
                    expandedCategories[category] ? 'rotate-180' : ''
                  }`}
                />
              </div>
              {expandedCategories[category] && (
                <div className="ml-2 pl-4 border-l border-gray-200">
                  {questions.items.map((q, index) => (
                    <div
                      key={index}
                      className={`py-3 text-sm cursor-pointer hover:bg-gray-50 px-3 rounded-md mb-2 ${
                        q.answered ? 'border-l-4 border-l-green-500' : 'border-l-4 border-l-transparent'
                      } ${currentQuestion === q.number ? 'bg-blue-50' : ''}`}
                      onClick={() => onQuestionClick(q.number)}
                    >
                      <div className="flex items-center gap-2 mb-1.5">
                        <span className={`font-medium ${
                          q.answered ? 'text-green-600' : 
                          q.skipped ? 'text-orange-600' : 
                          'text-gray-700'
                        }`}>
                          Q{q.number}.
                        </span>
                        <span className={`text-xs px-2 py-0.5 rounded-full ${
                          q.answered ? 'bg-green-100 text-green-700' : 
                          q.skipped ? 'bg-orange-100 text-orange-700' : 
                          'bg-gray-100 text-gray-600'
                        }`}>
                          {q.answered ? 'Answered' : q.skipped ? 'Skipped' : 'Pending'}
                        </span>
                      </div>
                      <div className="text-sm text-gray-600 line-clamp-2 leading-snug">
                        {q.questionText ? truncateText(q.questionText, 60) : 'Loading question...'}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
        
        {/* Toggle button */}
        <button
          onClick={() => setIsStepperOpen(!isStepperOpen)}
          className="absolute top-1/2 -right-6 transform -translate-y-1/2 bg-white p-2 rounded-r-lg border border-l-0 border-gray-200 shadow-md"
        >
          <Img
            src="images/img_arrow_down.svg"
            alt="toggle stepper"
            className={`h-4 w-4 transition-transform duration-200 ${
              isStepperOpen ? 'rotate-90' : '-rotate-90'
            }`}
          />
        </button>
      </div>
    </div>
  );
};

export default QuestionnaireStepper; 