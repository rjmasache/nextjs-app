export default async function Page({
    params,
}: {
    params: Promise<{ allsegments: string[] }>;
}) {
    const allsegments = (await params).allsegments;

    console.log("Catch-all segments:", allsegments);

    return (
        <>
            <h3>Catch-all</h3>
            <p>Catch-all segments: {allsegments.join(", ")}</p>
        </>
    );
}
