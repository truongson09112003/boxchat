import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { useContext } from 'react';
import { Button } from 'antd/lib/radio';

import styles from '../Chat.module.scss';
import { AppContext } from '@/components/Context/appProvider';
import { auth } from '@/components/Firebase';
import { useNavigate } from 'react-router-dom';

const cx = classNames.bind(styles);

function BodySlider() {
    const { rooms, setIsAddRoomVisible, setSelectedRoomId, setIsHidenMobile } = useContext(AppContext);

    const history = useNavigate();

    const handleAddRooms = () => {
        setIsAddRoomVisible(true);
    };

    const handleLogOut = () => {
        console.log('test');

        auth.signOut();
        history('/login');
    };

    return (
        <div className={cx('body-slider')}>
            <div className={cx('row no-gutters', 'body-slider-header')}>
                <FontAwesomeIcon icon={faChevronDown} />
                <h4>Danh Sách Phòng Chat</h4>
                <Button onClick={handleLogOut} className={cx('btn-logout-mobile')}>
                    Đăng Xuất
                </Button>
            </div>
            <div className={cx('room-slider')}>
                {rooms.map((data, index) => {
                    return (
                        <p
                            key={index}
                            onClick={() => {
                                setSelectedRoomId(data.id);
                                setIsHidenMobile(false);
                            }}
                        >
                            {data.name}
                        </p>
                    );
                })}
                <button className={cx('add_room')} onClick={handleAddRooms}>
                    + Thêm Phòng
                </button>
            </div>
            <div className={cx('footer-slider')}>
                <p>© 2022 - Bản quyền thuộc về nguyễn trường sơn</p>
            </div>
        </div>
    );
}

export default BodySlider;
