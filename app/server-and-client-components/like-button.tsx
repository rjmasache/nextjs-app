"use client";

import { useState } from "react";

export default function LikeButton({ likes }: { likes?: number }) {
    const [count, setCount] = useState(likes || 0);

    return (
        <div className="flex flex-col items-center justify-center p-10">
            <p>{count} likes</p>
            <button className="font-bold" onClick={() => setCount(count + 1)}>
                Click me
            </button>
        </div>
    );
}
