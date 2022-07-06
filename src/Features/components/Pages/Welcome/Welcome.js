import classNames from 'classnames/bind';

import styles from './Welcome.module.scss';
import Background from '@/assets/Image/welcomeBackg.webp';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Welcome() {
    return (
        <div className={cx('wrapper')} style={{ backgroundImage: `url(${Background})` }}>
            <div className={cx('pyro')}>
                <div className={cx('before')}></div>
                <div className={cx('after')}></div>
            </div>
            <div>
                <div className={cx('Header')}>
                    <h2>Chào Mừng Bạn Đến Với Ứng Dụng ChatBox </h2>
                    <p>Ứng dụng web được phát triển bởi tester Trường Sơn</p>
                </div>
                <div className={cx('container')}>
                    <h2>Bạn muốn trò truyện kết bạn cùng bạn bè một cách riêng tư ?</h2>
                    <span>Đã có chúng tôi ở đây trải nghiệm cùng bạn</span>
                </div>
                <div className={cx('footer')}>
                    <h2>Hãy chọn chúng tôi ❤️</h2>
                    <Link to="/login">Đăng Nhập</Link>
                </div>
            </div>
        </div>
    );
}

export default Welcome;
