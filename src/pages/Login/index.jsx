import React, { useState, useEffect } from 'react';
import { Helmet } from "react-helmet";
import { useNavigate } from 'react-router-dom';
import { Input, Button, Text, Heading } from "../../components";
import SignupModal from '../../components/SignupModal';
import ForgotPasswordModal from '../../components/ForgotPasswordModal';
import ModifyAccountModal from '../../components/ModifyAccountModal';
import Header from "../../components/Header";

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showSignup, setShowSignup] = useState(false);
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [showModifyAccount, setShowModifyAccount] = useState(false);
  const [loginError, setLoginError] = useState(false);
  const [shake, setShake] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (shake) {
      const timer = setTimeout(() => setShake(false), 500);
      return () => clearTimeout(timer);
    }
  }, [shake]);

  const handleLogin = async (e) => {
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
          payload: {
            email: email,
            password: password
          }
        })
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Login successful:', data);
        navigate('/questionnaire');
      } else {
        setLoginError(true);
        setShake(true);
      }
    } catch (error) {
      console.error('Error during login:', error);
      setLoginError(true);
      setShake(true);
    }
  };

  return (
    <>
      <Helmet>
        <title>Login - EcoEasi</title>
        <meta name="description" content="Login to your EcoEasi account" />
      </Helmet>
      <Header hideLogin />
      <div className={`flex min-h-screen items-center justify-center bg-gray-50 py-1 px-4 sm:px-6 lg:px-8 ${shake ? 'animate-shake' : ''}`}>
        <div className="w-full max-w-md space-y-8">
          <div>
            <Heading
              size="heading3xl"
              as="h2"
              className="mt-4 text-center text-3xl font-extrabold text-gray-900"
            >
              Sign in to your account
            </Heading>
          </div>
          <form className="mt-8 space-y-6" onSubmit={handleLogin}>
            <div className="-space-y-px rounded-md shadow-sm">
              <div>
                <Input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            {loginError && (
              <div className="text-red-500 text-sm mt-2">
                Incorrect email or password. Please try again.
              </div>
            )}

            <div className="flex items-center justify-between">
              <div className="text-sm flex gap-4">
                <a
                  href="#"
                  className="font-medium text-indigo-600 hover:text-indigo-500"
                  onClick={() => setShowForgotPassword(true)}
                >
                  Forgot your password?
                </a>
                <a
                  href="#"
                  className="font-medium text-indigo-600 hover:text-indigo-500"
                  onClick={() => setShowModifyAccount(true)}
                >
                  Modify Account
                </a>
              </div>
            </div>

            <div>
              <Button
                type="submit"
                className="login-button group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Sign in
              </Button>
            </div>
          </form>
          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="bg-gray-50 px-2 text-gray-500">Or</span>
              </div>
            </div>
            <div className="mt-6">
              <Button
                onClick={() => setShowSignup(true)}
                className="flex w-full justify-center rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-500 shadow-sm hover:bg-gray-50"
              >
                Sign up
              </Button>
            </div>
          </div>
        </div>
      </div>
      {showSignup && <SignupModal onClose={() => setShowSignup(false)} />}
      {showForgotPassword && <ForgotPasswordModal onClose={() => setShowForgotPassword(false)} />}
      {showModifyAccount && <ModifyAccountModal onClose={() => setShowModifyAccount(false)} />}
    </>
  );
};

export default LoginPage;
