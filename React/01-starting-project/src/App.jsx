import Header from "./components/Header/Header";
import {} from "./data";
import CoreConcepts from "./components/CoreConcepts/CoreConcepts";
import Examples from "./components/Examples/Examples";
import People from "./components/People/People";

function App() {
  return (
    <>
      <Header />
      <main>
        <CoreConcepts />
        <Examples />
        <People />
      </main>
    </>
  );
}

export default App;
