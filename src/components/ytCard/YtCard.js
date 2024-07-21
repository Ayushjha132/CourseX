export default function YtCard({ytVideoID, ytTitle}) {
    return (
        <>
            <div className="flex flex-col items-center rounded-xl bg-white rounded-b-large border-b-4 border-blue-shadow  w-[400px]">
                <iframe width={400} height={220}
                        src={`https://www.youtube.com/embed/${ytVideoID}`}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        title={ytTitle}
                        className="rounded-xl"/>
                <p className="text-black text-lg font-medium p-4 text-wrap">{ytTitle}</p>
            </div>
        </>
    )
}

//LdrEwKaemts