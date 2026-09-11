import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import {
  signInWithEmailAndPassword,
  setPersistence,
  browserSessionPersistence
} from "firebase/auth";

import { auth } from "../firebase/firebaseConfig";

function Login() {

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [mensagem, setMensagem] = useState("");

  const navigate = useNavigate();

  async function fazerLogin(event) {

    event.preventDefault();

    // Verifica se os campos foram preenchidos
    if (email === "" || senha === "") {
      setMensagem("Preencha e-mail e senha!");
      return;
    }

    try {

      // Mantém o usuário logado somente durante a sessão do navegador
      await setPersistence(auth, browserSessionPersistence);

      // Faz o login utilizando o Firebase Authentication
      await signInWithEmailAndPassword(
        auth,
        email,
        senha
      );

      // Se o login estiver correto, vai para a página Principal
      navigate("/Principal");

    } catch (erro) {

      console.log(erro);

      setMensagem("E-mail ou senha incorretos!");

    }
  }

  return (
    <div>

      <h1>Login</h1>

      <form onSubmit={fazerLogin}>

        <div>
          <label>E-mail:</label>

          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
        </div>

        <div>
          <label>Senha:</label>

          <input
            type="password"
            value={senha}
            onChange={(event) => setSenha(event.target.value)}
            required
          />
        </div>

        <button type="submit">
          Entrar
        </button>

      </form>

      <p>{mensagem}</p>

      <p>
        Não possui uma conta?{" "}
        <Link to="/cadastro">
          Cadastre-se
        </Link>
      </p>

    </div>
  );
}

export default Login;