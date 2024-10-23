import { useState, useEffect, MutableRefObject } from "react";

// Definir a tipagem do retorno e dos parâmetros
interface Dimensions {
  width: number;
  height: number;
}

export const useDimensions = (ref: MutableRefObject<HTMLElement | null>): Dimensions => {
  const [dimensions, setDimensions] = useState<Dimensions>({ width: 0, height: 0 });

  useEffect(() => {
    const updateDimensions = () => {
      if (ref.current) {
        setDimensions({
          width: ref.current.offsetWidth,
          height: ref.current.offsetHeight,
        });
      }
    };

    // Chama a função quando o componente é montado
    updateDimensions();

    // Escuta o evento de resize da janela
    window.addEventListener("resize", updateDimensions);

    // Remove o listener ao desmontar o componente
    return () => {
      window.removeEventListener("resize", updateDimensions);
    };
  }, [ref]); // Atualiza o efeito se o ref mudar

  return dimensions;
};
