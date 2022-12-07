import React from 'react';
import './Header.scss';
import {useNavigate} from "react-router-dom";
import {LASER_CUTTING_ROUTE, MAIN_ROUTE, MILLING_CUTTING_ROUTE} from "../../utils/consts";

function Header() {
    const navigate = useNavigate()
    return (
        <header>
            <div className={'header-container'}>
                <div className={'header-left'}>
                    <img className={'header-logo'} src={'images/logo_dark.svg'} alt={"logo"}/>
                    <div className={'header-menu-item'} onClick={() => navigate(MAIN_ROUTE)}>
                        Главная
                    </div>
                    <div className={'header-menu-item'} onClick={() => navigate(LASER_CUTTING_ROUTE)}>
                        Лазерная резка
                    </div>
                    <div className={'header-menu-item'} onClick={() => navigate(MILLING_CUTTING_ROUTE)}>
                        Фрезерная резка
                    </div>
                </div>

                <div className={'header-right'}>
                    <div className={'header-mail'}>
                        glassfasad@list.ru
                    </div>
                    <div className={'header-phone'}>
                        +7 (4852) 64-11-12
                    </div>
                    <div className={'header-button-call'}>
                        Заказать звонок
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;