import { useState } from "react";
import { Link } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "../firebase/firebaseConfig";

function Cadastro() {

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [dataNascimento, setDataNascimento] = useState("");

  async function cadastrarUsuario(event) {

    event.preventDefault();

    // Verifica se todos os campos foram preenchidos
    if (
      email === "" ||
      senha === "" ||
      confirmarSenha === "" ||
      nome === "" ||
      sobrenome === "" ||
      dataNascimento === ""
    ) {
      alert("Preencha todos os campos!");
      return;
    }

    // Verifica se as duas senhas são iguais
    if (senha !== confirmarSenha) {
      alert("As senhas não são iguais!");
      return;
    }

    try {

      // Cria o usuário no Firebase Authentication
      const usuarioCriado = await createUserWithEmailAndPassword(
        auth,
        email,
        senha
      );

      // Pega o UID criado pelo Firebase
      const uid = usuarioCriado.user.uid;

      // Salva os dados do usuário no Firestore
      await setDoc(doc(db, "usuarios", uid), {
        email: email,
        nome: nome,
        sobrenome: sobrenome,
        dataNascimento: dataNascimento
      });

      alert("Usuário cadastrado com sucesso!");

      // Limpa os campos depois do cadastro
      setEmail("");
      setSenha("");
      setConfirmarSenha("");
      setNome("");
      setSobrenome("");
      setDataNascimento("");

    } catch (erro) {

      console.log(erro);

      if (erro.code === "auth/email-already-in-use") {

        alert("Este e-mail já está cadastrado!");

      } else if (erro.code === "auth/weak-password") {

        alert("A senha deve possuir pelo menos 6 caracteres!");

      } else if (erro.code === "auth/invalid-email") {

        alert("Digite um e-mail válido!");

      } else {

        alert("Erro ao cadastrar usuário!");

      }
    }
  }

  return (
    <div>

      <h1>Cadastro</h1>

      <form onSubmit={cadastrarUsuario}>

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

        <div>
          <label>Confirmar senha:</label>
          <input
            type="password"
            value={confirmarSenha}
            onChange={(event) => setConfirmarSenha(event.target.value)}
            required
          />
        </div>

        <div>
          <label>Nome:</label>
          <input
            type="text"
            value={nome}
            onChange={(event) => setNome(event.target.value)}
            required
          />
        </div>

        <div>
          <label>Sobrenome:</label>
          <input
            type="text"
            value={sobrenome}
            onChange={(event) => setSobrenome(event.target.value)}
            required
          />
        </div>

        <div>
          <label>Data de nascimento:</label>
          <input
            type="date"
            value={dataNascimento}
            onChange={(event) => setDataNascimento(event.target.value)}
            required
          />
        </div>

        <button type="submit">
          Cadastrar
        </button>

      </form>

      <p>
        Já possui uma conta?{" "}
        <Link to="/">Voltar para Login</Link>
      </p>

    </div>
  );
}

export default Cadastro;