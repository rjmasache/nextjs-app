import LikeButton from "./like-button";

// Layout is a Server Component by default
export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <main>{children}</main>
        </>
    );
}
