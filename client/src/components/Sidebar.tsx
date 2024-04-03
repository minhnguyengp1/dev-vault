import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData.tsx';
import SubMenu from './SubMenu.tsx';
import styled from 'styled-components';
import { IconContext } from 'react-icons';
import { FaIcons, FaBars } from 'react-icons/fa';

export interface Post {
    id: number;
    title: string;
}

// const Nav = styled.div`
//     background: #15171c;
//     height: 80px;
//     display: flex;
//     justify-content: flex-start;
//     align-items: center;
// `;

const SidebarNav = styled.nav`
    width: 200px;
    background-color: #aa6e6e;
    padding: 20px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

    transition: 350ms;
    z-index: 10;
`;
// left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};

const SidebarWrap = styled.div`
    width: 100%;
`;

const Sidebar: React.FC = () => {
    const [posts, setPosts] = useState<Post[]>([]);

    // useEffect(() => {
    //     axios
    //         .get('/api/posts/new')
    //         .then((response) => {
    //             setPosts(response.data);
    //         })
    //         .catch((error) => {
    //             console.error('There was an error!', error);
    //         });
    // }, []);

    return (
        <>
            <IconContext.Provider value={{ color: '#fff' }}>
                <SidebarNav>
                    <SidebarWrap>
                        {SidebarData.map((item, index) => {
                            return <SubMenu item={item} key={index} />;
                        })}
                    </SidebarWrap>
                </SidebarNav>
            </IconContext.Provider>
        </>
    );
};

export default Sidebar;
