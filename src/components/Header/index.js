import Image from "next/image";
import Link from "next/link";
import logo from "@/images/logo.svg";
import { LiveSign } from "@/components/LiveSign";
import React, { useEffect, useState, useRef } from "react";
import { slide as Menu } from "react-burger-menu";
import { BiSearch } from "react-icons/bi";


export function Header() {

    const handleShowSettings = (event) => {
        event.preventDefault();
        setShowSettings(true);
    };

    const [sticky, setSticky] = useState('');

    useEffect(() => {
        const topAd = document.getElementById('top-ad');
        const topAdHeight = topAd ? topAd.offsetHeight : 0;

        const isSticky = () => {
            const scrollTop = window.scrollY;
            const stickyClass = scrollTop >= topAdHeight - 20 ? 'sticky' : '';
            setSticky(stickyClass);
        };

        // Add the event listener for scroll
        window.addEventListener('scroll', isSticky);

        // Clean up the event listener when component unmounts
        return () => {
            window.removeEventListener('scroll', isSticky);
        };
    }, []);

    useEffect(() => {
        const handleScrollToTop = () => {
            if (window.scrollY <= 0) {
                setSticky(''); // Remove the sticky class when scrolled to top
            }
        };

        window.addEventListener('scroll', handleScrollToTop);

        return () => {
            window.removeEventListener('scroll', handleScrollToTop);
        };
    }, []); // Empty dependency array to ensure this effect only runs once

    const [inputFocused, setInputFocused] = useState(false);
    const inputRef = useRef(null);

    useEffect(() => {
        if (inputFocused && inputRef.current) {
            inputRef.current.focus();
            setInputFocused(false); // Reset inputFocused to false after focusing
        }
    }, [inputFocused]);

    const handleDocumentClick = (event) => {
        if (event.target.matches('#react-burger-menu-btn')) {
            setInputFocused(true);
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleDocumentClick);

        return () => {
            document.removeEventListener('click', handleDocumentClick);
        };
    }, []);

    const classes = `section-header ${sticky}`;

    return (
        <>
            <header className={classes}>

                <Menu noOverlay>
                    <div className="offcanvas-wrapper">
                        <div className="menu">

                            <div className="menu-section">
                                <h5>أخبار</h5>
                                <div className="news-wrapper">
                                    <div className="item-col">
                                        <ul>
                                            <li>
                                                <Link href="/">Subsection 1</Link>
                                            </li>
                                            <li>
                                                <Link href="/">Subsection 2</Link>
                                            </li>
                                            <li>
                                                <Link href="/">Subsection 3</Link>
                                            </li>
                                            <li>
                                                <Link href="/">Subsection 4</Link>
                                            </li>
                                            <li>
                                                <Link href="/">Subsection 5</Link>
                                            </li>
                                            <li>
                                                <Link href="/">Subsection 6</Link>
                                            </li>
                                            <li>
                                                <Link href="/">Subsection 7</Link>
                                            </li>
                                            <li>
                                                <Link href="/">Subsection 8</Link>
                                            </li>
                                            <li>
                                                <Link href="/">Subsection 9</Link>
                                            </li>
                                            <li>
                                                <Link href="/">Subsection 10</Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="item-col">
                                        <ul>
                                            <li>
                                                <Link href="/">Subsection 11</Link>
                                            </li>
                                            <li>
                                                <Link href="/">Subsection 12</Link>
                                            </li>
                                            <li>
                                                <Link href="/">Subsection 13</Link>
                                            </li>
                                            <li>
                                                <Link href="/">Subsection 14</Link>
                                            </li>
                                            <li>
                                                <Link href="/">Subsection 15</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="menu-section">
                                <h5>أخبار</h5>
                                <div className="news-wrapper">
                                    <div className="item-col">
                                        <ul>
                                            <li>
                                                <Link href="/">Subsection 1</Link>
                                            </li>
                                            <li>
                                                <Link href="/">Subsection 2</Link>
                                            </li>
                                            <li>
                                                <Link href="/">Subsection 3</Link>
                                            </li>
                                            <li>
                                                <Link href="/">Subsection 4</Link>
                                            </li>
                                            <li>
                                                <Link href="/">Subsection 5</Link>
                                            </li>
                                            <li>
                                                <Link href="/">Subsection 6</Link>
                                            </li>
                                            <li>
                                                <Link href="/">Subsection 7</Link>
                                            </li>
                                            <li>
                                                <Link href="/">Subsection 8</Link>
                                            </li>
                                            <li>
                                                <Link href="/">Subsection 9</Link>
                                            </li>
                                            <li>
                                                <Link href="/">Subsection 10</Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="item-col">
                                        <ul>
                                            <li>
                                                <Link href="/">Subsection 11</Link>
                                            </li>
                                            <li>
                                                <Link href="/">Subsection 12</Link>
                                            </li>
                                            <li>
                                                <Link href="/">Subsection 13</Link>
                                            </li>
                                            <li>
                                                <Link href="/">Subsection 14</Link>
                                            </li>
                                            <li>
                                                <Link href="/">Subsection 15</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="menu-section">
                                <h5>أخبار</h5>
                                <div className="news-wrapper">
                                    <div className="item-col">
                                        <ul>
                                            <li>
                                                <Link href="/">Subsection 1</Link>
                                            </li>
                                            <li>
                                                <Link href="/">Subsection 2</Link>
                                            </li>
                                            <li>
                                                <Link href="/">Subsection 3</Link>
                                            </li>
                                            <li>
                                                <Link href="/">Subsection 4</Link>
                                            </li>
                                            <li>
                                                <Link href="/">Subsection 5</Link>
                                            </li>
                                            <li>
                                                <Link href="/">Subsection 6</Link>
                                            </li>
                                            <li>
                                                <Link href="/">Subsection 7</Link>
                                            </li>
                                            <li>
                                                <Link href="/">Subsection 8</Link>
                                            </li>
                                            <li>
                                                <Link href="/">Subsection 9</Link>
                                            </li>
                                            <li>
                                                <Link href="/">Subsection 10</Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="item-col">
                                        <ul>
                                            <li>
                                                <Link href="/">Subsection 11</Link>
                                            </li>
                                            <li>
                                                <Link href="/">Subsection 12</Link>
                                            </li>
                                            <li>
                                                <Link href="/">Subsection 13</Link>
                                            </li>
                                            <li>
                                                <Link href="/">Subsection 14</Link>
                                            </li>
                                            <li>
                                                <Link href="/">Subsection 15</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <a onClick={handleShowSettings} className="menu-item--small"></a>

                        <div className="search-wrapper">
                            <form>
                                <input type="text" autoFocus ref={inputRef} />
                                <div className="icon">
                                    <BiSearch />
                                </div>
                            </form>
                        </div>

                    </div>
                </Menu>

                <div className="header-normal">
                    <div className="container">
                        <div className="additional">
                            <div className="praying-hour">
                                <span className="hour">12:18hrs</span>
                                <span className="label">Prayer</span>
                            </div>
                        </div>
                        <div className="logo-wrapper">
                            <Link href="/">
                                <Image src={logo} alt="" />
                            </Link>
                        </div>
                        <nav className="navigation">
                            <ul>
                                <li>
                                    <Link href="/">أخبار</Link>
                                </li>
                                <li>
                                    <Link href="/">الاقتصاد</Link>
                                </li>
                                <li>
                                    <Link href="/">عالمنا</Link>
                                </li>
                                <li>
                                    <Link href="/">المقالات</Link>
                                </li>
                                <li>
                                    <Link href="/">الرياضة</Link>
                                </li>
                                <li>
                                    <Link href="/">نمط الحياة</Link>
                                </li>
                            </ul>
                        </nav>

                    </div>
                </div>

                <div className="header-live">
                    <div className="container">
                        <div className="additional">
                            <LiveSign />
                            <h2>محاكمة ترامب بتهم الاغتصاب</h2>
                        </div>
                        <nav className="navigation">
                            <ul>
                                <li>
                                    <a href="#">الحجج الختامية</a>
                                </li>
                                <li>
                                    <a href="#">من هو إي جين كارول؟</a>
                                </li>
                                <li>
                                    <a href="#">الاتهامات</a>
                                </li>
                                <li>
                                    <a href="#">ما هو قانون الناجين الكبار؟</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>
        </>
    );
}
