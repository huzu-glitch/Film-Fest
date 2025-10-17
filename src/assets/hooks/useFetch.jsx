import { useState, useEffect } from "react"

export const useFetch = (apiPath, searchTerm="") => {
    const [data, setData] = useState([])
    const url = `https://api.themoviedb.org/3/${apiPath}?api_key=${import.meta.env.VITE_API_KEY}&query=${searchTerm}`;
    useEffect(()=>{
        async function fetchMovie() {
           try {
                const response = await fetch(url);
                if (!response.ok) throw new Error('Network response was not ok');
                const json = await response.json();
                setData(json.results);
            } catch (error) {
                console.error("Fetching error:", error);
                setData([]);
            }
        }
        fetchMovie();
      },[url])

  return {data}
}
