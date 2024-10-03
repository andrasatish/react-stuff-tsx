import { Menu } from 'antd';
import type { MenuProps } from 'antd';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

type MenuItem = Required<MenuProps>['items'][number];

const Header = () => {
    const [current, setCurrent] = useState('home');
    const navigate = useNavigate(); //It is used to navigate to the destination page.

    const items: MenuItem[] = [
        {
            label: 'Home',
            key: 'home'
        },
        {
            label: 'About',
            key: 'about'
        },
        {
            label: 'Contact',
            key: 'contact'
        },
        {
            label: 'Settings',
            key: 'settings'
        },
        {
            label: 'Posts',
            key: 'posts'
        }
    ]

    const onClick: MenuProps['onClick'] = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
        // navigate('/home')
        navigate(`/${e.key}`);
    };

    return (
        <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />
    )
}

export default Header;