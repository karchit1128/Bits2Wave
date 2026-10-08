import { useEffect, useState } from 'react';
import { Analytics } from '@vercel/analytics/react';
import './index.css';
import NotFound from './components/NotFound';
import Home from './components/Home';
import ProblemStatements from './components/ProblemStatements';

const validHashes = ['', '#top', '#play', '#about', '#tracks', '#prizes', '#timeline', '#faq', '#contact'];

function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);
  const [currentHash, setCurrentHash] = useState(window.location.hash);

  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentPath(window.location.pathname);
      setCurrentHash(window.location.hash);
    };
    
    window.addEventListener('popstate', handleLocationChange);
    window.addEventListener('hashchange', handleLocationChange);

    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      window.removeEventListener('hashchange', handleLocationChange);
    };
  }, []);

  if (currentPath === '/problem-statements') {
    return (
      <>
        <ProblemStatements />
        <Analytics />
      </>
    );
  }

  if (currentPath !== '/' || !validHashes.includes(currentHash)) {
    return (
      <>
        <NotFound />
        <Analytics />
      </>
    );
  }

  return (
    <>
      <Home />
      <Analytics />
    </>
  );
}

export default App;
