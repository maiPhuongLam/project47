import landingPageImage from '../assets/landing.png'
import appDownloadImage from "../assets/appDownload.png";
import MovieList from '@/components/MovieList';
import { fakeMovies } from '../fake-data/MovieList'
import MoviesNow from '@/components/MoviesNow';
import PreSaleTicket from '@/components/PreSaleTicket';
import MoviesComingSoon from '@/components/MoviesComingSoon';

const HomePage = () => {
  return (
    <div className='flex flex-col gap-2'>
      <div className='bg-gray-700 rounded-lg shadow-md py-8 flex flex-col gap-5 text-center -mt-16'>
        <h1 className='text-5xl font-bold tracking-tight text-orange-700'>
          Đặt vé xem phim với giá rẻ nhất tại đây
        </h1>
        <button className='text-xl text-white'>Nhấn 1 cái có vé xem phim xem ngay!</button>
        {/* <SearchBar
          placeHolder="Search by City or Town"
          onSubmit={handleSearchSubmit}
        /> */}
      </div>
      <MoviesNow movies={fakeMovies}/>
      <hr/>
      <PreSaleTicket movies={fakeMovies}/>
      <hr/>
      <MoviesComingSoon movies={fakeMovies}/>
      <div className='grid md:grid-cols-2 gap-5'>
        <img src={landingPageImage} alt="" />
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <span className='font-bold text-3xl tracking-tighter text-white'>
            Đặt vé siêu nhanh
          </span>
          <span className='text-orange-700'>
            Tải xuống Ứng dụng SIUUU để nhận nhiều ưu đãi hơn
          </span>
          <img src={appDownloadImage} />
        </div>
      </div>
    </div>
  )
}

export default HomePage
