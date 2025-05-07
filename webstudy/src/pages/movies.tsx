import type {Movie, MovieResponse} from '../types/movie';
import {useEffect, useState} from "react";
import axios from 'axios';

const MoviesPage = () => {
    const [movies, setMovies] = useState<Movie[]>([]);

    useEffect(() => {
        const fetchMovies = async () => {
            const {data} = await axios.get<MovieResponse>(
                `https://api.themoviedb.org/3/movie/popular?language=ko-KR&&page=1`,
                {
                    headers: {
                        Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzOGNlZWMyODYzZDQzYThlNWZlMTU0NDhmMjVmNDVhYyIsIm5iZiI6MTc0NjYzOTU1MS4zOTYsInN1YiI6IjY4MWI5YWJmNjM1OTVkNWFiMWRmOTQ2MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.D6RnsiRAA2YgiMNuElMVOXOWgVu_mWX4OKrmzvB36xU`,
                    },
                }
            );
            setMovies(data.results);
        };
        fetchMovies();
    }, []);

    return (
        <ul>
            {/* 옵셔널 체인 활용 */}
            {movies?.map((movie) => (
                <li key={movie.id}>
                    <h1>{movie.title}</h1>
                </li>
            ))}
        </ul>
    );
};

export default MoviesPage;
