import ReactDOM from "react-dom/client";
import { AppRouter } from "@routes/index";
import { Provider } from "react-redux";
import store from "@store/index";
import "@styles/global.css";
// import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <AppRouter />
  </Provider>
);
