export default function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <h1>Layout</h1>
            {children}
        </>
    );
}
