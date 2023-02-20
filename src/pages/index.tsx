import Hero from "@/components/Hero"

interface TProps {
  data: {
    dates: Object
    results: {
      backdrop_path: string,
      original_title: string
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
  console.log(results[0])


  return (
    <>
      <div>

        <Hero
          imgPath={results[0].backdrop_path}
          title={results[0].original_title}
        />

      </div>
    </>
  )
}



export default Home