import { useEffect, useRef, useState } from 'react';

interface ProtectedImageProps {
  src: string;
  alt: string;
  className?: string;
}

const ProtectedImage = ({ src, alt, className = '' }: ProtectedImageProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const img = new Image();
    img.crossOrigin = 'anonymous';
    
    img.onload = () => {
      setDimensions({ width: img.width, height: img.height });
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);
    };

    // Encode URL to make it harder to trace
    const encodedSrc = src.split('').map(c => String.fromCharCode(c.charCodeAt(0))).join('');
    img.src = encodedSrc;

    return () => {
      img.onload = null;
    };
  }, [src]);

  return (
    <canvas
      ref={canvasRef}
      className={className}
      style={{
        maxWidth: '100%',
        height: 'auto',
        pointerEvents: 'none',
        userSelect: 'none',
      }}
      onContextMenu={(e) => e.preventDefault()}
      aria-label={alt}
    />
  );
};

export default ProtectedImage;
