import { HashRouter, BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import NotFound from './pages/NotFound';

export default function PageRouter() {
    return (

        <BrowserRouter>
            <Routes>
                <Route index element={<Login />} />
                {/* <Route path='/home' element={<App />} />
                <Route path='/create' element={<Create />} /> */}
                <Route path='*' element={< NotFound />} />
            </Routes>
        </BrowserRouter>
        // <HashRouter>
        //     <Routes>
        //         <Route path="/" element={<App />} />
        //         {/* <Route path='/create' element={<Create />} />
        //             <Route path='/edit/:id' element={<Edit />} />
        //             <Route path='/login' element={<Login />} />
        //             <Route path='/register' element={<Register />} />
        //             <Route path='/pricing' element={<Pricing />} /> */}
        //         <Route path='*' element={<NotFound />} />
        //     </Routes>
        // </HashRouter>
    );
}