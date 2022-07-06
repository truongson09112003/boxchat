import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import Welcome from './Features/components/Pages/Welcome/Welcome';
import AuthContext from './components/Context/authContext';

//lazy load khi nao cần thì mới tải lên
const LoginPage = lazy(() => import('@/Features/components/Pages/LoginPage/index'));
const ChatApp = lazy(() => import('@/Features/components/Pages/Chat'));

function App() {
    return (
        <div className="App">
            <Suspense fallback={<div>...loading...</div>}>
                <AuthContext>
                    <Routes>
                        <Route path="/" element={<Welcome />} />
                        <Route path="/login" element={<LoginPage />} />
                        <Route path="/chatapp" element={<ChatApp />} />
                    </Routes>
                </AuthContext>
            </Suspense>
        </div>
    );
}

export default App;
