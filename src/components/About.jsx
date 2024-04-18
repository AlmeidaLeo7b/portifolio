import React from "react";

const About = () => {
  return (
    <div name="About" className="w-full h-screen bg-[#19376D] text-[#F5EFE7]">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-[#F6B17A]">
              Sobre Mim
            </p>
          </div>

          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>Prazer em te conhecer, fique a vontade.</p>
          </div>
          <div>
            <p>
              Atuei como Professor de Técnico em Informática por 3 anos,
              atualmente buscando migrar para a área de desenvolvimento. Tive
              oportunidade de realizar Iniciação Cientifica na universidade
              sobre Detecção de objetos em imagens utilizando Deep Learning, a
              partir dai veio a paixão pela área de machine learning e
              inteligencia artificial
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
