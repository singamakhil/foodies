import Link from "next/link";

import logoImg from "@/assets/logo.png";
import classes from "@/components/main-header.module.css";
import Image from "next/image";

export default function MainHeader() {
  return (
    <header className={classes.header}>
      <Link href="/" className={classes.logo}>
        <Image src={logoImg} alt="a plate with food" priority />
        NextLevel Food
      </Link>
      <nav className={classes.nav}>
        <ul>
          <li>
            <Link href="/meals">Browse Meals</Link>
          </li>
          <li>
            <Link href="/community">Meals Community</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
