// src\components\InfoTime\index.jsx
import React, { useState } from "react";
import "./style.css";
import logo from "../../assets/imagens/logo.png";   

const jogadoresIniciais = [
  { numero: 1, nome: "Lucas Arcanjo" },
  { numero: 2, nome: "Claudinho" },
  { numero: 3, nome: "Camutanga" },
  { numero: 4, nome: "Lucas Valter" },
  { numero: 5, nome: "PK" },
  { numero: 6, nome: "Willian Oliveira" },
  { numero: 7, nome: "Dudu" },
  { numero: 8, nome: "Matheusinho" },
  { numero: 9, nome: "Osvaldo" },
  { numero: 10, nome: "Erick" },
  { numero: 11, nome: "Kayzer" }
];

export default function InfoTime() {
  const [jogadores, setJogadores] = useState(jogadoresIniciais);
  const [novoNome, setNovoNome] = useState("");
  const [novoNumero, setNovoNumero] = useState("");

  function adicionarJogador(e) {
    e.preventDefault();
    if (!novoNome || !novoNumero) return;
    setJogadores([
      ...jogadores,
      { numero: parseInt(novoNumero), nome: novoNome }
    ]);
    setNovoNome("");
    setNovoNumero("");
  }

  return (
    <div className="info-time">
        <img src={logo} alt="Vitória Logo" className="logo" />
      <h2>Jogadores do Vitória</h2>
      <form onSubmit={adicionarJogador} className="form-adicionar">
        <input
          type="number"
          placeholder="Número"
          value={novoNumero}
          onChange={e => setNovoNumero(e.target.value)}
          min="1"
          required
        />
        <input
          type="text"
          placeholder="Nome do jogador"
          value={novoNome}
          onChange={e => setNovoNome(e.target.value)}
          required
        />
        <button type="submit">Adicionar Jogador</button>
      </form>
      <ul>
        {jogadores.map((jogador) => (
          <li key={jogador.numero}>
            <span className="numero">{jogador.numero}</span> - {jogador.nome}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function saudacao() {
  return "Bem-vindo ao time do Vitória!";
}