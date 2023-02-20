import Background from "@/components/Background"
import Hero from "@/components/Hero"
import Popular from "@/components/Popular"
import Trending from "@/components/Trending"

interface TProps {
  data: {
    dates: Object
    results: {
      backdrop_path: string,
      title: string
    }[]
  }
}

const key = "api_key=69d8ac520e1633b4aa0732b04ccb0ce3"

export const getStaticProps = async () => {
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

        <Trending
          data={results}
          start={1}
          end={4}
        />

      </div>

      <Popular
        key={key}
      />

      <Background />
    </>
  )
}



export default Home