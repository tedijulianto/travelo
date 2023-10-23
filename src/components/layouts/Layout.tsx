import { ReactNode } from "react";
import Header from "../Header";
import Footer from "../Footer";

type Props = {
  children: ReactNode;
  nofooter?: boolean;
};

const Layout = ({ children, nofooter = false }: Props) => {
  return (
    <>
      <Header />
      {children}
      {nofooter ? null : <Footer />}
    </>
  );
};

export default Layout;
