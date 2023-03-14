import { Route, Routes } from 'react-router-dom';
import { Background } from './components/background/Background';
import Home from './components/home/Home';
import Layout from './components/utils/Layout';
import { Redirect } from './components/utils/Redirect';

function App() {
    return (
        <div className="App relative fade-in">
            <Background />

            <Routes>
                <Route path='/' element={<Redirect />} />
                <Route path='/home' element={<Home />} />

                <Route path="projects" element={<Layout />} >
                    <Route index element={<Home />} />
                    <Route path="dog_house" element={<Home />} />
                    <Route path="provider_store" element={<Home />} />
                    <Route path="tictactoe" element={<Home />} />
                    <Route path="die_tmate" element={<Home />} />
                    <Route path="clarita_admin" element={<Home />} />
                </Route>
            </Routes>
        </div>
    )
}

export default App