// https://api.themoviedb.org/3/movie/255/credits?api_key=69d8ac520e1633b4aa0732b04ccb0ce3

type TProps = {
  data: Array<object>
}


export const getStaticProps = async () => {
  const apiLink = "https://api.themoviedb.org/3/movie/255/credits?api_key=69d8ac520e1633b4aa0732b04ccb0ce3"
  const res = await fetch(apiLink)
  const data = await res.json()

  return { props: { data: data } }
}

function Home({ data }: TProps) {

  console.log(data)

  return (
    <>
      <div>
        <h1 className="text-lg font-bold">Hello!</h1>
      </div>
    </>
  )
}



export default Home