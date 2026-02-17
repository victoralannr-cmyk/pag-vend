
import React, { useMemo } from 'react';

const FallingLeaves: React.FC = () => {
  // Generate random properties for the "leaves" to ensure variety
  const leaves = useMemo(() => {
    return Array.from({ length: 15 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      delay: `${Math.random() * 10}s`,
      duration: `${15 + Math.random() * 20}s`,
      size: `${15 + Math.random() * 30}px`,
      opacity: 0.1 + Math.random() * 0.4,
      rotation: `${Math.random() * 360}deg`,
      sway: `${Math.random() * 40 - 20}px`
    }));
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <style>{`
        @keyframes fall {
          0% {
            transform: translateY(-100px) translateX(0) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: var(--leaf-opacity);
          }
          90% {
            opacity: var(--leaf-opacity);
          }
          100% {
            transform: translateY(110vh) translateX(var(--sway)) rotate(360deg);
            opacity: 0;
          }
        }
        .falling-leaf {
          position: absolute;
          top: -50px;
          animation: fall linear infinite;
        }
      `}</style>
      
      {leaves.map((leaf) => (
        <div
          key={leaf.id}
          className="falling-leaf"
          style={{
            left: leaf.left,
            animationDelay: leaf.delay,
            animationDuration: leaf.duration,
            '--leaf-opacity': leaf.opacity,
            '--sway': leaf.sway,
          } as any}
        >
          {/* Simple organic shape representing grass/leaf */}
          <svg
            width={leaf.size}
            height={leaf.size}
            viewBox="0 0 24 24"
            fill="none"
            style={{ transform: `rotate(${leaf.rotation})` }}
          >
            <path
              d="M12 2L4.5 20.29C4.19 21.04 4.88 21.75 5.63 21.44L12 18.82L18.37 21.44C19.12 21.75 19.81 21.04 19.5 20.29L12 2Z"
              fill="#dc2626"
              fillOpacity={leaf.opacity}
            />
          </svg>
        </div>
      ))}
    </div>
  );
};

export default FallingLeaves;
