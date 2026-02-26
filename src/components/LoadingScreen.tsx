import { useEffect, useState } from 'react';
import logoBg from '@/assets/logo-bg.png';

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  const [progress, setProgress] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        const increment = prev < 70 ? 3 : prev < 90 ? 2 : 1;
        return Math.min(prev + increment, 100);
      });
    }, 60);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress >= 100) {
      setTimeout(() => setFadeOut(true), 300);
      setTimeout(() => onComplete(), 1000);
    }
  }, [progress, onComplete]);

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-primary transition-opacity duration-700 ${
        fadeOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <div className="flex flex-col items-center gap-8">
        <img
          src={logoBg}
          alt="Barley Pets"
          className="w-40 h-40 md:w-52 md:h-52 object-contain animate-pulse-soft rounded-2xl"
        />
        <div className="w-64 md:w-80">
          <div className="h-1.5 rounded-full overflow-hidden" style={{ backgroundColor: 'hsl(191 76% 28%)' }}>
            <div
              className="h-full loading-bar rounded-full transition-all duration-300 ease-out"
              style={{ width: `${progress}%`, backgroundColor: 'hsl(46 76% 88%)' }}
            />
          </div>
          <p className="text-center mt-3 text-primary-foreground/80 text-sm font-body font-medium">
            {progress < 100 ? 'Preparando tudo com carinho...' : 'Pronto!'}
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
