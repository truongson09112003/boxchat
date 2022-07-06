import classNames from 'classnames/bind';

import styles from './Chat.module.scss';
import BodySlider from './components/BodySlider';
import UserInfo from './components/userInfor';

const cx = classNames.bind(styles);

function Side() {
    return (
        <div className={cx('side')}>
            <div>
                <UserInfo />
            </div>
            <div>
                <BodySlider />
            </div>
        </div>
    );
}

export default Side;
