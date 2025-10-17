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
      <section className="max-w-7xl mx-auto py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
          {movie?.map((movie)=>(
            <Cards key={movie.id} movie={movie} />
          ))}
        </div>
      </section>
    </main>
  );
}
