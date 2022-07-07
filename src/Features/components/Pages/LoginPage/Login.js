import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import firebase, { auth } from '@/components/Firebase';

import styles from './Login.module.scss';
import { addDocument, generateKeywords } from './../../../../components/Firebase/services';

const cx = classNames.bind(styles);

function Login() {
    const fbPRovider = new firebase.auth.FacebookAuthProvider();
    const ggPRovider = new firebase.auth.GoogleAuthProvider();
    const emailPRovider = new firebase.auth.EmailAuthProvider();
    const phonePRovider = new firebase.auth.PhoneAuthProvider();
    const gitPRovider = new firebase.auth.GithubAuthProvider();

    const handleLoginFacebook = (provider) => {
        // const { additionalUserInfo, user } = await auth.signInWithPopup(provider);

        auth.signInWithPopup(provider);
        // console.log(data);

        // if (additionalUserInfo?.isNewUser) {
        //     addDocument('users', {
        //         displayName: user.displayName,
        //         email: user.email,
        //         photoURL: user.photoURL,
        //         uid: user.uid,
        //         providerId: additionalUserInfo.providerId,
        //         keywords: generateKeywords(user.displayName?.toLowerCase()),
        //     });
        // }

        auth.onAuthStateChanged((user) => {
            console.log({ user });
        });
    };

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

    const handleLoginEmail = async () => {
        const { additionalUserInfo, user } = await auth.signInWithPopup(emailPRovider);

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

    const handleLoginPhone = () => {
        auth.signInWithPopup(phonePRovider);
    };

    const handleLoginGit = async () => {
        const { additionalUserInfo, user } = await auth.signInWithPopup(gitPRovider);

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
                    <button onClick={handleLoginGoogle}>Đăng Nhập Với Google</button>
                    <button onClick={() => handleLoginFacebook(fbPRovider)}>Đăng Nhập Với Facebook</button>
                    {/* <button>
                        <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
                    </button> */}
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
