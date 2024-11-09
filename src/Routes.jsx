import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import Group368 from "pages/Group368";
import FAQs from "pages/FAQs";
import BlogPost from "pages/BlogPost";
import BackgroundInformationPage from "pages/BackgroundInformationPage";
import HomepageA from "pages/HomepageA";
import AboutusPage from "pages/Aboutus"; // Import the AboutusPage component
import QuestionnairePage from "pages/QuestionnairePage"; // Import the QuestionnairePage component
import SustainabilityReportOption from "pages/SustainabilityReportOption";
import LoginPage from "./pages/Login";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "dhiwise-dashboard", element: <Home /> },
    { path: "*", element: <NotFound /> },
    {
      path: "group368",
      element: <Group368 />,
    },
    {
      path: "faqs",
      element: <FAQs />,
    },
    {
      path: "blogpost",
      element: <BlogPost />,
    },
    {
      path: "backgroundinformationpage",
      element: <BackgroundInformationPage />,
    },
    {
      path: "/",
      element: <HomepageA />,
    },
    {
      path: "about", // Add the route for the About page
      element: <AboutusPage />,
    },
    {
      path: "questionnaire", // Add the route for the Questionnaire page
      element: <QuestionnairePage />,
    },
    {
      path: "sustainabilityreportoption",
      element: <SustainabilityReportOption />,
    },
    {
      path: "login",
      element: <LoginPage />,
    },
  ]);

  return element;
};

export default ProjectRoutes;
