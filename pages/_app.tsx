import { GeistProvider, CssBaseline } from "@geist-ui/core";
import { useState } from "react";
import Filter, { Context } from "components/Filter";

const App = ({ Component, pageProps }) => {
  const [themeType, setThemeType] = useState("dark");
  // const switchThemes = () => {
  //   setThemeType(last => (last === 'dark' ? 'light' : 'dark'))
  // }

  return (
    <GeistProvider themeType={themeType}>
      <Filter>
        <CssBaseline />
        <Component {...pageProps} />
      </Filter>
    </GeistProvider>
  );
};

export default App;
