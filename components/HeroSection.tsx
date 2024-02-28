import React from "react";

const HeroSection = () => {
  return (
    <section className="page-root text-slate-50">
      <h1 className="z-10 bg-gradient-to-t from-red-500 to-red-600 bg-clip-text text-8xl font-bold text-transparent">
      As senhas evoluíram
      </h1>
      <h2 className="z-10 text-3xl font-medium text-neutral-100">
      Você ainda tá preso nos anos 90?{" "}
        <span className="bg-gradient-to-t from-emerald-500 to-emerald-300 bg-clip-text text-transparent">
        CipherKey é o Futuro
        </span>{" "}
      </h2>
      <div className="z-10 mt-10 flex flex-col space-y-5 text-center">
        <h3 className="text-xl font-bold text-neutral-300">Por quê?</h3>
        <div className="grid grid-flow-col space-x-10">
          <div className="card-container">
            <h4 className="card-heading">Uma chave para governar todas as suas senhas</h4>
            <p className="card-content">
            O estresse de lembrar várias senhas acabou. CypherKey gera suas senhas, para seus sites e nomes de usuário.
            </p>
          </div>
          <div className="card-container">
            <h4 className="card-heading">Senha de forte como aço blindado</h4>
            <p className="card-content">
            CipherKey é criptograficamente forte. Levaria milhares de trilhões de anos para quebrar uma CipherKey, isso mesmo, é forte.
            </p>
          </div>
          <div className="card-container">
            <h4 className="card-heading">Seu segredo especial</h4>
            <p className="card-content">
            Sua chave secreta pertence apenas a você e mais ninguém. Somente você pode gerar uma senha para suas contas.
            </p>
          </div>
          <div className="card-container">
            <h4 className="card-heading">Open Source</h4>
            <p className="card-content">
            CipherKey é 100% gratuito e de código aberto. É transparente, anônimo e respeita a privacidade por padrão.
            </p>
          </div>
          <div className="card-container">
            <h4 className="card-heading">Sem conexão?</h4>
            <p className="card-content">
            CipherKey funciona sem internet. Todas as suas senhas são geradas localmente no seu computador e nenhuma conexão é feita com servidores externos. Tudo fica no seu dispositivo, seguro.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;