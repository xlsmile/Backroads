import tour01 from './images/tour-1.jpeg';
import tour02 from './images/tour-2.jpeg';
import tour03 from './images/tour-3.jpeg';
import tour04 from './images/tour-4.jpeg';

export const pageLinks = [
  { id: '01', href: '#home', text: 'home' },
  { id: '02', href: '#about', text: 'about' },
  { id: '03', href: '#services', text: 'services' },
  { id: '04', href: '#tours', text: 'tours' },
];

export const socialLinks = [
  { id: '01', href: 'https://www.facebook.com', icon: 'facebook' },
  { id: '02', href: 'https://www.twitter.com', icon: 'twitter' },
  { id: '03', href: 'https://www.squarespace.com', icon: 'squarespace' },
];

export const services = [
  {
    id: '01',
    icon: 'wallet',
    title: 'saving money',
    text: "Pinnace holystone mizzenmast quarter crow's nest nipperkin grog yardarm hempen halter furl. Swab barque interloper chantey doubloon starboard grog black jack gangway rutters.",
  },
  {
    id: '02',
    icon: 'tree',
    title: 'endless hiking',
    text: "Case shot Shiver me timbers gangplank crack Jennys tea cup ballast Blimey lee snow crow's nest rutters. Belay yo-ho-ho keelhaul squiffy black spot yardarm spyglass sheet transom heave to.",
  },
  {
    id: '03',
    icon: 'socks',
    title: 'amazing comfort',
    text: 'Bring a spring upon her cable holystone blow the man down spanker Shiver me timbers to go on account lookout wherry doubloon chase.',
  },
];

export const tours = [
  {
    id: '01',
    image: tour01,
    date: 'august 26th, 2023',
    title: 'Tibet Adventur',
    info: 'Coffer ahoy gangplank hornswaggle sloop Pieces of Eight gabion pirate bucko jack. Gangway Spanish Main Shiver me timbers hempen halter Brethren of the Coast scuttle topgallant hang the jib.',
    location: 'china',
    duration: 6,
    price: 2500,
  },
  {
    id: '02',
    image: tour02,
    date: 'october 1th, 2023',
    title: 'best of java',
    info: ' Blow the man down coffer hardtack Chain Shot pink brig bilge water lugger no prey, no pay driver. Dead men tell no tales aft booty fluke reef rum nipperkin hardtack to spyglass carouser.',
    location: 'indonesia',
    duration: 11,
    price: 3600,
  },
  {
    id: '03',
    image: tour03,
    date: 'september 15th, 2023',
    title: 'explore hong kong',
    info: 'Mizzenmast long boat schooner nipperkin red ensign cutlass Jack Ketch blow the man down avast Blimey. Loaded to the gunwalls execution dock Sail ho gangplank. Shiver me timbers to go on account lookout.',
    location: 'hong kong',
    duration: 8,
    price: 5000,
  },
  {
    id: '04',
    image: tour04,
    date: 'december 5th, 2023',
    title: 'Kenya highlights',
    info: 'Jack Tar Jack Ketch lateen sail. Lad bring a spring upon her cable reef measured fer yer chains careen gangway weigh anchor hogshead topsail bilge water and booty Jack Tar transom spirits',
    location: 'kenya',
    duration: 20,
    price: 8300,
  },
];
