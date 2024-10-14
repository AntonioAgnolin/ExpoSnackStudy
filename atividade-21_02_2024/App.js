import React, { useState } from 'react';

// Componente de Saudação
function Saudacao({ nome }) {
  return <p>Olá, {nome}!</p>; // Exibe uma saudação com o nome fornecido
}

// Componente principal do aplicativo
function App() {
  // Variáveis de estado para armazenar o texto de entrada e o nome
  const [textoInput, setTextoInput] = useState(''); // Estado para o texto de entrada
  const [nome, setNome] = useState(''); // Estado para o nome

  // Manipulador de evento para mudança de entrada
  const handleInputChange = (event) => {
    setTextoInput(event.target.value); // Atualiza o estado textoInput com o valor de entrada
  };

  // Manipulador de evento para clique no botão
  const handleButtonClick = () => {
    setNome(textoInput); // Define o estado nome com o texto de entrada
    setTextoInput(''); // Limpa o texto de entrada
  };

  // Renderiza os componentes
  return (
    <div>
      {/* Campo de entrada para inserir o nome */}
      <input
        type="text"
        value={textoInput}
        onChange={handleInputChange}
        placeholder="Digite seu nome"
      />
      {/* Botão para enviar o nome */}
      <button onClick={handleButtonClick}>Enviar</button>
      {nome && <Saudacao nome={nome} />} {/* Exibe a saudação apenas se o nome não estiver vazio */}
    </div>
  );
}

export default App; // Exporta o componente App
