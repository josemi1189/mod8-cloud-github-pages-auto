import { PropsWithChildren } from "react";
import { Footer, Header } from "@/layout/components/";
import { Breadcrumbs } from "@/common/breadcrumbs";

export const AppLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Header />
      <Breadcrumbs />
      <main>{children}</main>
      <Footer />
    </>
  );
};
