import { Show, fakeShows } from '@/fake-data/Show'
import React from 'react'
interface GroupedShows {
    [cinemaName: string]: {
        address: string;
        shows: Show[];
    };
}
const SelectShow = () => {
    const groupByCinema = (shows: Show[]): GroupedShows => {
        return shows.reduce((acc: GroupedShows, show: Show) => {
            if (!acc[show.cinemaName]) {
                acc[show.cinemaName] = {
                    address: show.cinemaAddress,
                    shows: [],
                };
            }
            acc[show.cinemaName].shows.push(show);
            return acc;
        }, {});
    };

    const groupedShows = groupByCinema(fakeShows);
    return (
        <form>
            {Object.keys(groupedShows).map((cinemaName) => (
                <div key={cinemaName} className="cinema-card border-slate-400 border-2 shadow-md rounded-lg p-6 mb-4">
                    <h2 className="text-2xl font-semibold text-orange-700">{cinemaName}</h2>
                    <p className="mt-2 text-white-600">{groupedShows[cinemaName].address}</p>
                    <div className="showtimes mt-4 flex flex-wrap gap-2">
                        {groupedShows[cinemaName].shows.map((show, index) => (
                            <div className='showtime-button gap-1 flex flex-col items-center justify-center py-2 mt-2 duration-150 w-1/4 h-24'>
                                <button key={index} className="w-full h-3/4 showtime-button bg-slate-700 text-white rounded hover:bg-orange-700 transition duration-150">
                                    {show.timeStart}
                                </button>
                                <div className='flex gap-1 w-4/6 justify-center items-center'>
                                    <button className="movie-format text-sm w-full border-2 rounded-sm border-blue-700">{show.subtitles}</button>
                                    <button className="movie-director text-sm rounded-sm bg-green-700 w-1/4 text-white">{show.format}</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </form>
    )
}

export default SelectShow
