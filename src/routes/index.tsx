import { createBrowserRouter, Navigate } from 'react-router-dom';
import { Layout } from '../components/layout/Layout';
import { Home } from '../pages/Home';
import { About } from '../pages/About';
import { Services } from '../pages/Services';
import { Projects } from '../pages/Projects';
import { StandardsCompliance } from '../pages/StandardsCompliance';
import { Career } from '../pages/Career';
import { Contact } from '../pages/Contact';
import { StructuralSteelDetailing } from '../pages/service-details/StructuralSteelDetailing';
import { CheckingServices } from '../pages/service-details/CheckingServices';
import { CostEffectiveSolutions } from '../pages/service-details/CostEffectiveSolutions';
import { BuildingInformationModeling } from '../pages/service-details/BuildingInformationModeling';
import { ConnectionDesign } from '../pages/service-details/ConnectionDesign';
import { StructuralEngineering } from '../pages/service-details/StructuralEngineering';
import { AiscCisc } from '../pages/service-details/AiscCisc';
import { EstimationServices } from '../pages/service-details/EstimationServices';
import { StickModeling } from '../pages/service-details/StickModeling';
import { MaterialTakeOff } from '../pages/service-details/MaterialTakeOff';
import { ServiceFlow } from '../pages/service-details/ServiceFlow';
import { Blogs } from '../pages/Blogs';
import { BlogDetail } from '../pages/BlogDetail';
import { TermsOfUse } from '../pages/legal/TermsOfUse';
import { PrivacyPolicy } from '../pages/legal/PrivacyPolicy';
import { CookiePolicy } from '../pages/legal/CookiePolicy';
import { Disclaimer } from '../pages/legal/Disclaimer';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'about-us',
        element: <About />,
      },
      {
        path: 'service',
        element: <Services />,
      },
      {
        path: 'projects',
        element: <Projects />,
      },
      {
        path: 'standards-compliance',
        element: <StandardsCompliance />,
      },
      {
        path: 'career',
        element: <Career />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
      {
        path: 'blogs',
        element: <Blogs />,
      },
      {
        path: 'blog/steel-detailing-mistake',
        element: <BlogDetail />,
      },

      /* Sub-service Routes */
      {
        path: 'service/structural-steel-detailing',
        element: <StructuralSteelDetailing />,
      },
      {
        path: 'service/checking-services',
        element: <CheckingServices />,
      },
      {
        path: 'service/cost-effective-and-professional-solutions',
        element: <CostEffectiveSolutions />,
      },
      {
        path: 'service/building-Information-modeling',
        element: <BuildingInformationModeling />,
      },
      {
        path: 'service/connection-design',
        element: <ConnectionDesign />,
      },
      {
        path: 'service/structural-engineering',
        element: <StructuralEngineering />,
      },
      {
        path: 'service/aisc-cisc',
        element: <AiscCisc />,
      },
      {
        path: 'service/estimation-services',
        element: <EstimationServices />,
      },
      {
        path: 'service/stick-modeling',
        element: <StickModeling />,
      },
      {
        path: 'service/material-take-off',
        element: <MaterialTakeOff />,
      },
      {
        path: 'service/service-flow',
        element: <ServiceFlow />,
      },

      /* Legal & Policy Routes */
      {
        path: 'terms-of-use',
        element: <TermsOfUse />,
      },
      {
        path: 'privacy-policy',
        element: <PrivacyPolicy />,
      },
      {
        path: 'cookie-policy',
        element: <CookiePolicy />,
      },
      {
        path: 'disclaimer',
        element: <Disclaimer />,
      },

      /* Catch-all redirect to Home */
      {
        path: '*',
        element: <Navigate to="/" replace />,
      },
    ],
  },
]);
