import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { createClient } from "@supabase/supabase-js";
import { OrbitProgress } from 'react-loading-indicators';

import Header from './components/header.jsx';
import Home from './pages/Home.jsx';

const supabase = createClient(import.meta.env.VITE_SUPABASE_URL, import.meta.env.VITE_SUPABASE_ANON_KEY);

function App() {
  const [globalLoading, setGlobalLoading] = useState(true); 

  useEffect(() => {
    const initialAppLoad = async () => {
      await new Promise(resolve => setTimeout(resolve, 500)); 
      setGlobalLoading(false);
    };
    initialAppLoad();
  }, []);

  return (
    <Router basename="/">
      {globalLoading && (
        <div className="flex items-center justify-center w-screen h-screen fixed top-0 left-0 bg-black z-50 pointer-events-none">
          <OrbitProgress color="#E0E0E0" size="medium" text="" textColor="" />
        </div>
      )}

      <Header />
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                supabase={supabase}
                setGlobalLoading={setGlobalLoading}
                globalLoading={globalLoading}
              />
            }
          />

          <Route
            path="*"
            element={
              <div
                className="
                  flex flex-col items-center justify-center
                  text-gray-700 bg-gray-50 p-4
                "
                style={{ minHeight: 'calc(100vh - 64px)' }}
              >
                <h1 className="text-6xl font-extrabold text-red-600">404</h1>
                <p className="text-2xl mt-4">Page Not Found</p>
                <p className="mt-2 text-lg">The page you are looking for does not exist.</p>
                <Link to="/" className="mt-8 px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition duration-300">
                  Go to Home
                </Link>
              </div>
            }
          />
        </Routes>
      </main>
    </Router>
  );
}

export default App;