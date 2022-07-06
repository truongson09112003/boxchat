import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';

import styles from '../Chat.module.scss';

const cx = classNames.bind(styles);

function BodySlider() {
    return (
        <div className={cx('body-slider')}>
            <div className={cx('row no-gutters', 'body-slider-header')}>
                <FontAwesomeIcon icon={faChevronDown} />
                <h4>Danh Sách Phòng Chat</h4>
            </div>
            <div className={cx('room-slider')}>
                <p>Phòng 1</p>
                <p>Phòng 2</p>
                <p>Phòng 3</p>
                <p>Phòng 3</p>
                <p>Phòng 3</p>
                <p>Phòng 3</p>
                <p>Phòng 3</p>
                <p>Phòng 3</p>
                <p>Phòng 3</p>
                <p>Phòng 3</p>
                <p>Phòng 3</p>
                <p>Phòng 3</p>
                <button className={cx('add_room')}>+ Thêm Phòng</button>
            </div>
            <div className={cx('footer-slider')}>
                <p>© 2022 - Bản quyền thuộc về nguyễn trường sơn</p>
            </div>
        </div>
    );
}

export default BodySlider;
