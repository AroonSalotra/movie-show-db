import Image from "next/image";

interface TProps {
    imgPath?: string
    title: string
}

const Hero = ({ imgPath, title }: TProps) => {
    return (
        <>

            <figure className="grid">

                <Image
                    src={`https://www.themoviedb.org/t/p/w533_and_h300_bestv2${imgPath}`}
                    alt="hero"
                    height={2048}
                    width={2048}
                    className="col-start-2 row-start-1 w-[2096px] h-fit"
                />

                <figcaption className="col-start-2 row-start-1 self-end p-4 bg-black/[0.3] flex flex-col">
                    Now playing:
                    <strong className="font-semibold">
                        {title}
                    </strong>
                </figcaption>

            </figure>
        </>
    );
}

export default Hero;