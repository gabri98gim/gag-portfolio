import React, { useEffect, useRef, useState } from 'react';
import * as pdfjsLib from 'pdfjs-dist';

// Use a CDN worker for simplicity in Astro
pdfjsLib.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.min.mjs`;

const PdfThumbnail = ({ pdfUrl, title, position = "top", fit = "cover" }) => {
  const canvasRef = useRef(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    let isMounted = true;

    const renderThumbnail = async () => {
      try {
        const loadingTask = pdfjsLib.getDocument(pdfUrl);
        const pdf = await loadingTask.promise;
        const page = await pdf.getPage(1);

        const viewport = page.getViewport({ scale: 0.5 }); // Lower scale for thumbnails
        const canvas = canvasRef.current;
        if (!canvas) return;

        const context = canvas.getContext('2d');
        canvas.height = viewport.height;
        canvas.width = viewport.width;

        const renderContext = {
          canvasContext: context,
          viewport: viewport,
        };

        if (isMounted) {
          await page.render(renderContext).promise;
          setLoading(false);
        }
      } catch (err) {
        console.error('Error rendering PDF thumbnail:', err);
        if (isMounted) {
          setError(true);
          setLoading(false);
        }
      }
    };

    renderThumbnail();

    return () => {
      isMounted = false;
    };
  }, [pdfUrl]);

  return (
    <div className={`relative w-full h-full flex items-center justify-center ${fit === 'contain' ? 'bg-white p-4' : 'bg-gray-100 dark:bg-gray-800'} overflow-hidden`}>
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="w-8 h-8 border-4 border-(--color-primary) border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
      
      {error ? (
        <div className="flex flex-col items-center p-4 text-center">
          <span className="material-icons text-4xl text-gray-400 mb-2">picture_as_pdf</span>
          <p className="text-xs text-gray-500 uppercase font-bold">{title}</p>
        </div>
      ) : (
        <canvas 
          ref={canvasRef} 
          className={`w-full h-full transition-opacity duration-500 ${loading ? 'opacity-0' : 'opacity-100'}`}
          style={{ 
            objectFit: fit, 
            objectPosition: position 
          }}
        />
      )}
    </div>
  );
};

export default PdfThumbnail;
