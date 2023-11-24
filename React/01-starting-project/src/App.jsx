import CoreConcepts from "./components/CoreConcepts/CoreConcepts";
import Header from "./components/Header/Header";
import { CORE_CONCEPTS } from "./data";

function App() {
  return (
    <div>
      <header>
        <Header />        
      </header>
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcepts obj={CORE_CONCEPTS[0]} />
            <CoreConcepts obj={CORE_CONCEPTS[1]} />
            <CoreConcepts obj={CORE_CONCEPTS[2]} />
            <CoreConcepts obj={CORE_CONCEPTS[3]} />
          </ul>
        </section>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
