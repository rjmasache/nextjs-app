import Link from "next/link";

export default async function BlogPostPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;

    console.log(slug);

    return (
        <div>
            <h1>{slug}</h1>
            <p>Dinamic Segments</p>
            <Link href={`/login`}>Go to login</Link>
        </div>
    );
}
