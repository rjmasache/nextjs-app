import LikeButton from "./like-button";

export default async function ServerClientComponents({
    params,
}: {
    params: { slug: string[] };
}) {
    console.log(params.slug);

    return (
        <div>
            <h1 className="text-center text-xl font-bold">
                Server and Client Components
            </h1>
        </div>
    );
}
