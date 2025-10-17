import { Link } from "react-router";

export const Cards = ({movie}) => {
  return (
    <section>
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 dark:bg-gray-800 dark:border-gray-700 dark:shadow-gray-900/50 m-3 flex flex-col h-[600px] bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900">
            <Link to={`/movie/${movie.id}`} className="flex-shrink-0">
              <img
                className="rounded-t-lg h-80 w-full object-cover"
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt=""
              />
            </Link>
            <div className="p-5 flex flex-col flex-grow">
              <Link to={`/movie/${movie.id}`}>
                <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 line-clamp-2">
                  {movie.title}
                </h5>
              </Link>
              <p className="font-normal text-gray-700 dark:text-gray-400 text-sm leading-relaxed overflow-hidden flex-grow line-clamp-6">
                {movie.overview}
              </p>
            </div>
          </div>
    </section>
  )
}
