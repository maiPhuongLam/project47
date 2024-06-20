import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import movieImage from '../assets/movieImage.jpg'
import ModalDetail from './MovieDetail';
import { Movie } from '@/fake-data/MovieList';
 // Importing Shadcn UI components

interface MovieCardProps {
    movie: Movie
    isSaleTicket: boolean
}

const MovieCard: React.FC<MovieCardProps> = ({ movie, isSaleTicket }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { title, genre, classification, subtitles, format, } = movie
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div className="movie-card w-60 mx-1 rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:-translate-y-5 bg-gray-900 px-1">
      <img src={movieImage} alt="Movie Title" className="w-full h-auto" />
      <div className='flex w-full justify-between my-2 gap-2 text-white'>
        <button className="movie-classNameification text-sm rounded-md bg-red-500 w-1/4 text-white">{classification}</button>
        <button className="movie-format text-sm w-full border-2 rounded-md border-blue-700">{subtitles}</button>
        <button className="movie-director text-sm rounded-md bg-green-700 w-1/4 text-white">{format}</button>
      </div>
      <div className="movie- py-4">
        <h3 className="movie-title text-xl font-bold text-white">{title}</h3>
        <p className="movie-genre text-sm text-white">{genre}</p>
      </div>
      { isSaleTicket ? 
        <div className="flex justify-between items-center rounded-b-md">
          {isSaleTicket }
          <button className="buy-button bg-orange-700 text-white text-sm px-4 py-2 rounded-md text-center">
              Mua vé ngay
          </button>
          <button className="detail-button bg-gray-700 text-white border-2 border-orange-700 px-4 py-2 rounded-md" onClick={openModal}>
            <a 
              title="DORAEMON THE MOVIE: NOBITA'S EARTH SYMPHONY" 
              data-url="https://www.bhdstar.vn/phim/doraemon-the-movie-nobitas-earth-symphony-2/" 
              href="#filmQuickView" 
              data-id="37953" 
              className="button secondary is-small info-button"
            >
              <span><FontAwesomeIcon icon={faInfoCircle} /></span>
            </a>
          </button>
          <ModalDetail isOpen={isOpen} closeMovieDetail={closeModal} movie={movie} />
        </div>
        :
        <div className="flex justify-between items-center rounded-b-md">
          <button className="detail-button bg-gray-700 text-white border-2 text-sm border-orange-700 px-4 py-2 rounded-md">
            <a 
              title="DORAEMON THE MOVIE: NOBITA'S EARTH SYMPHONY" 
              data-url="https://www.bhdstar.vn/phim/doraemon-the-movie-nobitas-earth-symphony-2/" 
              href="#filmQuickView" 
              data-id="37953" 
              className="button secondary is-small info-button"
            >
              <span><FontAwesomeIcon icon={faInfoCircle} />  Thông tin chi tiết</span>
            </a>
          </button>
        </div>
    
      }
    </div>
  );
};

export default MovieCard;