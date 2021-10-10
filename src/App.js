import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

import { Home } from './pages/Home';
import { FormPDF } from './pages/FormPDF';
import { NotFound } from './pages/NotFound';
import { PdfPage } from './pages/PdfPage';

function App() {
    return (
        <>
            <Router basename='/react-pdf'>
                <Header />
                <main className='container content'>
                    <Switch>
                        <Route exact path='/'>
                            <Home />
                        </Route>
                        <Route path='/form-pdf' component={FormPDF} />
                        <Route path='/pdf-page' component={PdfPage} />
                        <Route component={NotFound} />
                    </Switch>
                </main>
                <Footer />
            </Router>
        </>
    );
}

export default App;
