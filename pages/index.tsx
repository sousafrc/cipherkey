import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className="page-root">
      <main className="flex flex-col items-center justify-center">
        <h1 className="z-10 text-2xl font-bold text-slate-100 xxs:text-6xl xs:text-7xl sm:text-8xl">
          CipherKey
        </h1>
        <h5 className="text-center text-xs text-slate-500 xs:self-center sm:text-xl">
        A Chave é a Chave
        </h5>
        <form className="z-10 mt-5 flex w-full flex-col items-center justify-center gap-y-5 text-center text-xs xxs:text-base">
          <div className="flex w-full flex-col items-center justify-center">
            <label className="input-label">Website</label>
            <input
              type="text"
              name="website"
              className="input-text"
              placeholder="google.com, app.geztor.com.br"
            />
          </div>
          <div className="flex w-full flex-col items-center justify-center">
            <label className="input-label">Nome usuário</label>
            <input
              type="text"
              name="username"
              className="input-text"
              placeholder="a_tur1ng, turing@gmail.com"
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
            />
          </div>
          <button
            type="submit"
            className="z-10 mt-7 h-8 w-4/5 rounded-full bg-blue-600 px-4 text-center text-gray-100 outline-none ring-1 ring-blue-500 hover:shadow-lg hover:shadow-blue-600/20 hover:ring-blue-400 focus:ring-cyan-300 xxs:h-12"
          >
            Obter CipherKey 😎
          </button>
        </form>
        <div className="absolute left-0 h-1/2 w-1/2 rounded-full bg-violet-600 opacity-30 blur-[100px]" />
        <div className="absolute right-0 top-0 h-1/2 w-1/2 rounded-full bg-cyan-600 opacity-30 blur-[100px]" />
      </main>
    </div>
  );
};

export default Home;
