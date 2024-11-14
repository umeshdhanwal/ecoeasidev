import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, PieChart, Pie, Cell } from 'recharts';
import { Leaf, Zap, Factory, BarChart2, Share } from 'lucide-react';
import { Button } from '../Button';
import { useNavigate } from 'react-router-dom';

const MultiSelect = ({ options, value, onChange }) => (
  <select
    multiple
    className="w-full rounded-lg border border-gray-200 p-2 min-h-[100px]"
    value={value}
    onChange={(e) => {
      const selected = Array.from(e.target.selectedOptions, option => option.value);
      onChange(selected);
    }}
  >
    {options.map(group => (
      <optgroup key={group.label} label={group.label}>
        {group.options.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </optgroup>
    ))}
  </select>
);

const ResultsSection = ({ totalQuestions }) => {
  const navigate = useNavigate();

  // Dummy data for Carbon emissions
  const carbonData = [
    { name: 'Scope 1', value: 42 },
    { name: 'Scope 2', value: 1 },
    { name: 'Scope 3', value: 2 },
  ];

  // Dummy data for Energy usage
  const energyData = [
    { name: 'Renewable', value: 16000 },
    { name: 'Non Renewable', value: 8000 },
  ];

  // Dummy data for EU comparison
  const euComparisonData = [
    { name: 'Your Company', emissions: 45 },
    { name: 'EU SME avg', emissions: 75 },
  ];

  const COLORS = ['#4ade80', '#6366f1', '#f472b6'];

  const [selectedCompanies, setSelectedCompanies] = useState([]);
  
  const companyOptions = [
    { value: 'pwc', label: 'PwC Ireland (Auditor)', category: 'Auditor' },
    { value: 'kpmg', label: 'KPMG Ireland (Auditor)', category: 'Auditor' },
    { value: 'deloitte', label: 'Deloitte Ireland (Auditor)', category: 'Auditor' },
    { value: 'glanbia', label: 'Glanbia', category: 'Buyer' },
    { value: 'kerry', label: 'Kerry Group', category: 'Buyer' },
    { value: 'dairygold', label: 'Dairygold', category: 'Buyer' },
    { value: 'lakeland', label: 'Lakeland Dairies', category: 'Buyer' },
  ];

  const groupedOptions = [
    {
      label: 'Auditors',
      options: companyOptions.filter(opt => opt.category === 'Auditor')
    },
    {
      label: 'Buyers',
      options: companyOptions.filter(opt => opt.category === 'Buyer')
    }
  ];

  const handleShare = () => {
    console.log('Sharing results with:', selectedCompanies);
    // Implement sharing logic here
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      <div className="flex justify-between items-center mb-8">
        <Button
          onClick={() => window.history.back()}
          variant="outline" 
          shape="round" 
          className="min-w-[90px] rounded-lg border border-blue-600 px-6 py-2 text-blue-600 bg-white hover:bg-blue-50 transition-colors duration-300 flex items-center gap-2"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <path d="M19 12H5M12 19l-7-7 7-7"/>
          </svg>
          Back
        </Button>
        <h2 className="text-3xl font-bold">Sustainability Assessment Results</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Carbon Emissions Section */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-green-100 rounded-full">
              <Factory className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold">Carbon Emissions</h3>
          </div>
          <PieChart width={400} height={300}>
            <Pie
              data={carbonData}
              cx={200}
              cy={150}
              innerRadius={60}
              outerRadius={100}
              paddingAngle={5}
              dataKey="value"
            >
              {carbonData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
          <div className="grid grid-cols-3 gap-4 mt-4">
            {carbonData.map((item, index) => (
              <div key={item.name} className="text-center">
                <p className="text-sm text-gray-600">{item.name}</p>
                <p className="font-semibold">{item.value} T CO2eq</p>
              </div>
            ))}
          </div>
        </div>

        {/* Energy Usage Section */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-blue-100 rounded-full">
              <Zap className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold">Energy Usage</h3>
          </div>
          <PieChart width={400} height={300}>
            <Pie
              data={energyData}
              cx={200}
              cy={150}
              innerRadius={60}
              outerRadius={100}
              paddingAngle={5}
              dataKey="value"
            >
              {energyData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
          <div className="grid grid-cols-2 gap-4 mt-4">
            {energyData.map((item, index) => (
              <div key={item.name} className="text-center">
                <p className="text-sm text-gray-600">{item.name}</p>
                <p className="font-semibold">{item.value} kWh</p>
              </div>
            ))}
          </div>
        </div>

        {/* EU Comparison Section */}
        <div className="bg-white rounded-lg shadow-lg p-6 md:col-span-2">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-purple-100 rounded-full">
              <BarChart2 className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold">Comparison with EU Average</h3>
          </div>
          <BarChart width={800} height={300} data={euComparisonData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="emissions" fill="#4ade80" />
          </BarChart>
        </div>
      </div>

      <div className="mt-8 bg-green-50 p-6 rounded-lg">
        <div className="flex items-center gap-3 mb-4">
          <Leaf className="w-6 h-6 text-green-600" />
          <h3 className="text-xl font-semibold">Sustainability Score</h3>
        </div>
        <p className="text-gray-700">
          Your company is performing better than 65% of SMEs in your sector. Key areas for improvement include:
        </p>
        <ul className="list-disc list-inside mt-2 text-gray-600">
          <li>Increasing renewable energy usage</li>
          <li>Implementing scope 3 emissions tracking</li>
          <li>Setting science-based targets</li>
        </ul>
      </div>

      <div className="mt-8 bg-white p-6 rounded-lg shadow-lg">
        <div className="flex items-center gap-3 mb-6">
          <BarChart2 className="w-6 h-6 text-indigo-600" />
          <h3 className="text-xl font-semibold">Generate Report</h3>
        </div>
        
        <p className="text-gray-700 mb-4">
          Generate a detailed sustainability report based on your assessment results.
        </p>

        <Button
          onClick={() => console.log('Generating report...')}
          className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition-colors duration-300"
        >
          Create Detailed Report
        </Button>
      </div>

      <div className="mt-8 bg-white p-6 rounded-lg shadow-lg">
        <div className="flex items-center gap-3 mb-6">
          <Share className="w-6 h-6 text-blue-600" />
          <h3 className="text-xl font-semibold">Share Results</h3>
        </div>
        
        <div className="mb-4">
          <p className="text-gray-700 mb-2">
            Share your sustainability assessment results with buyers and auditors:
          </p>
          <MultiSelect
            options={groupedOptions}
            value={selectedCompanies}
            onChange={setSelectedCompanies}
            className="w-full"
          />
        </div>

        <Button
          onClick={handleShare}
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300 disabled:bg-blue-300"
          disabled={selectedCompanies.length === 0}
        >
          Share Results and Report
        </Button>
      </div>
    </div>
  );
};

export default ResultsSection; 