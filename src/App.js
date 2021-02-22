import CardEquipage from "./CardEquipage";
import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import { Button } from "reactstrap";

function App() {
  const myFirstName = ["Anthony"];
  const myLastName = "Vergès";

  const [newMembers, setNewMembers] = useState("");
  const [members, setMembers] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:5000/API/v1/equipage")
      .then((res) => {
        const members = res.data;

        setMembers(members);

        setLoading(false);
      })

      .catch((error) => {
        console.log(error);
      });
  }, []); // Chercher d'ou vient le problème du tableau de dépendance + Trouver comment refresh l'input avec des strings vides

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(`http://localhost:5000/API/v1/equipage`, {
      name: newMembers,
    });
    // setNewMembers("");
  };

  return (
    <div className="App">
      <header>
        <h1>
          <img
            src="https://www.wildcodeschool.com/assets/logo_main-e4f3f744c8e717f1b7df3858dce55a86c63d4766d5d9a7f454250145f097c2fe.png"
            alt="Wild Code School logo"
          />
          Les Argonautes
        </h1>
      </header>

      <main>
        <h2>Ajouter un(e) Argonaute</h2>
        <form className="new-member-form" onSubmit={handleSubmit}>
          <label htmlFor="name">Nom de l&apos;Argonaute</label>
          <div className="display-form-button">
            <div>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Entrez un membre"
                onChange={(e) => {
                  setNewMembers(e.target.value);
                }}
              />
            </div>
            <div>
              <Button className="button-submit" type="submit">
                Envoyer
              </Button>
            </div>
          </div>
        </form>

        <h2>Membres de l'équipage</h2>
        {loading ? (
          <div>
            <h1>Chargement...</h1>
          </div>
        ) : (
          members.map((item) => {
            return <CardEquipage key={item.id} name={item.name} />;
          })
        )}
      </main>

      <footer>
        <p>
          Réalisé par {myFirstName[0]} {myLastName} en Anthestérion de l'an 515
          avant JC
        </p>
      </footer>
    </div>
  );
}

export default App;
