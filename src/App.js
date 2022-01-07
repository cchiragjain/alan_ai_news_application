import { useEffect } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";

const alanKey =
  "5a6d14a9e8da336b1c0577d766c61b0e2e956eca572e1d8b807a3e2338fdd0dc/stage";

const App = () => {
  useEffect(() => {
    // will only run once on initialisation
    alanBtn({
      key: alanKey,
      onCommand: ({ command }) => {
        if (command === "testCommand") {
          alert("This code was executed");
        }
      },
    });
  }, []);
  return (
    <div>
      <h1>Alan AI News Application</h1>
    </div>
  );
};

export default App;
