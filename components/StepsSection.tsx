import React, { useState } from "react";
import {
  FaCloud,
  FaCrown,
  FaHandsHelping,
  FaSuperpowers,
} from "react-icons/fa";
import { GoGistSecret } from "react-icons/go";
import { RiCloudOffLine, RiDownloadCloudFill } from "react-icons/ri";
import {
  IoIosArrowDroprightCircle,
  IoIosArrowDropleftCircle,
} from "react-icons/io";
import { AnimatePresence, motion } from "framer-motion";

const StepsSection = () => {
  const [step, setStep] = useState(0);

  const handleStep = (direction: "right" | "left") => {
    if (direction === "right") {
      setStep((step + 1) % 3);
      console.log(step);
    } else {
      if (step === -1) {
        setStep(0);
      }
      setStep(step === 0 ? 2 : step - 1);
    }
  };

  return (
    <section className="page-root snap-start bg-gradient-to-tr from-[#0d0511] to-[#090e14] text-slate-50">
      <div className="text-center">
        <h1 className="z-10 bg-gradient-to-r from-amber-400 via-green-400 to-blue-400 bg-clip-text text-8xl font-bold text-transparent">
          As senhas evoluíram
        </h1>
        <h2 className="z-10 text-3xl font-medium text-slate-500">
          Você ainda tá preso nos anos 90?{" "}
          <span className="font-semibold text-slate-300">
            CipherKey é o Futuro
          </span>{" "}
        </h2>
      </div>
      <div className="mt-10 w-1/2">
        <div className="flex flex-row items-center justify-evenly">
          <button className="progress-point flex-shrink-0 bg-amber-400 text-amber-50">
            1
          </button>
          <div
            className={`h-1 w-full ${
              step >= 1
                ? "bg-gradient-to-r from-amber-400 to-green-400"
                : "bg-slate-600"
            }`}
          />
          <button
            className={`progress-point text-green-50 ${
              step >= 1 ? "bg-green-400" : "bg-slate-600"
            }`}
          >
            2
          </button>
          <div
            className={`h-1 w-full ${
              step === 2
                ? "bg-gradient-to-r from-green-400 to-blue-400"
                : "bg-slate-600"
            }`}
          />
          <button
            className={`progress-point text-blue-50 ${
              step === 2 ? "bg-blue-400" : "bg-slate-600"
            }`}
          >
            3
          </button>
        </div>
        <AnimatePresence exitBeforeEnter>
          <motion.div className="relative mt-5 flex min-h-fit w-full flex-col items-center justify-start rounded-3xl bg-slate-600/30 p-10 text-center">
            {step === 0 && (
              <>
                <h4 className="text-3xl font-semibold text-slate-400">
                  Verdadeiramente seu
                </h4>
                <p className="mt-5 w-4/5 text-xl text-slate-300">
                  Uma CipherKey é uma senha única. É uma senha criptograficamente forte que é gerada usando os detalhes da sua conta.
                  <br />
                  <br />
                  Tudo o que você precisa para gerar uma CipherKey é o site, seu nome de usuário nesse site e uma chave.
                </p>
              </>
            )}
            {step === 1 && (
              <>
                <h4 className="text-3xl font-semibold text-slate-400">
                  A Chave é a Chave
                </h4>
                <p className="mt-5 w-4/5 text-xl text-slate-300">
                  Sua chave é única para você. Pode ser qualquer coisa, a data de nascimento do seu filho seguida pelo nome do seu animal de estimação, seu personagem de videogame favorito seguido do seu número favorito. <br />
                  <br /> Esta chave deve ser única para você e é a única coisa que você precisa lembrar. A mesma chave ajudará você a gerar CipherKeys para milhares de outros sites. Uma única chave é tudo o que você precisa para gerar Cipherkeys únicas para todas as suas contas.
                </p>
              </>
            )}
            {step === 2 && (
              <>
                <motion.h4 className="text-3xl font-semibold text-slate-400">
                Seguro? Pode apostar!
                </motion.h4>
                <motion.p className="mt-5 w-3/5 text-xl text-slate-300">
                  Nenhuma informação jamais sai do seu computador. <br />
                  <br />
                  CipherKey é criptograficamente seguro e funciona sem internet. <br />
                  <br /> CipherKey tem o código 100% aberto, então você sabe que é seguro.
                </motion.p>
              </>
            )}
            <IoIosArrowDropleftCircle
              className="absolute top-1/2 left-5 -translate-y-1/2 cursor-pointer text-5xl text-slate-400"
              onClick={() => handleStep("left")}
            />
            <IoIosArrowDroprightCircle
              className="absolute top-1/2 right-5 -translate-y-1/2 cursor-pointer text-5xl text-slate-400"
              onClick={() => handleStep("right")}
            />
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default StepsSection;