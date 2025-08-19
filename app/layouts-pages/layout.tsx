export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <h1 className="text-center text-2xl font-bold">Layout</h1>
            {children}
        </>
    );
}
