import React from "react";
import { FontChanger } from "./FontChanger/FontChanger";
import { WorkTime } from "./WorkTime/WorkTime";
import { useStateWithLocalStorage } from "./Utils";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  root: {
    fontSize: 20,
    width: "80%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  }
});
function App() {
  const [font, setFont] = useStateWithLocalStorage("defaultFont", "Open Sans");
  const classes = useStyles({font});
  return (
    <div className={classes.root}>
      <FontChanger value={font} onChange={setFont} />
      <WorkTime font={font} />
    </div>
  );
}

export default App;
