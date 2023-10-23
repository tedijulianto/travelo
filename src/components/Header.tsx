import Image from "next/legacy/image";
import travelologo from "../../public/assets/travelo-logo-header.png";
import Search from "./Search";
import Navbar from "./Navbar";
import Button from "./Button";
import Container from "./containers/Container";
import Link from "next/link";

const Header = () => {
  return (
    <header className="h-[85px] fixed left-0 right-0 top-0 z-20 bg-white shadow-lg p-4">
      <Container>
        <div className="flex justify-between items-center">
          <div className="flex">
            <Image
              src={travelologo}
              alt="Travelo Logo"
              placeholder="blur"
              height="48"
              width="182"
            />
            <Search />
          </div>
          <div className="flex gap-5">
            <Navbar />
            <Link href="/login">
              <Button className="w-[190px]">Masuk</Button>
            </Link>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
