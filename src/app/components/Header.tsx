// src/app/components/Header.tsx
import Link from "next/link";
import Image from "next/image";

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
          <Link href="/">Home</Link>
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
