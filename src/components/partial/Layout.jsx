function Layout({ children }) {
    return (
        <div>
            <div>header</div>
            <div>{children}</div>
        </div>
    );
}

export default Layout;