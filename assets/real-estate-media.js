/*
  Real estate media, shared by /real-estate and /listing-sample.

  Files live in /img/real-estate/ (photos as .webp, videos in /img/real-estate/video/ as 540x960 .mp4).
  To swap something, drop the new file in and change its `src`. Anything left as '' shows a labeled placeholder.

  - Photos and stills: .webp or .jpg (about 1600-2000px wide is plenty).
  - Video: an .mp4 file, or a YouTube or Vimeo link.
  - 3D tour: the Matterport (or similar) share link.
*/
(function () {
var RE = '/img/real-estate/';
window.BMM_RE_MEDIA = {
  // Full-width hero background. The phone mockups stay on top of it.
  hero: { image: RE + 'hero-twilight.webp', video: '' },

  // The three phones in the hero, left to right. `video` plays muted on a loop.
  heroPhones: [
    { src: RE + 'poster-listing-reel.webp', tag: 'Reel' },
    { src: RE + 'poster-story-just-listed.webp', video: RE + 'video/story-just-listed.mp4', tag: 'Story' },
    { src: RE + 'story-just-sold.webp', tag: 'Sold' }
  ],

  // Showcase: Photos tab. The first one is shown largest.
  photos: [
    { src: RE + 'photo-living-room.webp', alt: 'Bright living room with vaulted ceiling and chandelier', label: 'Living room · Owasso' },
    { src: RE + 'photo-front-exterior.webp', alt: 'White brick home with black garage doors', label: 'Front exterior · Owasso' },
    { src: RE + 'photo-kitchen.webp', alt: 'White kitchen with large island and gold pendants', label: 'Kitchen · Owasso' },
    { src: RE + 'photo-primary-bedroom.webp', alt: 'Primary bedroom with vaulted ceiling', label: 'Primary bedroom · Owasso' },
    { src: RE + 'photo-primary-bath.webp', alt: 'Primary bathroom with glass shower', label: 'Primary bath · Owasso' }
  ],

  // Showcase: Video tab. Vertical cuts, shown side by side.
  videos: [
    { src: RE + 'video/listing-reel.mp4', poster: RE + 'poster-listing-reel.webp', label: 'Listing Reel' },
    { src: RE + 'video/agent-walkthrough.mp4', poster: RE + 'poster-agent-walkthrough.webp', label: 'Agent walkthrough · Bixby' },
    { src: RE + 'video/social-reel.mp4', poster: RE + 'poster-social-reel.webp', label: 'Agent intro Reel' }
  ],

  // Showcase: Drone tab.
  drone: [
    { src: RE + 'drone-pool.webp', alt: 'Aerial view of a home with a backyard pool', label: 'Aerial · Bixby' },
    { src: RE + 'drone-neighborhood.webp', alt: 'Aerial view of the surrounding neighborhood', label: 'Neighborhood · Owasso' }
  ],

  // Showcase: 3D Tour tab. Paste the share link, e.g. https://my.matterport.com/show/?m=XXXX
  tour: { url: '', label: '3D tour' },

  // Showcase: Twilight tab.
  twilight: [
    { src: RE + 'twilight-sunset.webp', alt: 'Brick home at sunset with warm lights on', label: 'Twilight · Owasso' },
    { src: RE + 'twilight-aerial.webp', alt: 'Aerial twilight view of a brick home', label: 'Twilight aerial · Bixby' }
  ],

  // Before/after slider: the same frame, unedited and finished.
  beforeAfter: { before: RE + 'before-living-room.webp', after: RE + 'after-living-room.webp', label: 'Living room' },

  // Content Kit examples, one per post type.
  kit: {
    carousel: { src: RE + 'kit-carousel.webp', alt: 'Featured Listing carousel slide' },
    reel: { src: RE + 'poster-listing-reel.webp', alt: 'Listing Reel cover', video: true },
    intro: { src: RE + 'poster-social-reel.webp', alt: 'Agent intro video cover', video: true },
    justListed: { src: RE + 'kit-just-listed.webp', alt: 'Just Listed graphic' },
    stories: { src: RE + 'poster-story-open-house.webp', alt: 'Open house story', video: true },
    underContract: { src: RE + 'kit-under-contract.webp', alt: 'Under Contract graphic' },
    sold: { src: RE + 'kit-just-sold.webp', alt: 'Just Sold graphic' }
  },

  // Agent quotes shown next to the booking form. Only real quotes, with permission.
  quotes: [
    { quote: '', name: '', role: '' },
    { quote: '', name: '', role: '' },
    { quote: '', name: '', role: '' }
  ]
};
})();
