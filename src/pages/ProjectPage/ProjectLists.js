import CinveVerseProject from "../Projects/CinveVerseProject";
import HouseOfFashionProject from "../Projects/HouseOfFashionProject";
import MusicNexusProject from "../Projects/MusicNexusProject";
import RedditProject from "../Projects/RedditProject";

export const projects = [
  {
    id: 1,
    name: "Reddit.min",
    thumnail_url: './images/Reddit-min-thumbnail.png',
    modal: <RedditProject />
  },
  {
    id: 2,
    name: "CineVerse",
    thumnail_url: './images/Cineverse-thumbnail.png',
    modal: <CinveVerseProject />
  },
  {
    id: 3,
    name: "House Of Fashion",
    thumnail_url: './images/House-of-fashion-thumbnail.png',
    modal: <HouseOfFashionProject />
  },
  {
    id:4,
    name: "Music Nexus",
    thumnail_url: './images/Music-nexus-thumbnail.png',
    modal: <MusicNexusProject />
  }
];
