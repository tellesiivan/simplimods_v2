import {ChakraProvider, ColorModeScript} from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import {store} from "@simplimods/redux";
import chakraTheme from "./theme/chakraTheme";

import "@fontsource/space-grotesk";

// TODO: Fix type .env
const domain = process.env.REACT_APP_AUTH0_DOMAIN as string;
const clientId = process.env.PUBLIC_URL;

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <ChakraProvider theme={chakraTheme}>
          <App />
          <ColorModeScript
            initialColorMode={chakraTheme.config.initialColorMode}
          />
        </ChakraProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
