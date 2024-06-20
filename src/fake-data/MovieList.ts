export interface Movie {
    id: number
    title: string;
    image: string
    description: string
    classification: string;
    format: string;
    director: string;
    actors: string[];
    genre: string;
    releaseDate: Date;
    duration: number;
    subtitles: string;
  }

export const fakeMovies: Movie[] = [
    {
        id: 1,
        title: "Arthur The King 4",
        description: "Doraemon và những người bạn thực hiện chuyến phiêu lưu để gặp gỡ những người bạn mới, kết nối mọi người bằng âm nhạc và cứu thế giới khỏi khủng hoảng.",
        image: '../assets/movieImage.jpg',
        classification: "T18",
        format: "2D",
        director: "Simon Cellan Jones",
        actors: ["Mark Wahlberg", "Juliet Rylance"],
        genre: "Adventure",
        releaseDate: new Date("2024-04-14"),
        duration: 107,
        subtitles: "Viet",
    },
    {
        id: 2,
        title: "Arthur The King 1",
        description: "Doraemon và những người bạn thực hiện chuyến phiêu lưu để gặp gỡ những người bạn mới, kết nối mọi người bằng âm nhạc và cứu thế giới khỏi khủng hoảng.",
        image: '../assets/movieImage.jpg',
        classification: "T18",
        format: "2D",
        director: "Simon Cellan Jones",
        actors: ["Mark Wahlberg", "Juliet Rylance"],
        genre: "Adventure",
        releaseDate: new Date("2024-04-14"),
        duration: 107,
        subtitles: "Viet"
    },
    {
        id: 3,
        title: "Arthur The King 2",
        description: "Doraemon và những người bạn thực hiện chuyến phiêu lưu để gặp gỡ những người bạn mới, kết nối mọi người bằng âm nhạc và cứu thế giới khỏi khủng hoảng.",
        image: '../assets/movieImage.jpg',
        classification: "T18",
        format: "2D",
        director: "Simon Cellan Jones",
        actors: ["Mark Wahlberg", "Juliet Rylance"],
        genre: "Adventure",
        releaseDate: new Date("2024-04-14"),
        duration: 107,
        subtitles: "Viet"
    },
    {
        id: 4,
        title: "Arthur The King 3",
        description: "Doraemon và những người bạn thực hiện chuyến phiêu lưu để gặp gỡ những người bạn mới, kết nối mọi người bằng âm nhạc và cứu thế giới khỏi khủng hoảng.",
        image: '../assets/movieImage.jpg',
        classification: "T18",
        format: "2D",
        director: "Simon Cellan Jones",
        actors: ["Mark Wahlberg", "Juliet Rylance"],
        genre: "Adventure",
        releaseDate: new Date("2024-04-14"),
        duration: 107,
        subtitles: "Viet"
    },
    {
        id: 5,
        title: "Arthur The King 4",
        description: "Doraemon và những người bạn thực hiện chuyến phiêu lưu để gặp gỡ những người bạn mới, kết nối mọi người bằng âm nhạc và cứu thế giới khỏi khủng hoảng.",
        image: '../assets/movieImage.jpg',
        classification: "T18",
        format: "2D",
        director: "Simon Cellan Jones",
        actors: ["Mark Wahlberg", "Juliet Rylance"],
        genre: "Adventure",
        releaseDate: new Date("2024-04-14"),
        duration: 107,
        subtitles: "Viet"
    },
    // {
    //     id: 6,
    //     title: "Arthur The King 5",
    // description: "Doraemon và những người bạn thực hiện chuyến phiêu lưu để gặp gỡ những người bạn mới, kết nối mọi người bằng âm nhạc và cứu thế giới khỏi khủng hoảng.",
    //     image: '../assets/movieImage.jpg',
    //     classification: "T18",
    //     format: "2D",
    //     director: "Simon Cellan Jones",
    //     actors: ["Mark Wahlberg", "Juliet Rylance"],
    //     genre: "Adventure",
    //     releaseDate: new Date("2024-04-14"),
    //     duration: 107,
    //     subtitles: "Viet"
    // },
    // {
    //     id: 7,
    //     title: "Arthur The King 6",
    // description: "Doraemon và những người bạn thực hiện chuyến phiêu lưu để gặp gỡ những người bạn mới, kết nối mọi người bằng âm nhạc và cứu thế giới khỏi khủng hoảng.",
    //     image: '../assets/movieImage.jpg',
    //     classification: "T18",
    //     format: "2D",
    //     director: "Simon Cellan Jones",
    //     actors: ["Mark Wahlberg", "Juliet Rylance"],
    //     genre: "Adventure",
    //     releaseDate: new Date("2024-04-14"),
    //     duration: 107,
    //     subtitles: "Viet"
    // },
    // {
    //     id: 8,
    //     title: "Arthur The King 7",
    // description: "Doraemon và những người bạn thực hiện chuyến phiêu lưu để gặp gỡ những người bạn mới, kết nối mọi người bằng âm nhạc và cứu thế giới khỏi khủng hoảng.",
    //     image: '../assets/movieImage.jpg',
    //     classification: "T18",
    //     format: "2D",
    //     director: "Simon Cellan Jones",
    //     actors: ["Mark Wahlberg", "Juliet Rylance"],
    //     genre: "Adventure",
    //     releaseDate: new Date("2024-04-14"),
    //     duration: 107,
    //     subtitles: "Viet"
    // }
]