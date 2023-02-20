import Image from "next/image"

interface TProps {
    data: { title: string, backdrop_path: string }[],
    start: number,
    end: number
}

const Trending = ({ data, start, end }: TProps) => {

    return (
        <div className="flex flex-col gap-4">

            {data.slice(start, end).map(({ title, backdrop_path }) => {
                return <Image
                    key={title}
                    src={`https://www.themoviedb.org/t/p/w533_and_h300_bestv2${backdrop_path}`}
                    width={1024}
                    height={1024}
                    className="w-[60rem] h-[8.3rem] object-cover"
                    alt={title}
                />
            })}

        </div>
    );
}

export default Trending;