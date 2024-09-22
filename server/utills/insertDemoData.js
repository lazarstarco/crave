const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const demoCategories = [
  {
    id: "1",
    name: "zenske-majice",
  },
  {
    id: "2",
    name: "korseti",
  },
  {
    id: "3",
    name: "suknje",
  },
  {
    id: "4",
    name: "zenske-pantalone",
  },
  {
    id: "5",
    name: "muske-majice",
  },
  {
    id: "6",
    name: "muske-pantalone",
  },
  {
    id: "7",
    name: "aksesoari",
  },
  {
    id: "8",
    name: "obuca",
  },
];

const demoProducts = [
  {
    id: "1",
    title: "Pixie Garden Floral Sequin Bra Top",
    price: 6400,
    rating: 5,
    description:
      "Pixie Garden cvetni top sa sljokicama, savrsen za magican ples pod zvezdama.",
    mainImage: "zbt1.png",
    slug: "zenski-bra-top-1",
    manufacturer: "Pixie Garden",
    categoryId: "1",
    inStock: 0,
  },
  {
    id: "2",
    title: "Magic Mushroom Carnival Bra",
    price: 13300,
    rating: 4,
    description:
      "Magični Mushroom karnevalski top koji se savršeno uklapa uz šortseve ili suknje.",
    mainImage: "zbt2.png",
    slug: "zenski-bra-top-2",
    manufacturer: "Magical",
    categoryId: "1",
    inStock: 1,
  },
  {
    id: "3",
    title: "Won't Let U Out Reflective Underboob Clasp Top",
    price: 2900,
    rating: 4,
    description:
      "Won't Let U Out reflektujući top sa trakicama i kopčom ispod grudi.",
    mainImage: "zbt3.png",
    slug: "zenski-bra-top-3",
    manufacturer: "WMT",
    categoryId: "1",
    inStock: 1,
  },
  {
    id: "4",
    title: "Electro Matrix Bra Top",
    price: 2300,
    rating: 5,
    description:
      "Electro Matrix top sa dubokim izrezom i prorezom, koji ističe tvoje najbolje osobine.",
    mainImage: "zbt4.png",
    slug: "zenski-bra-top-4",
    manufacturer: "WMT",
    categoryId: "1",
    inStock: 1,
  },
  {
    id: "5",
    title: "Seize the Power Strappy Reflective Top",
    price: 4000,
    rating: 5,
    description:
      "Seize the Power reflektujući top sa trakama, savršen za ozbiljno uživanje na rejvu!",
    mainImage: "zbt5.png",
    slug: "zenski-bra-top-5",
    manufacturer: "Magical",
    categoryId: "1",
    inStock: 1,
  },
  {
    id: "6",
    title: "Haze on the Horizon Crochet Rainbow Top",
    price: 2600,
    rating: 5,
    description:
      "Haze on the Horizon šaren top sa izrezom i otvorenim leđima, donosi opuštenu i vibrantnu energiju.",
    mainImage: "zbt6.png",
    slug: "zenski-bra-top-6",
    manufacturer: "Crochet",
    categoryId: "1",
    inStock: 1,
  },
  {
    id: "7",
    title: "Backstage Baddie Reflective Cutout Top",
    price: 2300,
    rating: 5,
    description:
      "Backstage Baddie top sa reflektujućim trakama, uskim krojem i prorezom, učiniće da svi žele biti ti.",
    mainImage: "zct1.png",
    slug: "zenski-krop-top-1",
    manufacturer: "WMT",
    categoryId: "1",
    inStock: 0,
  },
  {
    id: "8",
    title: "Tough Attitude Fishnet Crop Top",
    price: 1600,
    rating: 5,
    description:
      "Tough Attitude mrežasti crop top, savršen preko omiljenih reflektujućih pastija ili crnog bra topa, čini da se osećaš nezaustavljivo!",
    mainImage: "zkt2.png",
    slug: "zenski-krop-top-2",
    manufacturer: "WMT",
    categoryId: "1",
    inStock: 1,
  },
  {
    id: "9",
    title: "Hot Girls Listen to Techno Cropped Baby Tee",
    price: 2000,
    rating: 5,
    description:
      "Hot Girls Listen to Techno baby tee sa seksi krojem i udobnim materijalom, savršen za ceo dan i pokazivanje ljubavi prema tehnu.",
    mainImage: "zkt3.png",
    slug: "zenski-krop-top-3",
    manufacturer: "DMM",
    categoryId: "1",
    inStock: 0,
  },
  {
    id: "10",
    title: "Netherworld Nightlife Ultra Crop Top",
    price: 2100,
    rating: 4,
    description:
      "Netherworld Nightlife ultra kratki top za nocne vibracije i pozitivne ritmove, savrsen uz odgovarajuci komplet.",
    mainImage: "zkt4.png",
    slug: "zenski-krop-top-4",
    manufacturer: "DMM",
    categoryId: "1",
    inStock: 1,
  },
  {
    id: "11",
    title: "Womp Womp Cropped Tee",
    price: 1900,
    rating: 5,
    description:
      "Womp Womp kratka majica za rejv uzivanciju, odlicna uz visok struk i saren aksesoar.",
    mainImage: "zkt5.png",
    slug: "zenski-krop-top-5",
    manufacturer: "WMT",
    categoryId: "1",
    inStock: 1,
  },
  {
    id: "12",
    title: "Iridescent Blush Holo Heart Crop Top",
    price: 3000,
    rating: 5,
    description:
      "Iridescent Blush Holo Heart crop top sa vezivanjem i sjajem, savrsen za festival od izlaska do zalaska sunca.",
    mainImage: "zkt6.png",
    slug: "zenski-krop-top-6",
    manufacturer: "FailyTale",
    categoryId: "1",
    inStock: 1,
  },
  {
    id: "13",
    title: "Secret Pathways Floral Corset Top",
    price: 2300,
    rating: 4,
    description:
      "Secret Pathways korset sa cvetnim vezom i providnom tkaninom stvoren za letnje dane.",
    mainImage: "kors1.png",
    slug: "zenski-korseti-1",
    manufacturer: "FailyTale",
    categoryId: "2",
    inStock: 0,
  },
  {
    id: "14",
    title: "Lace Flowerfields Mesh Corset",
    price: 2000,
    rating: 4,
    description:
      "Lace Flowerfields mrežasti korset sa cvetnim vezom i providnim dizajnom za zavodljiv izgled.",
    mainImage: "kors2.png",
    slug: "zenski-korseti-2",
    manufacturer: "ForHer",
    categoryId: "2",
    inStock: 1,
  },
  {
    id: "15",
    title: "Silver Moon's Sparkling Corset Top",
    price: 2100,
    rating: 4,
    description:
      "Silver Moon sjajni korset sa dubokim izrezom i trakama, u plavoj boji sa šljokicama, osigurava da zasijaš poput zvezda.",
    mainImage: "kors3.png",
    slug: "zenski-korseti-3",
    manufacturer: "FailyTale",
    categoryId: "2",
    inStock: 1,
  },
  {
    id: "16",
    title: "Sparkling Spell Corset Top",
    price: 1900,
    rating: 5,
    description:
      "Sparkling Spell korset u svetlo rozoj boji sa šljokicama i marabu detaljima, donosi dašak čarolije svakom pokretu.",
    mainImage: "kors4.png",
    slug: "zenski-korseti-4",
    manufacturer: "ForHer",
    categoryId: "2",
    inStock: 1,
  },
  {
    id: "17",
    title: "Endless Nights Long Sleeve Crop Top",
    price: 2300,
    rating: 4,
    description:
      "Crop top sa dugim rukavima, idealan za beskrajne noći uz visok struk ili odvažne mini suknje!",
    mainImage: "zdr1.png",
    slug: "zenski-dugi-rukavi-1",
    manufacturer: "FailyTale",
    categoryId: "1",
    inStock: 0,
  },
  {
    id: "18",
    title: "Post-Show Top",
    price: 2000,
    rating: 4,
    description:
      "Post-Show top u crnoj boji sa zavodljivim korsetom i mrežastim dugim rukavima, savršen za nastavak vibra posle glavnog događaja!",
    mainImage: "zdr2.png",
    slug: "zenski-dugi-rukavi-2",
    manufacturer: "DWS",
    categoryId: "1",
    inStock: 0,
  },
  {
    id: "19",
    title: "Raveasaurus Rex Ultra Crop Top",
    price: 3200,
    rating: 4,
    description:
      "Raveasaurus Rex ultra crop top sa upečatljivim dinosaur grafikom, idealan za pretvaranje u kraljicu žurke!",
    mainImage: "zdr3.png",
    slug: "zenski-dugi-rukavi-3",
    manufacturer: "FailyTale",
    categoryId: "1",
    inStock: 1,
  },
  {
    id: "20",
    title: "Dark Arts Ultra Crop Top",
    price: 2900,
    rating: 4,
    description:
      "Dark Arts mrežasti ultra crop top sa zvonastim rukavima u providnoj smešanoj boji, savršen za očaravanje na plesnom podijumu!",
    mainImage: "zdr4.png",
    slug: "zenski-dugi-rukavi-4",
    manufacturer: "DWS",
    categoryId: "1",
    inStock: 0,
  },
  {
    id: "21",
    title: "Nostalgia Ultra Crop Top",
    price: 4000,
    rating: 4,
    description:
      "Nostalgia ultra crop top sa zvonastim rukavima i UV-reaktivnim printom, stvoren za stvaranje čarobnog osećaja vremena!",
    mainImage: "zdr5.png",
    slug: "zenski-dugi-rukavi-5",
    manufacturer: "ForHer",
    categoryId: "1",
    inStock: 0,
  },
  {
    id: "22",
    title: "See U After Class",
    price: 2000,
    rating: 4,
    description:
      "See U After Class mini suknja sa visokim strukom i nabranim detaljima, idealna za isticanje figura dok plešeš!",
    mainImage: "zs1.png",
    slug: "zenske-suknje-1",
    manufacturer: "DWS",
    categoryId: "3",
    inStock: 0,
  },
  {
    id: "23",
    title: "Dark Arts Mesh",
    price: 2300,
    rating: 4,
    description:
      "Dark Arts mrežasta suknja u crnoj boji sa rastezljivim pojasom i piksi krojem, savršena za očaravanje na plesnom podijumu!",
    mainImage: "zs2.png",
    slug: "zenske-suknje-2",
    manufacturer: "ForHer",
    categoryId: "3",
    inStock: 0,
  },
  {
    id: "24",
    title: "Pixie Garden Floral Sequin",
    price: 2500,
    rating: 4,
    description:
      "Pixie Garden floral sequin suknja sa srednjim strukom u šumsko zelenoj boji, ukrašena cirkonima i vezom, idealna za magične plesne trenutke!",
    mainImage: "zs3.png",
    slug: "zenske-suknje-3",
    manufacturer: "FairyTale",
    categoryId: "3",
    inStock: 1,
  },
  {
    id: "25",
    title: "Charge of Light Reflective",
    price: 3000,
    rating: 4,
    description:
      "Charge of Light reflektujuća suknja sa visokim strukom i nabranim dizajnom, koja se blista u roze nijansi, savršena za noćne avanture!",
    mainImage: "zs4.png",
    slug: "zenske-suknje-4",
    manufacturer: "FairyTale",
    categoryId: "3",
    inStock: 1,
  },
  {
    id: "26",
    title: "Heaven's Dust",
    price: 1900,
    rating: 4,
    description:
      "Heaven's Dust visoko-nisko suknja od plave mreže sa sjajnim cirkonima, sa asimetričnim krojem koji podseća na prelepe kaskade!",
    mainImage: "zs5.png",
    slug: "zenske-suknje-5",
    manufacturer: "ForHer",
    categoryId: "3",
    inStock: 1,
  },
  {
    id: "27",
    title: "Happy Hour Rainbow Reflective",
    price: 5200,
    rating: 4,
    description:
      "Happy Hour reflektujuće zvono pantalone sa hipnotičkim dezenom, savršene za ples uz pulsirajuće ritmove!",
    mainImage: "zp1.png",
    slug: "zenske-pantalone-1",
    manufacturer: "FairyTale",
    categoryId: "4",
    inStock: 0,
  },
  {
    id: "28",
    title: "Favorite Trouble",
    price: 4900,
    rating: 5,
    description:
      "Favorite Trouble pantalone sa širokim nogavicama, crne boje sa belim kontrastnim šavovima za edgy izgled!",
    mainImage: "zp2.png",
    slug: "zenske-pantalone-2",
    manufacturer: "DWS",
    categoryId: "4",
    inStock: 1,
  },
  {
    id: "29",
    title: "Happy Hour Harem",
    price: 5000,
    rating: 4,
    description:
      "Obucite Happy Hour harem pantalone i osetite kako noć oživljava! Višebojne pantalone sa udobnim strukom i UV-reaktivnim printom daju euforični neon sjaj pod festivalskim svetlima.",
    mainImage: "zp3.png",
    slug: "zenske-pantalone-3",
    manufacturer: "ForHer",
    categoryId: "4",
    inStock: 1,
  },
  {
    id: "30",
    title: "Rebel Riddim Jersey",
    price: 3100,
    rating: 5,
    description:
      "Udoban kroj i upečatljiv grafički dizajn osiguraće da privučete pažnju na sledećem rave-u.",
    mainImage: "mm1.png",
    slug: "muske-majice-1",
    manufacturer: "HIM",
    categoryId: "5",
    inStock: 1,
  },
  {
    id: "31",
    title: "Rage Nation Golden",
    price: 3000,
    rating: 5,
    description:
      "Futuristički dizajn sa vizuelnim efektima i iridescentnim detaljima učiniće da sijate pod svetlima i privlačite pažnju svakim pokretom.",
    mainImage: "mm2.png",
    slug: "muske-majice-2",
    manufacturer: "HIM",
    categoryId: "5",
    inStock: 0,
  },
  {
    id: "32",
    title: "Raptor Rave Rainbow Reflective",
    price: 3400,
    rating: 5,
    description:
      "Udoban kroj i odvažan, neonski dinosaur print čine je savršenom za svaki rave.",
    mainImage: "mm3.png",
    slug: "muske-majice-3",
    manufacturer: "HIM",
    categoryId: "5",
    inStock: 1,
  },
  {
    id: "33",
    title: "Sonic Savage T-Rex",
    price: 3300,
    rating: 5,
    description:
      "Savršena za one koji žive za drop i žele haos, ova majica će te učiniti pravim headbangerom na festivalu.",
    mainImage: "mm4.png",
    slug: "muske-majice-4",
    manufacturer: "HIM",
    categoryId: "5",
    inStock: 1,
  },
  {
    id: "34",
    title: "Broke My Neck",
    price: 3000,
    rating: 5,
    description:
      "Upari je s visokim čapama ili cargo pantalonama, i dodaj šarene dino minđuše, chokere i šešire. ",
    mainImage: "mm5.png",
    slug: "muske-majice-5",
    manufacturer: "HIM",
    categoryId: "5",
    inStock: 1,
  },
  {
    id: "35",
    title: "Adventurer Men's Cargo",
    price: 5000,
    rating: 5,
    description:
      "Sa krem konstrukcijom i crnim vezivanjem u struku, ove pantalone su stvorene za rave, istraživanje i ponavljanje!",
    mainImage: "mp1.png",
    slug: "muske-pantalone-1",
    manufacturer: "HIM",
    categoryId: "6",
    inStock: 1,
  },
  {
    id: "36",
    title: "Endless Glow Joggers",
    price: 5200,
    rating: 5,
    description:
      "Kada noć padne, Endless Glow joggerice sa džepovima i trakama će te održati u svetlu. Ove pantalone imaju rastezljivu struk i modernu trakastu konstrukciju.",
    mainImage: "mp2.png",
    slug: "muske-pantalone-2",
    manufacturer: "HIM",
    categoryId: "6",
    inStock: 1,
  },
  {
    id: "37",
    title: "Explorer Men's Camo Cargo",
    price: 4900,
    rating: 5,
    description:
      "Dizajnirane su za raver-e koji žele da se uklope, a opet istaknu, dodajući grub osećaj tvom festival stilu.",
    mainImage: "mp3.png",
    slug: "muske-pantalone-3",
    manufacturer: "HIM",
    categoryId: "6",
    inStock: 1,
  },
  {
    id: "38",
    title: "Happy Hour Rainbow Reflective",
    price: 5000,
    rating: 5,
    description:
      "Plesi bez briga dok hipnotišuće vizuale ovih udobnih muških rave pantalona oživljavaju u ritmu muzike.",
    mainImage: "mp4.png",
    slug: "muske-pantalone-4",
    manufacturer: "HIM",
    categoryId: "6",
    inStock: 1,
  },
  {
    id: "39",
    title: "Daredevil",
    price: 4800,
    rating: 5,
    description:
      "Unesi odvažnu, energičnu vibru na sledeći rave sa Daredevil muškim reflektivnim cargo pantalonama!",
    mainImage: "mp5.png",
    slug: "muske-pantalone-5",
    manufacturer: "HIM",
    categoryId: "6",
    inStock: 0,
  },
  {
    id: "40",
    title: "Dino Dominion Lepeza",
    price: 900,
    rating: 5,
    description:
      "Uparuj je sa bilo kojim odgovarajućim topom ili donjim delom i oslobodi svoju divlju stranu tokom rave vikenda.",
    mainImage: "a1.png",
    slug: "aksesoari-1",
    manufacturer: "Stuffies",
    categoryId: "7",
    inStock: 0,
  },
  {
    id: "41",
    title: "B*tch Don't Kill My Vibe",
    price: 1000,
    rating: 5,
    description:
      "Ovaj dodatak dodaje stav svakom outfitu, omogućavajući ti da prigrliš svoju hrabrost i ostaviš utisak gde god da kreneš.",
    mainImage: "a2.png",
    slug: "aksesoari-2",
    manufacturer: "Stuffies",
    categoryId: "7",
    inStock: 0,
  },
  {
    id: "42",
    title: "Special Agent LED Naočare",
    price: 800,
    rating: 5,
    description:
      "Upotpuni svoj futuristički izgled sa Special Agent LED naočarima. Ove kristalne naočare svetle u različitim bojama, od crvene i roze do plave i zelene.",
    mainImage: "a3.png",
    slug: "aksesoari-3",
    manufacturer: "Stuffies",
    categoryId: "7",
    inStock: 0,
  },
  {
    id: "43",
    title: "Filthy Headbanger UV Reactive Lepeza",
    price: 800,
    rating: 5,
    description:
      "Izrazi svoju ljubav prema basu sa ovom lepezom koja je ne samo funkcionalna, već ima i prelep grafički print.",
    mainImage: "a4.png",
    slug: "aksesoari-4",
    manufacturer: "Stuffies",
    categoryId: "7",
    inStock: 1,
  },
  {
    id: "44",
    title: "Dreamy Dazzle Holo Combat",
    price: 4800,
    rating: 5,
    description:
      "Ispričaj kosmičku priču u Dreamy Dazzle Holo čizmama s čarima i džepom u obliku srca!",
    mainImage: "o1.png",
    slug: "obuca-1",
    manufacturer: "HEELZ",
    categoryId: "8",
    inStock: 1,
  },
  {
    id: "45",
    title: "Infinite Expanse Platform",
    price: 3800,
    rating: 5,
    description:
      "Plesi kroz beskraj s ovim platformskim patikama! Imaju masivne đonove i futuristički dizajn, sa holografskim završetkom koji odražava duge boje.",
    mainImage: "o2.png",
    slug: "obuca-2",
    manufacturer: "HEELZ",
    categoryId: "8",
    inStock: 0,
  },
  {
    id: "46",
    title: "Look At Me Rainbow Reflective Lace Up",
    price: 5800,
    rating: 5,
    description:
      "Ove gležnjače imaju masivne potpetice, čipkasti dizajn i rainbow reflektivni efekat koji privlači pažnju.",
    mainImage: "o3.png",
    slug: "obuca-3",
    manufacturer: "HEELZ",
    categoryId: "8",
    inStock: 1,
  },
  {
    id: "47",
    title: "Thunderbolt Silver Reflective Lace Up",
    price: 4800,
    rating: 5,
    description:
      "Ove gležnjače imaju masivne potpetice, čipkasti dizajn i zapanjujući srebrni reflektivni efekat.",
    mainImage: "o4.png",
    slug: "obuca-4",
    manufacturer: "HEELZ",
    categoryId: "8",
    inStock: 0,
  },
];

const demoUsers = [
  {
    id: "a856c6c3-0c57-499c-9884-f0c2f62f980b",
    email: "admin@admin.com",
    password: "$2a$05$giZuIiqwiqyVz9FyXrJkQeb/2L3OL802vPWiVPilu.c2ToL9nRj3.",
    role: "admin",
  },
  {
    id: "5cd9108c-327e-4cca-9767-f7638f877688",
    email: "aa@aa.com",
    password: "$2a$05$zt8FPSPieWre4ykwGfxXhOG5fCLw5K7CWqLGO24BsP8ozHlIb0bde",
    role: "user",
  },
];

const demoParticipants = [
  {
    productId: "1",
    userId: "a856c6c3-0c57-499c-9884-f0c2f62f980b",
    votes: 3,
    mainImage: "zbt2.png",
  },
  {
    productId: "1",
    userId: "5cd9108c-327e-4cca-9767-f7638f877688",
    votes: 8,
    mainImage: "zbt3.png",
  },
];

async function insertDemoData() {
  for (const category of demoCategories) {
    await prisma.category.create({
      data: category,
    });
  }
  console.log("Demo categories inserted successfully!");

  for (const product of demoProducts) {
    await prisma.product.create({
      data: product,
    });
  }
  console.log("Demo products inserted successfully!");

  for (const user of demoUsers) {
    await prisma.user.create({
      data: user,
    });
  }
  console.log("Demo users inserted successfully!");

  for (const participant of demoParticipants) {
    await prisma.participant.create({
      data: participant,
    });
  }
  console.log("Demo participants inserted successfully!");
}

insertDemoData()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
