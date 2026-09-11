import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../firebase/firebaseConfig";

function Principal() {

  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [dataNascimento, setDataNascimento] = useState("");
  const [carregando, setCarregando] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {

    // Verifica se existe um usuário autenticado
    const cancelarObservacao = onAuthStateChanged(auth, async (usuario) => {

      // Se não estiver logado, volta para o Login
      if (!usuario) {
        navigate("/");
        return;
      }

      try {

        // Busca os dados do usuário no Firestore
        const documento = await getDoc(
          doc(db, "usuarios", usuario.uid)
        );

        if (documento.exists()) {

          const dados = documento.data();

          setNome(dados.nome);
          setSobrenome(dados.sobrenome);
          setDataNascimento(dados.dataNascimento);

        }

      } catch (erro) {

        console.log("Erro ao buscar usuário:", erro);

      } finally {

        setCarregando(false);

      }
    });

    return () => cancelarObservacao();

  }, [navigate]);

  // Função para sair da aplicação
  async function sair() {

    try {

      await signOut(auth);

      navigate("/");

    } catch (erro) {

      console.log(erro);
      alert("Erro ao sair da aplicação!");

    }
  }

  // Enquanto o Firebase verifica a autenticação
  if (carregando) {
    return <p>Carregando...</p>;
  }

  return (
    <div>

      <h1>Bem-vindo, {nome}!</h1>

      <h2>Seus dados</h2>

      <p>Nome: {nome}</p>
      <p>Sobrenome: {sobrenome}</p>
      <p>Data de nascimento: {dataNascimento}</p>

      <button onClick={sair}>
        Sair
      </button>

    </div>
  );
}

export default Principal;