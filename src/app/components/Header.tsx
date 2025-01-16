// src/app/components/Header.tsx
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWallet } from "@fortawesome/free-solid-svg-icons/faWallet";
import { faGear } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  return (
    <header>
      <nav>
        <div>
          <Image
            src="/wallet.jpg"
            alt="XRP Wallet Logo"
            width={100}
            height={50}
            priority
          />
          <Link href="/">XRPL Wallet 1.0</Link>
        </div>
        <div>
            <Image src="/setting.png"
            alt="XRP Wallet Logo"
            width={100}
            height={50}
            priority/>
        </div>
      </nav>
    </header>
  );
}
