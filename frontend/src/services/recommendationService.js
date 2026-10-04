const destinationProfiles = {
  dubai: {
    area: "Downtown Dubai",
    secondArea: "Al Fahidi",
    coast: "Jumeirah",
    cuisine: "Emirati and Levantine",
    meals: ["Al Fahidi heritage quarter", "Downtown dining district", "Jumeirah waterfront"],
    attractions: [
      ["Burj Khalifa", "Landmark", "Panoramic views across the city and desert.", "Late afternoon"],
      ["Al Fahidi Historical Neighbourhood", "Culture", "Wind-tower lanes and restored heritage houses.", "Morning"],
      ["Dubai Creek", "Waterfront", "Explore the historic trade route by abra.", "Sunset"],
      ["Jumeirah Beach", "Beach", "A relaxed shoreline with open views of the coast.", "Early morning"],
    ],
    nightly: [7500, 11500, 16500],
  },
  bali: {
    area: "Ubud",
    secondArea: "Canggu",
    coast: "Seminyak",
    cuisine: "Balinese and Indonesian",
    meals: ["Ubud centre", "Canggu beach road", "Seminyak village"],
    attractions: [
      ["Ubud Sacred Monkey Forest", "Nature", "A shaded sanctuary and temple complex near central Ubud.", "Morning"],
      ["Tegallalang Rice Terraces", "Landscape", "Walk through Bali's sculpted green rice fields.", "Early morning"],
      ["Tanah Lot Temple", "Culture", "A sea temple framed by the Indian Ocean.", "Sunset"],
      ["Uluwatu Temple", "Landmark", "Clifftop temple views above the southern coast.", "Late afternoon"],
    ],
    nightly: [4500, 8000, 12500],
  },
  tokyo: {
    area: "Shinjuku",
    secondArea: "Asakusa",
    coast: "Shibuya",
    cuisine: "Japanese",
    meals: ["Shinjuku dining lanes", "Asakusa market streets", "Shibuya backstreets"],
    attractions: [
      ["Senso-ji Temple", "Culture", "Tokyo's historic temple district and Nakamise approach.", "Morning"],
      ["Shibuya Crossing", "City icon", "See one of the city's best-known urban intersections.", "Evening"],
      ["Meiji Jingu", "Nature", "A peaceful forest walk beside a major Shinto shrine.", "Morning"],
      ["Ueno Park", "Park and museums", "A leafy cultural area with museums and seasonal paths.", "Afternoon"],
    ],
    nightly: [8500, 13000, 19000],
  },
  paris: {
    area: "Le Marais",
    secondArea: "Latin Quarter",
    coast: "Saint-Germain-des-Prés",
    cuisine: "French and Parisian bistro",
    meals: ["Le Marais", "Latin Quarter", "Saint-Germain-des-Prés"],
    attractions: [
      ["Eiffel Tower", "Landmark", "The city's signature tower with wide views across Paris.", "Evening"],
      ["Louvre Museum", "Museum", "A world-scale collection in a former royal palace.", "Weekday morning"],
      ["Montmartre and Sacré-Cœur", "Culture", "Hilltop streets, ateliers and a sweeping city outlook.", "Early morning"],
      ["Île de la Cité", "Historic district", "Trace the river island's layered architecture and history.", "Late afternoon"],
    ],
    nightly: [10500, 15500, 22000],
  },
  singapore: {
    area: "Marina Bay",
    secondArea: "Bugis",
    coast: "Tiong Bahru",
    cuisine: "Singaporean hawker and Peranakan",
    meals: ["Maxwell and Chinatown", "Bugis and Kampong Glam", "Tiong Bahru"],
    attractions: [
      ["Gardens by the Bay", "Nature and design", "Waterfront gardens and conservatories by Marina Bay.", "Late afternoon"],
      ["Chinatown Heritage Centre", "Culture", "Explore the neighbourhood's migration and trade history.", "Morning"],
      ["National Gallery Singapore", "Museum", "Regional art in two landmark civic buildings.", "Afternoon"],
      ["Jewel Changi Airport", "Architecture", "Indoor gardens and dining around the Rain Vortex.", "Evening"],
    ],
    nightly: [10500, 16000, 23000],
  },
  maldives: {
    area: "Malé Atoll",
    secondArea: "North Malé Atoll",
    coast: "South Malé Atoll",
    cuisine: "Maldivian seafood and island cuisine",
    meals: ["Malé waterfront", "North Malé island resorts", "South Malé island stays"],
    attractions: [
      ["Malé Fish Market", "Market", "A lively look at the capital's fishing culture.", "Morning"],
      ["Hukuru Miskiy", "Culture", "A coral-stone mosque with detailed traditional carvings.", "Morning"],
      ["Baa Atoll Biosphere Reserve", "Nature", "A protected marine area known for rich reef life.", "Dry-season daylight"],
      ["Hulhumalé Beach", "Beach", "An accessible stretch of sand near the capital.", "Sunset"],
    ],
    nightly: [12000, 22000, 42000],
  },
  switzerland: {
    area: "Lucerne Old Town",
    secondArea: "Interlaken",
    coast: "Zermatt village",
    cuisine: "Swiss and Alpine",
    meals: ["Lucerne Old Town", "Interlaken centre", "Zermatt village"],
    attractions: [
      ["Chapel Bridge, Lucerne", "Landmark", "A covered wooden bridge over the Reuss River.", "Early morning"],
      ["Jungfraujoch", "Mountain", "High-alpine viewpoints reached by mountain rail.", "Clear morning"],
      ["Lake Brienz", "Nature", "Turquoise lake scenery and lakeside paths.", "Late morning"],
      ["Zermatt and Matterhorn views", "Mountain", "Car-free village streets beneath the iconic peak.", "Early morning"],
    ],
    nightly: [14500, 22000, 34000],
  },
  london: {
    area: "Bloomsbury",
    secondArea: "South Bank",
    coast: "Kensington",
    cuisine: "British and international",
    meals: ["Bloomsbury", "South Bank", "Kensington"],
    attractions: [
      ["British Museum", "Museum", "Explore collections spanning cultures and centuries.", "Weekday morning"],
      ["Tower of London", "Landmark", "A riverside fortress with a long royal history.", "Opening time"],
      ["South Bank", "Riverside", "A walk linking cultural venues and Thames views.", "Late afternoon"],
      ["Hyde Park", "Nature", "A broad central park for a quieter city break.", "Morning"],
    ],
    nightly: [13000, 19500, 28000],
  },
};

const hotelTypes = [
  { name: "Comfort Stay", detail: "A practical base with easy access to local transit.", score: "4.6" },
  { name: "City House", detail: "A central option close to dining and neighbourhood walks.", score: "4.7" },
  { name: "Signature Retreat", detail: "A more spacious stay for slower mornings and downtime.", score: "4.8" },
];

const restaurantStyles = [
  { name: "Local Table", detail: "A relaxed introduction to regional favourites.", score: "4.7", price: "₹₹" },
  { name: "Market Kitchen", detail: "A casual stop for fresh dishes and local flavours.", score: "4.6", price: "₹" },
  { name: "Neighbourhood Dining Room", detail: "A comfortable choice for an unhurried meal.", score: "4.8", price: "₹₹₹" },
];

function findProfile(destination) {
  const query = destination.trim().toLocaleLowerCase();
  const key = Object.keys(destinationProfiles).find((name) => query.includes(name) || name.includes(query));
  if (key) return destinationProfiles[key];

  return {
    area: `Central ${destination}`,
    secondArea: `${destination} Old Town`,
    coast: `${destination} Riverside`,
    cuisine: "Local and international",
    meals: [`Central ${destination}`, `${destination} Old Town`, `${destination} Riverside`],
    attractions: [
      [`${destination} Historic Centre`, "Culture", `Explore the historic streets and local character of ${destination}.`, "Morning"],
      [`${destination} City Landmark`, "Landmark", `A well-known city sight and a useful orientation stop in ${destination}.`, "Late afternoon"],
      [`${destination} Local Market`, "Market", `Browse regional produce, crafts and everyday life in ${destination}.`, "Morning"],
      [`${destination} Green Escape`, "Nature", `Take a slower walk through a popular green space near ${destination}.`, "Early morning"],
    ],
    nightly: [7000, 11500, 17500],
  };
}

export function getDestinationRecommendations(destination, travelStyle = "") {
  const place = destination?.trim() || "your destination";
  const profile = findProfile(place);
  const style = String(travelStyle || "").trim() || "All travel styles";

  const hotels = hotelTypes.map((hotel, index) => ({
    ...hotel,
    area: [profile.area, profile.secondArea, profile.coast][index],
    nightlyPrice: profile.nightly[index],
    suitableFor: style,
  }));

  const restaurants = restaurantStyles.map((restaurant, index) => ({
    ...restaurant,
    name: `${place} ${restaurant.name}`,
    cuisine: profile.cuisine,
    area: profile.meals[index],
    suitableFor: style,
  }));

  const attractions = profile.attractions.map(([name, category, description, bestTime], index) => ({
    name,
    category,
    description,
    bestTime,
    area: profile.meals[index % profile.meals.length],
  }));

  return { hotels, restaurants, attractions };
}