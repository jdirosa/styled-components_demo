import React from "react";
import logo from "./logo.svg";
import { AppWraper, AppBody, Title, AppLogo, Button, Link } from "./styled/app";
import { ColorSliders } from "./components/color";

const [slow, medium, fast, insane] = [25, 5, 1.25, 0.5];
const App: React.FC = () => {
  const [spinSpeed, setSpinSpeed] = React.useState(slow);
  const [rgb, setRgb] = React.useState([40, 44, 52]);

  const randomizeColors = () => {
    // Generate random RGB values
    const newArr = [
      Math.floor(Math.random() * 256),
      Math.floor(Math.random() * 256),
      Math.floor(Math.random() * 256),
    ];
    setRgb(newArr);
  };
  const adjustSpeed = () => {
    if (spinSpeed === slow) {
      setSpinSpeed(medium);
      return;
    }
    if (spinSpeed === medium) {
      setSpinSpeed(fast);
      return;
    }
    if (spinSpeed === fast) {
      setSpinSpeed(insane);
      return;
    }
    setSpinSpeed(slow);
  };
  const handleRgbChanged = (val: number[]) => setRgb(val);
  return (
    <AppWraper>
      <AppBody rgb={rgb}>
        <Title rgb={rgb}>Styled Components!</Title>
        <AppLogo speed={spinSpeed} src={logo} onClick={adjustSpeed} />
        <ColorSliders rgb={rgb} onChange={handleRgbChanged} />
        <Button rgb={rgb} onClick={randomizeColors}>
          Get Random!
        </Button>
        <Link rgb={rgb} href="https://styled-components.com">
          Learn more...
        </Link>
      </AppBody>
    </AppWraper>
  );
};

export default App;
