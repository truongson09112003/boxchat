import classNames from 'classnames/bind';
import { Avatar, Typography } from 'antd';

import styles from './Message.module.scss';

const cx = classNames.bind(styles);

function Messager({ text, displayName, createdAt, photoURL }) {
    //{formatDate(createdAt?.seconds)}
    //                    {photoURL ? '' : displayName?.charAt(0)?.toUpperCase()}

    return (
        <div className={cx('wrapper')}>
            <div className={cx('message-t-e')}>
                <Avatar size="small" src={photoURL}>
                    A
                </Avatar>
                <Typography.Text className={cx('author')}>Trường Sơn</Typography.Text>
                <Typography.Text className={cx('date')}>19:2</Typography.Text>
            </div>
            <div>
                <Typography.Text className={cx('content')}>EM dang o</Typography.Text>
            </div>
        </div>
    );
}

export default Messager;
