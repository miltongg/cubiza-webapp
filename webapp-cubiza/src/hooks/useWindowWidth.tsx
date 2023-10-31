import { useState, useEffect } from 'react';

const useWindowWidth = () => {
  // Estado inicial
  const [windowWidth, setWindowWidth] = useState(0);

  // Función para actualizar el ancho de la ventana
  const updateWindowWidth = () => {
    setWindowWidth(window.innerWidth);
  }

  // Actualizar el ancho de la ventana al montar el componente y cuando se redimensione la ventana
  useEffect(() => {
    updateWindowWidth();
    window.addEventListener('resize', updateWindowWidth);

    // Limpiar el event listener al desmontar el componente
    return () => window.removeEventListener('resize', updateWindowWidth);
  }, []);

  return windowWidth;
};

export default useWindowWidth
