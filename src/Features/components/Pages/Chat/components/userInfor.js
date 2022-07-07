import classNames from 'classnames/bind';
import { Button } from 'antd';
import { useContext } from 'react';

import styles from '../Chat.module.scss';
import AuthContext, { AuthContextTU } from './../../../../../components/Context/authContext';
import { auth } from '@/components/Firebase';

const cx = classNames.bind(styles);

function UserInfo() {
    const data = useContext(AuthContextTU);

    const handleLogOut = () => {
        auth.signOut();
    };

    const {
        user: { displayName, photoURL },
    } = data;

    return (
        <div className={cx('user-info')}>
            <div className={cx('row no-gutters', 'name-r-e')}>
                <div className={cx('m-8')}>
                    <div className={cx('row no-gutters', 'parents')}>
                        <img
                            src={
                                photoURL
                                    ? photoURL
                                    : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1Nx3WW32qhfvvm2PCnhXSmAHk6bw9dOJosg&usqp=CAU'
                            }
                            alt=""
                            className={cx('avatar')}
                        />
                        <p className={cx('name')}>{displayName}</p>
                    </div>
                </div>
                <div className={cx('m-4')}>
                    <Button onClick={handleLogOut}>Đăng Xuât</Button>
                </div>
            </div>
        </div>
    );
}

export default UserInfo;
