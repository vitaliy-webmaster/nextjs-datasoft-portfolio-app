import { FC } from 'react';
import Link from 'next/link';
import Vegas from '../Vegas';

const Header: FC = () => {
  return (
    <>
      <header className="main-header">
        <div className="container">
          <Link href="/" className="logo">
            <img width="374" height="127" src="/images/logo_white.svg" alt="Main Page" />
          </Link>

          <div className="menu">
            <nav className="desktop-nav">
              <ul id="menu-menu-1" className="first-level">
                <li
                  id="menu-item-13"
                  className="menu-item menu-item-type-post_type menu-item-object-page current-menu-item page_item page-item-4 current_page_item menu-item-13"
                >
                  <Link href="/">Main</Link>
                </li>
                <li
                  id="menu-item-55"
                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-55"
                >
                  <Link href="/career">Career</Link>
                </li>
                <li
                  id="menu-item-56"
                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-56"
                >
                  <Link href="/skills">Skills</Link>
                </li>
                <li
                  id="menu-item-59"
                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-59"
                >
                  <Link href="/portfolio">Portfolio</Link>
                </li>
                <li
                  id="menu-item-57"
                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-57"
                >
                  <Link href="/contacts">Contacts</Link>
                </li>
              </ul>
            </nav>

            <nav className="mobile-nav"></nav>
            <div className="menu-icon">
              <div className="line"></div>
              <div className="line"></div>
              <div className="line"></div>
            </div>
          </div>
        </div>
      </header>
      <Vegas />
    </>
  );
};

export default Header;
