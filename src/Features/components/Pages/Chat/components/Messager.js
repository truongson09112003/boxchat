import classNames from 'classnames/bind';
import { Avatar, Typography } from 'antd';
import { formatRelative } from 'date-fns/esm';

import styles from './Message.module.scss';

const cx = classNames.bind(styles);

function formatDate(seconds) {
    let formattedDate = '';

    if (seconds) {
        formattedDate = formatRelative(new Date(seconds * 1000), new Date());

        formattedDate = formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1);
    }

    return formattedDate;
}

function Messager({ text, displayName, createdAt, photoURL }) {
    //{formatDate(createdAt?.seconds)}
    //                    {photoURL ? '' : displayName?.charAt(0)?.toUpperCase()}

    return (
        <div className={cx('wrapper')}>
            <div className={cx('message-t-e')}>
                <Avatar size="small" src={photoURL}>
                    A
                </Avatar>
                <Typography.Text className={cx('author')}>{displayName}</Typography.Text>
                <Typography.Text className={cx('date')}>{formatDate()}</Typography.Text>
            </div>
            <div>
                <Typography.Text className={cx('content')}>{text}</Typography.Text>
            </div>
        </div>
    );
}

export default Messager;
