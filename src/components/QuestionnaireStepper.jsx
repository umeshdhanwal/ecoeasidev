import React, { useState } from 'react';
import { Text, Img } from './index';

const QuestionnaireStepper = ({ classifications, currentQuestion }) => {
  const [expandedCategories, setExpandedCategories] = useState({
    General: false,
    Environmental: false,
    Social: false,
    Governance: false
  });

  const toggleCategory = (category) => {
    setExpandedCategories(prev => ({
      ...prev,
      [category]: !prev[category]
    }));
  };

  return (
    <div className="w-64 min-h-full bg-white p-4 border-r border-gray-200">
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
                  className={`py-1 text-sm ${
                    q.answered ? 'text-green-600' : 'text-gray-500'
                  } ${currentQuestion === q.number ? 'font-bold' : ''}`}
                >
                  Question {q.number}
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default QuestionnaireStepper; 