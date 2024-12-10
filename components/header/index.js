import Menu from "../menu";
import styles from "./styles.module.css";

import { withAuth } from "../with-auth";
import Link from "next/link";

function Header() {
  return (
    <div className={styles.header}>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/users">Users</Link>
        </li>
        <li>
          <Link href="/prodile">Profile</Link>
        </li>
      </ul>
    </div>
  );
}

export default Header;
