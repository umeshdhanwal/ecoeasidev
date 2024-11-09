import React, { useState, useEffect } from "react";
import { Link as RouterLink, useNavigate, useLocation } from "react-router-dom";
import { Img, Text, Button } from "..";

export default function Header({ className = "", simplified = false, onLogout, ...props }) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleDrawer = () => setIsDrawerOpen(!isDrawerOpen);

  const handleLogout = () => {
    console.log('Logout clicked');
    // Implement logout logic here
    // For example: navigate('/');
  };

  if (simplified) {
    return (
      <header {...props} className={`${className} flex justify-between items-center py-4 px-6`}>
        <RouterLink to="/">
          <Img
            src="images/img_ecoeasi_logo_2.png"
            alt="Logo Image"
            className="h-[60px] w-auto object-contain"
          />
        </RouterLink>
        <Button 
          onClick={onLogout || handleLogout}
          shape="round" 
          className="min-w-[100px] bg-purple-800 rounded-[36px] px-4 py-2 font-bold text-white border border-purple-800 hover:bg-purple-600 hover:border-purple-600 transition-colors duration-300"
        >
          Logout
        </Button>
      </header>
    );
  }

  const NavItems = () => (
    <ul className={`flex ${isMobile ? 'flex-col' : 'flex-wrap'} gap-2.5`}>
      {['Home', 'About', 'Products', 'Blog', 'FAQs', 'Contact Us'].map((item) => (
        <li key={item}>
          {item === 'Products' ? (
            <a
              onClick={() => {
                navigate('/');
                setTimeout(() => {
                  const pricingSection = document.getElementById('pricing');
                  if (pricingSection) {
                    pricingSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }, 100);
              }}
              className={`lg:text-[15px] ${isMobile ? 'block py-2' : ''} cursor-pointer ${isMobile ? 'text-purple-800' : ''}`}
            >
              <Text size="textmd" as="p" className={`font-poppins text-[18px] font-medium ${isMobile ? 'text-purple-800' : 'text-gray-900'}`}>
                {item}
              </Text>
            </a>
          ) : item === 'Home' ? (
            <RouterLink to="/" className={`lg:text-[15px] ${isMobile ? 'block py-2' : ''} ${isMobile ? 'text-purple-800' : ''}`}>
              <Text size="textmd" as="p" className={`font-poppins text-[18px] font-medium ${isMobile ? 'text-purple-800' : 'text-gray-900'}`}>
                {item}
              </Text>
            </RouterLink>
          ) : item === 'About' ? (
            <RouterLink to="/about" className={`lg:text-[15px] ${isMobile ? 'block py-2' : ''} ${isMobile ? 'text-purple-800' : ''}`}>
              <Text size="textmd" as="p" className={`font-poppins text-[18px] font-medium ${isMobile ? 'text-purple-800' : 'text-gray-900'}`}>
                {item}
              </Text>
            </RouterLink>
          ) : item === 'FAQs' ? (
            <RouterLink
              to="/faqs"
              className={`lg:text-[15px] ${isMobile ? 'block py-2' : ''} ${isMobile ? 'text-purple-800' : ''}`}
            >
              <Text size="textmd" as="p" className={`font-poppins text-[18px] font-medium ${isMobile ? 'text-purple-800' : 'text-gray-900'}`}>
                {item}
              </Text>
            </RouterLink>
          ) : item === 'Blog' ? (
            <RouterLink
              to="/blogpost"
              className={`lg:text-[15px] ${isMobile ? 'block py-2' : ''} ${isMobile ? 'text-purple-800' : ''}`}
            >
              <Text size="textmd" as="p" className={`font-poppins text-[18px] font-medium ${isMobile ? 'text-purple-800' : 'text-gray-900'}`}>
                {item}
              </Text>
            </RouterLink>
          ) : item === 'Contact Us' ? (
            <a
              onClick={() => {
                if (location.pathname !== '/') {
                  navigate('/');
                  setTimeout(() => {
                    const footerSection = document.getElementById('footer');
                    if (footerSection) {
                      footerSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }, 100);
                } else {
                  const footerSection = document.getElementById('footer');
                  if (footerSection) {
                    footerSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }
              }}
              className={`lg:text-[15px] ${isMobile ? 'block py-2' : ''} cursor-pointer ${isMobile ? 'text-purple-800' : ''}`}
            >
              <Text size="textmd" as="p" className={`font-poppins text-[18px] font-medium ${isMobile ? 'text-purple-800' : 'text-gray-900'}`}>
                {item}
              </Text>
            </a>
          ) : (
            <a href="#" className={`lg:text-[15px] ${isMobile ? 'block py-2' : ''} ${isMobile ? 'text-purple-800' : ''}`}>
              <Text size="textmd" as="p" className={`font-poppins text-[18px] font-medium ${isMobile ? 'text-purple-800' : 'text-gray-900'}`}>
                {item}
              </Text>
            </a>
          )}
        </li>
      ))}
    </ul>
  );

  return (
    <header {...props} className={`${className} flex justify-center items-center py-14 md:py-5 sm:py-4`}>
      <Img src="images/img_logo.svg" alt="" className="h-[50px]" />
      {simplified ? (
        <Button
          shape="round"
          className="cursor-pointer font-semibold min-w-[112px] text-center text-lg"
          onClick={handleLogout}
        >
          Logout
        </Button>
      ) : (
        <div className="container-xs flex items-center justify-between gap-5 lg:px-5 md:px-5">
          <RouterLink to="/">
            <Img
              src="images/img_ecoeasi_logo_2.png"
              alt="Logo Image"
              className="h-[120px] w-auto object-contain md:h-[100px] sm:h-[80px]"
            />
          </RouterLink>
          {isMobile ? (
            <>
              <button onClick={toggleDrawer} className="text-gray-900">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
              <div className={`fixed inset-y-0 right-0 z-50 w-64 bg-purple-100 shadow-lg transform ${isDrawerOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out`}>
                <div className="p-5">
                  <button onClick={toggleDrawer} className="mb-5 text-purple-800">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                  <NavItems />
                  <Button 
                    onClick={() => navigate('/login')}
                    shape="round" 
                    className="mt-5 min-w-[154px] !bg-white rounded-[36px] px-[34px] font-bold sm:px-4 text-gray-900 border border-gray-900 hover:bg-green-500 hover:text-white hover:border-green-500 transition-colors duration-300"
                  >
                    Login
                  </Button>
                </div>
              </div>
            </>
          ) : (
            <div className="mr-16 flex w-[60%] justify-center gap-10 md:mr-0 md:w-full">
              <div className="flex flex-1 justify-center rounded-[36px] bg-gray-50_19 p-6 md:self-stretch sm:p-4">
                <NavItems />
              </div>
              <Button 
                shape="round" 
                className="min-w-[154px] !bg-white rounded-[36px] px-[34px] font-bold sm:px-4 text-gray-900 border border-gray-900 hover:bg-green-500 hover:text-white hover:border-green-500 transition-colors duration-300"
                onClick={() => navigate('/login')}
              >
                Login
              </Button>
            </div>
          )}
        </div>
      )}
    </header>
  );
}
