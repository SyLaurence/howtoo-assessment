import * as React from 'react'
import Main from '../components/pages/MainPage';
import ErrorPage from '../components/pages/ErrorPage';
import LandingPage from '../components/pages/LandingPage';
import HomePage from '../components/pages/HomePage';
import HomeTopicsPage from '../components/pages/HomeTopicsPage';
import AccordionInfoPage from '../components/pages/AccordionInfoPage';
import { createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        errorElement: <ErrorPage />
    },
    {
        path: '/landing',
        element: <LandingPage />,
    },
    {
        path: '/home',
        element: <HomePage />,
    },
    {
        path: '/topics',
        element: <HomeTopicsPage />,
    },
    {
        path: '/info',
        element: <AccordionInfoPage />,
    },
])

export default router