import React, { useEffect, useRef, useState } from "react";

const Section2 = () => {
  const ref = useRef(null);
  useEffect(() => {
    import("@lottiefiles/lottie-player");
  });

  return (
    <section className="page-root flex gap-10 bg-gradient-to-tr from-[#090e14] to-[#0d0511] pt-20 text-slate-50 sm:gap-20 md:pt-0">
      <div className="z-10 px-2 text-center sm:px-0">
        <h1 className="z-10 bg-gradient-to-r from-blue-400 via-pink-400 to-orange-400 bg-clip-text text-2xl font-bold text-transparent xxs:text-5xl sm:text-8xl">
          A Chave é a Chave
        </h1>
        <h2 className="z-10 text-base font-medium text-slate-500 xs:text-xl sm:text-3xl">
            Descubra por que essa afirmação é importante
        </h2>
      </div>
      <div className="z-10 flex w-full flex-col items-center justify-center gap-10 px-2 sm:px-0 md:flex-row">
        <lottie-player
          src="https://assets6.lottiefiles.com/packages/lf20_eg88dyk9.json"
          background="transparent"
          ref={ref}
          speed="1"
          loop
          autoplay
          style={{ width: "400px", height: "400px" }}
        ></lottie-player>
        <p className="w-full px-5 text-center text-base text-slate-300 sm:px-16 sm:text-2xl md:w-1/3 md:px-0 md:text-right">
            Sua chave secreta deve ser única para você. Pode ser qualquer coisa, a data de nascimento do seu filho seguida pelo nome do seu animal de estimação, seu personagem de videogame favorito seguido pelo seu número favorito... Você entendeu a ideia.
          <br />
          <br />
            A mesma chave secreta ajudará você a gerar Cipher keys para milhares de outros sites. Uma única chave é tudo o que você precisa para gerar Cipher keys únicas para todas as suas contas.
        </p>
      </div>
    </section>
  );
};

export default Section2;