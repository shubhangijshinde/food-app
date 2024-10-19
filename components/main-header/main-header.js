
import Link from "next/link";
import logoImg from '@/assets/logo.png';
import classes from './main-header.module.css';
import MainHeaderBackground from "./main-header-background";
import NavLink from "./navlink";

export default function MainHeader() {

    return (
        <>
            <MainHeaderBackground />
            <header className={classes.header}>
                <Link className={classes.logo} href="/">
                    <img src={logoImg.src} alt="A plate with food on it" />
                    Next Level Food
                </Link>
                <nav className={classes.nav}>
                    <ul>
                        <li>
                            <NavLink href={"/meals"}>Browse Meals</NavLink>
                        </li>
                        <li>
                            <NavLink href={"/community"}>Foodie Communitys</NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    )
}