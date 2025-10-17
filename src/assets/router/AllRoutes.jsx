import { Route, Routes } from "react-router";
import { MovieDetail, MovieList, PageNotFound, Search } from "../pages";

export const AllRoutes = () => {
    return (
        <div className="dark:bg-slate-800">
        <Routes>
            <Route path="/" element={<MovieList apiPath='movie/now_playing' title="Home" />} />
            <Route path="/movies/popular" element={<MovieList apiPath='movie/popular' title="Popular Movies" />} />
            <Route path="/movies/upcoming" element={<MovieList apiPath='movie/upcoming' title="Upcoming Movies" />} />
            <Route path="/movies/top-rated" element={<MovieList apiPath='movie/top_rated' title="Top Rated Movies" />} />
            <Route path="/movie/:id" element={<MovieDetail />} />
            <Route path="/search" element={<Search apiPath='search/movie' />} />
            <Route path="*" element={<PageNotFound />} />
        </Routes>
        </div>
    )
}