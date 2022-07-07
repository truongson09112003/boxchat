import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import Welcome from './Features/components/Pages/Welcome/Welcome';
import AuthContext from './components/Context/authContext';
import AppProvider from './components/Context/appProvider';

//lazy load khi nao cần thì mới tải lên
const LoginPage = lazy(() => import('@/Features/components/Pages/LoginPage/index'));
const ChatApp = lazy(() => import('@/Features/components/Pages/Chat'));
const AddRooms = lazy(() => import('./Features/components/Modal/addRooms'));
const InviteMemberModal = lazy(() => import('./Features/components/Modal/sendUserMembers'));

function App() {
    return (
        <div className="App">
            <Suspense fallback={<div>...loading...</div>}>
                <AuthContext>
                    <AppProvider>
                        <Routes>
                            <Route path="/" element={<Welcome />} />
                            <Route path="/login" element={<LoginPage />} />
                            <Route path="/chatapp" element={<ChatApp />} />
                        </Routes>
                        <AddRooms />
                        <InviteMemberModal />
                    </AppProvider>
                </AuthContext>
            </Suspense>
        </div>
    );
}

export default App;
