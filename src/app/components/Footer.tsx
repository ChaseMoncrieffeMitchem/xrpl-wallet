// src/app/components/Footer.tsx
export default function Footer() {
    return (
      <footer className="bg-black text-white flex h-[50px] px-4 py-16">
        <p className="text-[12px] m-0 p-0">© {new Date().getFullYear()} Your Company</p>
      </footer>
    );
  }