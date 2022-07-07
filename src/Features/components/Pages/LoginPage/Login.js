import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import firebase, { auth } from '@/components/Firebase';

import styles from './Login.module.scss';
import { addDocument, generateKeywords } from './../../../../components/Firebase/services';
import { GoogleICon } from '@/components/Icons';

const cx = classNames.bind(styles);

function Login() {
    const ggPRovider = new firebase.auth.GoogleAuthProvider();

    const handleLoginGoogle = async () => {
        const { additionalUserInfo, user } = await auth.signInWithPopup(ggPRovider);

        if (additionalUserInfo?.isNewUser) {
            addDocument('users', {
                displayName: user.displayName,
                email: user.email,
                photoURL: user.photoURL,
                uid: user.uid,
                providerId: additionalUserInfo.providerId,
                keywords: generateKeywords(user.displayName?.toLowerCase()),
            });
        }
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('header')}>
                    <h2>Đăng nhập ứng dụng web chat của bạn ❤️</h2>
                    <p>Có thể bằng google , facebook và một số thứ khác 😘😊</p>
                </div>
                <div className={cx('btn-login')}>
                    <button onClick={handleLoginGoogle}>
                        <GoogleICon />
                        Đăng Nhập Với Google
                    </button>
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
