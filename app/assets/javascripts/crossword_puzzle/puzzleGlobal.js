// HTML contents of cells and rows
var cell = '<div class="cellContainer"><input class="cell" type="text" cellnumber=-1 acrossclue=-1 downclue=-1 maxlength="1"></input><div class="cellNum"></div></div>';
var row = '<div class="row"></div>';

// The Crossword Class
function Crossword(voids, letters, clues, title, creator, year){
	this.voids = voids;
	this.letters = letters;
	this.clues=clues;
	this.title = title;
	this.creator = creator;
	this.year = year;
}

// Essentially static variables for this iteration of the site
var lockeVoids1 = [5, 6, 10, 14, 20, 25, 35, 40, 60, 61, 62, 69, 73, 74, 78, 79, 83, 89, 95, 96, 100, 101, 112, 123, 124, 128, 129, 135, 141, 145, 146, 150, 151, 155, 162, 163, 164, 184, 189, 199, 204, 210, 214, 218, 219];
var lockeVoids2 = [4, 8, 9, 19, 24, 34, 39, 60, 61, 65, 68, 73, 74, 78, 81, 85, 88, 89, 94, 100, 101, 102, 103, 104, 120, 121, 122, 123, 124, 130, 135, 136, 139, 143, 146, 150, 151, 156, 159, 163, 164, 185, 190, 200, 205, 215, 216, 220];
var dylanVoids1 = [4,9,10,24,36,41,47,48,52,59,83,84,90,95,100,101,105,106,107,117,118,119,123,124,129,134,140,141,165,172,176,177,183,188,200,214,215,220];
var dylanVoids2 = [4,5,11,19,26,38,51,59,69,70,74,75,76,77,84,89,97,108,112,116,127,135,140,147,148,149,150,154,155,165,173,186,198,205,213,219,220];
var lockeLetters1 = ['O','N','I','O','N','','','A','F','T','','C','S','T','','P','A','N','G','E','','D','N','A','S','','L','O','S','T','A','T','O','R','S','','E','D','N','A','','O','U','R','S','L','O','N','E','S','T','A','R','C','O','U','N','T','R','Y','','','','S','Y','D','N','E','Y','','M','E','H','','','A','B','S','','','S','S','W','','B','A','S','A','L','','N','O','O','S','E','','','S','A','R','','','S','O','B','T','R','U','E','L','I','E','','W','A','R','M','I','C','E','E','A','T','','','T','A','E','','','B','E','A','K','S','','T','H','A','I','S','','M','A','S','','','N','E','O','','','H','R','S','','I','B','E','R','I','A','','','','B','L','A','C','K','S','T','A','R','N','A','T','I','O','N','M','A','N','A','','T','E','R','O','','M','O','O','D','Y','I','C','O','N','','E','C','G','S','','I','N','T','E','S','','K','I','E','','T','H','O','','','T','E','A','S','E'];
var lockeLetters2 = ['B','E','S','T','','K','A','L','','','P','L','U','C','K','R','E','N','I','','O','C','A','L','','S','A','M','O','A','A','C','A','R','','C','R','Y','O','','A','D','O','R','N','T','H','R','E','E','H','E','E','L','C','L','I','C','K','S','','','E','D','S','','S','R','','U','M','E','H','','','S','O','S','','T','D','','S','P','T','','S','A','','','O','N','E','S','','O','B','O','E','S','','','','','','C','O','M','I','N','G','O','F','A','G','E','T','A','L','E','','','','','','S','A','S','S','Y','','A','R','E','A','','','B','P','','P','S','T','','M','E','','M','E','T','','','I','O','T','A','','O','T','','L','I','L','','','Y','E','L','L','O','W','B','R','I','C','K','R','O','A','D','A','M','B','I','T','','A','I','T','E','','O','A','T','Y','B','R','O','C','A','','S','E','A','T','','N','D','A','K','A','S','S','E','T','','','S','N','O','','S','S','N','E'];
var dylanLetters1 = ['i','s','i','s','','e','g','g','s','','','H','A','J','J','s','t','e','a','m','n','w','b','w','','j','u','d','E','A','d','a','t','d','i','s','','t','a','t','u','','m','S','G','e','m','','','n','i','s','','z','o','m','b','i','S','','M','i','d','n','i','g','h','t','i','n','p','a','r','i','s','i','n','b','r','u','n','e','i','','','s','p','e','C','s','','a','z','n','s','','l','e','m','s','','','r','A','w','','','','a','h','a','l','b','a','u','s','b','','','','p','A','c','','','m','s','a','d','','u','r','t','H','','s','N','o','R','E','','','c','A','r','b','o','n','Y','l','f','a','c','e','b','o','o','k','m','e','s','s','a','g','e','','E','t','D','o','e','s','','s','x','s','','','G','o','u','M','e','','n','d','A','s','','m','i','t','t','E','n','u','I','a','O','e','','m','e','l','a','t','o','n','i','n','F','A','u','X','','','a','c','e','s','','a','t','S','o'];
var dylanLetters2 = ['F','I','f','a','','','s','U','e','d','e','','p','B','R','o','n','i','t','','D','i','t','t','o','s','','h','e','A','R','A','G','E','C','A','G','E','','n','o','t','r','e','M','a','l','h','e','a','R','','R','a','i','n','i','e','r','','U','l','t','i','m','E','m','U','t','','','g','n','i','','','','','r','e','D','a','S','h','','a','r','o','o','','B','o','o','t','l','E','g','','B','E','H','o','l','d','S','o','v','a','','p','V','n','','l','e','e','','o','i','l','o','i','l','o','o','I','e','','a','w','i','n','g','c','o','','n','u','r','x','','s','R','s','b','r','o','','','','','e','m','i','','','i','a','t','e','d','e','m','y','o','','w','i','n','e','b','a','g','','w','o','p','p','e','r','p','a','n','a','s','u','','e','m','b','o','l','i','s','m','f','l','u','','a','d','o','r','n','s','','e','R','g','o','d','k','m','','u','s','e','s','o','','','a','L','o','t'];
var lockeClues1 = '[{"Across":"Has layers, like 4-down, perhaps","Down":"Semi-transparent gem"},{"Across":"","Down":"Upper hemisphere grp. established in 1949"},{"Across":"","Down":"Privy to"},{"Across":"","Down":"Shrek, among others"},{"Across":"","Down":"Nickname for Loch and 29-Down"},{"Across":"Towards the stern","Down":"Jackson and 29-Down, among others"},{"Across":"","Down":"Ornate"},{"Across":"","Down":"With -Chuang, city in Eastern China"},{"Across":"Concern of Chicago TV watchers","Down":"Carbon copies"},{"Across":"","Down":"One from Burma to Malaysia"},{"Across":"","Down":"Train route across No. Mongolia and Rus."},{"Across":"West African machete","Down":""},{"Across":"Building blocks of uniqueness","Down":"Heads of academic departments"},{"Across":"Hit 6-season TV series by JJ Abrams","Down":""},{"Across":"","Down":"Suffix with ar- to describe many coffee shop faithful"},{"Across":"Suffix with alig- (pl.)","Down":""},{"Across":"Costume designer in <em>The Incredibles</em>","Down":""},{"Across":"Not yours anymore","Down":""},{"Across":"Liberia, slangily","Down":""},{"Across":"","Down":"They\'re worth six in the N.F.L."},{"Across":"","Down":"Thurman of <em>Kill Bill</em>"},{"Across":"Host of the 2000 Summer Olympics","Down":""},{"Across":"\[<em>\'\'Not interested\'\'\</em>]","Down":""},{"Across":"Stomach muscles","Down":"First step in a poker game"},{"Across":"","Down":"Kazakhstani ambassador of movies"},{"Across":"","Down":"On the Cambodian side of Vietnam\'s biggest city"},{"Across":"Heading from Salt Lake to Los Angeles, say","Down":""},{"Across":"Bottom layer","Down":"Woman\'s underwear"},{"Across":"","Down":"See 5-Down"},{"Across":"Final collar in the Wild West?","Down":""},{"Across":"","Down":"U-turn from N.W."},{"Across":"","Down":"__ Dorado"},{"Across":"Team that searches for lost sailors, abr.","Down":""},{"Across":"","Down":"<em>\'\'That\'s so cute!\'\'</em>"},{"Across":"Weep hysterically","Down":""},{"Across":"","Down":"Kiss, in Madrid"},{"Across":"Oxymoron #1","Down":""},{"Across":"","Down":"<em>\'\'___ a long story...\'\'</em>"},{"Across":"","Down":"\'\'__ Sports, It\'s in The Game\'\'"},{"Across":"Oxymoron #2","Down":""},{"Across":"","Down":"_&_ - Blues and Jazz genre"},{"Across":"","Down":"Windows operating system in 2000"},{"Across":"Take in food","Down":""},{"Across":"___-Bo","Down":""},{"Across":"","Down":"U.S. policy towards Cuba, e.g."},{"Across":"Darwin focus in the Galapagos","Down":""},{"Across":"10-Downs who you will meet if you continue on 26-Down\'s path","Down":""},{"Across":"","Down":"Mysterious"},{"Across":"","Down":"Suffix with basil"},{"Across":"See 71-Across","Down":""},{"Across":"","Down":"Things related to aviation"},{"Across":"","Down":"Many hospital wrks."},{"Across":"Prefix with conservative or classical","Down":""},{"Across":"Ken Griffey Jr. stat.","Down":""},{"Across":"Spain and Portugal, collectively","Down":"Apple products, more generally"},{"Across":"","Down":"What one would say after getting tagged, say"},{"Across":"","Down":"Make amends, with \'\'for\'\'"},{"Across":"Ghana, slangily","Down":"Key stat. for athletes"},{"Across":"","Down":"Be without"},{"Across":"","Down":"\'Let it stand\'"},{"Across":"","Down":"Smallest bit"},{"Across":"","Down":"Lyrical poems"},{"Across":"","Down":"Where the bell-man may have trouble getting to work (these days)?"},{"Across":"Magical power","Down":""},{"Across":"Installation and maintenance prefix","Down":""},{"Across":"Temperamental","Down":""},{"Across":"Madonna or Michael Jackson","Down":""},{"Across":"Electronic displays of heartbeats","Down":""},{"Across":"Guts, abr.","Down":""},{"Across":"When doubled, a New Zealand plant used for baskets","Down":""},{"Across":"With 50-Across, the name between 6- and 29-Down","Down":""},{"Across":"Poke fun at","Down":""}]';
var lockeClues2 = '[{"Across":"Good, Better, ____","Down":"Troublesome child"},{"Across":"","Down":"\'\'To ____ his own.\'\'"},{"Across":"","Down":"How a poacher might describe what \'e does to animals"},{"Across":"","Down":"Tuckered out"},{"Across":"1,000 Calories, abr.","Down":"German bacteriologist and 1905 Nobel Laureate Robert"},{"Across":"","Down":"Alternative to hectares"},{"Across":"","Down":"How one might describe the multiple narratives of <em>The Wizard of Oz</em>"},{"Across":"Grab, as one would a a berry","Down":"Biblical song"},{"Across":"","Down":"A few steps past \'\'Gentlemen\'\'?"},{"Across":"","Down":"Do-it-yourself specialty coffee machine?"},{"Across":"","Down":"What is pulled from a wine bottle"},{"Across":"","Down":"Where Dorothy and Toto aren\'t anymore, abbr."},{"Across":"Hindu queen","Down":""},{"Across":"Even better than Low-Fat","Down":""},{"Across":"","Down":"Reply to a funny txt, perhaps"},{"Across":"Island in the South Pacific","Down":""},{"Across":"What a sixteen year-old may ask for","Down":""},{"Across":"With -genics, the unfortunate end to Ted Williams","Down":""},{"Across":"Make more beautiful","Down":""},{"Across":"Dorothy\'s ticket home","Down":""},{"Across":"","Down":"Other side of the country from 45-Across"},{"Across":"","Down":"Plays hooky from P.E."},{"Across":"Sullivan and Moses, among others","Down":""},{"Across":"Name suffix for Jr.\'s father","Down":""},{"Across":"Two words of indifference","Down":""},{"Across":"Mayday call","Down":"College major who studies human interaction, abbr."},{"Across":"","Down":"Yoko, who\'s been accused of breaking up The Beatles"},{"Across":"Score in football","Down":""},{"Across":"","Down":"What you may get after <em>\'\'Beg, Rover!\'\'</em>"},{"Across":"Month before Oct.","Down":""},{"Across":"","Down":"Usually they\'re found in pods"},{"Across":"Country which surrounds Lesotho","Down":""},{"Across":"If you take some twos away from some threes","Down":""},{"Across":"","Down":"Yes, in Spain"},{"Across":"Popular dual-reeded instruments","Down":""},{"Across":"","Down":"Feathery scarves, worn as accessories to evening gowns"},{"Across":"Genre of story as it pertains to Dorothy","Down":""},{"Across":"","Down":"Prof\'s helper"},{"Across":"","Down":"How one might move a large stack of firewood"},{"Across":"","Down":"Robert E., of the Confederate Army"},{"Across":"","Down":"Consume by mouth"},{"Across":"Full of cheeky spirit","Down":""},{"Across":"Length times width","Down":""},{"Across":"Party responsible for Gulf Coast oil spill","Down":"The ring, from <em>Lord of the Rings</em>, before it was Frodo\'s"},{"Across":"","Down":"Responder to 9-1-1 call, with \'\'the\'\'"},{"Across":"See 21-Down","Down":""},{"Across":"\'\'It\'s not you, it\'s __\'\'","Down":""},{"Across":"","Down":"Antlered animal common to North Carolina"},{"Across":"Just down the subway from a Yank","Down":""},{"Across":"Smallest bit","Down":""},{"Across":"","Down":"Verb slang of bodily ink-art"},{"Across":"Extra periods of play","Down":""},{"Across":"","Down":"Pro-Football player from Tennessee"},{"Across":"Rapper ___ Wayne","Down":""},{"Across":"","Down":"Bow to the wing, with \'\'caught in\'\'"},{"Across":"Dorothy\'s magical path, with \'\'the\'\'","Down":"\'\'____ daba do!\'\'"},{"Across":"","Down":"First responders before EMT\'s"},{"Across":"","Down":"Undergrad law degrees"},{"Across":"","Down":"Prefix with -logy, the study of whales and dolphins"},{"Across":"","Down":"Temporary souvenir from the beach?"},{"Across":"","Down":"<em>The Dick van ____ Show</em>"},{"Across":"Scope or extent (of something)","Down":""},{"Across":"Along with 14-Across, what might be advertised on a Mayo jar","Down":""},{"Across":"Full of bran","Down":""},{"Across":"With \'\'area,\'\' brain region that controls speech production","Down":""},{"Across":"\'\'Take a ____ at the table.\'\'","Down":""},{"Across":"Northern, Midwestern brother of S.Car.","Down":""},{"Across":"Opposite liability on a balance sheet","Down":""},{"Across":"___-Cone","Down":""},{"Across":"Four-dimensional turn around from NNSW","Down":""}]';
var dylanClues1 = '[{"Across":"Fertility goddess and Dylan muse","Down":"As Nick is Mariah, Ashton ..."},{"Across":"","Down":"Enduring strength and fortitude"},{"Across":"","Down":"Technique for separating molecules by pI"},{"Across":"","Down":"NIMH term for winter depression"},{"Across":"Chicken precursors and antecedents","Down":"National flag, when hoisted aloft"},{"Across":"","Down":"First chief executive of the USA"},{"Across":"","Down":"P.C. term for the non-heterosexual community"},{"Across":"","Down":"Nguni-speaking southeast African people "},{"Across":"Mohammedan peregrination","Down":"Shanghai (abbr.)"},{"Across":"","Down":"Charlie Brown, to Little Red-Haired Girl "},{"Across":"","Down":"Framed rabbit\'s voluptuous wife"},{"Across":"","Down":"Military lawyer TV-show"},{"Across":"Ironclad order to a 292.5-degree heading","Down":""},{"Across":"","Down":"Tiny clone of entertainer Raymond IV (??)"},{"Across":"Home of David\'s tribe","Down":"Trick ramps in extreme sports"},{"Across":"Singular demonstrative pronouns, slangily","Down":""},{"Across":"Russian electro-pop duo and contract lesbians","Down":""},{"Across":"","Down":"Unit for measuring bricks and feathers"},{"Across":"Controversial ramen ingr.","Down":""},{"Across":"Key with one or four sharps (abbr.)","Down":""},{"Across":"Suffix with Ado","Down":""},{"Across":"","Down":"Term for conchiglie and artillery munitions"},{"Across":"The walking dead, in Haiti or Louisiana","Down":""},{"Across":"","Down":"With -tism, head dampening"},{"Across":"Allen film contrasting modern day with modernist nights","Down":""},{"Across":"","Down":"Popular anime show featuring Super Saiyans"},{"Across":"","Down":"Nucleic acid found in the nucleolus"},{"Across":"","Down":"Tasseled curtain restrainer"},{"Across":"","Down":"202.5 degrees on a compass"},{"Across":"Where to look for a Bornean sultan","Down":""},{"Across":"Tech details or ocular aids","Down":""},{"Across":"Makers and prim. audience of 26-Down, with dyed hair","Down":""},{"Across":"Lt. Gov. Overpeck and Apollo Lander, e.g.","Down":""},{"Across":"","Down":"Brothel owners"},{"Across":"","Down":"Academic institution in First Hill and the CD"},{"Across":"Uncooked","Down":""},{"Across":"Data storage device in Akkar\'s capital?","Down":""},{"Across":"","Down":"Famous Cartesian sum"},{"Across":"","Down":"Replacements ride pine"},{"Across":"","Down":"Hoe precursors"},{"Across":"Suffix with Super-, prefix with -man","Down":"144x-scaled measure of force per area"},{"Across":"","Down":"Disorder caused by many haemoglobin deficiencies"},{"Across":"","Down":"Author of <em>Les Enfants terribles</em> and screenwriter of <em>La Belle et la Bête</em>"},{"Across":"School for stone-deaf \'sotans","Down":""},{"Across":"Futuristic planet in <em>The Book of the New Sun</em>","Down":""},{"Across":"","Down":"Descriptor for sex-saturated media"},{"Across":"","Down":"Danes\' answer to \'\'What\'s relaxing and fun?\'\'"},{"Across":"Nocturnal nasal noise","Down":""},{"Across":"","Down":"Long wavelength color"},{"Across":"","Down":"Engage in cybersex?"},{"Across":"Structure in which C = O","Down":""},{"Across":"","Down":"Tyrant lizard\'s Noel?"},{"Across":"","Down":"Avec \'el\', un palindrome festive sur le 25e de Décembre"},{"Across":"Zuckerberg email","Down":""},{"Across":"","Down":"Foremost Brit. lexicon"},{"Across":"","Down":"Terrorist target of Operation Neptune Spear"},{"Across":"Answer to \'\'Who has a healing touch?\'\'","Down":""},{"Across":"Adj.","Down":""},{"Across":"19x19 monochromatic battle","Down":""},{"Across":"Suffix with leg and ass","Down":"Congregation of Boston-based spiritually liberal religion"},{"Across":"Corp. silence agreements","Down":""},{"Across":"","Down":"Cos reciprocal"},{"Across":"Two-fifths of a glove","Down":""},{"Across":"","Down":"Tangent mnemonic"},{"Across":"","Down":"Standard explosive used to measure bomb yield"},{"Across":"Without why, the five scrambled (?)","Down":""},{"Across":"","Down":"Kiss and hug"},{"Across":"Biological sleep aid","Down":""},{"Across":"","Down":"French article"},{"Across":"Ce qui n\'est pas réel","Down":""},{"Across":"Lettered ones","Down":""},{"Across":"Back end of an obese individual?","Down":""}]';
var dylanClues2 = '[{"Across":"Global soccer grp.","Down":"In consideration of gold"},{"Across":"","Down":"Collectively"},{"Across":"","Down":"Bat _ _ _ _ _, a game of honor and diplomacy"},{"Across":"","Down":"Bit it"},{"Across":"Blue shoe fabric","Down":"_ _ _ Sauer"},{"Across":"","Down":"Implant area for 34-Across"},{"Across":"","Down":"Al. preceder"},{"Across":"","Down":"Beverage battle between bordering bayside bros"},{"Across":"","Down":"Internet adoptee"},{"Across":"Award-winning hipster lager","Down":"One with a similarly shaped skull?"},{"Across":"","Down":"Like booze at predictable intervals"},{"Across":"","Down":"Home of the Big Horn Blonde"},{"Across":"<i>\'\'[I\'m] handling the situation.\'\'</i>","Down":""},{"Across":"Statements of assent","Down":"There\'s no \'Ell in this \'ero"},{"Across":"Dylan\'s operating system","Down":""},{"Across":"Enclosed Anger Arena","Down":""},{"Across":"","Down":"Dromedaries\' viral bane, abbr."},{"Across":"Disturbed sleep","Down":""},{"Across":"","Down":"Striped gatto"},{"Across":"<i>\'\'100% attendance\'\'</i> in Arabic class?","Down":""},{"Across":"Finest brew west of the Cascades","Down":""},{"Across":"","Down":"Mac and Dennis\'s term for an explosion in the Greek capital?"},{"Across":"Last of the sheep meat?","Down":""},{"Across":"","Down":"Milk of _ _ _ _ _ _ _ _"},{"Across":"Domestic product plus net international gains","Down":""},{"Across":"Sprint again","Down":""},{"Across":"If you give a Robin a Kanga, he\'s going to want _ _ _ _ _...","Down":"Part of an inheritor\'s morning routine?"},{"Across":"Unsanctioned or Bell-bottomed","Down":"Ghetto girlfriend"},{"Across":"","Down":"Sheepish shuffle"},{"Across":"","Down":"Ode praising Earth\'s most abundant metal?"},{"Across":"Dr. Weird\'s episode-opening exclamations","Down":""},{"Across":"","Down":"<i>\'\'Breasts? How revolting!\'\'</i>"},{"Across":"","Down":"_ _ _ - mo"},{"Across":"Pullus precursors and antecedents","Down":""},{"Across":"Thermoplastic explosive","Down":""},{"Across":"Furious-fisted Bruce","Down":""},{"Across":"A wrestler may check it","Down":""},{"Across":"<i>\'\'Yo, Leftenant!\'\'</i>","Down":""},{"Across":"","Down":"Lo que causa la nieve amarillo"},{"Across":"<i>Star Wars\'</i> Income Corp.","Down":""},{"Across":"","Down":"Entreaty to finger Bliss climbers"},{"Across":"Novel pharmaceuticals, in ad-speak","Down":""},{"Across":"<i>\'\'In earnest, my brother?\'\'</i> or Reddit oxymoron","Down":""},{"Across":"","Down":"Fratty parties"},{"Across":"Publishing company acquired by Sony","Down":""},{"Across":"<i>\'\'Dey in my stomach, dawg\'\'</i>","Down":""},{"Across":"","Down":"Mana or magicka, offline"},{"Across":"","Down":"\'\'No Stop\'\' after canceling negatives"},{"Across":"","Down":"Mixed-up electromechanical converter"},{"Across":"Container for Franzia and/or rowing clothes","Down":""},{"Across":"","Down":"Isaac\'s brother"},{"Across":"","Down":"Bros"},{"Across":"Burger with a slur","Down":""},{"Across":"Harshly review AZ public school","Down":"Life vest, e.g."},{"Across":"Positive-pressure penile peril","Down":""},{"Across":"","Down":"LP spacers"},{"Across":"Doomsday virus transmitted by avian harbingers of the end times","Down":""},{"Across":"Decorates","Down":""},{"Across":"","Down":"Dipthong replaced with ease?"},{"Across":"Therefore","Down":""},{"Across":"\'\'I\'m Shipping Up To Boston\'\' band, to fans","Down":""},{"Across":"Employ in such a manner","Down":""},{"Across":"Goodly quantity","Down":""}]';

var currentCrossword = new Crossword([],[],[]);
var locke1 = new Crossword(lockeVoids1, lockeLetters1, lockeClues1,"Interstellar Travel","Andrew Locke", 2012);
var locke2 = new Crossword(lockeVoids2, lockeLetters2, lockeClues2,"Over the Rainbow","Andrew Locke", 2012);			
var dylan1 = new Crossword(dylanVoids1, dylanLetters1, dylanClues1,"Parisian Holiday","Dylan O'Shea", 2012);
var dylan2 = new Crossword(dylanVoids2, dylanLetters2, dylanClues2,"Hate Crate","Dylan O'Shea", 2012);

//Reference variables used throughout		
var $cells;
var $cellNums;

//Variables defining current crossword's dimensions
var numRows = 15;
var numCols = 15;

// Public counter for counting which cell was last numbered
var cellNumberingCounter = 1;

// Functions for removing the puzzle elements
function deleteCells(){
	$(".cells").remove();
}
function deleteRows(){
	$(".row").remove();
}

//Function to return a cell's index within the array of cells
function getCellIndex(cell){
	return $cells.index(cell);
}

//Functions for using a cell position to find its index or itself
function getCellIndexFromRC(row, col){
	return row*numCols+col;
}
function get$CellfromRC(row, col){
	return $($cells[getCellIndexFromRC(row,col)]);
}

// Functions returning rows and columns of a cell given it or its index
function getRow($cellIndexOr$Cell){
	if (typeof($cellIndexOr$Cell)=="number"){
		return Math.floor($cellIndexOr$Cell)/numRows;
	} else if (typeof($cellIndexOr$Cell)=="object") {
		return Math.floor(getCellIndex($cellIndexOr$Cell)/numRows);
	} else {
		throwIndexCellError();
	}
}
function getCol($cellIndexOr$Cell){
	if (typeof($cellIndexOr$Cell)=="number"){
		return $cellIndexOr$Cell % numCols;
	} else if (typeof($cellIndexOr$Cell)=="object") {
		return getCellIndex($cellIndexOr$Cell) % numCols;
	} else {
		throwIndexCellError();
	}
}

// Functions for determining whether a cell in the crossword is an edge cell.
function isTopRowCell(cellIndexOr$Cell){
	if (typeof(cellIndexOr$Cell)=="number"){
		return cellIndexOr$Cell<numCols && cellIndexOr$Cell >= 0;
	} else if (typeof(cellIndexOr$Cell)=="object") {
		return getRow(cellIndexOr$Cell) == 0;
	} else {
		throwIndexCellError();
	}
}
function isBotRowCell(cellIndexOr$Cell){
	if (typeof(cellIndexOr$Cell)=="number"){
		var finalCell = numCols*numRows-1;
		return cellIndexOr$Cell > finalCell - numCols;
	} else if (typeof(cellIndexOr$Cell)=="object") {
		return getRow(cellIndexOr$Cell) == (numRows-1);
	} else {
		throwIndexCellError();
	}
}
function isLeftColCell(cellIndexOr$Cell){
	if (typeof(cellIndexOr$Cell) == "number"){
		return cellIndexOr$Cell % numCols == 0;
	} else if (typeof(cellIndexOr$Cell) == "object") {
		return getCol(cellIndexOr$Cell) == 0;
	} else {
		throwIndexCellError();
	}
}
function isRightColCell(cellIndexOr$Cell){
	if (typeof(cellIndexOr$Cell)=="number"){
	return cellIndexOr$Cell % numCols==(numCols-1);
	} else if (typeof(cellIndexOr$Cell)=="object") {
		return getCol(cellIndexOr$Cell) == (numCols-1);
	} else {
		throwIndexCellError();
	}
}
function throwIndexCellError(){
	throw new Error("Invalid input. Only cell indices (integers) and cell jQuery objects are allowed.");
}


// Functions returning adjacent cells
function $cellAbove(cellIndexOr$Cell){
	if (typeof(cellIndexOr$Cell)=="number"){
		return $($cells[cellIndexOr$Cell-numCols]);
	} else if (typeof(cellIndexOr$Cell)=="object") {
		return $($cells[getCellIndex(cellIndexOr$Cell)-numCols]);
	} else {
		throwIndexCellError();
	}
}
function $cellBelow(cellIndexOr$Cell){
	if (typeof(cellIndexOr$Cell)=="number"){
		return $($cells[cellIndexOr$Cell+numCols]);
	} else if (typeof(cellIndexOr$Cell)=="object") {
		return $($cells[getCellIndex(cellIndexOr$Cell)+numCols]);
	} else {
		throwIndexCellError();
	}
}
function $cellLeft(cellIndexOr$Cell){
	if (typeof(cellIndexOr$Cell)=="number"){
		return $($cells[cellIndexOr$Cell-1]);
	} else if (typeof(cellIndexOr$Cell)=="object") {
		return $($cells[getCellIndex(cellIndexOr$Cell)-1]);
	} else {
		throwIndexCellError();
	}
}
function $cellRight(cellIndexOr$Cell){
	if (typeof(cellIndexOr$Cell)=="number"){
		return $($cells[cellIndexOr$Cell+1]);
	} else if (typeof(cellIndexOr$Cell)=="object") {
		return $($cells[getCellIndex(cellIndexOr$Cell)+1]);
	} else {
		throwIndexCellError();
	}
}
function $cellOpposite(cellIndexOr$Cell){
	if (typeof(cellIndexOr$Cell)=="number"){
		return $($cells[numCols*numRows-cellIndexOr$Cell]);
	} else if (typeof(cellIndexOr$Cell)=="object") {
		return $($cells[numCols*numRows-getCellIndex(cellIndexOr$Cell)-1]);
	} else {
		throwIndexCellError();
	}
}

//Functions to get the nearest clued cell above or left
function getClueLeft($cell){
	if(hasAcrossClue($cell) && !isVoid($cell)){
		return {'Number':parseFloat($cell.attr('cellnumber')),'Clue':acrossClue($cell)};
	}
	else if (isLeftColCell(getCellIndex($cell)) || isVoid($cell)){
		return false;
	}
	else {
		return getClueLeft($cellLeft($cell));
	}
}
function getClueAbove($cell){
	if(hasDownClue($cell) && !isVoid($cell)){
		return {'Number':parseFloat($cell.attr('cellnumber')),'Clue':downClue($cell)};
	}
	else if (isTopRowCell(getCellIndex($cell)) || isVoid($cell)){
		return false;
	}
	else {
		return getClueAbove($cellAbove($cell));
	}
}
function hasDownClue($cell){
	if($cell.attr('downclue') && ($cell.attr('downclue')!=-1)){
		return true;
	}
	else {
		return false;
	}
}
function hasAcrossClue($cell){
	if($cell.attr('acrossclue') && ($cell.attr('acrossclue')!=-1)){
		return true;
	}
	else {
		return false;
	}
}
function downClue($cell){
	return $cell.attr('downclue');
}
function acrossClue($cell){
	return $cell.attr('acrossclue');
}

//Helper function for making a cell void and toggling a cell void
function makeVoid($cell){
	removeCorrectness($cell);
	$cell.val('');
	$cell.addClass('void');
	if ( $('#autoMirror').attr('checked') && !isVoid($cellOpposite($cell)) ){
		if($cellOpposite($cell).val()){
			if( confirm('Overwrite the "' + $cellOpposite($cell).val().toUpperCase() +'" in mirror cell at ('+ ((getRow($cellOpposite($cell)))+1)+','+ (getCol($cellOpposite($cell))+1) +')?')) {
				makeVoid($cellOpposite($cell));
			}						
		} else {
			makeVoid($cellOpposite($cell));
		}
	}
	numberCells();
}
function toggleVoid($cell){
	if($cell.hasClass('void')){
		$cell.removeClass('void');
		if( $('#autoMirror').attr('checked') && isVoid($cellOpposite($cell)) ){
			toggleVoid($cellOpposite($cell));
		}
	} 
	else {
		makeVoid($cell);
	}
	updateWhiteBlack();
}

// Helper function to remove correctness from a cell
function removeCorrectness(cell){
	cell.removeClass('correct');
	cell.removeClass('incorrect');
}

//Helper function to say whether a cell is void
function isVoid(cell){
	return cell.hasClass('void');
}

/*
Functions for determining whether adjacent cells are void and thus determining
whether the cell is lone/single.
*/
function hasLetterAbove(cellIndex){
	return ((!isTopRowCell(cellIndex)) && (!$cellAbove(cellIndex).hasClass('void')));
}
function hasLetterBelow(cellIndex){
	return ((!isBotRowCell(cellIndex)) && (!$cellBelow(cellIndex).hasClass('void')));
}
function hasLetterLeft(cellIndex){
	return ((!isLeftColCell(cellIndex)) && (!$cellLeft(cellIndex).hasClass('void')));
}
function hasLetterRight(cellIndex){
	return ((!isRightColCell(cellIndex)) && (!$cellRight(cellIndex).hasClass('void')));
}
function isLoneCell(cellIndex){
	return ((!hasLetterAbove(cellIndex) && !hasLetterBelow(cellIndex)) || (!hasLetterLeft(cellIndex) && !hasLetterRight(cellIndex)));
}

//Function to automatically number the cells of a blank puzzle
function numberCells(){
	cellNumberingCounter = 1;
	for(var i = 0; i<$cells.length; i++){
		$cell = $($cells[i]);
		$cellNum = $($cellNums[i]);
		
		if(!$cell.hasClass('void') && (!isLoneCell(i)||(!$('#skipSingles').attr('checked')))){
			if(isTopRowCell(i)){
				addNumber($cell,$cellNum);
			}
			else if (isLeftColCell(i)){
				addNumber($cell,$cellNum);
			} 
			else if($cellAbove(i)){
				if($cellAbove(i).hasClass('void')){
					addNumber($cell,$cellNum);
				} 
				else if($cellLeft(i)){
					if ($cellLeft(i).hasClass('void')){
						addNumber($cell,$cellNum);
					}
				}
			}
		}
	}
	cellNumberingCounter = 1;
}

//Helper function for adding numbers to non-void cells
function addNumber(cell,cellNum){
	cell.attr('cellnumber',cellNumberingCounter);
	cellNum.text(''+cellNumberingCounter);
	cellNumberingCounter+=1;
}

// Functions for clearing various parts of the puzzle
function clearNumbers(){
	$cellNums.text('');
	$cells.attr('cellnumber',-1);
}
function clearVoids(){
	$cells.removeClass('void');
}
function clearLetters(){
	$cells.val('');
}
function clearCorrectness(){
	$cells.removeClass('correct');
	$cells.removeClass('incorrect');
}
function clearCells(){
	clearLetters();
	clearNumbers();
	clearVoids();
	clearCorrectness();
	$('#cheatResult').text('');
}
function clearClues(){
	$cells.attr('acrossclue',-1);
	$cells.attr('downclue',-1);
}
function clearCredits(){
	$('.cwordTitle').text('+');
	$('.cwordCreator').text('+');
	$('.cwordYear').text('');
}
//Updates the puzzle's stats
function updateRCTip() {
	$('#rowDim').text(numRows);
	$('#colDim').text(numCols);
}
function updateWhiteBlack(){
	$('#whiteCellCount').text($('.cell:not(.void)').length);
	$('#blackCellCount').text($('.cell.void').length);
}
function updateStats(){
	updateRCTip();
	updateWhiteBlack();
}

function updateTitle(){
	if(currentCrossword.title){
		$('.cwordTitle').text(currentCrossword.title);
	}
}
function updateCreator(){
	if(currentCrossword.creator){
		$('.cwordCreator').text(currentCrossword.creator);
	}
}

//Clue functions
function getClueOrientation(){	
	if($('#acrossDownAddClue').attr('checked')){
		return 'across';
	}
	else {
		return 'down';
	}
}
function getClueText(){
	return $('#clueForm textarea#clueInput').val();
}
function getClueCellNumber(){
	return $('#clueForm #clueCell').val();
}

//Function to add a clue to a cell
function addClue(clueString, cellNumber, direction){
	$cell = $('.cell[cellnumber='+cellNumber+']');
	if(direction == 'across'){
		$cell.attr('acrossclue',clueString);
	}
	else if (direction == 'down'){
		$cell.attr('downclue',clueString);
	}
}

/*
Checks the cells that the user has filled against the answers for the current puzzle.
Fills in incorrect answers and highlights them red, while highlighting correct answers green.
*/
function cheat(){
	if(currentCrossword == dylan2){
		alert("Duuuuuuude. Just work on a different part of the puzzle. Unless you're stuck on 20-Across, then I'll just tell you... it's ALHEAR.");
	} else {
	correctLetters = 0;
	totalLetters = 0;
	for(var i = 0; i< $cells.length; i++){
		$cell = $($cells[i]);
		if (!$cell.hasClass('void')){
			totalLetters += 1;
			if(($cell.val().toLowerCase() === currentCrossword.letters[i].toLowerCase()) && (!$cell.hasClass('incorrect'))){
				correctLetters += 1;
				$cell.addClass('correct');
			}
			else {
				$cell.addClass('incorrect');
				$cell.val(currentCrossword.letters[i]);
			}
		
		}
	}
	var congrats = (correctLetters > 0.8*totalLetters)? 'Awesome job!' : 'Sucks, brah.';
	$('#cheatResult').css({opacity: 1}).text('You got '+ correctLetters + ' out of ' + totalLetters+' correct. ' + congrats);
	}
}
function showIncorrect(){
	var incorrectLetters = 0;
	for(var i = 0; i< $cells.length; i++){
		$cell = $($cells[i]);
		if (!$cell.hasClass('void')){
			if(($cell.val().toLowerCase() !== currentCrossword.letters[i].toLowerCase()) && !$cell.hasClass('incorrect')){
				$cell.removeClass('correct');
				$cell.addClass('flashRed');
			} else if ( ($cell.val().toLowerCase() == currentCrossword.letters[i].toLowerCase())  && (!$cell.hasClass('correct')) ){
				$cell.addClass('correct');
			}
		}
	}
	if($('.flashRed').length == 0){
		$('#cheatResult').text('You solved the puzzle!').animate({opacity: 1}, 'fast','linear');
	} else {
		$('#cheatResult').text('Still ' + $('.flashRed').length + ' letters to solve!').animate({opacity: 1},500, 'linear').delay(1000);
		$('.flashRed').animate({backgroundColor: 'rgba(255,192,203,1)'}, 400,'linear').delay(600).animate({backgroundColor: 'rgba(255,255,255,0)'}, 800, 'linear').removeClass('flashRed');
		$('#cheatResult').animate({opacity: 0},'medium');
	}
}

function toggleAdvanced(){
	$('#pen').toggleClass('hidden');
	$('#advControls').toggleClass('hidden');
}

function toggleText($object,text1,text2){
	if($object.text()==text1){
		$object.text(text2);
	} else if ($object.text() == text2){
		$object.text(text1);
	} else {
		throw new Error("Not toggling");
	}
}

function loadCrossword(crossword){
	clearCells();
	clearClues();
	inputVoids(crossword.voids);
	numberCells();
	currentCrossword = crossword;
	inputClues(crossword.clues);
	updateStats();
	updateTitle();
	updateCreator();
	solveMode();
}
function newCrossword(){
	clearCells(); 
	clearClues(); 
	currentCrossword=new Crossword([],[],[]); 
	clearCredits();
	editMode();
}