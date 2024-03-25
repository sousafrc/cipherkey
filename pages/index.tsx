import type { NextPage } from "next";
import React, { useEffect, useState } from "react";
import HeroSection from "../components/HeroSection";
import { generateCipherKey } from "../utils/algorithm2";
import { motion, AnimatePresence } from "framer-motion";
import { BiCopy, BiMouse } from "react-icons/bi";
import Tilt from "react-parallax-tilt";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import StepsSection from "../components/StepsSection";
import Section1 from "../components/Section1";
import Section2 from "../components/Section2";
import Section3 from "../components/Section3";
import Image from "next/image";
import Footer from "../components/Footer";
import { HiOutlineMenuAlt3 } from "react-icons/hi";

const Home: NextPage = () => {
  const [website, setWebsite] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [cipherkey, setCipherKey] = useState("");
  const [backgroundIndex, setBackgroundIndex] = useState(0);
  const [opacity, setOpacity] = useState(1);

  const websiteRegex = /[a-z\-\_]/;

  useEffect(() => {
    const handleScroll = () => {
      setOpacity(1 - (window.scrollY * 1.7) / window.innerHeight);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    let toHash = {
      website,
      username,
      password,
    };

    if (website.length < 1) {
      toast.error("Informe um site!");
      return;
    }
    if (username.length < 1) {
      toast.error("Informe um nome de usuário!");
      return;
    }
    if (password.length < 1) {
      toast.error("Informe sua chave secreta!");
      return;
    }

    let cipheredCipherKey = generateCipherKey(JSON.stringify(toHash), 20);

    setCipherKey(cipheredCipherKey);
    window.navigator.clipboard.writeText(cipheredCipherKey);
    toast.success("Cipher key copiada para a área de transferência!");
  };

  return (
    <div className="overflow-x-hidden bg-gradient-to-br from-[#0d0511] to-[#090e14]">
      <HiOutlineMenuAlt3 className="absolute top-2 right-2 z-10 cursor-pointer text-3xl text-slate-50" />
      <div className="animate page-root animate relative">
        {/* Seção do topo */}
        <main className="flex flex-col items-center justify-center">
          {/* Logo */}
          <h1 className="background-animate z-10 text-2xl font-bold text-slate-50 xxs:text-6xl xs:text-7xl sm:text-8xl">
            Cipher Key
          </h1>
          <h5 className="z-10 text-center text-xs font-medium text-slate-400 xxs:text-lg xs:self-end sm:text-xl">
            A Chave é a Chave
          </h5>

          {/* Form */}
          <form
            className="z-10 mt-5 flex w-full flex-col items-center justify-center gap-y-1 text-center text-xs xxs:gap-y-5 xxs:text-base"
            onSubmit={submitHandler}
          >
            <div className="flex w-full flex-col items-center justify-center">
              <label className="input-label">Website</label>
              <input
                type="text"
                name="website"
                className="input-text"
                placeholder="google.com, app.geztor.me"
                value={website}
                onChange={(e) => {
                  setWebsite(
                    e.target.value.toLowerCase().replace(/[^a-z0-9\-]/, "")
                  );
                }}
              />
            </div>
            <div className="flex w-full flex-col items-center justify-center">
              <label className="input-label">Nome de usuário</label>
              <input
                type="text"
                name="username"
                className="input-text"
                placeholder="a_tur1ng, turing@gmail.com"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="flex w-full flex-col items-center justify-center">
              <label className="input-label">Chave secreta</label>
              <input
                type="password"
                name="passphrase"
                className="input-text"
                placeholder="Ktchau!Velocidade95$"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button type="submit" className="submit-button">
              Obter Cipher key 😎
            </button>
            <div
              className={`${cipherkey.length < 1
                ? "scale-y-0 opacity-0"
                : "scale-y-100 opacity-100"
                } animate relative mt-4 w-4/5 cursor-pointer rounded-xl bg-green-500 py-2 backdrop-blur-xl duration-500 hover:shadow-lg hover:shadow-green-400/30 hover:ring-1 hover:ring-green-200`}
            >
              <p className="select-none font-medium text-green-300">Cipher Key</p>
              <p className="select-all font-medium text-green-100">
                {cipherkey}
              </p>
              <BiCopy className="absolute right-3 top-5 select-none text-2xl text-green-300" />
            </div>
          </form>
        </main>
        {/* Ciano (mid top right) */}
        <div className="absolute top-[15%] left-[55%] z-0 h-96 w-52 rounded-full bg-cyan-500 opacity-30 mix-blend-exclusion blur-6xl filter sm:w-96"></div>
        {/* Violeta (center) */}
        <div className="absolute left-[40%] z-0 h-4/5 w-24 -rotate-45 rounded-full bg-gradient-to-t from-cyan-500 to-violet-600 opacity-30 blur-6xl sm:w-96 md:animate-blob2"></div>
        {/* Azul 'roxeado' (right top corner) */}
        <div className="absolute left-[80%] -top-[30%] z-0 h-4/5 w-24 -rotate-45 rounded-full bg-gradient-to-t from-cyan-500 to-purple-600 opacity-30 blur-6xl sm:w-96 md:animate-blob"></div>
        {/* Roxo 'azulado' (left) */}
        <div className="absolute -left-[10%] -bottom-[20%] z-0 h-4/5 w-24 rotate-45 rounded-full bg-gradient-to-t from-purple-500 to-cyan-600 opacity-30 blur-6xl sm:w-96 md:animate-blob3"></div>
        {/* Roxo (center) */}
        <div className="absolute top-[35%] left-[40%] z-0 h-1/2 w-24 rounded-full bg-purple-500 opacity-30 mix-blend-exclusion blur-6xl filter sm:w-96 md:animate-blob2"></div>
        {/* Roxo (bottom right) */}
        <div className="absolute bottom-10 right-10 z-0 h-96 w-24 rotate-45 transform bg-purple-500 opacity-50 mix-blend-exclusion blur-6xl filter first-letter:rounded-full md:animate-blob"></div>

        <div
          className={`absolute bottom-5 flex flex-col items-center gap-5 text-slate-400`}
          style={{ opacity: opacity }}
        >
          <BiMouse className="animate-updown text-2xl" />
          Role a página para entender melhor
        </div>
      </div>
      <div className="pt-10">
        <img src="/por-que-usar-cipherkey.svg" className="mx-auto" />
      </div>
      <Section1 />
      <Section2 />
      <Section3 />
      <Footer />
      <ToastContainer position="top-center" theme="colored" />
    </div>
  );
};

export default Home;