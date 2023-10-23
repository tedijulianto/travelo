import Image from "next/legacy/image";
import travelologo from "../../public/assets/travelo-logo-footer.png";
import Link from "next/link";
import Container from "./containers/Container";

type Props = {
  title: string;
  content: Content[] | string[];
};

type Content = {
  label: string;
  href: string;
};

const FooterInfo = ({ title, content }: Props) => {
  return (
    <div className="flex flex-col">
      <h2 className="text-gray-100 font-label font-bold text-2xl mb-4">{title}</h2>
      {content.map((item: Content | string, index: number) => {
        if (typeof item !== "string") {
          return (
            <Link href={item.href} key={index} className="text-lg text-gray-50 mb-3">
              {item.label}
            </Link>
          );
        }
        return (
          <p className="text-lg text-gray-50 mb-3" key={index}>
            {item}
          </p>
        );
      })}
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="shadow-footer">
      <Container size="lg">
        <div className="flex bg-white p-16">
          <figure>
            <Image
              src={travelologo}
              alt="Travelo Logo"
              placeholder="blur"
              height="98"
              width="136"
            />
          </figure>

          <div className="flex flex-1 justify-between ml-[106px]">
            <FooterInfo
              title="Info"
              content={[
                { label: "Tentang Kami", href: "/" },
                { label: "Kontak", href: "/" },
                { label: "Testimonial", href: "/" },
              ]}
            />
            <FooterInfo
              title="Perusahaan"
              content={[
                { label: "Syarat & Kententuan", href: "/" },
                { label: "Kebijakan Privasi", href: "/" },
                { label: "Blog", href: "/" },
                { label: "Bantuan Pelayanan", href: "/" },
              ]}
            />
            <FooterInfo
              title="Kontak"
              content={[
                "Jl. Dago No. 1A",
                "Bandung, Jawa Barat",
                "Indonesia",
                "08123456789",
                "contact@gmail.com",
              ]}
            />
          </div>
        </div>
      </Container>

      <div className="bg-blue-100 p-3">
        <p className="text-sm text-white font-bold text-center">
          Copyright &copy; 2023 Travelo. All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
