import classNames from 'classnames/bind';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import firebase, { auth } from '@/components/Firebase';

import styles from './Login.module.scss';
import { addPost } from '@/app/appSlice/user';
import { useEffect } from 'react';

const cx = classNames.bind(styles);

function Login() {
    const fbPRovider = new firebase.auth.FacebookAuthProvider();
    const ggPRovider = new firebase.auth.GoogleAuthProvider();
    const emailPRovider = new firebase.auth.EmailAuthProvider();
    const phonePRovider = new firebase.auth.PhoneAuthProvider();
    const gitPRovider = new firebase.auth.GithubAuthProvider();

    const dispatch = useDispatch();

    const userJ = useSelector((state) => state.User[0]);

    console.log(userJ);

    let history = useNavigate();

    const handleLoginFacebook = () => {
        auth.signInWithPopup(fbPRovider);
    };

    const handleLoginGoogle = () => {
        auth.signInWithPopup(ggPRovider);
    };

    const handleLoginEmail = () => {
        auth.signInWithPopup(emailPRovider);
    };

    const handleLoginPhone = () => {
        auth.signInWithPopup(phonePRovider);
    };

    const handleLoginGit = () => {
        auth.signInWithPopup(gitPRovider);
    };

    useEffect(() => {
        const unmounted = auth.onAuthStateChanged((user) => {
            if (user) {
                dispatch(addPost(user));
                history('/chatapp');
            }
        });

        return () => unmounted();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('header')}>
                    <h2>Đăng nhập ứng dụng web chat của bạn ❤️</h2>
                    <p>Có thể bằng google , facebook và một số thứ khác 😘😊</p>
                </div>
                <div className={cx('btn-login')}>
                    <button onClick={handleLoginGoogle}>Đăng Nhập Với Google</button>
                    <button onClick={handleLoginFacebook}>Đăng Nhập Với Facebook</button>
                    <button onClick={handleLoginEmail}>Đăng Nhập Với Email</button>
                    <button onClick={handleLoginPhone}>Đăng Nhập Với SDT</button>
                    <button onClick={handleLoginGit}>Đăng Nhập Với Github</button>
                </div>
                <div className={cx('back')}>
                    <Link to="/">Bạn Muốn Quay Lại</Link>
                </div>
                <div className={cx('footer')}>
                    <p>© 2022 - Bản quyền thuộc về nguyễn trường sơn</p>
                </div>
            </div>
        </div>
    );
}

export default Login;
