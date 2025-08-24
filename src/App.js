import { JourneyWizard, PageWrapper } from "./components";
import "./styles/App.css";

function App() {
  return (
    <div className="App">
      <PageWrapper title="Lifestyle Check">
        <JourneyWizard />
      </PageWrapper>
    </div>
  );
}

export default App;
