import "./App.css";
import { Counter } from "./comonents/counter/Counter";
import { FormInput } from "./comonents/form-input/FormInput";
import { Timer } from "./comonents/timer/Timer";

function App() {
  return (
    <div>
      <Counter />
      <FormInput />
      <Timer />
    </div>
  );
}

export default App;
