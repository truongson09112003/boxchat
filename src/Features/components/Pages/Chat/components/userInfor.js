import classNames from 'classnames/bind';
import { Button } from 'antd';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import styles from '../Chat.module.scss';
import { AuthContextTU } from './../../../../../components/Context/authContext';
import { auth } from '@/components/Firebase';

const cx = classNames.bind(styles);

function UserInfo() {
    const data = useContext(AuthContextTU);

    const history = useNavigate();

    const handleLogOut = () => {
        auth.signOut();
        history('/');
    };

    return (
        <div className={cx('user-info')}>
            <div className={cx('row no-gutters', 'name-r-e')}>
                <div className={cx('m-8')}>
                    <div className={cx('row no-gutters', 'parents')}>
                        <img src={data.user.photoURL} alt="" className={cx('avatar')} />
                        <p className={cx('name')}>{data.user.displayName}</p>
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
