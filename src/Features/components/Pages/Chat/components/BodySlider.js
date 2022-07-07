import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { useContext } from 'react';

import styles from '../Chat.module.scss';
import { AppContext } from '@/components/Context/appProvider';

const cx = classNames.bind(styles);

function BodySlider() {
    const { rooms, setIsAddRoomVisible, setSelectedRoomId } = useContext(AppContext);

    const handleAddRooms = () => {
        setIsAddRoomVisible(true);
    };

    return (
        <div className={cx('body-slider')}>
            <div className={cx('row no-gutters', 'body-slider-header')}>
                <FontAwesomeIcon icon={faChevronDown} />
                <h4>Danh Sách Phòng Chat</h4>
            </div>
            <div className={cx('room-slider')}>
                {rooms.map((data, index) => {
                    return (
                        <p key={index} onClick={() => setSelectedRoomId(data.id)}>
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
