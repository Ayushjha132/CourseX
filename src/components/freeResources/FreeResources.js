import YtCard from "@/components/ytCard/YtCard";

export default function FreeResources() {
    return (
        <>
            <h1 className="text-blue-600 font-semibold text-4xl py-8 pl-20">Free
                Resources</h1>
            <div className="max-w-screen-xl flex items-center justify-between mx-auto">
                <div className="flex flex-row space-x-10">
                    <YtCard ytVideoID="LdrEwKaemts"
                            ytTitle="Complete Web3 Bootcamp -Learning ETH smart contracts"/>
                    <YtCard ytVideoID="LdrEwKaemts"
                            ytTitle="Complete Web3 Bootcamp -Learning ETH smart contracts"/>
                    <YtCard ytVideoID="LdrEwKaemts"
                            ytTitle="Complete Web3 Bootcamp -Learning ETH smart contracts"/>
                </div>
            </div>
        </>
    )
}