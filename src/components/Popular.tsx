import Image from "next/image";
import useFetchData from "../Hooks/useFetchData"
import { useEffect, useState, FC } from "react";

const Popular: FC = () => {

    const [popularMovies, setPopularMovies] = useState<{
        title: string, backdrop_path: string
    }[]
        | null>(null)
    const [index, setIndex] = useState<number>(7)

    const { data } = useFetchData(`https://api.themoviedb.org/3/movie/popular?${process.env.NEXT_PUBLIC_KEY}`)

    useEffect(() => {

        if (data === null) return
        setPopularMovies(c => data)
        console.log(popularMovies)

    }, [popularMovies, data])

    const handleClick = () => {
        if (index > 18) {
            setIndex(c => 7)
        } else {
            setIndex(c => index + 3)
        }
    }


    return (
        <>

            <div className="grid grid-cols-3 gap-8 pt-20">

                {popularMovies ? popularMovies.slice(4, index)
                    .map(({ title, backdrop_path }) => {
                        return <div key={title}>
                            <Image
                                src={`https://www.themoviedb.org/t/p/w533_and_h300_bestv2${backdrop_path}`}
                                alt="hero"
                                height={512}
                                width={512}
                                className=""
                            />
                        </div>
                    }) : null}

            </div>

            <button className="m-auto p-4 border-2"
                onClick={handleClick} >
                View {index > 18 ? "Less" : "More"}
            </button>



        </>

    );
}

export default Popular;