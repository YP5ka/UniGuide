import React, { createContext, useContext, useState } from 'react';

const CarouselContext = createContext();

export const CarouselProvider = ({ children }) => {
  const [isUpperCarouselActive, setIsUpperCarouselActive] = useState(true);

  return (
    <CarouselContext.Provider value={{ isUpperCarouselActive, setIsUpperCarouselActive }}>
      {children}
    </CarouselContext.Provider>
  );
};

export const useCarousel = () => {
  const context = useContext(CarouselContext);
  if (!context) {
    throw new Error('useCarousel must be used within a CarouselProvider');
  }
  return context;
};