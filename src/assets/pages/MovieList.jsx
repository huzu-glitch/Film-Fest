import { Cards } from "../components/Cards";
import { useFetch } from "../hooks/useFetch";
import { useEffect } from "react";

export const MovieList = ({apiPath, title}) => {

useEffect(() => {
    document.title = `${title} || Plot-Twist`
  });

  const { data:movie } = useFetch(apiPath);
  return (
    <main>
      <section className="max-w-7xl mx-auto py-7">
        <div className="flex justify-start flex-wrap">
          {movie?.map((movie)=>(
            <Cards key={movie.id} movie={movie} />
          ))}
        </div>
      </section>
    </main>
  );
}
