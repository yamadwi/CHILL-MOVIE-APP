import TedLasso from "../assets/images/Poster/Ted-Lasso.png";
import TedLassoD from "../assets/images/Poster-Display/Ted-Lasso-Display.png";
import DutyAfterSchool from "../assets/images/Poster/Duty-After-School.png";
import DutyAfterSchoolD from "../assets/images/Poster-Display/Duty-After-School-Display.png";
import AllOfUsAreDead from "../assets/images/Poster/All-Of-Us-Are-Dead.png";
import AllOfUsAreDeadD from "../assets/images/Poster-Display/All-Of-Us-Are-Dead.png";
import AliceInBorderLand from "../assets/images/Poster/Alice-In-Borderland.png";
import AliceInBorderLandD from "../assets/images/Poster-Display/Alice-Display.png";
import BlueLock from "../assets/images/Poster/BlueLock.png";
import BlueLockD from "../assets/images/Poster-Display/BlueLock-Display.png";
import MyHeroAcademia from "../assets/images/Poster/My-Hero-Academia.png";
import MyHeroAcademiaD from "../assets/images/Poster-Display/Academia-Display.png";
import MyPerfectStranger from "../assets/images/Poster/My-Perfect-Stranger.png";
import MyPerfectStrangerD from "../assets/images/Poster-Display/My-Perfect-Stranger-Display.png";

const series = [
  {
    id: 1,
    type: "series",

    title: "Ted Lasso",

    portrait: TedLasso,
    landscape: TedLassoD,
    backdrop: TedLassoD,

    age: "16+",
    episode: "34 Episode",

    genre: [
      "Comedy",
      "Drama",
      "Sport",
    ],

    description:
      "Pelatih sepak bola Amerika, Ted Lasso, direkrut untuk melatih klub sepak bola Inggris meski tidak memiliki pengalaman. Sikap optimisnya perlahan mengubah tim dan orang-orang di sekitarnya.",

    cast: [
      "Jason Sudeikis",
      "Hannah Waddingham",
      "Juno Temple",
      "Brett Goldstein",
      "Jeremy Swift",
    ],

    creator: [
      "Bill Lawrence",
      "Jason Sudeikis",
      "Brendan Hunt",
      "Joe Kelly",
    ],

    episodes: [
      {
        no: 1,
        title: "Pilot",
        duration: "30 min",
        thumbnail: TedLassoD,
        description:
          "Ted tiba di Inggris untuk mulai melatih AFC Richmond.",
      },
      {
        no: 2,
        title: "Biscuits",
        duration: "32 min",
        thumbnail: TedLassoD,
        description:
          "Ted mencoba mendapatkan kepercayaan Rebecca dengan caranya sendiri.",
      },
    ],
  },

  {
    id: 2,
    type: "series",

    title: "Duty After School",

    portrait: DutyAfterSchool,
    landscape: DutyAfterSchoolD,
    backdrop: DutyAfterSchoolD,

    age: "16+",
    episode: "10 Episode",

    genre: [
      "Action",
      "Drama",
      "Sci-Fi",
      "Thriller",
    ],

    description:
      "Sekelompok siswa SMA direkrut menjadi pasukan cadangan untuk melawan makhluk misterius yang muncul di langit.",

    cast: [
      "Shin Hyun-soo",
      "Lee Soon-won",
      "Kim Ki-hae",
      "Lim Se-mi",
    ],

    creator: [
      "Sung Yong-il",
    ],

    episodes: [
      {
        no: 1,
        title: "The Beginning",
        duration: "1h 10m",
        thumbnail: DutyAfterSchoolD,
        description:
          "Siswa menerima pelatihan militer ketika ancaman mulai muncul.",
      },
      {
        no: 2,
        title: "First Mission",
        duration: "1h 5m",
        thumbnail: DutyAfterSchoolD,
        description:
          "Misi pertama berubah menjadi mimpi buruk.",
      },
    ],
  },

  {
    id: 3,
    type: "series",

    title: "All of Us Are Dead",

    portrait: AllOfUsAreDead,
    landscape: AllOfUsAreDeadD,
    backdrop: AllOfUsAreDeadD,

    age: "18+",
    episode: "12 Episode",

    genre: [
      "Horror",
      "Action",
      "Drama",
      "Thriller",
    ],

    description:
      "Sekelompok siswa SMA berjuang bertahan hidup ketika wabah zombie menyebar ke seluruh sekolah.",

    cast: [
      "Park Ji-hu",
      "Yoon Chan-young",
      "Cho Yi-hyun",
      "Lomon",
    ],

    creator: [
      "Lee Jae-kyoo",
    ],

    episodes: [
      {
        no: 1,
        title: "Outbreak",
        duration: "1h 6m",
        thumbnail: AllOfUsAreDeadD,
        description:
          "Virus zombie mulai menyebar di sekolah Hyosan.",
      },
      {
        no: 2,
        title: "Escape",
        duration: "1h",
        thumbnail: AllOfUsAreDeadD,
        description:
          "Para siswa mencoba keluar dari sekolah yang dipenuhi zombie.",
      },
    ],
  },

  {
    id: 4,
    type: "series",

    title: "Alice in Borderland",

    portrait: AliceInBorderLand,
    landscape: AliceInBorderLandD,
    backdrop: AliceInBorderLandD,

    age: "18+",
    episode: "17 Episode",

    genre: [
      "Action",
      "Mystery",
      "Sci-Fi",
      "Thriller",
    ],

    description:
      "Arisu terjebak di dunia alternatif dan dipaksa mengikuti permainan mematikan untuk bertahan hidup.",

    cast: [
      "Kento Yamazaki",
      "Tao Tsuchiya",
      "Nijiro Murakami",
    ],

    creator: [
      "Shinsuke Sato",
    ],

    episodes: [
      {
        no: 1,
        title: "Game Start",
        duration: "50 min",
        thumbnail: AliceInBorderLandD,
        description:
          "Arisu memasuki dunia Borderland.",
      },
      {
        no: 2,
        title: "Deadly Choice",
        duration: "56 min",
        thumbnail: AliceInBorderLandD,
        description:
          "Permainan kedua menguji kerja sama tim.",
      },
    ],
  },

  {
    id: 5,
    type: "series",

    title: "Blue Lock",

    portrait: BlueLock,
    landscape: BlueLockD,
    backdrop: BlueLockD,

    age: "13+",
    episode: "24 Episode",

    genre: [
      "Anime",
      "Sport",
      "Drama",
    ],

    description:
      "300 striker terbaik Jepang bersaing dalam proyek Blue Lock untuk menjadi penyerang nomor satu dunia.",

    cast: [
      "Kazuki Ura",
      "Tasuku Kaito",
      "Yuki Ono",
    ],

    creator: [
      "Muneyuki Kaneshiro",
      "Yusuke Nomura",
    ],

    episodes: [
      {
        no: 1,
        title: "Dream",
        duration: "24 min",
        thumbnail: BlueLockD,
        description:
          "Yoichi Isagi bergabung dengan proyek Blue Lock.",
      },
      {
        no: 2,
        title: "Monster",
        duration: "24 min",
        thumbnail: BlueLockD,
        description:
          "Para pemain mulai memahami filosofi Ego Jinpachi.",
      },
    ],
  },

  {
    id: 6,
    type: "series",

    title: "My Hero Academia",

    portrait: MyHeroAcademia,
    landscape: MyHeroAcademiaD,
    backdrop: MyHeroAcademiaD,

    age: "13+",
    episode: "159 Episode",

    genre: [
      "Anime",
      "Action",
      "Adventure",
      "Comedy",
      "Fantasy",
    ],

    description:
      "Izuku Midoriya mewarisi kekuatan One For All dan berusaha menjadi pahlawan nomor satu.",

    cast: [
      "Daiki Yamashita",
      "Nobuhiko Okamoto",
      "Kenta Miyake",
    ],

    creator: [
      "Kohei Horikoshi",
    ],

    episodes: [
      {
        no: 1,
        title: "Izuku Midoriya: Origin",
        duration: "24 min",
        thumbnail: MyHeroAcademiaD,
        description:
          "Perjalanan Deku menjadi pahlawan dimulai.",
      },
      {
        no: 2,
        title: "What It Takes to Be a Hero",
        duration: "24 min",
        thumbnail: MyHeroAcademiaD,
        description:
          "All Might memberikan harapan baru kepada Deku.",
      },
    ],
  },

  {
    id: 7,
    type: "series",

    title: "My Perfect Stranger",

    portrait: MyPerfectStranger,
    landscape: MyPerfectStrangerD,
    backdrop: MyPerfectStrangerD,

    age: "13+",
    episode: "16 Episode",

    genre: [
      "Drama",
      "Mystery",
      "Fantasy",
      "Romance",
    ],

    description:
      "Seorang jurnalis dan editor melakukan perjalanan waktu ke tahun 1987 untuk mengungkap misteri pembunuhan yang mengubah hidup mereka.",

    cast: [
      "Kim Dong-wook",
      "Jin Ki-joo",
      "Seo Ji-hye",
    ],

    creator: [
      "Kang Soo-yeon",
    ],

    episodes: [
      {
        no: 1,
        title: "1987",
        duration: "1h 5m",
        thumbnail: MyPerfectStrangerD,
        description:
          "Dua orang asing bertemu di masa lalu.",
      },
      {
        no: 2,
        title: "The Investigation",
        duration: "1h 3m",
        thumbnail: MyPerfectStrangerD,
        description:
          "Mereka mulai mengungkap misteri pembunuhan.",
      },
    ],
  },
];
  
  export default series;