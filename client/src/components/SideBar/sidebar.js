import React from 'react'
import homepglogo from '../../assets/home-page-logo.png'
import HomeLogo from '../../assets/svg/home-logo';
import Right from '../../assets/svg/right';
import Leaf from '../../assets/svg/leaf';
import Happy from '../../assets/svg/happy';
import Presentation from '../../assets/svg/presentation';
import SearchLogo from '../../assets/svg/search';
import Book from '../../assets/svg/book';
import Present from '../../assets/svg/present';
import { Sling as Hamburger } from 'hamburger-react';
import { useNavigate } from 'react-router-dom';




const Sidebar = ({isOpen,setOpen, Page, displayTrue }) => {
    const navigate = useNavigate();


    const SideBarData = [
        {
            title: 'Home',
            path: '/',
            icon: <HomeLogo color={`${Page === 'Home' ? "white" : "#C6C8D3"}`} />,
        },
        {
            title: 'Meditate',
            path: '/meditate',
            icon: <Leaf color={`${Page === 'Medidate' ? "white" : "#C6C8D3"}`} />,
        },
        {
            title: 'Therapy Session',
            path: '/therapy-session',
            icon: <Happy color={`${Page === 'Therapy Session' ? "white" : "#C6C8D3"}`} />,
        },
        {
            title: 'Assessment',
            path: '/assessment',
            icon: <Presentation color={`${Page === 'Assessment' ? "white" : "#C6C8D3"}`} />,
        },
        {
            title: 'Social Forum',
            path: '/social-forum',
            icon: <SearchLogo color={`${Page === 'Social Forum' ? "white" : "#C6C8D3"}`} />,
        },
        {
            title: 'Journaling',
            path: '/journaling',
            icon: <Book color={`${Page === 'Journaling' ? "white" : "#C6C8D3"}`} />,
        },
        {
            title: 'Rewards',
            path: '/rewards',
            icon: <Present color={`${Page === 'Rewards' ? "white" : "#C6C8D3"}`} />,
        },
    ];
    return (
        <div className={` ${displayTrue ? "show-side-bar" : "home-sidebar"}`}>
            <div className='hamburger-on-sidebar hamburger-menu-button'>
                < Hamburger toggled={isOpen} toggle={setOpen} />
            </div>
            <img src={homepglogo} alt='' />
            <div className='sidebar-buttons'>

                {SideBarData.map((data, index) => {
                    return (
                        <button key={index} className={`sidebar-btn ${Page === data.title ? "sidebar-btn-selected" : ""}`} onClick={() => navigate(`${data.path}`)}>
                            {data.icon}
                            <p className={`sidebar-btn-text ${Page === data.title ? "sidebar-btn-text-selected" : ""}`}>{data.title}</p>
                            {Page !== data.title ? <Right color="#C6C8D3" /> : <div></div>}
                        </button>
                    );
                })}

            </div>
            <div ></div>
            <div ></div>
            <div ></div>
            <div className='PrivacyText'>Privacy Policy</div>
        </div>
    )
}

export default Sidebar