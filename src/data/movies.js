import BigHero6 from "../assets/images/Poster/Big-Hero-6.png";
import BigHero6D from "../assets/images/Poster-Display/Big-Hero-Display.png";
import Sonic2 from "../assets/images/Poster/Sonic-2.png";
import Sonic2D from "../assets/images/Poster-Display/Sonic-2-Display.png";
import JurassicWorld from "../assets/images/Poster/Jurassic-World-Dominion.png";
import JurassicWorldD from "../assets/images/Poster-Display/Jurassic-Display.png";
import SpiderManAU from "../assets/images/Poster/spiderman-acros-universe.png";
import SpiderManAUD from "../assets/images/Poster-Display/spiderman-acros-universe-Display.png";
import Suzume from "../assets/images/Poster/Suzume.png";
import SuzumeD from "../assets/images/Poster-Display/Suzume-Display.png";
import Rio from "../assets/images/Poster/rio.png";
import RioD from "../assets/images/Poster-Display/Rio-Display.png";
import GuardianGalaxy from "../assets/images/Poster/Guardian-Of-The-Galaxy.png";
import GuardianGalaxyD from "../assets/images/Poster-Display/Guardian-Display.png";
import BlackAdam from "../assets/images/Poster/Black-Adam.png";
import BlackAdamD from "../assets/images/Poster-Display/Black-Adam-Display.png";
import Baymax from "../assets/images/Poster/Baymax.png";
import BaymaxD from "../assets/images/Poster-Display/Baymax-Display.png";
import Mermaid from "../assets/images/Poster/The-Little-Mermaid.png";
import MermaidD from "../assets/images/Poster-Display/Mermaid-Display.png";
import TTWar from "../assets/images/Poster/The-Tomorrow-War.png";
import TTWarD from "../assets/images/Poster-Display/Tomorrow-War-Display.png";
import Batman from "../assets/images/Poster/The-Batman.png";
import BatmanD from "../assets/images/Poster-Display/The-Batman-Display.png";

const movies = [
  {
    id: 1,
    type: "movie",

    title: "Big Hero 6",

    portrait: BigHero6,
    landscape: BigHero6D,
    backdrop: BigHero6D,

    age: "SU",
    duration: "1j 42m",

    genre: [
      "Animation",
      "Action",
      "Adventure",
      "Comedy",
      "Family",
    ],

    description:
      "Seorang jenius muda bernama Hiro Hamada bekerja sama dengan robot kesehatan Baymax dan teman-temannya untuk membentuk tim pahlawan super demi mengungkap dalang di balik sebuah konspirasi berbahaya.",

    cast: [
      "Ryan Potter",
      "Scott Adsit",
      "Jamie Chung",
      "Genesis Rodriguez",
      "T.J. Miller",
    ],

    director: "Don Hall & Chris Williams",

    recommendation: [6, 9, 4],
  },

  {
    id: 2,
    type: "movie",

    title: "Sonic the Hedgehog 2",

    portrait: Sonic2,
    landscape: Sonic2D,
    backdrop: Sonic2D,

    age: "SU",
    duration: "2j 2m",

    genre: [
      "Adventure",
      "Action",
      "Comedy",
      "Family",
      "Fantasy",
    ],

    description:
      "Sonic kembali beraksi bersama Tails untuk menghentikan Dr. Robotnik yang berusaha menguasai Emerald sakti sebelum jatuh ke tangan yang salah.",

    cast: [
      "Ben Schwartz",
      "James Marsden",
      "Jim Carrey",
      "Idris Elba",
      "Colleen O'Shaughnessey",
    ],

    director: "Jeff Fowler",

    recommendation: [1, 4, 7],
  },

  {
    id: 3,
    type: "movie",

    title: "Jurassic World Dominion",

    portrait: JurassicWorld,
    landscape: JurassicWorldD,
    backdrop: JurassicWorldD,

    age: "13+",
    duration: "2j 27m",

    genre: [
      "Action",
      "Adventure",
      "Sci-Fi",
      "Thriller",
    ],

    description:
      "Manusia dan dinosaurus kini hidup berdampingan. Namun keseimbangan dunia kembali terancam ketika eksperimen genetik memicu konflik baru.",

    cast: [
      "Chris Pratt",
      "Bryce Dallas Howard",
      "Laura Dern",
      "Sam Neill",
      "Jeff Goldblum",
    ],

    director: "Colin Trevorrow",

    recommendation: [7, 11, 12],
  },

  {
    id: 4,
    type: "movie",

    title: "Spider-Man: Across the Spider-Verse",

    portrait: SpiderManAU,
    landscape: SpiderManAUD,
    backdrop: SpiderManAUD,

    age: "SU",
    duration: "2j 20m",

    genre: [
      "Animation",
      "Action",
      "Adventure",
      "Comedy",
      "Fantasy",
    ],

    description:
      "Miles Morales bertemu para Spider-People dari berbagai dimensi dan harus memilih jalannya sendiri demi melindungi orang-orang yang ia cintai.",

    cast: [
      "Shameik Moore",
      "Hailee Steinfeld",
      "Oscar Isaac",
      "Jake Johnson",
    ],

    director: "Joaquim Dos Santos",

    recommendation: [1, 2, 5],
  },

  {
    id: 5,
    type: "movie",

    title: "Suzume",

    portrait: Suzume,
    landscape: SuzumeD,
    backdrop: SuzumeD,

    age: "13+",
    duration: "2j 2m",

    genre: [
      "Anime",
      "Adventure",
      "Drama",
      "Fantasy",
    ],

    description:
      "Suzume memulai perjalanan untuk menutup pintu-pintu misterius yang menyebabkan bencana di seluruh Jepang.",

    cast: [
      "Nanoka Hara",
      "Hokuto Matsumura",
      "Eri Fukatsu",
    ],

    director: "Makoto Shinkai",

    recommendation: [4, 6, 10],
  },

  {
    id: 6,
    type: "movie",

    title: "Rio",

    portrait: Rio,
    landscape: RioD,
    backdrop: RioD,

    age: "SU",
    duration: "1j 36m",

    genre: [
      "Animation",
      "Adventure",
      "Comedy",
      "Family",
      "Musical",
    ],

    description:
      "Burung macaw bernama Blu melakukan perjalanan ke Rio de Janeiro dan menemukan arti keluarga, cinta, dan kebebasan.",

    cast: [
      "Jesse Eisenberg",
      "Anne Hathaway",
      "George Lopez",
    ],

    director: "Carlos Saldanha",

    recommendation: [1, 5, 9],
  },

  {
    id: 7,
    type: "movie",

    title: "Guardians of the Galaxy Vol. 3",

    portrait: GuardianGalaxy,
    landscape: GuardianGalaxyD,
    backdrop: GuardianGalaxyD,

    age: "13+",
    duration: "2j 30m",

    genre: [
      "Action",
      "Adventure",
      "Comedy",
      "Sci-Fi",
      "Superhero",
    ],

    description:
      "Peter Quill dan Guardians menjalankan misi paling berbahaya mereka demi menyelamatkan Rocket dari ancaman masa lalunya.",

    cast: [
      "Chris Pratt",
      "Zoe Saldaña",
      "Dave Bautista",
      "Karen Gillan",
      "Bradley Cooper",
    ],

    director: "James Gunn",

    recommendation: [3, 8, 12],
  },

  {
    id: 8,
    type: "movie",

    title: "Black Adam",

    portrait: BlackAdam,
    landscape: BlackAdamD,
    backdrop: BlackAdamD,

    age: "13+",
    duration: "2j 5m",

    genre: [
      "Action",
      "Adventure",
      "Fantasy",
      "Superhero",
    ],

    description:
      "Black Adam bangkit setelah ribuan tahun terpenjara dan membawa keadilan dengan caranya sendiri.",

    cast: [
      "Dwayne Johnson",
      "Pierce Brosnan",
      "Noah Centineo",
      "Sarah Shahi",
    ],

    director: "Jaume Collet-Serra",

    recommendation: [7, 12, 3],
  },

  {
    id: 9,
    type: "movie",

    title: "Baymax!",

    portrait: Baymax,
    landscape: BaymaxD,
    backdrop: BaymaxD,

    age: "SU",
    duration: "30m",

    genre: [
      "Animation",
      "Comedy",
      "Family",
      "Sci-Fi",
    ],

    description:
      "Baymax kembali membantu orang-orang di San Fransokyo melalui petualangan lucu dan menghangatkan hati.",

    cast: [
      "Scott Adsit",
      "Ryan Potter",
    ],

    director: "Don Hall",

    recommendation: [1, 6, 2],
  },

  {
    id: 10,
    type: "movie",

    title: "The Little Mermaid",

    portrait: Mermaid,
    landscape: MermaidD,
    backdrop: MermaidD,

    age: "SU",
    duration: "2j 15m",

    genre: [
      "Adventure",
      "Family",
      "Fantasy",
      "Musical",
      "Romance",
    ],

    description:
      "Ariel membuat perjanjian berbahaya demi mengejar impiannya menjelajahi dunia manusia.",

    cast: [
      "Halle Bailey",
      "Jonah Hauer-King",
      "Melissa McCarthy",
      "Javier Bardem",
    ],

    director: "Rob Marshall",

    recommendation: [5, 6, 1],
  },

  {
    id: 11,
    type: "movie",

    title: "The Tomorrow War",

    portrait: TTWar,
    landscape: TTWarD,
    backdrop: TTWarD,

    age: "13+",
    duration: "2j 18m",

    genre: [
      "Action",
      "Adventure",
      "Sci-Fi",
      "War",
    ],

    description:
      "Sekelompok tentara dari masa kini dikirim ke masa depan untuk menyelamatkan umat manusia dari invasi alien.",

    cast: [
      "Chris Pratt",
      "Yvonne Strahovski",
      "J.K. Simmons",
    ],

    director: "Chris McKay",

    recommendation: [3, 7, 12],
  },

  {
    id: 12,
    type: "movie",

    title: "The Batman",

    portrait: Batman,
    landscape: BatmanD,
    backdrop: BatmanD,

    age: "13+",
    duration: "2j 56m",

    genre: [
      "Action",
      "Crime",
      "Drama",
      "Mystery",
      "Thriller",
    ],

    description:
      "Batman menyelidiki serangkaian pembunuhan yang dilakukan Riddler dan mengungkap konspirasi besar di Gotham City.",

    cast: [
      "Robert Pattinson",
      "Zoë Kravitz",
      "Paul Dano",
      "Jeffrey Wright",
      "Colin Farrell",
    ],

    director: "Matt Reeves",

    recommendation: [8, 3, 7],
  },
];
  
  export default movies;