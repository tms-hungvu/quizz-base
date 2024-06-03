import React, { ReactElement } from "react";
import Header from "./Header";
import Footer from "./Footer";

function AdminLayout({children } : {children: React.ReactNode} ){
    return(<>
     <Header />
       {children}
     <Footer />
    </>)
}

export default function getLayoutAdmin(page: ReactElement) {
    return (
      <AdminLayout>
        {page}
      </AdminLayout>
    )
}