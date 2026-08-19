const GAMES = [
{
  id:'run-hide-fight', uid:'8355209732', name:'Run Hide Fight', cat:'combat',
  role:'Full-Stack Developer', visits:null, favs:null,
  url:'https://www.roblox.com/games/135406051460913/Run-Hide-Fight',
  credit:'Contributor in itwasstudio',
  brief:'itwasross hired me in September 2025 to handle the whole game, front-end and back-end. I hold Contributor in the itwasstudio group.',
  did:[
    'Carrying wounded players',
    'Healing other players',
    'New guns',
    'New objectives',
    'Parrying, punching, kicking and slapping'
  ]
},
{
  id:'tds-legacy', uid:'4553577932', name:'TDS: Legacy', cat:'td',
  role:'Animator & Modeler', visits:10644026, favs:21812,
  url:'https://www.roblox.com/games/13030221735/TDS-Legacy',
  credit:'Worked from @skidoodlesama',
  clips:[
    {k:'t01', t:'Emote animation'},
    {k:'t02', t:'Dance animation'},
    {k:'t03', t:'Animation test on the rig'}
  ],
  brief:'RobBull129 contracted me in 2022 to do all the animation and modeling on the game. That ran for about two years, until he quit.',
  did:[
    'All animation work on the game',
    'All modeling work',
    'Roughly 80% of the animations in TDS: Legacy are mine'
  ]
},
{
  id:'slap-battles-td', uid:'5194993417', name:'Slap Battles Tower Defense', cat:'td',
  role:'Lead Developer', visits:19269691, favs:13109,
  url:'https://www.roblox.com/games/15076947052/Slap-Battles-Tower-Defense',
  clips:[
    {k:'s01', t:'Unit placement and hotbar in Studio'}
  ],
  brief:'I was originally hired to do everything on the game and started a full rewrite. The owner had all of his accounts compromised before it shipped, the work was scrapped, and the game changed hands.',
  did:[]
},
{
  id:'abd-modded', uid:'3902524649', name:'A Bizarre Day Modded', alt:'formerly Stands: Awakening',
  cat:'combat', role:'Owner', visits:249384505, favs:392915,
  url:'https://www.roblox.com/games/10797684515/5x-HUGE-UPDATE-A-Bizarre-Day-Modded',
  links:[
    {label:'A Bizarre Day Modded', url:'https://www.roblox.com/games/10797684515/5x-HUGE-UPDATE-A-Bizarre-Day-Modded'},
    {label:'Stands: Awakening', url:'https://www.roblox.com/games/5780309044/2X-SPAWNS-STW-Stands-Awakening'},
    {label:'Discord', url:'https://discord.gg/joyful'}
  ],
  clips:[
    {k:'c01', t:'Rigging and keyframing in Studio'},
    {k:'c02', t:'Ability charge VFX'},
    {k:'c03', t:'Ability test against dummies'},
    {k:'c04', t:'Wolf model rig in Studio'},
    {k:'c05', t:'Timed encounter on a live server'},
    {k:'c06', t:'Nameplate test'},
    {k:'c07', t:'Stand summon in game'},
    {k:'c08', t:'Cutscene animation'},
    {k:'c09', t:'Ragdoll physics test'},
    {k:'c10', t:'Ultimate ability VFX'},
    {k:'c11', t:'Minecraft client main menu'},
    {k:'c12', t:'Latte art minigame in Studio'}
  ],
  brief:'powering_paladin (now realsayon1) hired me onto Stands: Awakening. Stands: Awakening sits under RachelsCabin now, and the branch I run became A Bizarre Day Modded, which I own outright with my friend Kaibah.',
  did:[
    'All scripting',
    'All modeling',
    'All animation',
    'Running the dev team and the direction of the game'
  ]
},
{
  id:'doomspire-defense', uid:'5367086137', name:'Doomspire Defense', cat:'td',
  role:'Full-Stack Developer', visits:68084193, favs:89971,
  url:'https://www.roblox.com/games/15549445942/Doomspire-Defense',
  credit:'Contributor in the group, worked from @skidoodlesama',
  video:{id:'XhDfrXEjGaQ', label:'The Mastery Update', note:'Everything in this video was built by us.'},
  brief:'veennoid hired me and my cousin @differentzach on as full-stack developers. The Mastery Update was the biggest thing we shipped there.',
  did:[]
},
{
  id:'dat-hood', uid:'3953740961', name:'Dat Hood', cat:'combat',
  role:'Co-Owner', visits:1449824, favs:7937, offline:true,
  url:'https://www.roblox.com/games/10968324786/Content-Deleted',
  brief:'Co-owned with my cousin @differentzach. The game has since been taken down.',
  did:[]
},
{
  id:'block-tales-td', uid:'7260011143', name:'Block Tales Tower Defense', cat:'td',
  role:'Front-End Developer', visits:3831823, favs:12097,
  url:'https://www.roblox.com/games/88234448252894/Data-Restoring-Place',
  clips:[
    {k:'b01', t:'Cutscene characters and staging'},
    {k:'b02', t:'Store and gamepass UI'},
    {k:'b03', t:'Rigging and animation timeline'}
  ],
  brief:'khromaflare hired me for all of the front-end work. Everything you see on the front end of that game, I made.',
  did:[]
},
{
  id:'super-power-league', uid:'6864840346', name:'Super Power Training League', cat:'sim',
  role:'Backend Developer', visits:12391221, favs:78606,
  url:'https://www.roblox.com/games/137681066791460/UPD-OUT-Super-Power-Training-League',
  brief:'Backend work. There is nothing visual to show for it, because none of it was front-facing.',
  did:[]
},
{
  id:'forsaken-td', uid:'7244012130', name:'Forsaken Tower Defense', cat:'td',
  role:'Sole Developer', visits:7270764, favs:15628,
  url:'https://www.roblox.com/games/101266069969046/Forsaken-Tower-Defense',
  brief:'I did everything on this one.',
  did:[]
},
{
  id:'anime-paradox', uid:'7652830984', name:'Anime Paradox', cat:'td',
  role:'Full-Stack Developer', visits:28565687, favs:32015, flag:'New',
  url:'https://www.roblox.com/games/76806550943352/Anime-Paradox',
  clips:[
    {k:'a01', t:'Calendar events and quest system'},
    {k:'a02', t:'In-match unit bar and economy'},
    {k:'a03', t:'Summon banner UI'},
    {k:'a04', t:'Summon flow and unit space limits'},
    {k:'a05', t:'Lobby HUD and menus'}
  ],
  brief:'noctisnine hired me to do the front-end and back-end for his rerelease of the game. It did not take off.',
  did:[]
},
{
  id:'auruzz-rng', uid:'7256205234', name:'Auruzz RNG', alt:'formerly Huzz RNG', cat:'sim',
  role:'Programmer', visits:18392488, favs:85671,
  url:'https://www.roblox.com/games/75852144330025/Huzz-RNG',
  brief:'I built the game’s Cmdr admin console and command set, and cleared out the bug backlog it had at the time.',
  did:[]
},
{
  id:'old-abd', uid:'2275514399', name:'Old A Bizarre Day', cat:'combat',
  role:'Contributor', visits:12383172, favs:24734,
  url:'https://www.roblox.com/games/6206310576/KQ-CD-REWORK-Old-A-Bizarre-Day',
  brief:null, did:[]
},
{
  id:'reborn-swordsman', uid:'5827120940', name:'Reborn As Swordsman', cat:'combat',
  role:'Contributor', visits:195475754, favs:3767250,
  url:'https://www.roblox.com/games/16981421605/Reborn-As-Swordsman',
  brief:null, did:[]
},
{
  id:'critical-td', uid:'1937412040', name:'Critical Tower Defense', cat:'td',
  role:'Contributor', visits:78707498, favs:121575,
  url:'https://www.roblox.com/games/5543622168/Critical-Tower-Defense',
  brief:null, did:[]
},
{
  id:'shuriken-sim', uid:'', name:'Shuriken Simulator', cat:'sim',
  role:'Contributor', visits:null, favs:null, offline:true, url:'',
  brief:null, did:[]
},
{
  id:'abyss-client', uid:'', logo:'abyss', name:'Abyss Client', cat:'client',
  role:'Owner', visits:null, favs:null,
  url:'https://abyssclient.com/',
  links:[
    {label:'abyssclient.com', url:'https://abyssclient.com/'},
    {label:'Showcase video', url:'https://www.youtube.com/watch?v=BPdKZyQE3AE'}
  ],
  showcase:[
    {id:'BPdKZyQE3AE', label:'Abyss Client Showcase'},
    {id:'sRDYbIKxCNo', label:'Complete Client Overview'},
    {id:'hsJnJGf_1ws', label:'Abyss Client Review'}
  ],
  video:{id:'BPdKZyQE3AE', label:'Abyss showcase', note:''},
  brief:'I own Abyss Client and lead its development.',
  did:[]
},
{
  id:'rusherhack', uid:'', logo:'rusherhack', name:'Rusherhack', cat:'client',
  role:'Programmer', visits:null, favs:null,
  url:'https://rusherhack.org/',
  links:[
    {label:'rusherhack.org', url:'https://rusherhack.org/'},
    {label:'Showcase video', url:'https://www.youtube.com/watch?v=Dg1BoHX7bJo'}
  ],
  showcase:[
    {id:'Dg1BoHX7bJo', label:'Official Showcase Trailer 2024'},
    {id:'DE7B8cbXzWw', label:'Complete Client Overview'},
    {id:'_dSiZdCpT4U', label:'Honest Review'}
  ],
  video:{id:'Dg1BoHX7bJo', label:'Rusherhack showcase', note:''},
  brief:'I programmed for Rusherhack.',
  did:[]
},
{
  id:'konas-client', uid:'', logo:'konas', name:'Konas Client', cat:'client',
  role:'Programmer', visits:null, favs:null,
  url:'https://konasclient.com/',
  links:[
    {label:'konasclient.com', url:'https://konasclient.com/'},
    {label:'Showcase video', url:'https://www.youtube.com/watch?v=FD0F51P7YoU'}
  ],
  showcase:[
    {id:'FD0F51P7YoU', label:'Konas Client Showcase'},
    {id:'f9WkD-Dh9uk', label:'Konas Client Review'},
    {id:'VG6AkXc1Zzo', label:'Complete Client Overview'}
  ],
  video:{id:'FD0F51P7YoU', label:'Konas showcase', note:''},
  brief:'I programmed for Konas Client.',
  did:[]
},
{
  id:'future-client', uid:'', logo:'future', name:'Future Client', cat:'client',
  role:'Programmer', visits:null, favs:null, url:'https://futureclient.net/',
  links:[
    {label:'futureclient.net', url:'https://futureclient.net/'},
    {label:'Showcase video', url:'https://www.youtube.com/watch?v=WZEBWOf6ILI'}
  ],
  showcase:[
    {id:'WZEBWOf6ILI', label:'Future Client Showcase'}
  ],
  video:{id:'WZEBWOf6ILI', label:'Future Client showcase', note:''},
  brief:'I programmed for Future Client.',
  did:[]
}
];

const GENERAL = [
  {k:'g01', t:'Admin console and commands'},
  {k:'g02', t:'Combat and movement test'},
  {k:'g03', t:'Slot machine build in Studio'},
  {k:'g04', t:'Colour cycle effect in Studio'},
  {k:'g05', t:'Walk cycle in the animation editor'},
  {k:'g06', t:'Rig posing in Studio'},
  {k:'g07', t:'Tower stats and upgrade UI'},
  {k:'g08', t:'Wave flow and tower upgrades'},
  {k:'g09', t:'Minecraft client main menu'}
];

const MEDIA = __MEDIA__;
const CLIPS = __CLIPS__;
const ICONS = __ICONS__;
