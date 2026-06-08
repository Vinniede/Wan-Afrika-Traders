import { lazy, Suspense } from 'react';
import type { RouteObject } from 'react-router-dom';
import { MainLayout } from '../components/common/MainLayout';

// Lazy load pages for code splitting
const Home = lazy(() => import('../pages/Home/Home').then(m => ({ default: m.Home })));
const About = lazy(() => import('../pages/About/About').then(m => ({ default: m.About })));
const Products = lazy(() => import('../pages/Products/Products').then(m => ({ default: m.Products })));
const Solutions = lazy(() => import('../pages/Solutions/Solutions').then(m => ({ default: m.Solutions })));
const Projects = lazy(() => import('../pages/Projects/Projects').then(m => ({ default: m.Projects })));
const Contact = lazy(() => import('../pages/Contact/Contact').then(m => ({ default: m.Contact })));
const Catalogue = lazy(() => import('../pages/Catalogue/Catalogue').then(m => ({ default: m.Catalogue })));
const Checkout = lazy(() => import('../pages/Checkout/Checkout').then(m => ({ default: m.Checkout })));

// Loading component
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="text-center">
      <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-blue"></div>
      <p className="mt-4 text-slate-600">Loading...</p>
    </div>
  </div>
);

// Wrapped component with layout
const withLayout = (Component: React.ComponentType) => (
  <MainLayout>
    <Suspense fallback={<PageLoader />}>
      <Component />
    </Suspense>
  </MainLayout>
);

export const routes: RouteObject[] = [
  {
    path: '/',
    element: withLayout(Home),
  },
  {
    path: '/about',
    element: withLayout(About),
  },
  {
    path: '/products',
    element: withLayout(Products),
  },
  {
    path: '/solutions',
    element: withLayout(Solutions),
  },
  {
    path: '/projects',
    element: withLayout(Projects),
  },
  {
    path: '/contact',
    element: withLayout(Contact),
  },
  {
    path: '/catalogue',
    element: withLayout(Catalogue),
  },
  {
    path: '/checkout',
    element: withLayout(Checkout),
  },
];


