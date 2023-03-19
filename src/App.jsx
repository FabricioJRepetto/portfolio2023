import { Route, Routes } from 'react-router-dom';
import { Background } from './components/background/Background';
import Home from './components/home/Home';
import NavBar from './components/home/sections/NavBar';
import useScrollReset from './components/hooks/useScrollReset';
import ClaritaAdmin from './components/projects/views/ClaritaAdmin';
import DietMate from './components/projects/views/DietMate';
import DogHouse from './components/projects/views/DogHouse';
import Provider from './components/projects/views/Provider';
import TicTacToe from './components/projects/views/TicTacToe';
import Layout from './components/utils/Layout';
import { Redirect } from './components/utils/Redirect';

function App() {
    useScrollReset()

    return (
        <>
            <NavBar />
            <div className="App relative fade-in">

                <Background />

                <Routes>
                    <Route path='/' element={<Redirect />} />
                    <Route path='/home' element={<Home />} />

                    <Route path="projects" element={<Layout />} >
                        <Route index element={<Layout />} />
                        <Route path="doghouse" element={<DogHouse />} />
                        <Route path="providerstore" element={<Provider />} />
                        <Route path="tictactoe" element={<TicTacToe />} />
                        <Route path="dietmate" element={<DietMate />} />
                        <Route path="claritaadmin" element={<ClaritaAdmin />} />
                    </Route>
                </Routes>
            </div>
        </>
    )
}

export default App