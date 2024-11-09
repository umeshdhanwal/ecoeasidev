import React, { useState } from 'react';
import { Input, Button, Text, Heading } from "./index";

const ModifyAccountModal = ({ onClose }) => {
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const [formData, setFormData] = useState({
    first_name: '',
    surname: '',
    company_name: '',
    phone: ''
  });
  const [step, setStep] = useState('verify');
  const [error, setError] = useState('');
  const [userId, setUserId] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleVerify = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://g84c60a1e52e6e4-ora23aidb.adb.eu-paris-1.oraclecloudapps.com/ords/api/ee_do_service/this_action", {
        method: 'POST',
        headers: {
          'accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          procedure: "LOGIN_USER",
          payload: credentials
        })
      });

      if (response.ok) {
        const data = await response.json();
        setUserId(data.user_id);
        setStep('modify');
        // Pre-fill form with user data if available
        if (data.user) {
          setFormData({
            first_name: data.user.first_name || '',
            surname: data.user.surname || '',
            company_name: data.user.company_name || '',
            phone: data.user.phone || ''
          });
        }
      } else {
        setError('Invalid credentials');
      }
    } catch (error) {
      setError('An error occurred');
    }
  };

  const handleModify = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://g84c60a1e52e6e4-ora23aidb.adb.eu-paris-1.oraclecloudapps.com/ords/api/ee_do_service/this_action", {
        method: 'POST',
        headers: {
          'accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          procedure: "MODIFY_ACCOUNT",
          User_id: userId,
          payload: formData
        })
      });

      if (response.ok) {
        onClose();
      } else {
        setError('Failed to update account');
      }
    } catch (error) {
      setError('An error occurred');
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-gray-500 bg-opacity-75">
      <div className="flex min-h-screen items-center justify-center p-4">
        <div className="relative w-full max-w-md rounded-lg bg-white shadow-xl">
          <div className="absolute right-0 top-0 p-4">
            <button onClick={onClose} className="text-gray-400 hover:text-gray-500">
              <span className="sr-only">Close</span>
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="px-6 pt-6 pb-8">
            {step === 'verify' ? (
              <form onSubmit={handleVerify} className="flex flex-col gap-4">
                <Heading as="h3" className="mb-6 text-xl font-bold text-center">
                  Verify Your Account
                </Heading>
                <Input
                  type="email"
                  placeholder="Email"
                  value={credentials.email}
                  onChange={(e) => setCredentials({...credentials, email: e.target.value})}
                  className="w-full rounded-md border border-gray-300 px-3 py-2"
                />
                <Input
                  type="password"
                  placeholder="Password"
                  value={credentials.password}
                  onChange={(e) => setCredentials({...credentials, password: e.target.value})}
                  className="w-full rounded-md border border-gray-300 px-3 py-2"
                />
                <Button 
                  type="submit"
                  className="mt-4 w-full rounded-[36px] bg-deep_purple-a400 px-[33px] py-3 font-bold text-white hover:bg-deep_purple-800 transition-colors duration-300"
                >
                  Verify
                </Button>
              </form>
            ) : (
              <form onSubmit={handleModify} className="flex flex-col gap-4">
                <Heading as="h3" className="mb-6 text-xl font-bold text-center">
                  Modify Account
                </Heading>
                <Input
                  type="text"
                  name="first_name"
                  placeholder="First Name"
                  value={formData.first_name}
                  onChange={handleChange}
                  required
                  className="w-full rounded-md border border-gray-300 px-3 py-2"
                />
                <Input
                  type="text"
                  name="surname"
                  placeholder="Surname"
                  value={formData.surname}
                  onChange={handleChange}
                  required
                  className="w-full rounded-md border border-gray-300 px-3 py-2"
                />
                <Input
                  type="text"
                  name="company_name"
                  placeholder="Company Name"
                  value={formData.company_name}
                  onChange={handleChange}
                  required
                  className="w-full rounded-md border border-gray-300 px-3 py-2"
                />
                <Input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full rounded-md border border-gray-300 px-3 py-2"
                />
                <Button 
                  type="submit"
                  className="mt-4 w-full rounded-[36px] bg-deep_purple-a400 px-[33px] py-3 font-bold text-white hover:bg-deep_purple-800 transition-colors duration-300"
                >
                  Update Account
                </Button>
              </form>
            )}
            {error && (
              <Text className="mt-2 text-center text-red-500">{error}</Text>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModifyAccountModal; 