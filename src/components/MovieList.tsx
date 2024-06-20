import React, { useState } from 'react';
import MovieCard from './MovieCard';
import { MovieListProps } from './MoviesNow';

interface Props extends MovieListProps {
  isSaleTicket: boolean;
}

const MovieList: React.FC<Props> = ({ movies, isSaleTicket }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const moviesPerPage = 10;
  // const totalPages = Math.ceil(movies.length / moviesPerPage);

  const indexOfLastMovie = currentPage * moviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
  const currentMovies = movies.slice(indexOfFirstMovie, indexOfLastMovie);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mx-4">
        {currentMovies.map((movie, index) => (
          <MovieCard key={index} movie={movie} isSaleTicket={isSaleTicket} />
        ))}
        {/* <Pagination totalPages={totalPages} currentPage={currentPage} onPageChange={handlePageChange} /> */}
      </div>
    </div>
  );
};

export default MovieList;