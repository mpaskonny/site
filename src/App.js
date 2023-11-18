import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageObrSv from "./pages/obrSv/obrSv"
import PageGdeKupit from "./pages/gdeKupit/gdeKupit"
import PageoNas from './pages/oNas/oNas';
import PageLays from './pages/spisok/lays';
import PageMax from './pages/spisok/max';
import PageRifl from './pages/spisok/rifl';
import PageStix from './pages/spisok/stix';
import PageStax from './pages/spisok/stax';
import PagePech from './pages/spisok/pech';
import PageFooter from './pages/footer/footer';
import PageHeader from './pages/header/header';
import PageMenuM from './pages/menuM/menu';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <PageHeader/>
          <Routes>
            <Route path={'/'} element={<PageMenuM />} />
            <Route path={'/obrSv'} element={<PageObrSv />} />
            <Route path={'/oNas'} element={<PageoNas />} />
            <Route path={'/gdeKupit'} element={<PageGdeKupit />} />
            <Route path={'/stix'} element={<PageStix />} />
            <Route path={'/lays'} element={<PageLays />} />
            <Route path={'/rifl'} element={<PageRifl />} />
            <Route path={'/pech'} element={<PagePech />} />
            <Route path={'/max'} element={<PageMax />} />
            <Route path={'/stax'} element={<PageStax />} />
          </Routes>
        <PageFooter />
      </BrowserRouter>
    </div>
  );
}

export default App;
