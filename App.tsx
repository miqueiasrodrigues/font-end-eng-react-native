import { Provider } from "react-redux";
import store from "./src/redux/store";
import RoutesComponent from "./src/routes/RouterComponent";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <RoutesComponent />
    </Provider>
  );
};

export default App;
