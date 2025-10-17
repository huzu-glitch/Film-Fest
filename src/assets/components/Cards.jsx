import { Link } from "react-router";

export const Cards = ({movie}) => {
  return (
    <section>
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 m-3 flex flex-col min-h-200">
            <Link to={`/movie/${movie.id}`}>
              <img
                className="rounded-t-lg h-auto w-full"
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt=""
              />
            </Link>
            <div className="p-5">
              <Link to={`/movie/${movie.id}`}>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {movie.title}
                </h5>
              </Link>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {movie.overview}
              </p>
            </div>
          </div>
    </section>
  )
}
