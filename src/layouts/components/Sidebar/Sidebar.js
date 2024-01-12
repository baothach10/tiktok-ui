import classNames from "classnames/bind";
import styles from './Sidebar.module.scss'
import Menu, {MenuItem} from './Menu'
import config from "~/config";
import { HomeIcon, LiveIcon, UserGroupIcon, HomeActiveIcon, LiveActiveIcon, UserGroupActiveIcon } from "src/components/Icons";
import SuggestedAccounts from "src/components/SuggestedAccounts";

const cx = classNames.bind(styles)

function Sidebar() {
    return <aside className={cx('wrapper')}>
        <Menu>
            <MenuItem title="For You" to={config.routes.home} icon={<HomeIcon/>} activeIcon={<HomeActiveIcon/>}/>
            <MenuItem title="Following" to={config.routes.following} icon={<UserGroupIcon/>} activeIcon={<UserGroupActiveIcon/>}/>
            <MenuItem title="LIVE" to={config.routes.live} icon={<LiveIcon/>} activeIcon={<LiveActiveIcon/>}/>
        </Menu>
        <SuggestedAccounts label={cx('Suggested accounts')}/>
        <SuggestedAccounts label={cx('Following accounts')}/>
    </aside>    
}

export default Sidebar;