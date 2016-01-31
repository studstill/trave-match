var fullListArray = require('./destinationArrayJSON.js');
var curatedListArray = require('./destinationArray.js');
var americanCuratedListArray = require('./americanDestinationArray.js');
var wikiData = require('./wikiData.js');

// console.log(wikiData);

for (var i = 0; i < wikiData.length; i++) {
  var currentCity = '';
  currentCity = wikiData[i].pageUrl.split('/')
  var lastIndex = currentCity.length - 1;
  currentCity = currentCity[lastIndex].replace(/_/g, ' ').replace(/%27/g, '\'');
  // console.log(currentCity);
  for (var j = 0; j < americanCuratedListArray.length; j++) {
    if (americanCuratedListArray[j].cityName == currentCity) {
      americanCuratedListArray[j].wikiUrl = wikiData[i].pageUrl;
      americanCuratedListArray[j].imgUrl = wikiData[i].results[0]['my_column'];
      // console.log(typeof(americanCuratedListArray[j].imgUrl))
      if (typeof(americanCuratedListArray[j].imgUrl) && (typeof(americanCuratedListArray[j].imgUrl) == 'object')) {
        // console.log(typeof(americanCuratedListArray[j].imgUrl))
        americanCuratedListArray[j].imgUrl = americanCuratedListArray[j].imgUrl[0];
      } else {
        americanCuratedListArray[j].imgUrl = americanCuratedListArray[j].imgUrl;
      }
      americanCuratedListArray[j].imgDescription = wikiData[i].results[0]['my_column/_alt'];
      if (typeof(americanCuratedListArray[j].imgDescription) && (typeof(americanCuratedListArray[j].imgDescription) == 'object')) {
        // console.log(typeof(americanCuratedListArray[j].imgDescription))
        americanCuratedListArray[j].imgDescription = americanCuratedListArray[j].imgDescription[0];
      } else {
        americanCuratedListArray[j].imgDescription = americanCuratedListArray[j].imgDescription;
      }
      americanCuratedListArray[j].cityDescription = wikiData[i].results[0]["my_column_3"].replace(/\s\[(.*?)\]/g, '').replace(/\((.*?)\)/g, '').replace(/\/(.*?)\//g, '');
    }
  }
}

console.log(americanCuratedListArray);




// var wikiUrlArray = [];
// var wikiUrl = 'https://en.wikipedia.org/wiki/';

// for (var i = 0; i < americanCuratedListArray.length; i++) {
//   var query = '';
//   query = americanCuratedListArray[i].cityName.split(', ').join(',_').replace(/\s/g, '_').replace(/'/g, '%27');
//   wikiUrlArray.push(wikiUrl.concat(query));
// }

// console.log(wikiUrlArray);


// https://en.wikipedia.org/wiki/Aberdeen,_South_Dakota
// https://en.wikipedia.org/wiki/Abilene,_Texas
// https://en.wikipedia.org/wiki/Akron,_Ohio
// https://en.wikipedia.org/wiki/Alamosa,_Colorado
// https://en.wikipedia.org/wiki/Albany,_Georgia
// https://en.wikipedia.org/wiki/Albany,_New_York
// https://en.wikipedia.org/wiki/Albuquerque,_New_Mexico
// https://en.wikipedia.org/wiki/Alexandria,_Louisiana
// https://en.wikipedia.org/wiki/Allentown,_Pennsylvania
// https://en.wikipedia.org/wiki/Alliance,_Nebraska
// https://en.wikipedia.org/wiki/Alpena,_Michigan
// https://en.wikipedia.org/wiki/Altoona,_Pennsylvania
// https://en.wikipedia.org/wiki/Amarillo,_Texas
// https://en.wikipedia.org/wiki/Anchorage,_Alaska
// https://en.wikipedia.org/wiki/Appleton,_Wisconsin
// https://en.wikipedia.org/wiki/Asheville,_North_Carolina
// https://en.wikipedia.org/wiki/Aspen,_Colorado
// https://en.wikipedia.org/wiki/Athens,_Georgia
// https://en.wikipedia.org/wiki/Atlanta,_Georgia
// https://en.wikipedia.org/wiki/Atlantic_City,_New_Jersey
// https://en.wikipedia.org/wiki/Augusta,_Georgia
// https://en.wikipedia.org/wiki/Augusta,_Maine
// https://en.wikipedia.org/wiki/Austin,_Texas
// https://en.wikipedia.org/wiki/Bakersfield,_California
// https://en.wikipedia.org/wiki/Baltimore,_Maryland
// https://en.wikipedia.org/wiki/Bangor,_Maine
// https://en.wikipedia.org/wiki/Bar_Harbor,_Maine
// https://en.wikipedia.org/wiki/Barrow,_Alaska
// https://en.wikipedia.org/wiki/Baton_Rouge,_Louisiana
// https://en.wikipedia.org/wiki/Beaumont,_Texas
// https://en.wikipedia.org/wiki/Beckley,_West_Virginia
// https://en.wikipedia.org/wiki/Bedford,_Massachusetts
// https://en.wikipedia.org/wiki/Bellingham,_Washington
// https://en.wikipedia.org/wiki/Bemidji,_Minnesota
// https://en.wikipedia.org/wiki/Bethel,_Alaska
// https://en.wikipedia.org/wiki/Bettles,_Alaska
// https://en.wikipedia.org/wiki/Billings,_Montana
// https://en.wikipedia.org/wiki/Binghamton,_New_York
// https://en.wikipedia.org/wiki/Birmingham,_Alabama
// https://en.wikipedia.org/wiki/Bismarck,_North_Dakota
// https://en.wikipedia.org/wiki/Bloomington,_Illinois
// https://en.wikipedia.org/wiki/Bloomington,_Indiana
// https://en.wikipedia.org/wiki/Bluefield,_West_Virginia
// https://en.wikipedia.org/wiki/Boise,_Idaho
// https://en.wikipedia.org/wiki/Boston,_Massachusetts
// https://en.wikipedia.org/wiki/Bozeman,_Montana
// https://en.wikipedia.org/wiki/Brookings,_South_Dakota
// https://en.wikipedia.org/wiki/Brownsville,_Texas
// https://en.wikipedia.org/wiki/Brunswick,_Georgia
// https://en.wikipedia.org/wiki/Buffalo,_New_York
// https://en.wikipedia.org/wiki/Burbank,_California
// https://en.wikipedia.org/wiki/Burlington,_Iowa
// https://en.wikipedia.org/wiki/Burlington,_Massachusetts
// https://en.wikipedia.org/wiki/Burlington,_Vermont
// https://en.wikipedia.org/wiki/Butte,_Montana
// https://en.wikipedia.org/wiki/Cape_Girardeau,_Missouri
// https://en.wikipedia.org/wiki/Carlsbad,_California
// https://en.wikipedia.org/wiki/Carlsbad,_New_Mexico
// https://en.wikipedia.org/wiki/Casper,_Wyoming
// https://en.wikipedia.org/wiki/Cedar_Rapids,_Iowa
// https://en.wikipedia.org/wiki/Champaign,_Illinois
// https://en.wikipedia.org/wiki/Charleston,_South_Carolina
// https://en.wikipedia.org/wiki/Charleston,_West_Virginia
// https://en.wikipedia.org/wiki/Charlotte,_North_Carolina
// https://en.wikipedia.org/wiki/Charlottesville,_Virginia
// https://en.wikipedia.org/wiki/Chattanooga,_Tennessee
// https://en.wikipedia.org/wiki/Cheyenne,_Wyoming
// https://en.wikipedia.org/wiki/Chicago,_Illinois
// https://en.wikipedia.org/wiki/Chicago,_Illinois
// https://en.wikipedia.org/wiki/Chicago,_Illinois
// https://en.wikipedia.org/wiki/Chicago,_Illinois
// https://en.wikipedia.org/wiki/Chico,_California
// https://en.wikipedia.org/wiki/Cincinnati,_Ohio
// https://en.wikipedia.org/wiki/Clarksburg,_West_Virginia
// https://en.wikipedia.org/wiki/Cleveland,_Ohio
// https://en.wikipedia.org/wiki/Clovis,_New_Mexico
// https://en.wikipedia.org/wiki/Cody,_Wyoming
// https://en.wikipedia.org/wiki/College_Station,_Texas
// https://en.wikipedia.org/wiki/Colorado_Springs,_Colorado
// https://en.wikipedia.org/wiki/Columbia,_Missouri
// https://en.wikipedia.org/wiki/Columbia,_South_Carolina
// https://en.wikipedia.org/wiki/Columbus,_Georgia
// https://en.wikipedia.org/wiki/Columbus,_Indiana
// https://en.wikipedia.org/wiki/Columbus,_Mississippi
// https://en.wikipedia.org/wiki/Columbus,_Nebraska
// https://en.wikipedia.org/wiki/Columbus,_Ohio
// https://en.wikipedia.org/wiki/Cordova,_Alaska
// https://en.wikipedia.org/wiki/Corpus_Christi,_Texas
// https://en.wikipedia.org/wiki/Dallas,_Texas
// https://en.wikipedia.org/wiki/Dallas,_Texas
// https://en.wikipedia.org/wiki/Dayton,_Ohio
// https://en.wikipedia.org/wiki/Daytona_Beach,_Florida
// https://en.wikipedia.org/wiki/Decatur,_Illinois
// https://en.wikipedia.org/wiki/Denver,_Colorado
// https://en.wikipedia.org/wiki/Des_Moines,_Iowa
// https://en.wikipedia.org/wiki/Detroit,_Michigan
// https://en.wikipedia.org/wiki/Detroit,_Michigan
// https://en.wikipedia.org/wiki/Devils_Lake,_North_Dakota
// https://en.wikipedia.org/wiki/Dickinson,_North_Dakota
// https://en.wikipedia.org/wiki/Dillingham,_Alaska
// https://en.wikipedia.org/wiki/Dodge_City,_Kansas
// https://en.wikipedia.org/wiki/Dothan,_Alabama
// https://en.wikipedia.org/wiki/Du_Bois,_Pennsylvania
// https://en.wikipedia.org/wiki/Dubuque,_Iowa
// https://en.wikipedia.org/wiki/Duluth,_Minnesota
// https://en.wikipedia.org/wiki/Durango,_Colorado
// https://en.wikipedia.org/wiki/Dutch_Harbor,_Un_Island,_Alaska
// https://en.wikipedia.org/wiki/Eau_Claire,_Wisconsin
// https://en.wikipedia.org/wiki/Eek,_Alaska
// https://en.wikipedia.org/wiki/El_Centro,_California
// https://en.wikipedia.org/wiki/El_Dorado,_Arkansas
// https://en.wikipedia.org/wiki/El_Paso,_Texas
// https://en.wikipedia.org/wiki/Elko,_Nevada
// https://en.wikipedia.org/wiki/Elmira,_New_York
// https://en.wikipedia.org/wiki/Enid,_Oklahoma
// https://en.wikipedia.org/wiki/Erie,_Pennsylvania
// https://en.wikipedia.org/wiki/Escanaba,_Michigan
// https://en.wikipedia.org/wiki/Eugene,_Oregon
// https://en.wikipedia.org/wiki/Eureka,_California
// https://en.wikipedia.org/wiki/Evansville,_Indiana
// https://en.wikipedia.org/wiki/Fairbanks,_Alaska
// https://en.wikipedia.org/wiki/Fargo,_North_Dakota
// https://en.wikipedia.org/wiki/Farmington,_New_Mexico
// https://en.wikipedia.org/wiki/Fayetteville,_Arkansas
// https://en.wikipedia.org/wiki/Fayetteville,_North_Carolina
// https://en.wikipedia.org/wiki/Flagstaff,_Arizona
// https://en.wikipedia.org/wiki/Flint,_Michigan
// https://en.wikipedia.org/wiki/Florence,_South_Carolina
// https://en.wikipedia.org/wiki/Fort_Dodge,_Iowa
// https://en.wikipedia.org/wiki/Fort_Lauderdale,_Florida
// https://en.wikipedia.org/wiki/Fort_Leonard_Wood,_Missouri
// https://en.wikipedia.org/wiki/Fort_Myers,_Florida
// https://en.wikipedia.org/wiki/Fort_Smith,_Arkansas
// https://en.wikipedia.org/wiki/Fort_Walton_Beach,_Florida
// https://en.wikipedia.org/wiki/Fort_Wayne,_Indiana
// https://en.wikipedia.org/wiki/Fort_Yukon,_Alaska
// https://en.wikipedia.org/wiki/Fresno,_California
// https://en.wikipedia.org/wiki/Gainesville,_Florida
// https://en.wikipedia.org/wiki/Garden_City,_Kansas
// https://en.wikipedia.org/wiki/Gillette,_Wyoming
// https://en.wikipedia.org/wiki/Glendive,_Montana
// https://en.wikipedia.org/wiki/Grand_Forks,_North_Dakota
// https://en.wikipedia.org/wiki/Grand_Island,_Nebraska
// https://en.wikipedia.org/wiki/Grand_Junction,_Colorado
// https://en.wikipedia.org/wiki/Grand_Rapids,_Michigan
// https://en.wikipedia.org/wiki/Great_Bend,_Kansas
// https://en.wikipedia.org/wiki/Great_Falls,_Montana
// https://en.wikipedia.org/wiki/Green_Bay,_Wisconsin
// https://en.wikipedia.org/wiki/Greenbrier,_West_Virginia
// https://en.wikipedia.org/wiki/Greensboro,_North_Carolina
// https://en.wikipedia.org/wiki/Greenville,_Mississippi
// https://en.wikipedia.org/wiki/Greenville,_North_Carolina
// https://en.wikipedia.org/wiki/Greenville,_South_Carolina
// https://en.wikipedia.org/wiki/Gulfport,_Mississippi
// https://en.wikipedia.org/wiki/Gunnison,_Colorado
// https://en.wikipedia.org/wiki/Hagerstown,_Maryland
// https://en.wikipedia.org/wiki/Hana,_Maui,_Hawaii
// https://en.wikipedia.org/wiki/Hancock,_Michigan
// https://en.wikipedia.org/wiki/Harlingen,_Texas
// https://en.wikipedia.org/wiki/Harrisburg,_Pennsylvania
// https://en.wikipedia.org/wiki/Harrison,_Arkansas
// https://en.wikipedia.org/wiki/Hartford,_Connecticut
// https://en.wikipedia.org/wiki/Havre,_Montana
// https://en.wikipedia.org/wiki/Hays,_Kansas
// https://en.wikipedia.org/wiki/Helena,_Montana
// https://en.wikipedia.org/wiki/Hibbing,_Minnesota
// https://en.wikipedia.org/wiki/Hilton_Head_Island,_South_Carolina
// https://en.wikipedia.org/wiki/Hobbs,_New_Mexico
// https://en.wikipedia.org/wiki/Homer,_Alaska
// https://en.wikipedia.org/wiki/Honolulu,_Oahu,_Hawaii
// https://en.wikipedia.org/wiki/Hoolehua,_Molokai,_Hawaii
// https://en.wikipedia.org/wiki/Houston,_Texas
// https://en.wikipedia.org/wiki/Houston,_Texas
// https://en.wikipedia.org/wiki/Houston,_Texas
// https://en.wikipedia.org/wiki/Houston,_Texas
// https://en.wikipedia.org/wiki/Huntington,_West_Virginia
// https://en.wikipedia.org/wiki/Huntsville,_Alabama
// https://en.wikipedia.org/wiki/Huron,_South_Dakota
// https://en.wikipedia.org/wiki/Hyannis,_Massachusetts
// https://en.wikipedia.org/wiki/Idaho_Falls,_Idaho
// https://en.wikipedia.org/wiki/Indianapolis,_Indiana
// https://en.wikipedia.org/wiki/International_Falls,_Minnesota
// https://en.wikipedia.org/wiki/Inyokern,_California
// https://en.wikipedia.org/wiki/Iron_Mountain,_Michigan
// https://en.wikipedia.org/wiki/Ironwood,_Michigan
// https://en.wikipedia.org/wiki/Islip,_New_York
// https://en.wikipedia.org/wiki/Ithaca,_New_York
// https://en.wikipedia.org/wiki/Jackson_Hole,_Wyoming
// https://en.wikipedia.org/wiki/Jackson,_Mississippi
// https://en.wikipedia.org/wiki/Jackson,_Tennessee
// https://en.wikipedia.org/wiki/Jacksonville,_Florida
// https://en.wikipedia.org/wiki/Jacksonville,_North_Carolina
// https://en.wikipedia.org/wiki/Jamestown,_North_Dakota
// https://en.wikipedia.org/wiki/Jamestown,_New_York
// https://en.wikipedia.org/wiki/Johnstown,_Pennsylvania
// https://en.wikipedia.org/wiki/Joplin,_Missouri
// https://en.wikipedia.org/wiki/Juneau,_Alaska
// https://en.wikipedia.org/wiki/Kahului,_Maui,_Hawaii
// https://en.wikipedia.org/wiki/Kalamazoo,_Michigan
// https://en.wikipedia.org/wiki/Kalaupapa,_Molokai,_Hawaii
// https://en.wikipedia.org/wiki/Kalispell,_Montana
// https://en.wikipedia.org/wiki/Kansas_City,_Missouri
// https://en.wikipedia.org/wiki/Kapalua,_Maui,_Hawaii
// https://en.wikipedia.org/wiki/Kearney,_Nebraska
// https://en.wikipedia.org/wiki/Kenai,_Alaska
// https://en.wikipedia.org/wiki/Key_West,_Florida
// https://en.wikipedia.org/wiki/Killeen,_Texas
// https://en.wikipedia.org/wiki/King_Salmon,_Alaska
// https://en.wikipedia.org/wiki/Kingman,_Arizona
// https://en.wikipedia.org/wiki/Kirksville,_Missouri
// https://en.wikipedia.org/wiki/Klamath_Falls,_Oregon
// https://en.wikipedia.org/wiki/Knoxville,_Tennessee
// https://en.wikipedia.org/wiki/Kodiak,_Alaska
// https://en.wikipedia.org/wiki/La_Crosse,_Wisconsin
// https://en.wikipedia.org/wiki/Lafayette,_Louisiana
// https://en.wikipedia.org/wiki/Lake_Charles,_Louisiana
// https://en.wikipedia.org/wiki/Lanai_City,_Lanai,_Hawaii
// https://en.wikipedia.org/wiki/Lancaster,_Pennsylvania
// https://en.wikipedia.org/wiki/Lansing,_Michigan
// https://en.wikipedia.org/wiki/Laramie,_Wyoming
// https://en.wikipedia.org/wiki/Laredo,_Texas
// https://en.wikipedia.org/wiki/Las_Cruces,_New_Mexico
// https://en.wikipedia.org/wiki/Las_Vegas,_Nevada
// https://en.wikipedia.org/wiki/Latrobe,_Pennsylvania
// https://en.wikipedia.org/wiki/Laurel,_Mississippi
// https://en.wikipedia.org/wiki/Lawton,_Oklahoma
// https://en.wikipedia.org/wiki/Lewiston,_Idaho
// https://en.wikipedia.org/wiki/Lewiston,_Maine
// https://en.wikipedia.org/wiki/Lewistown,_Montana
// https://en.wikipedia.org/wiki/Lexington,_Kentucky
// https://en.wikipedia.org/wiki/Liberal,_Kansas
// https://en.wikipedia.org/wiki/Lihue,_Kauai,_Hawaii
// https://en.wikipedia.org/wiki/Lincoln,_Nebraska
// https://en.wikipedia.org/wiki/Little_Rock,_Arkansas
// https://en.wikipedia.org/wiki/Long_Beach,_California
// https://en.wikipedia.org/wiki/Longview,_Texas
// https://en.wikipedia.org/wiki/Los_Angeles,_California
// https://en.wikipedia.org/wiki/Lubbock,_Texas
// https://en.wikipedia.org/wiki/Lynchburg,_Virginia
// https://en.wikipedia.org/wiki/Macon,_Georgia
// https://en.wikipedia.org/wiki/Madison,_Wisconsin
// https://en.wikipedia.org/wiki/Manchester,_New_Hampshire
// https://en.wikipedia.org/wiki/Manhattan,_Kansas
// https://en.wikipedia.org/wiki/Manistee,_Michigan
// https://en.wikipedia.org/wiki/Marion,_Illinois
// https://en.wikipedia.org/wiki/Marquette,_Michigan
// https://en.wikipedia.org/wiki/Martha%27s_Vineyard,_Massachusetts
// https://en.wikipedia.org/wiki/Mason_City,_Iowa
// https://en.wikipedia.org/wiki/Massena,_New_York
// https://en.wikipedia.org/wiki/McAllen,_Texas
// https://en.wikipedia.org/wiki/McCook,_Nebraska
// https://en.wikipedia.org/wiki/Medford,_Oregon
// https://en.wikipedia.org/wiki/Melbourne,_Florida
// https://en.wikipedia.org/wiki/Memphis,_Tennessee
// https://en.wikipedia.org/wiki/Meridian,_Mississippi
// https://en.wikipedia.org/wiki/Miami,_Florida
// https://en.wikipedia.org/wiki/Midland,_Texas
// https://en.wikipedia.org/wiki/Miles_City,_Montana
// https://en.wikipedia.org/wiki/Milwaukee,_Wisconsin
// https://en.wikipedia.org/wiki/Minneapolis,_Minnesota
// https://en.wikipedia.org/wiki/Minot,_North_Dakota
// https://en.wikipedia.org/wiki/Missoula,_Montana
// https://en.wikipedia.org/wiki/Mobile,_Alabama
// https://en.wikipedia.org/wiki/Modesto,_California
// https://en.wikipedia.org/wiki/Moline,_Illinois
// https://en.wikipedia.org/wiki/Monroe,_Louisiana
// https://en.wikipedia.org/wiki/Monterey,_California
// https://en.wikipedia.org/wiki/Montgomery,_Alabama
// https://en.wikipedia.org/wiki/Montrose,_Colorado
// https://en.wikipedia.org/wiki/Morgantown,_West_Virginia
// https://en.wikipedia.org/wiki/Moses_Lake,_Washington
// https://en.wikipedia.org/wiki/Muscle_Shoals,_Alabama
// https://en.wikipedia.org/wiki/Muskegon,_Michigan
// https://en.wikipedia.org/wiki/Monterey,_California
// https://en.wikipedia.org/wiki/Nantucket,_Massachusetts
// https://en.wikipedia.org/wiki/Nashville,_Tennessee
// https://en.wikipedia.org/wiki/New_Bern,_North_Carolina
// https://en.wikipedia.org/wiki/New_Haven,_Connecticut
// https://en.wikipedia.org/wiki/New_Orleans,_Louisiana
// https://en.wikipedia.org/wiki/New_York,_New_York
// https://en.wikipedia.org/wiki/New_York,_New_York
// https://en.wikipedia.org/wiki/New_York,_New_York
// https://en.wikipedia.org/wiki/Newark,_New_Jersey
// https://en.wikipedia.org/wiki/Newburgh,_New_York
// https://en.wikipedia.org/wiki/Newport_News,_Virginia
// https://en.wikipedia.org/wiki/Nome,_Alaska
// https://en.wikipedia.org/wiki/Norfolk,_Virginia
// https://en.wikipedia.org/wiki/North_Bend,_Oregon
// https://en.wikipedia.org/wiki/North_Platte,_Nebraska
// https://en.wikipedia.org/wiki/Oakland,_California
// https://en.wikipedia.org/wiki/Ogdensburg,_New_York
// https://en.wikipedia.org/wiki/Oklahoma_City,_Oklahoma
// https://en.wikipedia.org/wiki/Omaha,_Nebraska
// https://en.wikipedia.org/wiki/Ontario,_California
// https://en.wikipedia.org/wiki/Orange_County,_California
// https://en.wikipedia.org/wiki/Orlando,_Florida
// https://en.wikipedia.org/wiki/Oshkosh,_Wisconsin
// https://en.wikipedia.org/wiki/Owensboro,_Kentucky
// https://en.wikipedia.org/wiki/Oxnard,_California
// https://en.wikipedia.org/wiki/Paducah,_Kentucky
// https://en.wikipedia.org/wiki/Page,_Arizona
// https://en.wikipedia.org/wiki/Palm_Springs,_California
// https://en.wikipedia.org/wiki/Panama_City,_Florida
// https://en.wikipedia.org/wiki/Parkersburg,_West_Virginia
// https://en.wikipedia.org/wiki/Pasco,_Washington
// https://en.wikipedia.org/wiki/Pellston,_Michigan
// https://en.wikipedia.org/wiki/Pendleton,_Oregon
// https://en.wikipedia.org/wiki/Pensacola,_Florida
// https://en.wikipedia.org/wiki/Peoria,_Illinois
// https://en.wikipedia.org/wiki/Philadelphia,_Pennsylvania
// https://en.wikipedia.org/wiki/Phoenix,_Arizona
// https://en.wikipedia.org/wiki/Pierre,_South_Dakota
// https://en.wikipedia.org/wiki/Pinehurst,_North_Carolina
// https://en.wikipedia.org/wiki/Pittsburgh,_Pennsylvania
// https://en.wikipedia.org/wiki/Pocatello,_Idaho
// https://en.wikipedia.org/wiki/Ponca_City,_Oklahoma
// https://en.wikipedia.org/wiki/Portland,_Maine
// https://en.wikipedia.org/wiki/Portland,_Oregon
// https://en.wikipedia.org/wiki/Portsmouth,_New_Hampshire
// https://en.wikipedia.org/wiki/Prescott,_Arizona
// https://en.wikipedia.org/wiki/Presque_Isle,_Maine
// https://en.wikipedia.org/wiki/Providence,_Rhode_Island
// https://en.wikipedia.org/wiki/Provincetown,_Massachusetts
// https://en.wikipedia.org/wiki/Pueblo,_Colorado
// https://en.wikipedia.org/wiki/Pullman,_Washington
// https://en.wikipedia.org/wiki/Quincy,_Illinois
// https://en.wikipedia.org/wiki/Raleigh,_North_Carolina
// https://en.wikipedia.org/wiki/Rapid_City,_South_Dakota
// https://en.wikipedia.org/wiki/Redding,_California
// https://en.wikipedia.org/wiki/Redmond,_Oregon
// https://en.wikipedia.org/wiki/Reno,_Nevada
// https://en.wikipedia.org/wiki/Rhinelander,_Wisconsin
// https://en.wikipedia.org/wiki/Richmond,_Virginia
// https://en.wikipedia.org/wiki/Riverton,_Wyoming
// https://en.wikipedia.org/wiki/Roanoke,_Virginia
// https://en.wikipedia.org/wiki/Rochester,_Minnesota
// https://en.wikipedia.org/wiki/Rochester,_New_York
// https://en.wikipedia.org/wiki/Rock_Springs,_Wyoming
// https://en.wikipedia.org/wiki/Rockford,_Illinois
// https://en.wikipedia.org/wiki/Rockland,_Maine
// https://en.wikipedia.org/wiki/Roswell,_New_Mexico
// https://en.wikipedia.org/wiki/Rutland,_Vermont
// https://en.wikipedia.org/wiki/Sacramento,_California
// https://en.wikipedia.org/wiki/Saginaw,_Michigan
// https://en.wikipedia.org/wiki/Salina,_Kansas
// https://en.wikipedia.org/wiki/Salt_Lake_City,_Utah
// https://en.wikipedia.org/wiki/San_Angelo,_Texas
// https://en.wikipedia.org/wiki/San_Antonio,_Texas
// https://en.wikipedia.org/wiki/San_Diego,_California
// https://en.wikipedia.org/wiki/San_Francisco,_California
// https://en.wikipedia.org/wiki/San_Francisco,_California
// https://en.wikipedia.org/wiki/San_Jose,_California
// https://en.wikipedia.org/wiki/San_Luis_Obispo,_California
// https://en.wikipedia.org/wiki/Sand_Point,_Alaska
// https://en.wikipedia.org/wiki/Santa_Barbara,_California
// https://en.wikipedia.org/wiki/Santa_Fe,_New_Mexico
// https://en.wikipedia.org/wiki/Santa_Maria,_California
// https://en.wikipedia.org/wiki/Santa_Rosa,_California
// https://en.wikipedia.org/wiki/Saranac_Lake,_New_York
// https://en.wikipedia.org/wiki/Sarasota,_Florida
// https://en.wikipedia.org/wiki/Sault_Ste._Marie,_Michigan
// https://en.wikipedia.org/wiki/Savannah,_Georgia
// https://en.wikipedia.org/wiki/Scottsbluff,_Nebraska
// https://en.wikipedia.org/wiki/Seattle,_Washington
// https://en.wikipedia.org/wiki/Shenandoah_Valley_Airport,_Virginia
// https://en.wikipedia.org/wiki/Sheridan,_Wyoming
// https://en.wikipedia.org/wiki/Shreveport,_Louisiana
// https://en.wikipedia.org/wiki/Sidney,_Montana
// https://en.wikipedia.org/wiki/Silver_City,_New_Mexico
// https://en.wikipedia.org/wiki/Sioux_City,_Iowa
// https://en.wikipedia.org/wiki/Sioux_Falls,_South_Dakota
// https://en.wikipedia.org/wiki/Sitka,_Alaska
// https://en.wikipedia.org/wiki/Skagway,_Alaska
// https://en.wikipedia.org/wiki/South_Bend,_Indiana
// https://en.wikipedia.org/wiki/Spokane,_Washington
// https://en.wikipedia.org/wiki/Springfield,_Illinois
// https://en.wikipedia.org/wiki/Springfield,_Massachusetts
// https://en.wikipedia.org/wiki/Springfield,_Missouri
// https://en.wikipedia.org/wiki/Springfield,_Vermont
// https://en.wikipedia.org/wiki/St._Cloud,_Minnesota
// https://en.wikipedia.org/wiki/St._George,_Utah
// https://en.wikipedia.org/wiki/St._Louis,_Missouri
// https://en.wikipedia.org/wiki/St._Petersburg,_Florida
// https://en.wikipedia.org/wiki/State_College,_Pennsylvania
// https://en.wikipedia.org/wiki/Steamboat_Springs,_Colorado
// https://en.wikipedia.org/wiki/Sun_Valley,_Idaho
// https://en.wikipedia.org/wiki/Tallahassee,_Florida
// https://en.wikipedia.org/wiki/Tampa,_Florida
// https://en.wikipedia.org/wiki/Texarkana,_Arkansas
// https://en.wikipedia.org/wiki/Thief_River_Falls,_Minnesota
// https://en.wikipedia.org/wiki/Toksook_Bay,_Alaska
// https://en.wikipedia.org/wiki/Toledo,_Ohio
// https://en.wikipedia.org/wiki/Topeka,_Kansas
// https://en.wikipedia.org/wiki/Traverse_City,_Michigan
// https://en.wikipedia.org/wiki/Trenton,_New_Jersey
// https://en.wikipedia.org/wiki/Tucson,_Arizona
// https://en.wikipedia.org/wiki/Tulsa,_Oklahoma
// https://en.wikipedia.org/wiki/Tupelo,_Mississippi
// https://en.wikipedia.org/wiki/Twin_Falls,_Idaho
// https://en.wikipedia.org/wiki/Tyler,_Texas
// https://en.wikipedia.org/wiki/Unalakleet,_Alaska
// https://en.wikipedia.org/wiki/Vail,_Colorado
// https://en.wikipedia.org/wiki/Valdez,_Alaska
// https://en.wikipedia.org/wiki/Valdosta,_Georgia
// https://en.wikipedia.org/wiki/Victoria,_Texas
// https://en.wikipedia.org/wiki/Visalia,_California
// https://en.wikipedia.org/wiki/Waco,_Texas
// https://en.wikipedia.org/wiki/Walla_Walla,_Washington
// https://en.wikipedia.org/wiki/Waterloo,_Iowa
// https://en.wikipedia.org/wiki/Watertown,_New_York
// https://en.wikipedia.org/wiki/Watertown,_South_Dakota
// https://en.wikipedia.org/wiki/Wausau,_Wisconsin
// https://en.wikipedia.org/wiki/Wenatchee,_Washington
// https://en.wikipedia.org/wiki/West_Palm_Beach,_Florida
// https://en.wikipedia.org/wiki/West_Yellowstone,_Montana
// https://en.wikipedia.org/wiki/White_Plains,_New_York
// https://en.wikipedia.org/wiki/Wichita_Falls,_Texas
// https://en.wikipedia.org/wiki/Wichita,_Kansas
// https://en.wikipedia.org/wiki/Wilkes-Barre,_Pennsylvania
// https://en.wikipedia.org/wiki/Williamsport,_Pennsylvania
// https://en.wikipedia.org/wiki/Williston,_North_Dakota
// https://en.wikipedia.org/wiki/Wilmington,_Delaware
// https://en.wikipedia.org/wiki/Wilmington,_North_Carolina
// https://en.wikipedia.org/wiki/Wolf_Point,_Montana
// https://en.wikipedia.org/wiki/Worland,_Wyoming
// https://en.wikipedia.org/wiki/Wrangell,_Alaska
// https://en.wikipedia.org/wiki/Yakima,_Washington
// https://en.wikipedia.org/wiki/Yakutat,_Alaska
// https://en.wikipedia.org/wiki/Yuma,_Arizona
// https://en.wikipedia.org/wiki/Los_Angeles,_California







// var fodorsUrlArray = [];
// var fodorsUrl = 'http://www.fodors.com/world/north-america/usa/';

// for (var i = 0; i < americanCuratedListArray.length; i++) {
//   var query = '';
//   query = americanCuratedListArray[i].cityName.split(', ').reverse().join('/').toLowerCase().replace(/\s/g, '-').replace(/\./g, '').replace(/'/g, '');
//   fodorsUrlArray.push(fodorsUrl.concat(query));
// }

// console.log(fodorsUrlArray);

// http://www.fodors.com/world/north-america/usa/south-dakota/aberdeen
// http://www.fodors.com/world/north-america/usa/texas/abilene
// http://www.fodors.com/world/north-america/usa/ohio/akron
// http://www.fodors.com/world/north-america/usa/colorado/alamosa
// http://www.fodors.com/world/north-america/usa/georgia/albany
// http://www.fodors.com/world/north-america/usa/new-york/albany
// http://www.fodors.com/world/north-america/usa/new-mexico/albuquerque
// http://www.fodors.com/world/north-america/usa/louisiana/alexandria
// http://www.fodors.com/world/north-america/usa/pennsylvania/allentown
// http://www.fodors.com/world/north-america/usa/nebraska/alliance
// http://www.fodors.com/world/north-america/usa/michigan/alpena
// http://www.fodors.com/world/north-america/usa/pennsylvania/altoona
// http://www.fodors.com/world/north-america/usa/texas/amarillo
// http://www.fodors.com/world/north-america/usa/alaska/anchorage
// http://www.fodors.com/world/north-america/usa/wisconsin/appleton
// http://www.fodors.com/world/north-america/usa/north-carolina/asheville
// http://www.fodors.com/world/north-america/usa/colorado/aspen
// http://www.fodors.com/world/north-america/usa/georgia/athens
// http://www.fodors.com/world/north-america/usa/georgia/atlanta
// http://www.fodors.com/world/north-america/usa/new-jersey/atlantic-city
// http://www.fodors.com/world/north-america/usa/georgia/augusta
// http://www.fodors.com/world/north-america/usa/maine/augusta
// http://www.fodors.com/world/north-america/usa/texas/austin
// http://www.fodors.com/world/north-america/usa/california/bakersfield
// http://www.fodors.com/world/north-america/usa/maryland/baltimore
// http://www.fodors.com/world/north-america/usa/maine/bangor
// http://www.fodors.com/world/north-america/usa/maine/bar-harbor
// http://www.fodors.com/world/north-america/usa/alaska/barrow
// http://www.fodors.com/world/north-america/usa/louisiana/baton-rouge
// http://www.fodors.com/world/north-america/usa/texas/beaumont
// http://www.fodors.com/world/north-america/usa/west-virginia/beckley
// http://www.fodors.com/world/north-america/usa/massachusetts/bedford
// http://www.fodors.com/world/north-america/usa/washington/bellingham
// http://www.fodors.com/world/north-america/usa/minnesota/bemidji
// http://www.fodors.com/world/north-america/usa/alaska/bethel
// http://www.fodors.com/world/north-america/usa/alaska/bettles
// http://www.fodors.com/world/north-america/usa/montana/billings
// http://www.fodors.com/world/north-america/usa/new-york/binghamton
// http://www.fodors.com/world/north-america/usa/alabama/birmingham
// http://www.fodors.com/world/north-america/usa/north-dakota/bismarck
// http://www.fodors.com/world/north-america/usa/illinois/bloomington
// http://www.fodors.com/world/north-america/usa/indiana/bloomington
// http://www.fodors.com/world/north-america/usa/west-virginia/bluefield
// http://www.fodors.com/world/north-america/usa/idaho/boise
// http://www.fodors.com/world/north-america/usa/massachusetts/boston
// http://www.fodors.com/world/north-america/usa/montana/bozeman
// http://www.fodors.com/world/north-america/usa/south-dakota/brookings
// http://www.fodors.com/world/north-america/usa/texas/brownsville
// http://www.fodors.com/world/north-america/usa/georgia/brunswick
// http://www.fodors.com/world/north-america/usa/new-york/buffalo
// http://www.fodors.com/world/north-america/usa/california/burbank
// http://www.fodors.com/world/north-america/usa/iowa/burlington
// http://www.fodors.com/world/north-america/usa/massachusetts/burlington
// http://www.fodors.com/world/north-america/usa/vermont/burlington
// http://www.fodors.com/world/north-america/usa/montana/butte
// http://www.fodors.com/world/north-america/usa/missouri/cape-girardeau
// http://www.fodors.com/world/north-america/usa/california/carlsbad
// http://www.fodors.com/world/north-america/usa/new-mexico/carlsbad
// http://www.fodors.com/world/north-america/usa/wyoming/casper
// http://www.fodors.com/world/north-america/usa/iowa/cedar-rapids
// http://www.fodors.com/world/north-america/usa/illinois/champaign
// http://www.fodors.com/world/north-america/usa/south-carolina/charleston
// http://www.fodors.com/world/north-america/usa/west-virginia/charleston
// http://www.fodors.com/world/north-america/usa/north-carolina/charlotte
// http://www.fodors.com/world/north-america/usa/virginia/charlottesville
// http://www.fodors.com/world/north-america/usa/tennessee/chattanooga
// http://www.fodors.com/world/north-america/usa/wyoming/cheyenne
// http://www.fodors.com/world/north-america/usa/illinois/chicago
// http://www.fodors.com/world/north-america/usa/illinois/chicago
// http://www.fodors.com/world/north-america/usa/illinois/chicago
// http://www.fodors.com/world/north-america/usa/illinois/chicago
// http://www.fodors.com/world/north-america/usa/california/chico
// http://www.fodors.com/world/north-america/usa/ohio/cincinnati
// http://www.fodors.com/world/north-america/usa/west-virginia/clarksburg
// http://www.fodors.com/world/north-america/usa/ohio/cleveland
// http://www.fodors.com/world/north-america/usa/new-mexico/clovis
// http://www.fodors.com/world/north-america/usa/wyoming/cody
// http://www.fodors.com/world/north-america/usa/texas/college-station
// http://www.fodors.com/world/north-america/usa/colorado/colorado-springs
// http://www.fodors.com/world/north-america/usa/missouri/columbia
// http://www.fodors.com/world/north-america/usa/south-carolina/columbia
// http://www.fodors.com/world/north-america/usa/georgia/columbus
// http://www.fodors.com/world/north-america/usa/indiana/columbus
// http://www.fodors.com/world/north-america/usa/mississippi/columbus
// http://www.fodors.com/world/north-america/usa/nebraska/columbus
// http://www.fodors.com/world/north-america/usa/ohio/columbus
// http://www.fodors.com/world/north-america/usa/alaska/cordova
// http://www.fodors.com/world/north-america/usa/texas/corpus-christi
// http://www.fodors.com/world/north-america/usa/texas/dallas
// http://www.fodors.com/world/north-america/usa/texas/dallas
// http://www.fodors.com/world/north-america/usa/ohio/dayton
// http://www.fodors.com/world/north-america/usa/florida/daytona-beach
// http://www.fodors.com/world/north-america/usa/illinois/decatur
// http://www.fodors.com/world/north-america/usa/colorado/denver
// http://www.fodors.com/world/north-america/usa/iowa/des-moines
// http://www.fodors.com/world/north-america/usa/michigan/detroit
// http://www.fodors.com/world/north-america/usa/michigan/detroit
// http://www.fodors.com/world/north-america/usa/north-dakota/devils-lake
// http://www.fodors.com/world/north-america/usa/north-dakota/dickinson
// http://www.fodors.com/world/north-america/usa/alaska/dillingham
// http://www.fodors.com/world/north-america/usa/kansas/dodge-city
// http://www.fodors.com/world/north-america/usa/alabama/dothan
// http://www.fodors.com/world/north-america/usa/pennsylvania/du-bois
// http://www.fodors.com/world/north-america/usa/iowa/dubuque
// http://www.fodors.com/world/north-america/usa/minnesota/duluth
// http://www.fodors.com/world/north-america/usa/colorado/durango
// http://www.fodors.com/world/north-america/usa/alaska/un-island/dutch-harbor
// http://www.fodors.com/world/north-america/usa/wisconsin/eau-claire
// http://www.fodors.com/world/north-america/usa/alaska/eek
// http://www.fodors.com/world/north-america/usa/california/el-centro
// http://www.fodors.com/world/north-america/usa/arkansas/el-dorado
// http://www.fodors.com/world/north-america/usa/texas/el-paso
// http://www.fodors.com/world/north-america/usa/nevada/elko
// http://www.fodors.com/world/north-america/usa/new-york/elmira
// http://www.fodors.com/world/north-america/usa/oklahoma/enid
// http://www.fodors.com/world/north-america/usa/pennsylvania/erie
// http://www.fodors.com/world/north-america/usa/michigan/escanaba
// http://www.fodors.com/world/north-america/usa/oregon/eugene
// http://www.fodors.com/world/north-america/usa/california/eureka
// http://www.fodors.com/world/north-america/usa/indiana/evansville
// http://www.fodors.com/world/north-america/usa/alaska/fairbanks
// http://www.fodors.com/world/north-america/usa/north-dakota/fargo
// http://www.fodors.com/world/north-america/usa/new-mexico/farmington
// http://www.fodors.com/world/north-america/usa/arkansas/fayetteville
// http://www.fodors.com/world/north-america/usa/north-carolina/fayetteville
// http://www.fodors.com/world/north-america/usa/arizona/flagstaff
// http://www.fodors.com/world/north-america/usa/michigan/flint
// http://www.fodors.com/world/north-america/usa/south-carolina/florence
// http://www.fodors.com/world/north-america/usa/iowa/fort-dodge
// http://www.fodors.com/world/north-america/usa/florida/fort-lauderdale
// http://www.fodors.com/world/north-america/usa/missouri/fort-leonard-wood
// http://www.fodors.com/world/north-america/usa/florida/fort-myers
// http://www.fodors.com/world/north-america/usa/arkansas/fort-smith
// http://www.fodors.com/world/north-america/usa/florida/fort-walton-beach
// http://www.fodors.com/world/north-america/usa/indiana/fort-wayne
// http://www.fodors.com/world/north-america/usa/alaska/fort-yukon
// http://www.fodors.com/world/north-america/usa/california/fresno
// http://www.fodors.com/world/north-america/usa/florida/gainesville
// http://www.fodors.com/world/north-america/usa/kansas/garden-city
// http://www.fodors.com/world/north-america/usa/wyoming/gillette
// http://www.fodors.com/world/north-america/usa/montana/glendive
// http://www.fodors.com/world/north-america/usa/north-dakota/grand-forks
// http://www.fodors.com/world/north-america/usa/nebraska/grand-island
// http://www.fodors.com/world/north-america/usa/colorado/grand-junction
// http://www.fodors.com/world/north-america/usa/michigan/grand-rapids
// http://www.fodors.com/world/north-america/usa/kansas/great-bend
// http://www.fodors.com/world/north-america/usa/montana/great-falls
// http://www.fodors.com/world/north-america/usa/wisconsin/green-bay
// http://www.fodors.com/world/north-america/usa/west-virginia/greenbrier
// http://www.fodors.com/world/north-america/usa/north-carolina/greensboro
// http://www.fodors.com/world/north-america/usa/mississippi/greenville
// http://www.fodors.com/world/north-america/usa/north-carolina/greenville
// http://www.fodors.com/world/north-america/usa/south-carolina/greenville
// http://www.fodors.com/world/north-america/usa/mississippi/gulfport
// http://www.fodors.com/world/north-america/usa/colorado/gunnison
// http://www.fodors.com/world/north-america/usa/maryland/hagerstown
// http://www.fodors.com/world/north-america/usa/hawaii/maui/hana
// http://www.fodors.com/world/north-america/usa/michigan/hancock
// http://www.fodors.com/world/north-america/usa/texas/harlingen
// http://www.fodors.com/world/north-america/usa/pennsylvania/harrisburg
// http://www.fodors.com/world/north-america/usa/arkansas/harrison
// http://www.fodors.com/world/north-america/usa/connecticut/hartford
// http://www.fodors.com/world/north-america/usa/montana/havre
// http://www.fodors.com/world/north-america/usa/kansas/hays
// http://www.fodors.com/world/north-america/usa/montana/helena
// http://www.fodors.com/world/north-america/usa/minnesota/hibbing
// http://www.fodors.com/world/north-america/usa/south-carolina/hilton-head-island
// http://www.fodors.com/world/north-america/usa/new-mexico/hobbs
// http://www.fodors.com/world/north-america/usa/alaska/homer
// http://www.fodors.com/world/north-america/usa/hawaii/oahu/honolulu
// http://www.fodors.com/world/north-america/usa/hawaii/molokai/hoolehua
// http://www.fodors.com/world/north-america/usa/texas/houston
// http://www.fodors.com/world/north-america/usa/texas/houston
// http://www.fodors.com/world/north-america/usa/texas/houston
// http://www.fodors.com/world/north-america/usa/texas/houston
// http://www.fodors.com/world/north-america/usa/west-virginia/huntington
// http://www.fodors.com/world/north-america/usa/alabama/huntsville
// http://www.fodors.com/world/north-america/usa/south-dakota/huron
// http://www.fodors.com/world/north-america/usa/massachusetts/hyannis
// http://www.fodors.com/world/north-america/usa/idaho/idaho-falls
// http://www.fodors.com/world/north-america/usa/indiana/indianapolis
// http://www.fodors.com/world/north-america/usa/minnesota/international-falls
// http://www.fodors.com/world/north-america/usa/california/inyokern
// http://www.fodors.com/world/north-america/usa/michigan/iron-mountain
// http://www.fodors.com/world/north-america/usa/michigan/ironwood
// http://www.fodors.com/world/north-america/usa/new-york/islip
// http://www.fodors.com/world/north-america/usa/new-york/ithaca
// http://www.fodors.com/world/north-america/usa/wyoming/jackson-hole
// http://www.fodors.com/world/north-america/usa/mississippi/jackson
// http://www.fodors.com/world/north-america/usa/tennessee/jackson
// http://www.fodors.com/world/north-america/usa/florida/jacksonville
// http://www.fodors.com/world/north-america/usa/north-carolina/jacksonville
// http://www.fodors.com/world/north-america/usa/north-dakota/jamestown
// http://www.fodors.com/world/north-america/usa/new-york/jamestown
// http://www.fodors.com/world/north-america/usa/pennsylvania/johnstown
// http://www.fodors.com/world/north-america/usa/missouri/joplin
// http://www.fodors.com/world/north-america/usa/alaska/juneau
// http://www.fodors.com/world/north-america/usa/hawaii/maui/kahului
// http://www.fodors.com/world/north-america/usa/michigan/kalamazoo
// http://www.fodors.com/world/north-america/usa/hawaii/molokai/kalaupapa
// http://www.fodors.com/world/north-america/usa/montana/kalispell
// http://www.fodors.com/world/north-america/usa/missouri/kansas-city
// http://www.fodors.com/world/north-america/usa/hawaii/maui/kapalua
// http://www.fodors.com/world/north-america/usa/nebraska/kearney
// http://www.fodors.com/world/north-america/usa/alaska/kenai
// http://www.fodors.com/world/north-america/usa/florida/key-west
// http://www.fodors.com/world/north-america/usa/texas/killeen
// http://www.fodors.com/world/north-america/usa/alaska/king-salmon
// http://www.fodors.com/world/north-america/usa/arizona/kingman
// http://www.fodors.com/world/north-america/usa/missouri/kirksville
// http://www.fodors.com/world/north-america/usa/oregon/klamath-falls
// http://www.fodors.com/world/north-america/usa/tennessee/knoxville
// http://www.fodors.com/world/north-america/usa/alaska/kodiak
// http://www.fodors.com/world/north-america/usa/wisconsin/la-crosse
// http://www.fodors.com/world/north-america/usa/louisiana/lafayette
// http://www.fodors.com/world/north-america/usa/louisiana/lake-charles
// http://www.fodors.com/world/north-america/usa/hawaii/lanai/lanai-city
// http://www.fodors.com/world/north-america/usa/pennsylvania/lancaster
// http://www.fodors.com/world/north-america/usa/michigan/lansing
// http://www.fodors.com/world/north-america/usa/wyoming/laramie
// http://www.fodors.com/world/north-america/usa/texas/laredo
// http://www.fodors.com/world/north-america/usa/new-mexico/las-cruces
// http://www.fodors.com/world/north-america/usa/nevada/las-vegas
// http://www.fodors.com/world/north-america/usa/pennsylvania/latrobe
// http://www.fodors.com/world/north-america/usa/mississippi/laurel
// http://www.fodors.com/world/north-america/usa/oklahoma/lawton
// http://www.fodors.com/world/north-america/usa/idaho/lewiston
// http://www.fodors.com/world/north-america/usa/maine/lewiston
// http://www.fodors.com/world/north-america/usa/montana/lewistown
// http://www.fodors.com/world/north-america/usa/kentucky/lexington
// http://www.fodors.com/world/north-america/usa/kansas/liberal
// http://www.fodors.com/world/north-america/usa/hawaii/kauai/lihue
// http://www.fodors.com/world/north-america/usa/nebraska/lincoln
// http://www.fodors.com/world/north-america/usa/arkansas/little-rock
// http://www.fodors.com/world/north-america/usa/california/long-beach
// http://www.fodors.com/world/north-america/usa/texas/longview
// http://www.fodors.com/world/north-america/usa/california/los-angeles
// http://www.fodors.com/world/north-america/usa/texas/lubbock
// http://www.fodors.com/world/north-america/usa/virginia/lynchburg
// http://www.fodors.com/world/north-america/usa/georgia/macon
// http://www.fodors.com/world/north-america/usa/wisconsin/madison
// http://www.fodors.com/world/north-america/usa/new-hampshire/manchester
// http://www.fodors.com/world/north-america/usa/kansas/manhattan
// http://www.fodors.com/world/north-america/usa/michigan/manistee
// http://www.fodors.com/world/north-america/usa/illinois/marion
// http://www.fodors.com/world/north-america/usa/michigan/marquette
// http://www.fodors.com/world/north-america/usa/massachusetts/marthas-vineyard
// http://www.fodors.com/world/north-america/usa/iowa/mason-city
// http://www.fodors.com/world/north-america/usa/new-york/massena
// http://www.fodors.com/world/north-america/usa/texas/mcallen
// http://www.fodors.com/world/north-america/usa/nebraska/mccook
// http://www.fodors.com/world/north-america/usa/oregon/medford
// http://www.fodors.com/world/north-america/usa/florida/melbourne
// http://www.fodors.com/world/north-america/usa/tennessee/memphis
// http://www.fodors.com/world/north-america/usa/mississippi/meridian
// http://www.fodors.com/world/north-america/usa/florida/miami
// http://www.fodors.com/world/north-america/usa/texas/midland
// http://www.fodors.com/world/north-america/usa/montana/miles-city
// http://www.fodors.com/world/north-america/usa/wisconsin/milwaukee
// http://www.fodors.com/world/north-america/usa/minnesota/minneapolis
// http://www.fodors.com/world/north-america/usa/north-dakota/minot
// http://www.fodors.com/world/north-america/usa/montana/missoula
// http://www.fodors.com/world/north-america/usa/alabama/mobile
// http://www.fodors.com/world/north-america/usa/california/modesto
// http://www.fodors.com/world/north-america/usa/illinois/moline
// http://www.fodors.com/world/north-america/usa/louisiana/monroe
// http://www.fodors.com/world/north-america/usa/california/monterey
// http://www.fodors.com/world/north-america/usa/alabama/montgomery
// http://www.fodors.com/world/north-america/usa/colorado/montrose
// http://www.fodors.com/world/north-america/usa/west-virginia/morgantown
// http://www.fodors.com/world/north-america/usa/washington/moses-lake
// http://www.fodors.com/world/north-america/usa/alabama/muscle-shoals
// http://www.fodors.com/world/north-america/usa/michigan/muskegon
// http://www.fodors.com/world/north-america/usa/california/monterey
// http://www.fodors.com/world/north-america/usa/massachusetts/nantucket
// http://www.fodors.com/world/north-america/usa/tennessee/nashville
// http://www.fodors.com/world/north-america/usa/north-carolina/new-bern
// http://www.fodors.com/world/north-america/usa/connecticut/new-haven
// http://www.fodors.com/world/north-america/usa/louisiana/new-orleans
// http://www.fodors.com/world/north-america/usa/new-york/new-york
// http://www.fodors.com/world/north-america/usa/new-york/new-york
// http://www.fodors.com/world/north-america/usa/new-york/new-york
// http://www.fodors.com/world/north-america/usa/new-jersey/newark
// http://www.fodors.com/world/north-america/usa/new-york/newburgh
// http://www.fodors.com/world/north-america/usa/virginia/newport-news
// http://www.fodors.com/world/north-america/usa/alaska/nome
// http://www.fodors.com/world/north-america/usa/virginia/norfolk
// http://www.fodors.com/world/north-america/usa/oregon/north-bend
// http://www.fodors.com/world/north-america/usa/nebraska/north-platte
// http://www.fodors.com/world/north-america/usa/california/oakland
// http://www.fodors.com/world/north-america/usa/new-york/ogdensburg
// http://www.fodors.com/world/north-america/usa/oklahoma/oklahoma-city
// http://www.fodors.com/world/north-america/usa/nebraska/omaha
// http://www.fodors.com/world/north-america/usa/california/ontario
// http://www.fodors.com/world/north-america/usa/california/orange-county
// http://www.fodors.com/world/north-america/usa/florida/orlando
// http://www.fodors.com/world/north-america/usa/wisconsin/oshkosh
// http://www.fodors.com/world/north-america/usa/kentucky/owensboro
// http://www.fodors.com/world/north-america/usa/california/oxnard
// http://www.fodors.com/world/north-america/usa/kentucky/paducah
// http://www.fodors.com/world/north-america/usa/arizona/page
// http://www.fodors.com/world/north-america/usa/california/palm-springs
// http://www.fodors.com/world/north-america/usa/florida/panama-city
// http://www.fodors.com/world/north-america/usa/west-virginia/parkersburg
// http://www.fodors.com/world/north-america/usa/washington/pasco
// http://www.fodors.com/world/north-america/usa/michigan/pellston
// http://www.fodors.com/world/north-america/usa/oregon/pendleton
// http://www.fodors.com/world/north-america/usa/florida/pensacola
// http://www.fodors.com/world/north-america/usa/illinois/peoria
// http://www.fodors.com/world/north-america/usa/pennsylvania/philadelphia
// http://www.fodors.com/world/north-america/usa/arizona/phoenix
// http://www.fodors.com/world/north-america/usa/south-dakota/pierre
// http://www.fodors.com/world/north-america/usa/north-carolina/pinehurst
// http://www.fodors.com/world/north-america/usa/pennsylvania/pittsburgh
// http://www.fodors.com/world/north-america/usa/idaho/pocatello
// http://www.fodors.com/world/north-america/usa/oklahoma/ponca-city
// http://www.fodors.com/world/north-america/usa/maine/portland
// http://www.fodors.com/world/north-america/usa/oregon/portland
// http://www.fodors.com/world/north-america/usa/new-hampshire/portsmouth
// http://www.fodors.com/world/north-america/usa/arizona/prescott
// http://www.fodors.com/world/north-america/usa/maine/presque-isle
// http://www.fodors.com/world/north-america/usa/rhode-island/providence
// http://www.fodors.com/world/north-america/usa/massachusetts/provincetown
// http://www.fodors.com/world/north-america/usa/colorado/pueblo
// http://www.fodors.com/world/north-america/usa/washington/pullman
// http://www.fodors.com/world/north-america/usa/illinois/quincy
// http://www.fodors.com/world/north-america/usa/north-carolina/raleigh
// http://www.fodors.com/world/north-america/usa/south-dakota/rapid-city
// http://www.fodors.com/world/north-america/usa/california/redding
// http://www.fodors.com/world/north-america/usa/oregon/redmond
// http://www.fodors.com/world/north-america/usa/nevada/reno
// http://www.fodors.com/world/north-america/usa/wisconsin/rhinelander
// http://www.fodors.com/world/north-america/usa/virginia/richmond
// http://www.fodors.com/world/north-america/usa/wyoming/riverton
// http://www.fodors.com/world/north-america/usa/virginia/roanoke
// http://www.fodors.com/world/north-america/usa/minnesota/rochester
// http://www.fodors.com/world/north-america/usa/new-york/rochester
// http://www.fodors.com/world/north-america/usa/wyoming/rock-springs
// http://www.fodors.com/world/north-america/usa/illinois/rockford
// http://www.fodors.com/world/north-america/usa/maine/rockland
// http://www.fodors.com/world/north-america/usa/new-mexico/roswell
// http://www.fodors.com/world/north-america/usa/vermont/rutland
// http://www.fodors.com/world/north-america/usa/california/sacramento
// http://www.fodors.com/world/north-america/usa/michigan/saginaw
// http://www.fodors.com/world/north-america/usa/kansas/salina
// http://www.fodors.com/world/north-america/usa/utah/salt-lake-city
// http://www.fodors.com/world/north-america/usa/texas/san-angelo
// http://www.fodors.com/world/north-america/usa/texas/san-antonio
// http://www.fodors.com/world/north-america/usa/california/san-diego
// http://www.fodors.com/world/north-america/usa/california/san-francisco
// http://www.fodors.com/world/north-america/usa/california/san-francisco
// http://www.fodors.com/world/north-america/usa/california/san-jose
// http://www.fodors.com/world/north-america/usa/california/san-luis-obispo
// http://www.fodors.com/world/north-america/usa/alaska/sand-point
// http://www.fodors.com/world/north-america/usa/california/santa-barbara
// http://www.fodors.com/world/north-america/usa/new-mexico/santa-fe
// http://www.fodors.com/world/north-america/usa/california/santa-maria
// http://www.fodors.com/world/north-america/usa/california/santa-rosa
// http://www.fodors.com/world/north-america/usa/new-york/saranac-lake
// http://www.fodors.com/world/north-america/usa/florida/sarasota
// http://www.fodors.com/world/north-america/usa/michigan/sault-ste-marie
// http://www.fodors.com/world/north-america/usa/georgia/savannah
// http://www.fodors.com/world/north-america/usa/nebraska/scottsbluff
// http://www.fodors.com/world/north-america/usa/washington/seattle
// http://www.fodors.com/world/north-america/usa/virginia/shenandoah-valley-airport
// http://www.fodors.com/world/north-america/usa/wyoming/sheridan
// http://www.fodors.com/world/north-america/usa/louisiana/shreveport
// http://www.fodors.com/world/north-america/usa/montana/sidney
// http://www.fodors.com/world/north-america/usa/new-mexico/silver-city
// http://www.fodors.com/world/north-america/usa/iowa/sioux-city
// http://www.fodors.com/world/north-america/usa/south-dakota/sioux-falls
// http://www.fodors.com/world/north-america/usa/alaska/sitka
// http://www.fodors.com/world/north-america/usa/alaska/skagway
// http://www.fodors.com/world/north-america/usa/indiana/south-bend
// http://www.fodors.com/world/north-america/usa/washington/spokane
// http://www.fodors.com/world/north-america/usa/illinois/springfield
// http://www.fodors.com/world/north-america/usa/massachusetts/springfield
// http://www.fodors.com/world/north-america/usa/missouri/springfield
// http://www.fodors.com/world/north-america/usa/vermont/springfield
// http://www.fodors.com/world/north-america/usa/minnesota/st-cloud
// http://www.fodors.com/world/north-america/usa/utah/st-george
// http://www.fodors.com/world/north-america/usa/missouri/st-louis
// http://www.fodors.com/world/north-america/usa/florida/st-petersburg
// http://www.fodors.com/world/north-america/usa/pennsylvania/state-college
// http://www.fodors.com/world/north-america/usa/colorado/steamboat-springs
// http://www.fodors.com/world/north-america/usa/idaho/sun-valley
// http://www.fodors.com/world/north-america/usa/florida/tallahassee
// http://www.fodors.com/world/north-america/usa/florida/tampa
// http://www.fodors.com/world/north-america/usa/arkansas/texarkana
// http://www.fodors.com/world/north-america/usa/minnesota/thief-river-falls
// http://www.fodors.com/world/north-america/usa/alaska/toksook-bay
// http://www.fodors.com/world/north-america/usa/ohio/toledo
// http://www.fodors.com/world/north-america/usa/kansas/topeka
// http://www.fodors.com/world/north-america/usa/michigan/traverse-city
// http://www.fodors.com/world/north-america/usa/new-jersey/trenton
// http://www.fodors.com/world/north-america/usa/arizona/tucson
// http://www.fodors.com/world/north-america/usa/oklahoma/tulsa
// http://www.fodors.com/world/north-america/usa/mississippi/tupelo
// http://www.fodors.com/world/north-america/usa/idaho/twin-falls
// http://www.fodors.com/world/north-america/usa/texas/tyler
// http://www.fodors.com/world/north-america/usa/alaska/unalakleet
// http://www.fodors.com/world/north-america/usa/colorado/vail
// http://www.fodors.com/world/north-america/usa/alaska/valdez
// http://www.fodors.com/world/north-america/usa/georgia/valdosta
// http://www.fodors.com/world/north-america/usa/texas/victoria
// http://www.fodors.com/world/north-america/usa/california/visalia
// http://www.fodors.com/world/north-america/usa/texas/waco
// http://www.fodors.com/world/north-america/usa/washington/walla-walla
// http://www.fodors.com/world/north-america/usa/iowa/waterloo
// http://www.fodors.com/world/north-america/usa/new-york/watertown
// http://www.fodors.com/world/north-america/usa/south-dakota/watertown
// http://www.fodors.com/world/north-america/usa/wisconsin/wausau
// http://www.fodors.com/world/north-america/usa/washington/wenatchee
// http://www.fodors.com/world/north-america/usa/florida/west-palm-beach
// http://www.fodors.com/world/north-america/usa/montana/west-yellowstone
// http://www.fodors.com/world/north-america/usa/new-york/white-plains
// http://www.fodors.com/world/north-america/usa/texas/wichita-falls
// http://www.fodors.com/world/north-america/usa/kansas/wichita
// http://www.fodors.com/world/north-america/usa/pennsylvania/wilkes-barre
// http://www.fodors.com/world/north-america/usa/pennsylvania/williamsport
// http://www.fodors.com/world/north-america/usa/north-dakota/williston
// http://www.fodors.com/world/north-america/usa/delaware/wilmington
// http://www.fodors.com/world/north-america/usa/north-carolina/wilmington
// http://www.fodors.com/world/north-america/usa/montana/wolf-point
// http://www.fodors.com/world/north-america/usa/wyoming/worland
// http://www.fodors.com/world/north-america/usa/alaska/wrangell
// http://www.fodors.com/world/north-america/usa/washington/yakima
// http://www.fodors.com/world/north-america/usa/alaska/yakutat
// http://www.fodors.com/world/north-america/usa/arizona/yuma
// http://www.fodors.com/world/north-america/usa/california/los-angeles





// console.log(curatedListArray);

// var filteredArray = curatedListArray.map(function(city) {
//   var object = {};
//   object.airportCode = city;
//   object.cityName = "";
//   for(var i = 0; i < fullListArray.length; i++){
//     if(fullListArray[i]["AAE"] === city)
//       object.cityName = fullListArray[i]["Annaba"];
//   }
//   return object;
// });
// console.log(filteredArray);

// cityAbbreviations = [
//   {'name':'Alabama', 'abbrev':'AL'},
//   {'name':'Alaska', 'abbrev':'AK'},
//   {'name':'Arizona', 'abbrev':'AZ'},
//   {'name':'Arkansas', 'abbrev':'AR'},
//   {'name':'California', 'abbrev':'CA'},
//   {'name':'Colorado', 'abbrev':'CO'},
//   {'name':'Connecticut', 'abbrev':'CT'},
//   {'name':'Delaware', 'abbrev':'DE'},
//   {'name':'Florida', 'abbrev':'FL'},
//   {'name':'Georgia', 'abbrev':'GA'},
//   {'name':'Hawaii', 'abbrev':'HI'},
//   {'name':'Idaho', 'abbrev':'ID'},
//   {'name':'Illinois', 'abbrev':'IL'},
//   {'name':'Indiana', 'abbrev':'IN'},
//   {'name':'Iowa', 'abbrev':'IA'},
//   {'name':'Kansas', 'abbrev':'KS'},
//   {'name':'Kentucky', 'abbrev':'KY'},
//   {'name':'Louisiana', 'abbrev':'LA'},
//   {'name':'Maine', 'abbrev':'ME'},
//   {'name':'Maryland', 'abbrev':'MD'},
//   {'name':'Massachusetts', 'abbrev':'MA'},
//   {'name':'Michigan', 'abbrev':'MI'},
//   {'name':'Minnesota', 'abbrev':'MN'},
//   {'name':'Mississippi', 'abbrev':'MS'},
//   {'name':'Missouri', 'abbrev':'MO'},
//   {'name':'Montana', 'abbrev':'MT'},
//   {'name':'Nebraska', 'abbrev':'NE'},
//   {'name':'Nevada', 'abbrev':'NV'},
//   {'name':'New Hampshire', 'abbrev':'NH'},
//   {'name':'New Jersey', 'abbrev':'NJ'},
//   {'name':'New Mexico', 'abbrev':'NM'},
//   {'name':'New York', 'abbrev':'NY'},
//   {'name':'North Carolina', 'abbrev':'NC'},
//   {'name':'North Dakota', 'abbrev':'ND'},
//   {'name':'Ohio', 'abbrev':'OH'},
//   {'name':'Oklahoma', 'abbrev':'OK'},
//   {'name':'Oregon', 'abbrev':'OR'},
//   {'name':'Pennsylvania', 'abbrev':'PA'},
//   {'name':'Rhode Island', 'abbrev':'RI'},
//   {'name':'South Carolina', 'abbrev':'SC'},
//   {'name':'South Dakota', 'abbrev':'SD'},
//   {'name':'Tennessee', 'abbrev':'TN'},
//   {'name':'Texas', 'abbrev':'TX'},
//   {'name':'Utah', 'abbrev':'UT'},
//   {'name':'Vermont', 'abbrev':'VT'},
//   {'name':'Virginia', 'abbrev':'VA'},
//   {'name':'Washington', 'abbrev':'WA'},
//   {'name':'West Virginia', 'abbrev':'WV'},
//   {'name':'Wisconsin', 'abbrev':'WI'},
//   {'name':'Wyoming', 'abbrev':'WY'}
// ]



// var americanCuratedListArray = [];
// for (var i = 0; i < curatedListArray.length; i++) {
//   var currentStateAbbrev = curatedListArray[i].cityName.slice(-2);
//   var foundMatch = false;
//   for (var j = 0; j < cityAbbreviations.length; j++) {
//     if (currentStateAbbrev == cityAbbreviations[j].abbrev) {
//       foundMatch = true;
//       // console.log(foundMatch);
//       curatedListArray[i].cityName = curatedListArray[i].cityName.replace(currentStateAbbrev, cityAbbreviations[j].name);
//       // console.log(curatedListArray[i]);
//     }
//   }
//   if (foundMatch) {
//     americanCuratedListArray.push(curatedListArray[i]);
//   }
// }

// console.log(americanCuratedListArray);


