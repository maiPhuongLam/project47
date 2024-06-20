export interface Show {
    cinemaName: string
    cinemaAddress: string
    timeStart: string
    subtitles: string
    format: string
}

export const fakeShows: Show[] = [
    {
        cinemaName: "BHD Star Le Van Viet",
        cinemaAddress: "Tầng 4, Vincom Plaza Lê Văn Việt, 50 Lê Văn Việt, P.Hiệp Phú, Quận 9, TP.HCM",
        timeStart: "20:00",
        subtitles: "Lồng tiếng",
        format: "3D",
    },
    {
        cinemaName: "BHD Star Le Van Viet",
        cinemaAddress: "Tầng 4, Vincom Plaza Lê Văn Việt, 50 Lê Văn Việt, P.Hiệp Phú, Quận 9, TP.HCM",
        timeStart: "22:00",
        subtitles: "Lồng tiếng",
        format: "3D",
    },
    {
        cinemaName: "BHD Star Le Van Viet 2",
        cinemaAddress: "Tầng 4, Vincom Plaza Thủ Đức, 100 Võ Văn Ngân, P.Linh Đông, Thủ Đức, TP.HCM",
        timeStart: "20:00",
        subtitles: "Lồng tiếng",
        format: "3D",
    },
]