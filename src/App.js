import styled from "styled-components";
import Counter from "./components/Counter";
import InputText from "./components/inputForm/InputText";
import Timer from "./components/Timer";

function App() {
  return (
    <Continer>
      <InputText />
      <Counter />
      <Timer />
    </Continer>
  );
}

export default App;

const Continer = styled.div`
  display: flex;
  gap: 60px;
  justify-content: center;
  flex-wrap: wrap;
`;
