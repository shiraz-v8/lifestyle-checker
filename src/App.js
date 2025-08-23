import "./styles/App.css";

import JourneyWizard from "./components/JourneyWizard";
import PageWrapper from "./components/PageWrapper";
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
