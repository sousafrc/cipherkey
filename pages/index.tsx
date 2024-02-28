import type { NextPage } from "next";
import React, { useEffect, useState } from "react";
import HeroSection from "../components/HeroSection";
import { generateCipherKey } from "../utils/functions";

const Home: NextPage = () => {
  const backgrounds = ["bg-violet-600", "bg-slate-500"];
  const [website, setWebsite] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [cipherkey, setCipherKey] = useState("");
  const [backgroundIndex, setBackgroundIndex] = useState(0);

  useEffect(() => {
    const totalSectionsOnPage = 2;
    const multiplier = window.innerHeight - 500 / totalSectionsOnPage;

    const handleScroll = () => {
      console.log("Multiplier: ", multiplier);
      console.log("window.scrollY", window.scrollY);
      setBackgroundIndex(Math.floor(window.scrollY / multiplier));
      console.log(
        "🚀 => handleScroll => Math.floor(window.scrollY / multiplier)",
        Math.floor(window.scrollY / multiplier)
      );
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

    let ciphered = generateCipherKey(JSON.stringify(toHash));
  };

  return (
    <div className="overflow-x-hidden">
      <div className="page-root">
        <main className="flex flex-col items-center justify-center">
          <h1 className="z-10 text-2xl font-bold text-slate-100 xxs:text-6xl xs:text-7xl sm:text-8xl">
            CipherKey
          </h1>
          <h5 className="text-center text-xs text-slate-500 xs:self-center sm:text-xl">
            A Chave é a Chave
          </h5>
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
                placeholder="google.com, app.geztor.com.br"
                value={website}
                onChange={(e) => setWebsite(e.target.value)}
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
              <label className="input-label">
                Chave secreta - Usado para todas as CipherKeys
              </label>
              <input
                type="text"
                name="passphrase"
                className="input-text"
                placeholder="Ktchau!Velocidade95$"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="z-10 mt-7 h-8 w-4/5 rounded-full bg-blue-600 px-4 text-center text-gray-100 outline-none ring-1 ring-blue-500 hover:shadow-lg hover:shadow-blue-600/20 hover:ring-blue-400 focus:ring-cyan-300 xxs:h-12"
            >
              Obter CypherKey 😎
            </button>
          </form>
          <h1 className="fixed top-0 text-8xl text-white">{backgroundIndex}</h1>
          <div
            className={`fixed left-0 h-1/2 w-full rounded-full duration-1000 ${backgrounds[backgroundIndex]} opacity-30 blur-[100px]`}
          />
          <div
            className={`fixed right-0 top-0 h-1/2 w-full rounded-full opacity-30 blur-[100px]`}
          />
        </main>
      </div>
      <HeroSection />
    </div>
  );
};

export default Home;