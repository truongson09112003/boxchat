import classNames from 'classnames/bind';
import { Button, Tooltip, Avatar, Form, Input, Alert } from 'antd';

import styles from './Chat.module.scss';
import { UserAddOutlined } from '@ant-design/icons';
import Messager from './components/Messager';

const cx = classNames.bind(styles);

function ChatBody() {
    return (
        <div className={cx('chat-body')}>
            <div className={cx('chat-body-app-header')}>
                <div className={cx('header-one-app')}>
                    <p>Rom 1</p>
                    <span> day la romm 1</span>
                </div>
                <div className={cx('header-two-app')}>
                    <Button icon={<UserAddOutlined />}>Mời</Button>
                    <Avatar.Group size="small" maxCount={2} className={cx('Avatar-f-r-e')}>
                        <Tooltip title="Name">
                            <Avatar>A</Avatar>
                        </Tooltip>
                        <Tooltip title="Name">
                            <Avatar>B</Avatar>
                        </Tooltip>
                        <Tooltip title="Name">
                            <Avatar>A</Avatar>
                        </Tooltip>
                        <Tooltip title="Name">
                            <Avatar>A</Avatar>
                        </Tooltip>
                    </Avatar.Group>
                </div>
            </div>
            <div className={cx('body-chat-text')}>
                <Messager />
                <Messager />
                <Messager />
                <Messager />
                <Messager />
                <Messager />
                <Messager />
                <Messager />
                <Messager />
                <Messager />
                <Messager />
                <Messager />
                <Messager />
                <Messager />
                <Messager />
                <Messager />
                <Messager />
                <Messager />
                <Messager />
                <Messager />
                <Messager />
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <div className={cx('row no-gutters', 'df-tr-ef-s')}>
                    <input
                        placeholder="Nhập tin nhắn..."
                        bordered={false}
                        autoComplete="off"
                        className={cx('input-send')}
                    />
                    <Button type="primary">Gửi</Button>
                </div>
            </div>
        </div>
    );
}

export default ChatBody;
