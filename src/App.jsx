import { Route, Routes } from "react-router-dom";
import TransactionPage from "./page/TransactionPage/TransactionPage";
import { SharedLayout } from "./components/SharedLayout/SharedLayout";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<TransactionPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
