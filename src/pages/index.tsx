import Background from "@/components/Background"
import Hero from "@/components/Hero"
import Image from "next/image"

interface TProps {
  data: {
    dates: Object
    results: {
      backdrop_path: string,
      title: string
    }[]
  }
}

export const getStaticProps = async () => {
  const key = "api_key=69d8ac520e1633b4aa0732b04ccb0ce3"
  const params = "/movie/now_playing?"

  const res = await fetch(`https://api.themoviedb.org/3${params + key}&language=en-US&page=1`)
  const data = await res.json()

  return { props: { data: data } }
}

function Home({ data }: TProps) {

  const { results } = data
  console.log(results.slice(1, 4))

  return (
    <>
      <div className="flex flex-col md:flex-row justify-center gap-20 app">

        <Hero
          imgPath={results[0].backdrop_path}
          title={results[0].title}
        />

        <div className="flex flex-col gap-4">

          {results.slice(1, 4).map(({ title, backdrop_path }) => {
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

      </div>

      <Background />
    </>
  )
}



export default Home