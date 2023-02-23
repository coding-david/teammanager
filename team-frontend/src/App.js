import logo from "./logo.svg";
import "./App.css";
import useAxios from "axios-hooks";
import Button from "@mui/material/Button";
import Header from "./components/Header";

function App() {
  const [{ data, loading, error }, refetch] = useAxios(
    "http://localhost:8080/team"
  );

  console.log(data);

  const createTeamCard = (teammate) => {
    return (
      <div className="card">
        <img
          style={{ height: "100px" }}
          src={teammate.imageUrl}
          alt="teammate-img"
        />
        <h2>{teammate.name}</h2>
        <h2>{teammate.email}</h2>
        <h2>{teammate.phone}</h2>
      </div>
    );
  };

  return (
    <>
      <Header />
      <div className="App">
        {data && data.map((teammate) => createTeamCard(teammate))}
      </div>
    </>
  );
}

export default App;
