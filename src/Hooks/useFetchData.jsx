import axios from "axios";
import { useState, useEffect } from "react";

const useFetchData = (url) => {

    const [data, setData] = useState(null)

    useEffect(() => {
        axios.get(url)
            .then(res => {
                setData(res.data.results)
                // console.log("fetch successful")
            })
            .catch(error => {
                console.log(error)
            })
    }, [url])

    return { data }

}

export default useFetchData;