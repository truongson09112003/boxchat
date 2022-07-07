import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '@/components/Firebase';

AuthContext.propTypes = {
    children: PropTypes.node.isRequired,
};

export const AuthContextTU = createContext();

function AuthContext({ children }) {
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);

    let history = useNavigate();

    useEffect(() => {
        const unmounted = auth.onAuthStateChanged((user) => {
            if (user) {
                const { displayName, email, uid, photoURL } = user;
                setUser({ displayName, email, uid, photoURL });
                setLoading(!loading);
                history('/chatapp');

                return;
            }

            history('/login');
        });

        return () => unmounted();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [history]);

    //loading ? <Spin style={{ position: 'fixed', inset: 0 }} /> :

    return <AuthContextTU.Provider value={{ user }}>{children}</AuthContextTU.Provider>;
}

export default AuthContext;
