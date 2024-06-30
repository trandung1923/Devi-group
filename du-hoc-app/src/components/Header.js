import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png';

const Header = () => {
  return (
    <header>
      <img src={logo} alt="Company Logo" />
      <nav>
        <ul>
          <li><Link to="/">Trang chủ</Link></li>
          <li><Link to="/about">Giới thiệu</Link></li>
          <li><Link to="/services">Dịch vụ</Link></li>
          <li><Link to="/contact">Liên hệ</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
