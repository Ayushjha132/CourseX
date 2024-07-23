import YtCard from "@/components/ytCard/YtCard";

export default function FreeResources() {
    return (
        <>
            <h1 className="flex justify-center item-center text-blue-600 font-semibold text-4xl pt-11 pb-10">Free
                Resources</h1>
            <div className="max-w-screen-xl flex items-center justify-between mx-auto">
                <div className="flex flex-row space-x-10">
                    <YtCard ytVideoID="r9Y35xwNPiI"
                            ytTitle="Live Coding a Gambling Strategy on Stake.com"/>
                    <YtCard ytVideoID="qP7LzZqGh30"
                            ytTitle="Rust Tutorial for Beginners - Full Course (With Notes and Project Ideas)"/>
                    <YtCard ytVideoID="VfbtOkOKn3w"
                            ytTitle="Emergency Livestream - Decoding the WazirX hack"/>
                </div>
            </div>
        </>
    )
}