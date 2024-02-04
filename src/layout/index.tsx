import React, { ReactNode } from 'react';
import Header from "../components/header";

interface LayoutProps {
    children: ReactNode;
}
const Layout = ({ children }: LayoutProps) => {
    return <>
        <Header />
        <div>{children}</div>
    </>
}

export default Layout;