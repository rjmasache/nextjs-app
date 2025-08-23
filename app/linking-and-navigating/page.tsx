import Link from "next/link";
import LoadingIndicator from "./loading-indicator";
import HoverPrefetchLink from "./hover-link";

export default async function Page({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    return (
        <>
            <h1 className="text-center text-2xl font-bold">
                Linking and Navigating
            </h1>
            <p className="text-center">
                This page demonstrates linking and navigating in Next.js.
            </p>
            <HoverPrefetchLink href="/linking-and-navigating/dashboard">
                Go to Dashboard <LoadingIndicator />
            </HoverPrefetchLink>
        </>
    );
}
