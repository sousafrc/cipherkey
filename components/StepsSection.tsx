import React from "react";
import {
  FaCloud,
  FaCrown,
  FaHandsHelping,
  FaSuperpowers,
} from "react-icons/fa";
import { GoGistSecret } from "react-icons/go";
import { RiCloudOffLine, RiDownloadCloudFill } from "react-icons/ri";

const StepsSection = () => {
  return (
    <section className="page-root snap-start bg-gradient-to-tr from-[#0d0511] to-[#090e14] text-slate-50">
      <div className="text-center">
        <h1 className="z-10 bg-gradient-to-r from-amber-400 via-green-400 to-blue-400 bg-clip-text text-8xl font-bold text-transparent">
        As senhas evoluíram
        </h1>
        <h2 className="z-10 text-3xl font-medium text-slate-500">
          Você não precisa mais lembrar suas senhas!{" "}
          <span className="font-semibold text-slate-300">Nunca mais!</span>{" "}
        </h2>
      </div>
      <div className="flex w-1/2 flex-col items-center justify-center text-center">
        <div className="mt-10 flex flex-col gap-5">
          <div className="flex flex-col items-center justify-center gap-5">
            <h4 className="flex h-16 w-16 items-center justify-center rounded-full bg-slate-300/30 text-center text-5xl">
              1
            </h4>
            <p className="text-xl">
            Uma CipherKey é uma senha única. É uma senha que é gerada usando os detalhes da sua conta. Tudo o que você precisa para gerar uma CipherKey é o site, seu nome de usuário nesse site e uma chave.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center gap-5">
            <h4 className="flex h-16 w-16 items-center justify-center rounded-full bg-slate-300/30 text-center text-5xl">
              2
            </h4>
            <p className="text-center text-xl">
            Sua chave é única para você. Pode ser qualquer coisa, a data de nascimento do seu filho seguida pelo nome do seu animal de estimação, seu personagem de videogame favorito seguido do seu número favorito. Esta chave deve ser única para você e é a única coisa que você precisa lembrar. A mesma chave ajudará você a gerar CipherKeys para milhares de sites. Uma única chave é tudo o que você precisa para gerar CipherKeys únicos para todos as suas contas.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center gap-5">
            <h4 className="flex h-16 w-16 items-center justify-center rounded-full bg-slate-300/30 text-center text-5xl">
              3
            </h4>
            <p className="w-1/2 text-center text-xl">
            Nenhuma informação sai do seu computador. CipherKey é criptograficamente seguro e funciona sem internet.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StepsSection;