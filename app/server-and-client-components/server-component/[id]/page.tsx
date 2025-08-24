import LikeButton from "../../like-button";

const array = [0, 1, 2, 3, 4, 5];

export default async function PassingDataFromServerToClientComponents({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;

    const likes = array[Number(id)];

    return (
        <div>
            <h1>Passing data from Server to Client Components</h1>
            <LikeButton likes={likes} />
        </div>
    );
}
