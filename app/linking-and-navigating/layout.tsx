import Link from "next/link";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <nav className="font-med flex justify-center space-x-4 p-4">
                {/* Prefetched when the link is hovered or enters the viewport */}
                <Link href="/layouts-pages">Layouts and Pages</Link>
                {/* No prefetching */}
                <a href="/project-structure">Project Structure</a>
            </nav>
            {children}
        </>
    );
}
