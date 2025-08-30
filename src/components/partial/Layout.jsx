import SideBar from "../ui/organisms/SideBar/SideBar";

function Layout({ children }) {
    return (
        <div>
            <div><SideBar/></div>
            <div>{children}</div>
        </div>
    );
}

export default Layout;