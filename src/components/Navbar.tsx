import Link from "next/link";

type Props = {
  label: string;
  href: string;
};

const NavItem = ({ label, href }: Props) => {
  return (
    <Link href={href} className="font-bold font-label text-gray-70">
      {label}
    </Link>
  );
};

const Navbar = () => {
  return (
    <nav className="flex items-center gap-5">
      <NavItem href="/" label="Beranda" />
      <NavItem href="/" label="Kontak" />
      <NavItem href="/" label="Paket" />
      <NavItem href="/" label="Testimonial" />
    </nav>
  );
};

export default Navbar;
