import React, { useEffect, useRef, useState } from "react";

const Section1 = () => {
  const ref = useRef(null);
  useEffect(() => {
    import("@lottiefiles/lottie-player");
  });

  return (
    <section className="page-root flex gap-10 pt-20 text-slate-50 sm:gap-20 md:pt-0">
      <div className="z-10 px-2 text-center sm:px-0">
        <h1 className="z-10 bg-gradient-to-r from-amber-400 via-green-400 to-blue-400 bg-clip-text text-2xl font-bold text-transparent xxs:text-5xl sm:text-8xl">
        As senhas evoluíram
        </h1>
        <h2 className="z-10 text-base font-medium text-slate-500 xs:text-xl sm:text-3xl">
        Você ainda tá preso nos anos 90?{" "}
          <span className="font-semibold text-slate-300">
          Cipher Key é o Futuro
          </span>
        </h2>
      </div>
      <div className="z-10 flex w-full flex-col items-center justify-center gap-10 px-2 sm:px-0 md:flex-row">
        <p className="w-full px-5 text-center text-base text-slate-300 sm:px-16 sm:text-2xl md:w-1/3 md:px-0 md:text-left">
        Uma Cipher key é uma senha única criptograficamente forte que só pode ser gerada por você.
          <br />
          <br />
        Tudo o que você precisa para gerar uma Cipher key é o nome do site, o nome de usuário da sua conta nesse site e uma chave secreta.
          <br />
          <br />
        Se você perder sua Cipher key, basta voltar aqui e inserir os mesmos detalhes para obter a mesma Cipher key sem qualquer problema. Não há necessidade de nenhum Gerenciador de Senhas, jamais!
        </p>
        <lottie-player
          src="https://assets3.lottiefiles.com/packages/lf20_wwboncdr.json"
          background="transparent"
          ref={ref}
          speed="1"
          loop
          autoplay
          style={{ width: "300px", height: "300px" }}
        ></lottie-player>
      </div>
    </section>
  );
};

export default Section1;