export default async function Page({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;

    return <h3>{slug} is a slug route</h3>;
}
