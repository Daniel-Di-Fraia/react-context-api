import './App.css'

// import della libreria di routing
import { BrowserRouter, Routes, Route } from "react-router-dom";

// import del layout
import Layout from './assets/layout/Layout';


// importiamo le pagine di riferimento
import HomePage from './assets/pages/HomePage';
import AboutUs from './assets/pages/AboutUs';
import CardShop from './assets/pages/CardShop';
import InfoProduct from './assets/pages/InfoProduct';
import Error from './assets/pages/Error';
import { BudgetProvider } from './assets/context/BudgetContext';


function App() {


  return (
    <>
      {/* Wrappiamo l’intera applicazione con il BudgetProvider */}
      <BudgetProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<HomePage />} />
              <Route path="/aboutUs" element={<AboutUs />} />
              <Route path="/CardShop">
                <Route path="" element={<CardShop />} />
                <Route path=":id" element={<InfoProduct />} />
              </Route>
              <Route path="*" element={<Error />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </BudgetProvider>
    </>
  )
}

export default App
