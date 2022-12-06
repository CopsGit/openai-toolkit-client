import Box from "@mui/material/Box";
import styled from "@emotion/styled";

const TopComponent = styled(Box)(({theme}) => ({
    backgroundColor: '#fafafa',
    position: 'relative'
}))

const Layout = ({children}) => {
    return (
        <TopComponent>
            <Header />
            {children}
            <Footer />
        </TopComponent>
    )
}

export default Layout;
