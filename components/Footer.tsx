import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-col items-center gap-2">
      <h3 className="text-3xl font-bold text-slate-100">Cipher Key</h3>
      <div className="text-center">
        <p className="text-slate-400">
          Copyright © 2024 <b>Cipher Key</b>
        </p>
        <p className="text-slate-400">Desenvolvido com ❤️ por <strong>Fernando Sousa ∵ F.R.C.</strong></p>
      </div>
    </div>
  );
};

export default Footer;