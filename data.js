// Heritage Hawks Track & Field — Season Data
// Edit this file to add athletes, meets, and results.
//
// To add a meet:
//   1. Push an entry to `meets`
//   2. Push result rows to `results` (one row per athlete per event)
//   3. Optionally add full field data to `meetCompetitors[meetId]`
//
// Future meets: add to `meets` now — they'll show as "upcoming" until the date passes.

// =============================================================
//  ATHLETES
// =============================================================

const athletes = [
  // Girls
  { id:1,  name:"Juliette Davis",   grade:9,  gender:"F", events:["300m Hurdles","800m","4x400m Relay"] },
  { id:2,  name:"Avery Rose",       grade:11, gender:"F", events:["800m","Long Jump","Triple Jump"] },
  { id:3,  name:"Bayleigh Seymour", grade:12, gender:"F", events:["100m","200m","4x100m Relay"] },
  { id:4,  name:"Kaelynn Sweger",   grade:8,  gender:"F", events:["100m","200m","400m","Long Jump","4x100m Relay","4x400m Relay"] },
  { id:5,  name:"Maddie Brenan",    grade:11, gender:"F", events:["100m","4x100m Relay","4x400m Relay"] },
  { id:6,  name:"Reagan Hamaker",   grade:0,  gender:"F", events:["4x100m Relay","4x400m Relay"] },
  { id:7,  name:"Lucy Springfield", grade:9,  gender:"F", events:["200m","400m","Long Jump"] },
  { id:8,  name:"Leyah Glenn",      grade:6,  gender:"F", events:["100m","Long Jump"] },
  { id:9,  name:"Zaylee Marzan",    grade:8,  gender:"F", events:["Discus"] },
  // Boys
  { id:10, name:"Alex Harris",      grade:9,  gender:"M", events:["100m","High Jump","4x100m Relay","4x400m Relay"] },
  { id:11, name:"Tyson Hamaker",    grade:0,  gender:"M", events:["100m","Long Jump","4x100m Relay"] },
  { id:12, name:"Alex Marzan",      grade:12, gender:"M", events:["100m","Discus","Shot Put","4x100m Relay"] },
  { id:13, name:"Starr Maddox",     grade:11, gender:"M", events:["400m","4x400m Relay"] },
  { id:14, name:"Nathan Eade",      grade:0,  gender:"M", events:["800m","4x400m Relay"] },
  { id:15, name:"Billy Watroba",    grade:0,  gender:"M", events:["400m","Long Jump","4x100m Relay"] },
  { id:16, name:"Nate Griffeth",    grade:0,  gender:"M", events:["200m"] },
  { id:17, name:"London Seward",    grade:0,  gender:"M", events:["100m","200m","4x400m Relay"] },
  { id:18, name:"Will Bracey",      grade:12, gender:"M", events:["Shot Put"] },
  { id:19, name:"Van Hutcherson",   grade:11, gender:"M", events:["Shot Put","Discus"] },
  { id:20, name:"Landon Allen",     grade:11, gender:"M", events:["Discus"] },
  { id:21, name:"Grayson Davis",    grade:6,  gender:"M", events:["800m","1600m"] },
  { id:22, name:"Eli Shirey",       grade:8,  gender:"M", events:["800m","1600m"] },
  { id:23, name:"William James",    grade:12, gender:"M", events:["Shot Put"] },
  { id:24, name:"Sam Calabro",      grade:12, gender:"M", events:["400m"] },
  { id:25, name:"Barry Hanlon",     grade:0,  gender:"M", events:["400m"] },
  { id:26, name:"Collier Langdon",  grade:9,  gender:"M", events:["100m","200m"] },
  { id:27, name:"Henry Calabro",    grade:8,  gender:"M", events:["Long Jump"] },
];

// =============================================================
//  MEETS
// =============================================================
// Add upcoming meets here — they show as "upcoming" until date passes.

const meets = [
  { id:1, name:"Central Relays",                   date:"2026-02-28", location:"Carrollton, GA",                type:"Invitational" },
  { id:2, name:"Strong Rock Patriot Invitational",  date:"2026-03-21", location:"Strong Rock Christian School",  type:"Invitational" },
  { id:3, name:"Cougar Invitational",               date:"2026-03-05", location:"Columbus, GA",                  type:"Invitational" },
  { id:4, name:"Fayette/Coweta Invitational",       date:"2026-03-11", location:"Peachtree City, GA",            type:"Invitational" },
  { id:8, name:"St. Mary's Invitational",            date:"2026-03-25", location:"St. Mary's Academy",            type:"Invitational" },
  { id:5, name:"Whitefield Invitational",           date:"2026-04-01", location:"Mabelton, GA",                  type:"Invitational" },
  { id:6, name:"Region Championship",               date:"2026-04-15", location:"TBD",                           type:"Championship" },
  { id:7, name:"State Championship",                date:"2026-04-30", location:"Strong Rock Christian School",  type:"Championship" },
];

// =============================================================
//  RESULTS
// =============================================================
// Individual event results only — relays tracked in meetCompetitors.
// pr: true if this result was a personal record for this athlete in this event.

const results = [
  // --- CENTRAL RELAYS ---
  // Girls
  { meetId:1, athleteId:8,  event:"100m",         result:"16.18",   place:48, pr:true  },
  { meetId:1, athleteId:8,  event:"Long Jump",    result:"10-0",    place:31, pr:true  },
  { meetId:1, athleteId:3,  event:"100m",         result:"14.11",   place:4,  pr:true  },
  { meetId:1, athleteId:3,  event:"200m",         result:"33.00",   place:12, pr:true  },
  { meetId:1, athleteId:4,  event:"100m",         result:"15.17",   place:9,  pr:true  },
  { meetId:1, athleteId:4,  event:"200m",         result:"31.90",   place:10, pr:true  },
  { meetId:1, athleteId:4,  event:"400m",         result:"1:11.80", place:7,  pr:true  },
  { meetId:1, athleteId:7,  event:"200m",         result:"34.66",   place:15, pr:true  },
  { meetId:1, athleteId:7,  event:"400m",         result:"1:20.06", place:12, pr:true  },
  { meetId:1, athleteId:7,  event:"Long Jump",    result:"12-2.50", place:11, pr:true  },
  { meetId:1, athleteId:2,  event:"800m",         result:"3:05.39", place:7,  pr:true  },
  { meetId:1, athleteId:2,  event:"Long Jump",    result:"10-4.50", place:12, pr:true  },
  { meetId:1, athleteId:2,  event:"Triple Jump",  result:"25-8",    place:5,  pr:true  },
  { meetId:1, athleteId:1,  event:"300m Hurdles", result:"56.98",   place:5,  pr:true  },
  { meetId:1, athleteId:9,  event:"Discus",       result:"56-5",    place:8,  pr:true  },
  // Boys
  { meetId:1, athleteId:10, event:"100m",         result:"11.98",   place:5,  pr:true  },
  { meetId:1, athleteId:10, event:"200m",         result:"25.37",   place:7,  pr:true  },
  { meetId:1, athleteId:12, event:"100m",         result:"13.40",   place:18, pr:true  },
  { meetId:1, athleteId:12, event:"Discus",       result:"120-0",   place:3,  pr:true  },
  { meetId:1, athleteId:13, event:"400m",         result:"1:01.60", place:17, pr:true  },
  { meetId:1, athleteId:21, event:"800m",         result:"2:46.30", place:13, pr:true  },
  { meetId:1, athleteId:21, event:"1600m",        result:"6:01.70", place:9,  pr:true  },
  { meetId:1, athleteId:22, event:"800m",         result:"2:44.85", place:9,  pr:true  },
  { meetId:1, athleteId:22, event:"1600m",        result:"5:58.05", place:11, pr:true  },
  { meetId:1, athleteId:19, event:"Discus",       result:"78-5",    place:9,  pr:true  },
  { meetId:1, athleteId:18, event:"Shot Put",     result:"33-9",    place:7,  pr:true  },
  { meetId:1, athleteId:23, event:"Shot Put",     result:"31-10",   place:10, pr:true  },
  { meetId:1, athleteId:20, event:"Discus",       result:"94-1",    place:6,  pr:true  },

  // --- STRONG ROCK PATRIOT INVITATIONAL ---
  // Girls
  { meetId:2, athleteId:5,  event:"100m",         result:"14.37",    place:8,  pr:true  },
  { meetId:2, athleteId:3,  event:"100m",         result:"14.67",    place:12, pr:false },
  { meetId:2, athleteId:4,  event:"400m",         result:"1:08.94",  place:5,  pr:true  },
  { meetId:2, athleteId:4,  event:"Long Jump",    result:"12-1.50",  place:11, pr:false },
  { meetId:2, athleteId:1,  event:"800m",         result:"2:54.41",  place:2,  pr:true  },
  { meetId:2, athleteId:1,  event:"300m Hurdles", result:"57.17",    place:2,  pr:false },
  { meetId:2, athleteId:2,  event:"800m",         result:"2:59.27",  place:4,  pr:true  },
  { meetId:2, athleteId:2,  event:"Long Jump",    result:"10-4",     place:13, pr:false },
  { meetId:2, athleteId:2,  event:"Triple Jump",  result:"25-4.50",  place:3,  pr:false },
  // Boys
  { meetId:2, athleteId:11, event:"100m",         result:"11.59",    place:2,  pr:true  },
  { meetId:2, athleteId:10, event:"100m",         result:"12.02",    place:8,  pr:false },
  { meetId:2, athleteId:16, event:"200m",         result:"27.31",    place:17, pr:true  },
  { meetId:2, athleteId:17, event:"200m",         result:"27.71",    place:18, pr:true  },
  { meetId:2, athleteId:15, event:"400m",         result:"58.57",    place:9,  pr:true  },
  { meetId:2, athleteId:13, event:"400m",         result:"1:01.20",  place:11, pr:true  },
  { meetId:2, athleteId:14, event:"800m",         result:"2:29.45",  place:11, pr:true  },
  { meetId:2, athleteId:10, event:"High Jump",    result:"5-8",      place:2,  pr:true  },
  { meetId:2, athleteId:11, event:"Long Jump",    result:"18-4",     place:6,  pr:true  },
  { meetId:2, athleteId:15, event:"Long Jump",    result:"14-10.50", place:17, pr:true  },
  { meetId:2, athleteId:18, event:"Shot Put",     result:"33-8.50",  place:6,  pr:false },
  { meetId:2, athleteId:19, event:"Shot Put",     result:"26-8",     place:13, pr:true  },
  { meetId:2, athleteId:12, event:"Discus",       result:"139-4.50", place:2,  pr:true  },
  { meetId:2, athleteId:20, event:"Discus",       result:"92-10.50", place:7,  pr:false },

  // --- COUGAR INVITATIONAL ---
  // Girls
  { meetId:3, athleteId:3,  event:"100m",         result:"13.76",    place:7,  pr:true  },
  { meetId:3, athleteId:5,  event:"100m",         result:"14.73",    place:22, pr:false },
  { meetId:3, athleteId:4,  event:"100m",         result:"14.84",    place:25, pr:true  },
  { meetId:3, athleteId:4,  event:"400m",         result:"1:10.12",  place:13, pr:false },
  { meetId:3, athleteId:7,  event:"400m",         result:"1:21.15",  place:25, pr:false },
  { meetId:3, athleteId:1,  event:"800m",         result:"2:55.30",  place:12, pr:false },
  { meetId:3, athleteId:2,  event:"800m",         result:"2:59.86",  place:17, pr:false },
  { meetId:3, athleteId:4,  event:"Long Jump",    result:"13-9",     place:4,  pr:true  },
  { meetId:3, athleteId:7,  event:"Long Jump",    result:"10-9.50",  place:14, pr:false },
  { meetId:3, athleteId:2,  event:"Long Jump",    result:"10-4",     place:15, pr:false },
  { meetId:3, athleteId:2,  event:"Triple Jump",  result:"26-0.50",  place:5,  pr:true  },
  // Boys
  { meetId:3, athleteId:10, event:"100m",         result:"12.02",    place:25, pr:false },
  { meetId:3, athleteId:15, event:"100m",         result:"13.25",    place:48, pr:true  },
  { meetId:3, athleteId:12, event:"100m",         result:"13.58",    place:50, pr:false },
  { meetId:3, athleteId:17, event:"100m",         result:"13.69",    place:51, pr:true  },
  { meetId:3, athleteId:24, event:"400m",         result:"1:01.12",  place:25, pr:true  },
  { meetId:3, athleteId:25, event:"400m",         result:"1:05.52",  place:33, pr:true  },
  { meetId:3, athleteId:22, event:"1600m",        result:"6:03.19",  place:22, pr:false },
  { meetId:3, athleteId:12, event:"Discus",       result:"105-2",    place:4,  pr:false },
  { meetId:3, athleteId:20, event:"Discus",       result:"93-8",     place:12, pr:false },
  { meetId:3, athleteId:18, event:"Shot Put",     result:"33-5",     place:20, pr:false },
  { meetId:3, athleteId:23, event:"Shot Put",     result:"32-3",     place:24, pr:true  },

  // --- ST. MARY'S INVITATIONAL ---
  // Girls
  { meetId:8, athleteId:3,  event:"100m",         result:"13.92",    place:3,  pr:false },
  { meetId:8, athleteId:4,  event:"100m",         result:"15.32",    place:15, pr:false },
  { meetId:8, athleteId:4,  event:"400m",         result:"1:09.86",  place:4,  pr:false },
  { meetId:8, athleteId:4,  event:"Long Jump",    result:"13-9",     place:5,  pr:false },
  { meetId:8, athleteId:1,  event:"800m",         result:"2:45.63",  place:1,  pr:true  },
  { meetId:8, athleteId:6,  event:"200m",         result:"32.50",    place:14, pr:true  },
  // Boys
  { meetId:8, athleteId:10, event:"100m",         result:"11.87",    place:4,  pr:true  },
  { meetId:8, athleteId:10, event:"200m",         result:"24.10",    place:3,  pr:true  },
  { meetId:8, athleteId:10, event:"Long Jump",    result:"20-0.25",  place:2,  pr:true  },
  { meetId:8, athleteId:26, event:"100m",         result:"12.71",    place:17, pr:true  },
  { meetId:8, athleteId:26, event:"200m",         result:"26.30",    place:23, pr:true  },
  { meetId:8, athleteId:16, event:"100m",         result:"12.75",    place:19, pr:true  },
  { meetId:8, athleteId:16, event:"200m",         result:"25.77",    place:19, pr:true  },
  { meetId:8, athleteId:17, event:"100m",         result:"13.32",    place:30, pr:true  },
  { meetId:8, athleteId:17, event:"200m",         result:"27.34",    place:31, pr:true  },
  { meetId:8, athleteId:15, event:"400m",         result:"56.58",    place:4,  pr:true  },
  { meetId:8, athleteId:14, event:"400m",         result:"1:00.23",  place:10, pr:true  },
  { meetId:8, athleteId:13, event:"400m",         result:"1:00.71",  place:12, pr:true  },
  { meetId:8, athleteId:13, event:"800m",         result:"2:34.45",  place:9,  pr:true  },
  { meetId:8, athleteId:13, event:"Long Jump",    result:"13-11",    place:12, pr:true  },
  { meetId:8, athleteId:27, event:"Long Jump",    result:"12-6",     place:13, pr:true  },
  { meetId:8, athleteId:12, event:"Discus",       result:"116-1",    place:1,  pr:false },
  { meetId:8, athleteId:20, event:"Discus",       result:"99-1",     place:4,  pr:true  },
  { meetId:8, athleteId:19, event:"Discus",       result:"84-4",     place:7,  pr:true  },
  { meetId:8, athleteId:18, event:"Shot Put",     result:"35-5",     place:5,  pr:true  },
  { meetId:8, athleteId:12, event:"Shot Put",     result:"33-6",     place:8,  pr:true  },
  { meetId:8, athleteId:23, event:"Shot Put",     result:"31-7",     place:10, pr:false },
];

// =============================================================
//  MEET COMPETITORS (full field data)
// =============================================================
// Keyed by meet id. Only include if you have full results from the RTF/PDF.
// hawk: true  →  highlighted as a Heritage athlete in the full results view.

const meetCompetitors = {
  // Central Relays (1): full results not available
  2: [
    // --- GIRLS ---
    // 100m
    { event:"100m", name:"Meredith, Kelsey (Strong Rock)",    gender:"F", result:"13.12", place:1  },
    { event:"100m", name:"Colgrove, Sophie (Brookstone)",     gender:"F", result:"13.67", place:2  },
    { event:"100m", name:"Helton, Clara (Brookstone)",        gender:"F", result:"13.81", place:3  },
    { event:"100m", name:"Holt, Jaii Marie (Creekside)",      gender:"F", result:"14.06", place:5  },
    { event:"100m", name:"Brenan, Maddie (Heritage)",         gender:"F", result:"14.37", place:8,  hawk:true },
    { event:"100m", name:"Seymour, Bayleigh (Heritage)",      gender:"F", result:"14.67", place:12, hawk:true },
    // 400m
    { event:"400m", name:"Colgrove, Sophie (Brookstone)",    gender:"F", result:"1:03.69", place:1  },
    { event:"400m", name:"McLaurin, Kennedi (Creekside)",    gender:"F", result:"1:06.43", place:2  },
    { event:"400m", name:"Lindsay, Jordyn (St. Mary's)",     gender:"F", result:"1:08.29", place:3  },
    { event:"400m", name:"Fenton, Faira (King's Academy)",   gender:"F", result:"1:08.35", place:4  },
    { event:"400m", name:"Sweger, Kaelynn (Heritage)",       gender:"F", result:"1:08.94", place:5,  hawk:true },
    // 800m
    { event:"800m", name:"Fenton, Faira (King's Academy)",   gender:"F", result:"2:50.20", place:1  },
    { event:"800m", name:"Davis, Juliette (Heritage)",       gender:"F", result:"2:54.41", place:2,  hawk:true },
    { event:"800m", name:"Herdon, Ada (Brookstone)",         gender:"F", result:"2:57.50", place:3  },
    { event:"800m", name:"Rose, Avery (Heritage)",           gender:"F", result:"2:59.27", place:4,  hawk:true },
    { event:"800m", name:"Casey, Savannah (King's Academy)", gender:"F", result:"3:00.08", place:5  },
    // 300m Hurdles
    { event:"300m Hurdles", name:"Foster, Braden (King's Academy)", gender:"F", result:"57.00",   place:1 },
    { event:"300m Hurdles", name:"Davis, Juliette (Heritage)",      gender:"F", result:"57.17",   place:2, hawk:true },
    { event:"300m Hurdles", name:"Hannahan, Ellie (Brookstone)",    gender:"F", result:"1:00.11", place:3 },
    // Long Jump
    { event:"Long Jump", name:"Whidby, Cassidy (Strong Rock)",    gender:"F", result:"14-4.50", place:1  },
    { event:"Long Jump", name:"Peterman, Arianna (King's Acad.)", gender:"F", result:"14-3",    place:2  },
    { event:"Long Jump", name:"Casey, Savannah (King's Acad.)",   gender:"F", result:"13-11",   place:3  },
    { event:"Long Jump", name:"Sweger, Kaelynn (Heritage)",       gender:"F", result:"12-1.50", place:11, hawk:true },
    { event:"Long Jump", name:"Rose, Avery (Heritage)",           gender:"F", result:"10-4",    place:13, hawk:true },
    // Triple Jump
    { event:"Triple Jump", name:"Casey, Savannah (King's Acad.)",   gender:"F", result:"32-6.50", place:1 },
    { event:"Triple Jump", name:"Preston, Anna H. (Trinity Dubl.)", gender:"F", result:"30-6",    place:2 },
    { event:"Triple Jump", name:"Rose, Avery (Heritage)",           gender:"F", result:"25-4.50", place:3, hawk:true },
    // 4x100 Relay
    { event:"4x100m Relay", name:"Brookstone 'A'",     gender:"F", result:"52.81", place:1 },
    { event:"4x100m Relay", name:"Strong Rock 'A'",    gender:"F", result:"53.40", place:2 },
    { event:"4x100m Relay", name:"Creekside 'A'",      gender:"F", result:"54.45", place:3 },
    { event:"4x100m Relay", name:"King's Academy 'A'", gender:"F", result:"56.67", place:4 },
    { event:"4x100m Relay", name:"Heritage 'A'",       gender:"F", result:"56.75", place:5, hawk:true },
    { event:"4x100m Relay", name:"St. Mary's 'A'",     gender:"F", result:"57.38", place:6 },
    // 4x400 Relay
    { event:"4x400m Relay", name:"Brookstone 'A'",     gender:"F", result:"4:32.78", place:1 },
    { event:"4x400m Relay", name:"Strong Rock 'A'",    gender:"F", result:"4:48.73", place:2 },
    { event:"4x400m Relay", name:"Heritage 'A'",       gender:"F", result:"4:53.63", place:3, hawk:true },
    { event:"4x400m Relay", name:"St. Mary's 'A'",     gender:"F", result:"5:05.51", place:4 },

    // --- BOYS ---
    // 100m
    { event:"100m", name:"Bone, Jaxon (King's Academy)",      gender:"M", result:"11.56", place:1  },
    { event:"100m", name:"Hamaker, Tyson (Heritage)",         gender:"M", result:"11.59", place:2,  hawk:true },
    { event:"100m", name:"Trammer, Michael (Calvary)",        gender:"M", result:"11.61", place:3  },
    { event:"100m", name:"Davies, Conner (Strong Rock)",      gender:"M", result:"11.62", place:4  },
    { event:"100m", name:"Harris, Jaikari (Calvary)",         gender:"M", result:"11.67", place:5  },
    { event:"100m", name:"Jackson-English, P. (St. Mary's)",  gender:"M", result:"11.80", place:6  },
    { event:"100m", name:"Harris, Alex (Heritage)",           gender:"M", result:"12.02", place:8,  hawk:true },
    // 400m
    { event:"400m", name:"Johnson, Noah (King's Academy)",   gender:"M", result:"51.84",   place:1  },
    { event:"400m", name:"Terrell, Ian (Creekside)",         gender:"M", result:"52.58",   place:2  },
    { event:"400m", name:"Hack, Jacob (Brookstone)",         gender:"M", result:"54.75",   place:3  },
    { event:"400m", name:"Watroba, Billy (Heritage)",        gender:"M", result:"58.57",   place:9,  hawk:true },
    { event:"400m", name:"Maddox, Starr (Heritage)",         gender:"M", result:"1:01.20", place:11, hawk:true },
    // 800m
    { event:"800m", name:"Starr, Mason (King's Academy)",    gender:"M", result:"2:01.17", place:1  },
    { event:"800m", name:"Cowley, John (Brookstone)",        gender:"M", result:"2:08.52", place:2  },
    { event:"800m", name:"Robbins, Christian (King's Acad.)",gender:"M", result:"2:17.08", place:3  },
    { event:"800m", name:"Eade, Nathan (Heritage)",          gender:"M", result:"2:29.45", place:11, hawk:true },
    // High Jump
    { event:"High Jump", name:"Davies, Conner (Strong Rock)", gender:"M", result:"6-2", place:1 },
    { event:"High Jump", name:"Harris, Alex (Heritage)",      gender:"M", result:"5-8", place:2, hawk:true },
    { event:"High Jump", name:"Williams, Jamar (Calvary)",    gender:"M", result:"5-8", place:2 },
    // Long Jump
    { event:"Long Jump", name:"Jackson-English, P. (St. Mary's)", gender:"M", result:"20-4.50",  place:1  },
    { event:"Long Jump", name:"Jones, Gibson (Strong Rock)",       gender:"M", result:"19-9.75",  place:2  },
    { event:"Long Jump", name:"Moses, Ty (St. Mary's)",            gender:"M", result:"19-5.50",  place:3  },
    { event:"Long Jump", name:"Hamaker, Tyson (Heritage)",         gender:"M", result:"18-4",     place:6,  hawk:true },
    { event:"Long Jump", name:"Watroba, Billy (Heritage)",         gender:"M", result:"14-10.50", place:17, hawk:true },
    // Shot Put
    { event:"Shot Put", name:"Childres, Andrew (Creekside)", gender:"M", result:"51-4",    place:1  },
    { event:"Shot Put", name:"Montgomery, M. (Strong Rock)", gender:"M", result:"37-7.50", place:2  },
    { event:"Shot Put", name:"Smallwood, Ares (Brookstone)", gender:"M", result:"36-2",    place:3  },
    { event:"Shot Put", name:"Bracey, Will (Heritage)",      gender:"M", result:"33-8.50", place:6,  hawk:true },
    { event:"Shot Put", name:"Hutcherson, Van (Heritage)",   gender:"M", result:"26-8",    place:13, hawk:true },
    // Discus
    { event:"Discus", name:"Childres, Andrew (Creekside)",   gender:"M", result:"145-3",    place:1 },
    { event:"Discus", name:"Marzan, Alex (Heritage)",        gender:"M", result:"139-4.50", place:2, hawk:true },
    { event:"Discus", name:"Currie, Ellis (Calvary)",        gender:"M", result:"133-4",    place:3 },
    { event:"Discus", name:"Allen, Landon (Heritage)",       gender:"M", result:"92-10.50", place:7, hawk:true },
    // 4x100 Relay
    { event:"4x100m Relay", name:"Calvary Christian 'A'",   gender:"M", result:"44.97", place:1 },
    { event:"4x100m Relay", name:"King's Academy 'B'",      gender:"M", result:"45.92", place:2 },
    { event:"4x100m Relay", name:"Strong Rock 'A'",         gender:"M", result:"46.12", place:3 },
    { event:"4x100m Relay", name:"Brookstone 'A'",          gender:"M", result:"47.61", place:4 },
    { event:"4x100m Relay", name:"Heritage 'A'",            gender:"M", result:"47.90", place:5, hawk:true },
    { event:"4x100m Relay", name:"St. Mary's 'A'",          gender:"M", result:"48.67", place:6 },
    // 4x400 Relay
    { event:"4x400m Relay", name:"King's Academy 'A'",      gender:"M", result:"3:46.36", place:1 },
    { event:"4x400m Relay", name:"Brookstone 'A'",          gender:"M", result:"3:51.24", place:2 },
    { event:"4x400m Relay", name:"Strong Rock 'A'",         gender:"M", result:"3:51.27", place:3 },
    { event:"4x400m Relay", name:"Heritage 'A'",            gender:"M", result:"4:17.41", place:8, hawk:true },
  ],

  // --- COUGAR INVITATIONAL ---
  3: [
    // --- GIRLS ---
    // 100m (top 15 + Heritage)
    { event:"100m", name:"Smoot, Antoinette (W.H. Spencer)",  gender:"F", result:"12.83", place:1  },
    { event:"100m", name:"Strozier, Stacia (Northside Col.)", gender:"F", result:"13.00", place:2  },
    { event:"100m", name:"Hodges, Kynleigh (Northside Col.)", gender:"F", result:"13.39", place:3  },
    { event:"100m", name:"Johnson, Zya (Kendrick)",           gender:"F", result:"13.40", place:4  },
    { event:"100m", name:"Jones, Ah'ja (W.H. Spencer)",       gender:"F", result:"13.47", place:5  },
    { event:"100m", name:"Parimon, Alexis (Terrell Co.)",     gender:"F", result:"13.57", place:6  },
    { event:"100m", name:"Seymour, Bayleigh (Heritage)",      gender:"F", result:"13.76", place:7,  hawk:true },
    { event:"100m", name:"Hall, Alisa (LaGrange)",            gender:"F", result:"13.80", place:8  },
    { event:"100m", name:"Epps, Alayah (W.H. Spencer)",       gender:"F", result:"13.86", place:9  },
    { event:"100m", name:"Driver, Ramsey (Schley Co.)",       gender:"F", result:"13.89", place:10 },
    { event:"100m", name:"Brenan, Maddie (Heritage)",         gender:"F", result:"14.73", place:22, hawk:true },
    { event:"100m", name:"Sweger, Kaelynn (Heritage)",        gender:"F", result:"14.84", place:25, hawk:true },
    // 400m (top 12 + Heritage)
    { event:"400m", name:"Jackson, Anyah (Columbus)",         gender:"F", result:"59.95",   place:1  },
    { event:"400m", name:"Mathis, Monica (Northside Col.)",   gender:"F", result:"1:01.47", place:2  },
    { event:"400m", name:"Jones, Laniya (Shaw)",              gender:"F", result:"1:04.88", place:3  },
    { event:"400m", name:"Riley, Iy'Rhianna (Shaw)",          gender:"F", result:"1:06.88", place:4  },
    { event:"400m", name:"Thomas, A'Zariah (Kendrick)",       gender:"F", result:"1:06.91", place:5  },
    { event:"400m", name:"Otero, Lenna (Northside Col.)",     gender:"F", result:"1:07.38", place:6  },
    { event:"400m", name:"Thomas, Ciara (W.H. Spencer)",      gender:"F", result:"1:07.87", place:7  },
    { event:"400m", name:"Soto, Aribella (Columbus)",         gender:"F", result:"1:07.91", place:8  },
    { event:"400m", name:"Johnson, Grace (LaGrange)",         gender:"F", result:"1:08.29", place:9  },
    { event:"400m", name:"Lewis, Jazmyne (LaGrange)",         gender:"F", result:"1:08.75", place:10 },
    { event:"400m", name:"Baker, Rebecca (St. Anne Pacelli)", gender:"F", result:"1:09.30", place:11 },
    { event:"400m", name:"Sweger, Kaelynn (Heritage)",        gender:"F", result:"1:10.12", place:13, hawk:true },
    { event:"400m", name:"Springfield, Lucy (Heritage)",      gender:"F", result:"1:21.15", place:25, hawk:true },
    // 800m (top 11 + Heritage)
    { event:"800m", name:"Mills, Kelby (Columbus)",           gender:"F", result:"2:27.37", place:1  },
    { event:"800m", name:"DiQuattro, Olivia (Columbus)",      gender:"F", result:"2:33.75", place:2  },
    { event:"800m", name:"Chestnutt, Elizabeth (Columbus)",   gender:"F", result:"2:37.73", place:3  },
    { event:"800m", name:"McQuien, Katie (Northside Col.)",   gender:"F", result:"2:38.11", place:4  },
    { event:"800m", name:"Snyder, Emmalyn (Schley Co.)",      gender:"F", result:"2:52.01", place:11 },
    { event:"800m", name:"Davis, Juliette (Heritage)",        gender:"F", result:"2:55.30", place:12, hawk:true },
    { event:"800m", name:"Rose, Avery (Heritage)",            gender:"F", result:"2:59.86", place:17, hawk:true },
    // 300m Hurdles (full — no Heritage)
    { event:"300m Hurdles", name:"Swenson, Ashley (St. Anne Pacelli)", gender:"F", result:"50.14",   place:1  },
    { event:"300m Hurdles", name:"Holmes, Kierra (Northside Col.)",    gender:"F", result:"51.92",   place:2  },
    { event:"300m Hurdles", name:"Martin, Laila (LaGrange)",           gender:"F", result:"52.77",   place:3  },
    // 4x100 Relay
    { event:"4x100m Relay", name:"Northside Columbus",    gender:"F", result:"51.42",   place:1 },
    { event:"4x100m Relay", name:"W.H. Spencer",          gender:"F", result:"51.44",   place:2 },
    { event:"4x100m Relay", name:"Kendrick",              gender:"F", result:"54.94",   place:3 },
    { event:"4x100m Relay", name:"Terrell County",        gender:"F", result:"55.71",   place:4 },
    { event:"4x100m Relay", name:"Heritage 'A'",          gender:"F", result:"57.49",   place:5, hawk:true },
    { event:"4x100m Relay", name:"Columbus",              gender:"F", result:"57.96",   place:6 },
    // Long Jump (top 13 + Heritage)
    { event:"Long Jump", name:"Hall, Alisa (LaGrange)",            gender:"F", result:"15-0",    place:1  },
    { event:"Long Jump", name:"Strozier, Stacia (Northside Col.)", gender:"F", result:"14-6",    place:2  },
    { event:"Long Jump", name:"Newson, Makaysia (LaGrange)",       gender:"F", result:"14-0.50", place:3  },
    { event:"Long Jump", name:"Sweger, Kaelynn (Heritage)",        gender:"F", result:"13-9",    place:4,  hawk:true },
    { event:"Long Jump", name:"Slay, Curran (Brookstone)",         gender:"F", result:"13-5",    place:5  },
    { event:"Long Jump", name:"Lewis, Jazmyne (LaGrange)",         gender:"F", result:"13-4.50", place:6  },
    { event:"Long Jump", name:"Harris, Abigail (Columbus)",        gender:"F", result:"13-2.40", place:7  },
    { event:"Long Jump", name:"Springfield, Lucy (Heritage)",      gender:"F", result:"10-9.50", place:14, hawk:true },
    { event:"Long Jump", name:"Rose, Avery (Heritage)",            gender:"F", result:"10-4",    place:15, hawk:true },
    // Triple Jump (top 5, Heritage in top 5)
    { event:"Triple Jump", name:"Harris, Je'Nya (Shaw)",         gender:"F", result:"28-4",    place:1 },
    { event:"Triple Jump", name:"Smith, Clarissa (Kendrick)",    gender:"F", result:"27-6",    place:2 },
    { event:"Triple Jump", name:"Newson, Makaysia (LaGrange)",   gender:"F", result:"26-8.50", place:3 },
    { event:"Triple Jump", name:"Bowles, Janiya (LaGrange)",     gender:"F", result:"26-4",    place:4 },
    { event:"Triple Jump", name:"Rose, Avery (Heritage)",        gender:"F", result:"26-0.50", place:5, hawk:true },

    // --- BOYS ---
    // 100m (top 25 + Heritage)
    { event:"100m", name:"Render, Jadarius (LaGrange)",         gender:"M", result:"11.00", place:1  },
    { event:"100m", name:"Davis, Peyton (LaGrange)",            gender:"M", result:"11.15", place:2  },
    { event:"100m", name:"Floyd, Jamarion (W.H. Spencer)",      gender:"M", result:"11.22", place:3  },
    { event:"100m", name:"Grissom, Marquavious (LaGrange)",     gender:"M", result:"11.24", place:4  },
    { event:"100m", name:"Smith, JaCayden (Terrell Co.)",       gender:"M", result:"11.33", place:5  },
    { event:"100m", name:"Jackson, Jai (Northside Col.)",       gender:"M", result:"11.41", place:7  },
    { event:"100m", name:"Lee, Jaron (Kendrick)",               gender:"M", result:"11.47", place:8  },
    { event:"100m", name:"Williams, Vascoe (Kendrick)",         gender:"M", result:"11.58", place:9  },
    { event:"100m", name:"Branch, Broughton (Brookstone)",      gender:"M", result:"11.73", place:14 },
    { event:"100m", name:"Harris, Alex (Heritage)",             gender:"M", result:"12.02", place:25, hawk:true },
    { event:"100m", name:"Watroba, Billy (Heritage)",           gender:"M", result:"13.25", place:48, hawk:true },
    { event:"100m", name:"Marzan, Alex (Heritage)",             gender:"M", result:"13.58", place:50, hawk:true },
    { event:"100m", name:"Seward, London (Heritage)",           gender:"M", result:"13.69", place:51, hawk:true },
    // 400m (top 10 + Heritage)
    { event:"400m", name:"Williams, Jermaine (LaGrange)",       gender:"M", result:"51.98",   place:1  },
    { event:"400m", name:"Newton, Patrick (Northside Col.)",    gender:"M", result:"52.63",   place:2  },
    { event:"400m", name:"Stone, Christian (Northside Col.)",   gender:"M", result:"53.05",   place:3  },
    { event:"400m", name:"Huckaby, Keyon (Terrell Co.)",        gender:"M", result:"53.31",   place:4  },
    { event:"400m", name:"Livingston, Kavian (Shaw)",           gender:"M", result:"54.36",   place:5  },
    { event:"400m", name:"Edmond, Graham (Columbus)",           gender:"M", result:"54.65",   place:6  },
    { event:"400m", name:"Williams, Cobe (Terrell Co.)",        gender:"M", result:"54.88",   place:7  },
    { event:"400m", name:"Solomon, Jalon (Schley Co.)",         gender:"M", result:"54.92",   place:8  },
    { event:"400m", name:"Roberson, Jaiden (St. Anne Pacelli)", gender:"M", result:"55.92",   place:9  },
    { event:"400m", name:"Hack, Jacob (Brookstone)",            gender:"M", result:"55.95",   place:10 },
    { event:"400m", name:"Calabro, Sam (Heritage)",             gender:"M", result:"1:01.12", place:25, hawk:true },
    { event:"400m", name:"Hanlon, Barry (Heritage)",            gender:"M", result:"1:05.52", place:33, hawk:true },
    // 1600m (top 10 + Heritage)
    { event:"1600m", name:"Lopez, Mathew (Columbus)",           gender:"M", result:"4:43.07", place:1  },
    { event:"1600m", name:"Cowley, John (Brookstone)",          gender:"M", result:"4:51.46", place:2  },
    { event:"1600m", name:"Martin, Julius (Columbus)",          gender:"M", result:"4:55.85", place:3  },
    { event:"1600m", name:"Pendleton, Oliver (Columbus)",       gender:"M", result:"4:56.82", place:4  },
    { event:"1600m", name:"Boots, Micah (Columbus)",            gender:"M", result:"5:00.10", place:5  },
    { event:"1600m", name:"Rhodehouse, Brock (Northside Col.)", gender:"M", result:"5:10.33", place:6  },
    { event:"1600m", name:"Denson, Benny (LaGrange)",           gender:"M", result:"5:57.50", place:20 },
    { event:"1600m", name:"Shirey, Eli (Heritage)",             gender:"M", result:"6:03.19", place:22, hawk:true },
    // 4x100 Relay
    { event:"4x100m Relay", name:"LaGrange",              gender:"M", result:"43.35", place:1  },
    { event:"4x100m Relay", name:"Kendrick",              gender:"M", result:"44.50", place:2  },
    { event:"4x100m Relay", name:"W.H. Spencer",          gender:"M", result:"46.63", place:4  },
    { event:"4x100m Relay", name:"Columbus",              gender:"M", result:"46.87", place:5  },
    { event:"4x100m Relay", name:"Brookstone",            gender:"M", result:"47.64", place:6  },
    { event:"4x100m Relay", name:"Heritage 'A'",          gender:"M", result:"50.02", place:13, hawk:true },
    // Long Jump (top 10 — no Heritage)
    { event:"Long Jump", name:"Williams, JaDarrian (LaGrange)",     gender:"M", result:"20-3",    place:1  },
    { event:"Long Jump", name:"Stewart, DeAnthony (LaGrange)",      gender:"M", result:"19-2.50", place:2  },
    { event:"Long Jump", name:"Jackson, Joshua (St. Anne Pacelli)", gender:"M", result:"19-2",    place:3  },
    { event:"Long Jump", name:"Grissom, Marquavious (LaGrange)",    gender:"M", result:"19-1",    place:5  },
    { event:"Long Jump", name:"Jackson, Jai (Northside Col.)",      gender:"M", result:"18-9",    place:6  },
    // Discus (top 5 + Heritage)
    { event:"Discus", name:"Clay, Zach (Columbus)",          gender:"M", result:"123-9",  place:1  },
    { event:"Discus", name:"Brown, Gavin (Columbus)",        gender:"M", result:"119-0",  place:2  },
    { event:"Discus", name:"Beall, Camden (LaGrange)",       gender:"M", result:"105-3",  place:3  },
    { event:"Discus", name:"Marzan, Alex (Heritage)",        gender:"M", result:"105-2",  place:4,  hawk:true },
    { event:"Discus", name:"Neal, Matthew (Terrell Co.)",    gender:"M", result:"104-5",  place:5  },
    { event:"Discus", name:"Allen, Landon (Heritage)",       gender:"M", result:"93-8",   place:12, hawk:true },
    // Shot Put (top 5 + Heritage)
    { event:"Shot Put", name:"Clay, Zach (Columbus)",        gender:"M", result:"45-7",   place:1  },
    { event:"Shot Put", name:"Appleby, LaKevin (LaGrange)",  gender:"M", result:"44-2",   place:2  },
    { event:"Shot Put", name:"Sells, Owen (LaGrange)",       gender:"M", result:"43-7",   place:3  },
    { event:"Shot Put", name:"Denson, Bryson (Shaw)",        gender:"M", result:"43-1",   place:4  },
    { event:"Shot Put", name:"Avery, Hezykyah (LaGrange)",   gender:"M", result:"41-10",  place:5  },
    { event:"Shot Put", name:"Bracey, Will (Heritage)",      gender:"M", result:"33-5",   place:20, hawk:true },
    { event:"Shot Put", name:"James, William (Heritage)",    gender:"M", result:"32-3",   place:24, hawk:true },
  ],

  // --- ST. MARY'S INVITATIONAL ---
  8: [
    // --- GIRLS ---
    // 100m
    { event:"100m", name:"Moore, Taryn (Harvester)",         gender:"F", result:"13.61", place:1  },
    { event:"100m", name:"Hill, Journee (Harvester)",        gender:"F", result:"13.87", place:2  },
    { event:"100m", name:"Seymour, Bayleigh (Heritage)",     gender:"F", result:"13.92", place:3,  hawk:true },
    { event:"100m", name:"Mcduffie, Caharia (Fayette Co.)",  gender:"F", result:"13.94", place:4  },
    { event:"100m", name:"Plummer, Akira (Arlington)",       gender:"F", result:"13.98", place:5  },
    { event:"100m", name:"Turner, Kiersten (Harvester)",     gender:"F", result:"14.15", place:6  },
    { event:"100m", name:"Collins, Camryn (Fayette Co.)",    gender:"F", result:"14.35", place:7  },
    { event:"100m", name:"Young, Autumn (Harvester)",        gender:"F", result:"14.44", place:8  },
    { event:"100m", name:"McWhoter, Ella (Oak Mountain)",    gender:"F", result:"14.44", place:9  },
    { event:"100m", name:"White, Asiya (Harvester)",         gender:"F", result:"14.67", place:10 },
    { event:"100m", name:"Sweger, Kaelynn (Heritage)",       gender:"F", result:"15.32", place:15, hawk:true },
    // 200m
    { event:"200m", name:"Moore, Taryn (Harvester)",         gender:"F", result:"28.46", place:1  },
    { event:"200m", name:"Mcduffie, Caharia (Fayette Co.)",  gender:"F", result:"29.07", place:2  },
    { event:"200m", name:"Plummer, Akira (Arlington)",       gender:"F", result:"29.38", place:3  },
    { event:"200m", name:"Omuga, Charlotte (Starrs Mill)",   gender:"F", result:"29.53", place:4  },
    { event:"200m", name:"Hill, Journee (Harvester)",        gender:"F", result:"29.80", place:5  },
    { event:"200m", name:"Mullings-Palmer, Hannah (FC)",     gender:"F", result:"29.88", place:6  },
    { event:"200m", name:"McWhoter, Ella (Oak Mountain)",    gender:"F", result:"30.18", place:7  },
    { event:"200m", name:"Williams, Madison (Starrs Mill)",  gender:"F", result:"30.42", place:8  },
    { event:"200m", name:"Hamaker, Reagan (Heritage)",       gender:"F", result:"32.50", place:14, hawk:true },
    // 400m
    { event:"400m", name:"Combs, Makala (Fayette Co.)",      gender:"F", result:"1:06.46", place:1 },
    { event:"400m", name:"Riecke, Aubrey (Starrs Mill)",     gender:"F", result:"1:06.91", place:2 },
    { event:"400m", name:"Hill, Journee (Harvester)",        gender:"F", result:"1:08.60", place:3 },
    { event:"400m", name:"Sweger, Kaelynn (Heritage)",       gender:"F", result:"1:09.86", place:4, hawk:true },
    // 800m
    { event:"800m", name:"Davis, Juliette (Heritage)",       gender:"F", result:"2:45.63", place:1, hawk:true },
    { event:"800m", name:"Ohaya, Akunna (Fayette Co.)",      gender:"F", result:"2:54.02", place:2 },
    { event:"800m", name:"Sparrow, Neveah (Fayette Co.)",    gender:"F", result:"3:06.06", place:3 },
    // 100m Hurdles
    { event:"100m Hurdles", name:"Turner, Kiersten (Harvester)",  gender:"F", result:"20.98", place:1 },
    { event:"100m Hurdles", name:"White, Asiya (Harvester)",      gender:"F", result:"21.74", place:2 },
    { event:"100m Hurdles", name:"Dudley, Anae (Arlington)",      gender:"F", result:"45.71", place:3 },
    // 300m Hurdles
    { event:"300m Hurdles", name:"Boswell, Leilani (Fayette Co.)", gender:"F", result:"58.32", place:1 },
    // Long Jump
    { event:"Long Jump", name:"Hill, Journee (Harvester)",        gender:"F", result:"15-9.50", place:1 },
    { event:"Long Jump", name:"Turner, Talia (Fayette Co.)",      gender:"F", result:"15-2",    place:2 },
    { event:"Long Jump", name:"McWhoter, Ella (Oak Mountain)",    gender:"F", result:"15-2",    place:2 },
    { event:"Long Jump", name:"Marcus, Kenadie (Fayette Co.)",    gender:"F", result:"14-10",   place:4 },
    { event:"Long Jump", name:"Plummer, Akira (Arlington)",       gender:"F", result:"13-9",    place:5 },
    { event:"Long Jump", name:"Sweger, Kaelynn (Heritage)",       gender:"F", result:"13-9",    place:5, hawk:true },
    // 4x100 Relay
    { event:"4x100m Relay", name:"Harvester Christian Academy",   gender:"F", result:"53.57", place:1 },
    { event:"4x100m Relay", name:"Fayette County 'A'",            gender:"F", result:"54.58", place:2 },
    { event:"4x100m Relay", name:"Fayette County 'B'",            gender:"F", result:"55.61", place:3 },
    { event:"4x100m Relay", name:"St. Mary's Academy",            gender:"F", result:"56.54", place:4 },
    { event:"4x100m Relay", name:"Heritage 'A'",                  gender:"F", result:"57.37", place:5, hawk:true },
    { event:"4x100m Relay", name:"Starrs Mill High School",       gender:"F", result:"57.69", place:6 },
    { event:"4x100m Relay", name:"Arlington Christian",           gender:"F", result:"1:01.26", place:7 },
    // 4x400 Relay
    { event:"4x400m Relay", name:"Fayette County",                gender:"F", result:"4:53.86", place:1 },

    // --- BOYS ---
    // 100m
    { event:"100m", name:"Nickelson, Andrew (Harvester)",         gender:"M", result:"11.47", place:1  },
    { event:"100m", name:"Fields, Randon (Harvester)",            gender:"M", result:"11.58", place:2  },
    { event:"100m", name:"Lepley, Jaden (Harvester)",             gender:"M", result:"11.86", place:3  },
    { event:"100m", name:"Harris, Alex (Heritage)",               gender:"M", result:"11.87", place:4,  hawk:true },
    { event:"100m", name:"Hamler, Alexand (St. Mary's)",          gender:"M", result:"12.13", place:5  },
    { event:"100m", name:"Walton, Max (Fayette Co.)",             gender:"M", result:"12.26", place:6  },
    { event:"100m", name:"Collins, De'marco (Fayette Co.)",       gender:"M", result:"12.29", place:7  },
    { event:"100m", name:"Sealy, Michael (St. Mary's)",           gender:"M", result:"12.29", place:8  },
    { event:"100m", name:"Langdon, Collier (Heritage)",           gender:"M", result:"12.71", place:17, hawk:true },
    { event:"100m", name:"Griffeth, Nate (Heritage)",             gender:"M", result:"12.75", place:19, hawk:true },
    { event:"100m", name:"Seward, London (Heritage)",             gender:"M", result:"13.32", place:30, hawk:true },
    // 200m
    { event:"200m", name:"Nickelson, Andrew (Harvester)",         gender:"M", result:"23.38", place:1  },
    { event:"200m", name:"Fields, Randon (Harvester)",            gender:"M", result:"23.39", place:2  },
    { event:"200m", name:"Harris, Alex (Heritage)",               gender:"M", result:"24.10", place:3,  hawk:true },
    { event:"200m", name:"Lepley, Jaden (Harvester)",             gender:"M", result:"24.14", place:4  },
    { event:"200m", name:"Hamler, Alexand (St. Mary's)",          gender:"M", result:"24.33", place:5  },
    { event:"200m", name:"Walton, Max (Fayette Co.)",             gender:"M", result:"24.44", place:6  },
    { event:"200m", name:"Griffeth, Nate (Heritage)",             gender:"M", result:"25.77", place:19, hawk:true },
    { event:"200m", name:"Langdon, Collier (Heritage)",           gender:"M", result:"26.30", place:23, hawk:true },
    { event:"200m", name:"Seward, London (Heritage)",             gender:"M", result:"27.34", place:31, hawk:true },
    // 400m
    { event:"400m", name:"Rivers, Zakhari (Fayette Co.)",         gender:"M", result:"51.91",   place:1  },
    { event:"400m", name:"Mullins, Christen (Fayette Co.)",       gender:"M", result:"55.98",   place:2  },
    { event:"400m", name:"Ikeneboneh, Enoch (Fayette Co.)",       gender:"M", result:"56.25",   place:3  },
    { event:"400m", name:"Watroba, Billy (Heritage)",             gender:"M", result:"56.58",   place:4,  hawk:true },
    { event:"400m", name:"Wilkerson, Chance (Fayette Co.)",       gender:"M", result:"56.72",   place:5  },
    { event:"400m", name:"McNeil, Marcus (Fayette Co.)",          gender:"M", result:"56.96",   place:6  },
    { event:"400m", name:"Yarnall, Jed (Harvester)",              gender:"M", result:"58.10",   place:7  },
    { event:"400m", name:"Sims, Ron (St. Mary's)",                gender:"M", result:"58.43",   place:8  },
    { event:"400m", name:"Hanks, Landon (Fayette Co.)",           gender:"M", result:"59.25",   place:9  },
    { event:"400m", name:"Eade, Nathan (Heritage)",               gender:"M", result:"1:00.23", place:10, hawk:true },
    { event:"400m", name:"Maddox, Starr (Heritage)",              gender:"M", result:"1:00.71", place:12, hawk:true },
    // 800m
    { event:"800m", name:"Ikeneboneh, Enoch (Fayette Co.)",       gender:"M", result:"2:15.62", place:1  },
    { event:"800m", name:"Wilkerson, Chance (Fayette Co.)",       gender:"M", result:"2:16.79", place:2  },
    { event:"800m", name:"Humphries, Ewan (St. Mary's)",          gender:"M", result:"2:18.17", place:3  },
    { event:"800m", name:"Ashford, Bryce (St. Mary's)",           gender:"M", result:"2:19.03", place:4  },
    { event:"800m", name:"Etris, Joaquin (St. Mary's)",           gender:"M", result:"2:20.11", place:5  },
    { event:"800m", name:"Foster, Jerimiah (Fayette Co.)",        gender:"M", result:"2:22.09", place:6  },
    { event:"800m", name:"Guo, Zhixin (Harvester)",               gender:"M", result:"2:25.93", place:7  },
    { event:"800m", name:"Gimpert, Luke (Starrs Mill)",           gender:"M", result:"2:30.25", place:8  },
    { event:"800m", name:"Maddox, Starr (Heritage)",              gender:"M", result:"2:34.45", place:9,  hawk:true },
    // 110m Hurdles
    { event:"110m Hurdles", name:"Johnson, Jonathan (Arlington)", gender:"M", result:"16.82", place:1 },
    { event:"110m Hurdles", name:"Finney, Keshawn (Fayette Co.)", gender:"M", result:"18.43", place:2 },
    { event:"110m Hurdles", name:"Saunders, Emerson (Starrs Mill)",gender:"M", result:"21.67", place:3 },
    // 300m Hurdles
    { event:"300m Hurdles", name:"Johnson, Jonathan (Arlington)", gender:"M", result:"44.12", place:1 },
    { event:"300m Hurdles", name:"Taylor, Mikey (Starrs Mill)",   gender:"M", result:"49.30", place:2 },
    { event:"300m Hurdles", name:"Howard, Tionne (Fayette Co.)",  gender:"M", result:"50.03", place:3 },
    { event:"300m Hurdles", name:"Delaney, Tripp (Starrs Mill)",  gender:"M", result:"52.65", place:4 },
    { event:"300m Hurdles", name:"Nguyen, Henry (St. Mary's)",    gender:"M", result:"55.12", place:5 },
    // 1600m
    { event:"1600m", name:"Castile, Micah (St. Mary's)",          gender:"M", result:"5:22.31", place:1 },
    { event:"1600m", name:"Manis, Russel (Starrs Mill)",          gender:"M", result:"5:26.96", place:2 },
    { event:"1600m", name:"Spencer, Michael (Fayette Co.)",       gender:"M", result:"5:49.14", place:3 },
    { event:"1600m", name:"Chin, Christopher (Fayette Co.)",      gender:"M", result:"5:57.65", place:4 },
    // 3200m
    { event:"3200m", name:"Powers, Preston (Fayette Co.)",        gender:"M", result:"13:38.41", place:1 },
    { event:"3200m", name:"Decottle, Monte (Fayette Co.)",        gender:"M", result:"13:47.32", place:2 },
    // Long Jump
    { event:"Long Jump", name:"Johnson, Jonathan (Arlington)",    gender:"M", result:"20-3",     place:1  },
    { event:"Long Jump", name:"Harris, Alex (Heritage)",          gender:"M", result:"20-0.25",  place:2,  hawk:true },
    { event:"Long Jump", name:"Jackson-English, P. (St. Mary's)", gender:"M", result:"19-1.50",  place:3  },
    { event:"Long Jump", name:"Nickelson, Andrew (Harvester)",    gender:"M", result:"18-10",    place:4  },
    { event:"Long Jump", name:"Oates, Caden (Fayette Co.)",       gender:"M", result:"17-11.75", place:5  },
    { event:"Long Jump", name:"Bell, Zavian (Starrs Mill)",       gender:"M", result:"17-9",     place:6  },
    { event:"Long Jump", name:"Mullins, Christen (Fayette Co.)",  gender:"M", result:"17-1",     place:7  },
    { event:"Long Jump", name:"Charles, Caleb (Starrs Mill)",     gender:"M", result:"16-6.50",  place:8  },
    { event:"Long Jump", name:"Maddox, Starr (Heritage)",         gender:"M", result:"13-11",    place:12, hawk:true },
    { event:"Long Jump", name:"Calabro, Henry (Heritage)",        gender:"M", result:"12-6",     place:13, hawk:true },
    // Discus
    { event:"Discus", name:"Marzan, Alex (Heritage)",             gender:"M", result:"116-1",   place:1,  hawk:true },
    { event:"Discus", name:"Barnett, Hezekiah (Fayette Co.)",     gender:"M", result:"111-4",   place:2  },
    { event:"Discus", name:"Yarnall, Jed (Harvester)",            gender:"M", result:"107-6",   place:3  },
    { event:"Discus", name:"Allen, Landon (Heritage)",            gender:"M", result:"99-1",    place:4,  hawk:true },
    { event:"Discus", name:"Obidegwu, Chukwudumebi (St. M.)",    gender:"M", result:"91-7",    place:5  },
    { event:"Discus", name:"French, Blake (Starrs Mill)",         gender:"M", result:"89-3",    place:6  },
    { event:"Discus", name:"Hutcherson, Van (Heritage)",          gender:"M", result:"84-4",    place:7,  hawk:true },
    { event:"Discus", name:"Martinez, Jacob (St. Mary's)",        gender:"M", result:"82-0.50", place:8  },
    // Shot Put
    { event:"Shot Put", name:"Barnett, Hezekiah (Fayette Co.)",  gender:"M", result:"38-7.50", place:1  },
    { event:"Shot Put", name:"Abijo, Ephraim (Fayette Co.)",      gender:"M", result:"36-11",   place:2  },
    { event:"Shot Put", name:"French, Blake (Starrs Mill)",       gender:"M", result:"36-10",   place:3  },
    { event:"Shot Put", name:"Baggett, Carson (Harvester)",       gender:"M", result:"36-2.75", place:4  },
    { event:"Shot Put", name:"Bracey, Will (Heritage)",           gender:"M", result:"35-5",    place:5,  hawk:true },
    { event:"Shot Put", name:"Yarnall, Jed (Harvester)",          gender:"M", result:"34-1.50", place:6  },
    { event:"Shot Put", name:"Tawadrous, Alexander (Starrs Mill)",gender:"M", result:"33-9",    place:7  },
    { event:"Shot Put", name:"Marzan, Alex (Heritage)",           gender:"M", result:"33-6",    place:8,  hawk:true },
    { event:"Shot Put", name:"Householder, Samuel (Starrs Mill)", gender:"M", result:"32-9",    place:9  },
    { event:"Shot Put", name:"James, William (Heritage)",         gender:"M", result:"31-7",    place:10, hawk:true },
    // 4x100 Relay
    { event:"4x100m Relay", name:"Harvester Christian Academy",   gender:"M", result:"45.13", place:1 },
    { event:"4x100m Relay", name:"St. Mary's Academy",            gender:"M", result:"46.13", place:2 },
    { event:"4x100m Relay", name:"Fayette County 'A'",            gender:"M", result:"46.71", place:3 },
    { event:"4x100m Relay", name:"Fayette County 'B'",            gender:"M", result:"47.97", place:4 },
    { event:"4x100m Relay", name:"Heritage 'A'",                  gender:"M", result:"48.54", place:5, hawk:true },
    { event:"4x100m Relay", name:"Arlington Christian",           gender:"M", result:"49.69", place:6 },
    // 4x400 Relay
    { event:"4x400m Relay", name:"St. Mary's Academy 'A'",        gender:"M", result:"3:53.59", place:1 },
    { event:"4x400m Relay", name:"Fayette County 'A'",            gender:"M", result:"3:59.82", place:2 },
    { event:"4x400m Relay", name:"Fayette County 'B'",            gender:"M", result:"4:00.66", place:3 },
    { event:"4x400m Relay", name:"St. Mary's Academy 'B'",        gender:"M", result:"4:01.02", place:4 },
    { event:"4x400m Relay", name:"Heritage 'A'",                  gender:"M", result:"4:11.71", place:5, hawk:true },
    { event:"4x400m Relay", name:"Fayette County 'C'",            gender:"M", result:"4:12.07", place:6 },
  ],
};
