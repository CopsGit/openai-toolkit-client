import Box from "@mui/material/Box";
import styled from "@emotion/styled";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import SideBar from "./sideBar/SideBar";

const TopComponent = styled(Box)(({theme}) => ({
    backgroundColor: '#fafafa',
    position: 'relative'
}))

const Layout = ({children, features}) => {
    return (
        <TopComponent>
            <Header />
                <SideBar page={children} features={features}/>
            <Footer />
        </TopComponent>
    )
}

export default Layout;
