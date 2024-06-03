import React, { ReactElement } from "react";
import Header from "./Header";
import Footer from "./Footer";

function GuestLayout({children } : {children: React.ReactNode} ){
    return(<>
     <Header />
       {children}
     <Footer />
    </>)
}

export default function getLayoutGuest(page: ReactElement) {
    return (
      <GuestLayout>
        {page}
      </GuestLayout>
    )
}