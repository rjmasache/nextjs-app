export default async function Page({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const fetchData = await fetch("https://dragonball-api.com/api/characters");
    const posts = await fetchData.json();

    return <h1>Hello</h1>;
}
