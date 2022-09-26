import { AppProvider } from "./context";
import { CalculatorPage } from "./crc-calculator/CalculatorPage";
import { AppTheme } from "./theme/AppTheme";

function App() {
  return (
    <AppProvider>
      <AppTheme>
        <CalculatorPage />
      </AppTheme>
    </AppProvider>
  );
}

export default App;
