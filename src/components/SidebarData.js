import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
  {
    title: 'User',
    path: '/dash/home',
    icon: <AiIcons.AiFillHome fontSize="30px"/>,
    cName: 'nav-text'
  },
  {
    title: 'Reports',
    path: '/reports',
    icon: <IoIcons.IoIosPaper fontSize="30px"/>,
    cName: 'nav-text'
  },
  {
    title: 'Products',
    path: '/products',
    icon: <FaIcons.FaCartPlus fontSize="30px"/>,
    cName: 'nav-text'
  },
  {
    title: 'Groups',
    path: '/team',
    icon: <IoIcons.IoMdPeople fontSize="30px"/>,
    cName: 'nav-text'
  },
  {
    title: 'Messages',
    path: '/messages',
    icon: <FaIcons.FaEnvelopeOpenText fontSize="30px"/>,
    cName: 'nav-text'
  },
  {
    title: 'Log Out',
    path: '/',
    icon: <IoIcons.IoMdHelpCircle fontSize="30px"/>,
    cName: 'nav-text'
  }
];
