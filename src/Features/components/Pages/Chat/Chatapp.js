import classNames from 'classnames/bind';

import styles from './Chat.module.scss';
import Side from './Siderbar';
import ChatBody from './ChatBody';

const cx = classNames.bind(styles);

function ChatApp() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('row no-gutters', 'content')}>
                <div className={cx('col m-3 c-0')}>
                    <Side />
                </div>
                <div className={cx('col m-9 c-12')}>
                    <ChatBody />
                </div>
            </div>
        </div>
    );
}

export default ChatApp;
