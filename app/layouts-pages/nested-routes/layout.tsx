import Link from "next/link";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <h1 className="text-xl font-bold">Layout for Nested Routes</h1>
            <Link href="/layouts-pages/" className="italic underline">
                Go to Layouts and Pages
            </Link>
            {children}
        </>
    );
}
