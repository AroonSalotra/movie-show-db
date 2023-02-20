import Image from "next/image";

interface TProps {
    imgPath?: string
    title: string
}

const Hero = ({ imgPath, title }: TProps) => {
    return (
        <>

            <figure className="md:grid grid-cols-3 m-auto">

                <Image
                    src={`https://www.themoviedb.org/t/p/w533_and_h300_bestv2${imgPath}`}
                    alt="hero"
                    width={768}
                    height={512}
                    className="col-start-2 row-start-1"
                />

                <figcaption className="col-start-2 row-start-1 self-end p-8 bg-black/[0.5]">
                    {title}
                </figcaption>

            </figure>
        </>
    );
}

export default Hero;