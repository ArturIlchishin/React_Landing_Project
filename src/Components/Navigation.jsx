import odigo_logo from '../Images/odigo-logo.png'
import {useEffect, useRef} from "react";

export const Navigation = () => {

    const navRef = useRef();

    useEffect(() => {
        makeBackground();
    }, [])

    const makeBackground = () => {
        window.onscroll = () => {
            if (window.scrollY > 100){
                navRef.current.classList.add('header__active');
            } else {
                navRef.current.classList.remove('header__active')
            }
        }
    }

    return (
        <header ref={navRef} className={'header'}>
            <div className={'wrapper'}>
                <div className={'header__wrapper'}>
                    <div className={'header__logo'}>
                        <a href={'/'} className={'header__logo-link'}>
                            <img src={odigo_logo} alt={'Одиго лого'}  />
                        </a>
                    </div>
                        <nav className={'header__nav'}>
                            <ul className={'header__list'}>
                                <li className={'header__item'}>
                                    <a href={'#!'} className={'header__link'}>Articles</a>
                                </li>
                                <li className={'header__item'}>
                                    <a href={'#!'} className={'header__link'}>Locations</a>
                                </li>
                                <li className={'header__item'}>
                                    <a href={'#!'} className={'header__link'}>Videos</a>
                                </li>
                                <li className={'header__item'}>
                                    <a href={'#!'} className={'header__link'}>Sign in</a>
                                </li>
                            </ul>
                        </nav>

                </div>
            </div>
        </header>
    )
}