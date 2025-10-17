import { useSearchParams } from "react-router";
import { Cards } from "../components/Cards";
import { useFetch } from "../hooks/useFetch";

export const Search = ({apiPath}) => {

  const [queryParams] = useSearchParams();
  const searchTerm = queryParams.get("q");

  const { data:movie } = useFetch(apiPath, searchTerm);
  return (
    <main>
      <section className="py-7">
        <h2 className="text-3xl font-bold text-left my-5 dark:text-white">
          {movie.length > 0 ? `Search Results for "${searchTerm}"` : `No results found for "${searchTerm}"`}
        </h2>
      </section>
      <section className="max-w-7xl mx-auto py-7">
        <div className="flex justify-start flex-wrap">
          {movie?.map((movie)=>(
            <Cards key={movie.id} movie={movie} />
          ))}
        </div>
      </section>
    </main>
  )
}
