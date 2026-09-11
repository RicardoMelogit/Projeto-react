import { useState } from 'react'
import './App.css'

function App() {

  // Estados para guardar o email, senha e a mensagem
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [mensagem, setMensagem] = useState('')

  // Função que verifica o email e a senha
  function validarLogin() {

    if (email === 'eduardo.lino@pucpr.br' && senha === '123456') {
      setMensagem('Acessado com sucesso!')
    } else {
      setMensagem('Usuário ou senha incorretos!')
    }

  }

  return (
    <div className="container">

      <h1>Login</h1>

      <div className="formulario">

        {/* Campo para digitar o email */}
        <input
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />

        {/* Campo para digitar a senha */}
        <input
          type="password"
          placeholder="Senha"
          value={senha}
          onChange={(event) => setSenha(event.target.value)}
        />

        {/* Botão que chama a função de login */}
        <button onClick={validarLogin}>
          Acessar
        </button>

        {/* Mostra a mensagem do resultado */}
        <p>{mensagem}</p>

      </div>

    </div>
  )
}

export default App