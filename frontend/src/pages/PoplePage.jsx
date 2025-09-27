import { useEffect } from "react";
import loadPeople from "../api/api.peo";

function PeoplePage() {
  useEffect(() => {
    async function load() {
      const people = await loadPeople();
      console.log(people.data);
    }
    load();
  }, []);

  return (
    <div>
      <h1>Pagina principal</h1>
      <p>
        En esta pagina se mostraran las personas guardades en la base de datos
      </p>
    </div>
  );
}
export default PeoplePage;
