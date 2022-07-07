import classNames from 'classnames/bind';
import { useContext, useRef, useState, useMemo, useEffect } from 'react';
import { Button, Tooltip, Avatar, Alert, Form, Input } from 'antd';

import styles from './Chat.module.scss';
import { UserAddOutlined } from '@ant-design/icons';
import Messager from './components/Messager';
import { AppContext } from '@/components/Context/appProvider';
import { AuthContextTU } from './../../../../components/Context/authContext';
import { addDocument } from '@/components/Firebase';
import useFirebase from './../../../../hook/useFirebase';

const cx = classNames.bind(styles);

function ChatBody() {
    const { selectedRoom, members, setIsInviteMemberVisible } = useContext(AppContext);

    // const selectedRoom = useMemo(() => rooms.find((room) => room.id === selectedRoomId), [rooms, selectedRoomId]);

    const {
        user: { uid, photoURL, displayName },
    } = useContext(AuthContextTU);
    const [inputValue, setInputValue] = useState('');
    const [form] = Form.useForm();
    const inputRef = useRef(null);
    const messageListRef = useRef(null);

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleOnSubmit = () => {
        addDocument('messages', {
            text: inputValue,
            uid,
            photoURL,
            roomId: selectedRoom.id,
            displayName,
        });

        form.resetFields(['message']);

        // focus to input again after submit
        if (inputRef?.current) {
            setTimeout(() => {
                inputRef.current.focus();
            });
        }
    };

    const condition = useMemo(
        () => ({
            fieldName: 'roomId',
            operator: '==',
            compareValue: selectedRoom.id,
        }),
        [selectedRoom.id],
    );

    const messages = useFirebase('messages', condition);

    useEffect(() => {
        // scroll to bottom after message changed
        if (messageListRef?.current) {
            messageListRef.current.scrollTop = messageListRef.current.scrollHeight + 50;
        }
    }, [messages]);

    return (
        <div className={cx('chat-body')}>
            {selectedRoom.id ? (
                <>
                    <div className={cx('chat-body-app-header')}>
                        <div className={cx('header-one-app')}>
                            <p>{selectedRoom.name}</p>
                            <span>{selectedRoom.description}</span>
                        </div>
                        <div className={cx('header-two-app')}>
                            <Button icon={<UserAddOutlined />} onClick={() => setIsInviteMemberVisible(true)}>
                                Mời
                            </Button>
                            <Avatar.Group size="small" maxCount={2} className={cx('Avatar-f-r-e')}>
                                {members.map((data) => (
                                    <Tooltip title={data.displayName} key={data.id}>
                                        <Avatar
                                            src={
                                                data.photoURL ||
                                                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1Nx3WW32qhfvvm2PCnhXSmAHk6bw9dOJosg&usqp=CAU'
                                            }
                                        >
                                            B
                                        </Avatar>
                                    </Tooltip>
                                ))}
                            </Avatar.Group>
                        </div>
                    </div>
                    <div className={cx('body-chat-text')}>
                        <div className={cx('body-chat-text-group')}>
                            {messages.map((mes, index) => (
                                <Messager
                                    text={mes.text}
                                    photoURL={mes.photoURL}
                                    displayName={mes.displayName}
                                    createdAt={mes.createdAt}
                                />
                            ))}
                        </div>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <Form.Item name="message">
                            <Input
                                ref={inputRef}
                                onChange={handleInputChange}
                                onPressEnter={handleOnSubmit}
                                placeholder="Nhập tin nhắn..."
                                bordered={false}
                                autoComplete="off"
                            />
                        </Form.Item>
                        <Button type="primary" onClick={handleOnSubmit}>
                            Gửi
                        </Button>
                    </div>
                </>
            ) : (
                <Alert message="Hãy chọn phòng" type="info" showIcon style={{ margin: 5 }} closable />
            )}
        </div>
    );
}

export default ChatBody;
