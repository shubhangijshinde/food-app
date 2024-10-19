import Link from "next/link";
import logoImg from '@/assets/logo.png';
import classes from './main-header.module.css';


export default function MainHeader() {
    return (
        <header className={classes.header}>
            <Link className={classes.logo} href="/">
                <img src={logoImg.src} alt="A plate with food on it" />
                Next Level Food
            </Link>
            <nav>
                <ul>
                    <li>
                        <Link href="/meals">Browse Meals</Link>
                    </li>
                    <li>
                        <Link href="/community">Foodie Community</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}