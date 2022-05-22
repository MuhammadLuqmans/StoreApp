import { Box } from "@mui/material";
import { BrowserRouter as Router } from "react-router-dom";
import Layout from "./component/Layout";
import AuthContextProvider from "./Context/firebaseContext";
import { Provider } from 'react-redux';
import  store  from './redux/store';

function App() {
  return (
    <Box>
    <Provider store={store}>
    <AuthContextProvider>
    <Router>
    <Layout />
    </Router>
    </AuthContextProvider>
    </Provider>
    </Box>
  );
}

export default App;
