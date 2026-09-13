import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TechnologyCard from './components/TechnologyCard';
import StackSidebar from './components/StackSidebar';
import Footer from './components/Footer';

function App() {
  const [technologies, setTechnologies] = useState([]);
  const [stack, setStack] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}technologies.json`)
      .then((res) => res.json())
      .then((data) => {
        setTechnologies(data);
        setLoading(false);
      })
      .catch(() => {
        toast.error('Failed to load technologies data!');
        setLoading(false);
      });
  }, []);

  const handleAddToStack = (tech) => {
    if (stack.some((item) => item.id === tech.id)) {
      toast.warning(`${tech.name} is already in your stack!`);
      return;
    }
    setStack([...stack, tech]);
    toast.success(`${tech.name} added to your stack!`);
  };

  const handleRemoveFromStack = (id) => {
    const itemToRemove = stack.find((item) => item.id === id);
    setStack(stack.filter((item) => item.id !== id));
    toast.info(`${itemToRemove?.name || 'Item'} removed from stack.`);
  };

  const handleClearAll = () => {
    setStack([]);
    toast.error('All items removed from stack.');
  };

  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans antialiased">
      <ToastContainer position="top-right" theme="light" autoClose={2000} />

      <Navbar />

      <main className="max-w-7xl mx-auto px-8">
        <Hero />

        <div className="mb-10 pt-8" id="technologies">
          <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">
            Explore the <span className="text-[#ec4899]">Technologies</span>
          </h2>
          <p className="text-gray-400 text-xs mt-2 font-medium">
            Pick one technology per category to build your ideal stack.
          </p>
        </div>

        {loading ? (
          <div className="text-center py-20 text-gray-400 text-xs">Loading Technologies...</div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {technologies.map((tech) => (
                <TechnologyCard
                  key={tech.id}
                  tech={tech}
                  onAddToStack={handleAddToStack}
                  isAdded={stack.some((item) => item.id === tech.id)}
                />
              ))}
            </div>

            <div className="lg:col-span-1">
              <StackSidebar
                stack={stack}
                onRemoveFromStack={handleRemoveFromStack}
                onClearAll={handleClearAll}
              />
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}

export default App;