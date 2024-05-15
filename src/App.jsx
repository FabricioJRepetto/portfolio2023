import { Route, Routes } from 'react-router-dom';
import { Background } from './components/background/Background';
import Home from './components/home/Home';
import NavBar from './components/home/sections/NavBar';
import useLang from './components/hooks/useLang';
import useScrollReset from './components/hooks/useScrollReset';
import ClaritaAdmin from './components/projects/views/ClaritaAdmin';
import DietMate from './components/projects/views/DietMate';
import DogHouse from './components/projects/views/DogHouse';
import Provider from './components/projects/views/Provider';
import TicTacToe from './components/projects/views/TicTacToe';
import Layout from './components/utils/Layout';
import { Redirect } from './components/utils/Redirect';
import ImageMutator from './components/projects/views/ImageMutator';

function App() {
    useScrollReset()
    const { lang, switchLang } = useLang()

    return (
        <>
            <NavBar lang={lang} switchLang={switchLang} />

            <div className="App fade-in">
                <Background />
                <Routes>
                    <Route path='/' element={<Redirect />} />
                    <Route path='/home' element={<Home lang={lang} />} />

                    <Route path="projects" element={<Layout />} >
                        <Route index element={<Layout />} /> {/* TODO */}
                        <Route path="doghouse" element={<DogHouse lang={lang} />} />
                        <Route path="providerstore" element={<Provider lang={lang} />} />
                        <Route path="tictactoe" element={<TicTacToe lang={lang} />} />
                        <Route path="dietmate" element={<DietMate lang={lang} />} />
                        <Route path="claritaadmin" element={<ClaritaAdmin lang={lang} />} />
                        <Route path="imagemutator" element={<ImageMutator lang={lang} />} />
                    </Route>
                    <Route path='*' element={<Redirect />} />
                </Routes>
            </div>
        </>
    )
}

export default App