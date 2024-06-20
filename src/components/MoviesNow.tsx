import React, { useState } from 'react'
import MovieCard from './MovieCard'; 
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination"; // Adjust the import path according to your project structure
import MovieList from './MovieList';
import { Movie } from '@/fake-data/MovieList';


export interface MovieListProps {
  movies: Movie[];
  // isSaleTicket: boolean
}

const MoviesNow: React.FC<MovieListProps> = ({ movies })=> {
  return (
    <div className="movie-list flex flex-col items-center justify-center min-h-screen gap-8 text-xl bg-gray-900">
      <h2 className="text-lg md:text-xl lg:text-2xl text-white">Phim đang chiếu</h2>
      <div className="flex flex-wrap justify-center">
        <MovieList movies={movies} isSaleTicket={true}/>
      </div>
    </div>
  );
}

export default MoviesNow
