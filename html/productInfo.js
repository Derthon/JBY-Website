var items = [
					anime = {
						item1 : {
							img : 'img/yeslie/anime1.png',
							title : "Mikasa Ackerman Action Figure",
							cost : "349.99",
							shipping : "5",
							description : "Dimensions:10 x 8 x 4 inches."
						},
						item2 : {
							img : 'img/yeslie/anime2.jpg',
							title : "Kakashi Hatake Action Figure",
							cost : "220.00",
							shipping : "5.49",
							description : "Dimensions: 10 x 3 x 3 inches"
						},
						item3 : {
							img : 'img/yeslie/anime3.png',
							title : "Uchiha Clan Sweater ",
							cost : "55.99 ",
							shipping : "5",
							description : "Sizes: Small- Xx-Large. Color: Black, Grey, Red"
						},
						item4 : {
							img : 'img/yeslie/anime4.jpg',
							title : "Akatsuki Cosplay Rings",
							cost : "33.39",
							shipping : "5",
							description : "Pieces: 10"
						},	
						item5 : {
							img : 'img/yeslie/anime5.png',
							title : "Attack On Titan No Regrets Volume 1 & 2",
							cost : "15.98",
							shipping : "5",
							description : "Print Length: 192 pages each"
						},
						item6 : {
							img : 'img/yeslie/anime6.jpg',
							title : "Attack On Titan Key-Chain",
							cost : "2.09",
							shipping : "3.99",
							description : "Size :about 10cm Material : Alloy"
						},
						item7 : {
							img : 'img/yeslie/anime7.jpg',
							title : "Dragon Ball Cell Action Figure",
							cost : "57.99",
							shipping : "5",
							description : "Dimensions: 2 x 3 x 7 inches"
						},
						item8 : {
							img : 'img/yeslie/anime8.jpg',
							title : "Victoriia's house Dragon Ball Z Action Figures Dragon Anime + 7 pcs PVC Balls",
							cost : "51.50",
							shipping : "5",
							description : "Dragon Size 15cm (5.90 inch) high. Dragon Ball Size 4.3cm (1.69 inch)diameter."
						},
						item9 : {
							img : 'img/yeslie/anime9.jpg',
							title : "Dragon Ball Z: Movie Pack Collection Three",
							cost : "14.99",
							shipping : "5",
							description : "Language: Japanese, English Subtitles: English Run Time: 210 minutes"
						},
						item10 : {
							img : 'img/yeslie/anime10.jpg',
							title : "One Punch man Wall Scroll ",
							cost : "11.98",
							shipping : "5",
							description : "Fabric Printing Size: 22 X 33 Inches (Equal:56 X 84 CM)"
						},
						item11 : {
							img : 'img/yeslie/anime11.jpg',
							title : "One-Punch Man: Saitama DXF Figure",
							cost : "24.99",
							shipping : "5",
							description : "Approx. Size: 3\"L x 4\"W x 5.9\"H"
						},
						item12 : {
							img : 'img/yeslie/anime12.jpg',
							title : "One-Punch Man Collection 7 Books Set (Volume 1-7)",
							cost : "29.99",
							shipping : "5",
							description : "Product Dimensions: 8.4 x 5.9 x 0.8 inches"
						}
					},
					chess = {
						item1 : {
							img : 'img/brian/chess1.jpg',
							title : "Black Vinyl Chess Mat",
							cost : "39.99",
							shipping : "5",
							description : "Full set of 32 plastic, triple weighted chess pieces with 3 3/4\" King"
						},
						item2 : {
							img : 'img/brian/chess2.jpg',
							title : "20\" Vinyl roll-up chess board in black",
							cost : "75",
							shipping : "5",
							description : "Tournament chess bag in black with space for pieces, board, and other supplies"
						},
						item3 : {
							img : 'img/brian/chess3.jpg',
							title : "Professional Tournament Chess Game Clock Black by ZmartFun",
							cost : "79.99",
							shipping : "5",
							description : "Instructions and batteries included; clock dimensions = 7.5” x 3.5” x 2.5”"
						},
						item4 : {
							img : 'img/brian/chess4.jpg',
							title : "Chronos Chess Clock - Black",
							cost : "190.00",
							shipping : "4.99",
							description : "Dimensions: 8.8x 2.8 x 2 inches"
						},	
						item5 : {
							img : 'img/brian/chess5.jpg',
							title : "Silicone Portable Tournament Chess Mat",
							cost : "12.95",
							shipping : "5",
							description : "Dimensions 20 x 20 x 0.2 inches Color: Black, Green, Red, Blue "
						},
						item6 : {
							img : 'img/brian/chess6.jpg',
							title : "20\" x 20\" green vinyl roll-up chess board with 2-1/4\" squares",
							cost : "79.99 ",
							shipping : "5",
							description : "Tournament chess bag in green with space for pieces, board, clock and other supplies DGT North American chess clock 2 blue softcover spiral-bound scorebooks"
						},
						item7 : {
							img : 'img/brian/chess7.jpg',
							title : "\"15 x 2 x 12 inches Pieces\"",
							cost : "29.99",
							shipping : "5",
							description : "Features black vinyl roll-up chessboard Set weighs 4 pounds! 15 x 2 x 12 inches"
						},
						item8 : {
							img : 'img/brian/chess8.jpg',
							title : "Staunton Design Pieces",
							cost : "15.49",
							shipping : "5",
							description : "Professional quality, Staunton design, triple weighted plastic pieces with felt padded bottomsThe King is 3.75 inches tall with a stable and balanced base of 1.5\" diameter. Features 4 Queens. Ideal for a chess board with squares of 2\" to 2.25\""
						}
					},
					soccer = {
						item1 : {
							title : "Ball",
							cost : "75",
							shipping : "5",
							description : "A cool ball!"
						},
						item2 : {
							title : "",
							cost : "",
							shipping : "",
							description : ""
						},
						item3 : {
							title : "",
							cost : "",
							shipping : "",
							description : ""
						},
						item4 : {
							title : "",
							cost : "",
							shipping : "",
							description : ""
						},	
						item5 : {
							title : "",
							cost : "",
							shipping : "",
							description : ""
						}
					}
				]

var dsplayWhat;

function displayProducts(obj, clear){
	var mainDiv = document.getElementById('PRODUCT-ITEMS');

	//var productLength = obj.length;
	//console.log(productLength = Object.keys(items[obj]).length);

	productLength = Object.keys(items[obj]).length
	
	if(clear === true){
		mainDiv.innerHTML = '<hr>';	
	}

	for(var i = 0;i < productLength;++i){
		var item = 'item' + (i + 1);
		//console.log(item)
			
		var div = document.createElement('DIV');
		div.setAttribute('class','product-section');
		mainDiv.appendChild(div);


		var eleImg = document.createElement('IMG');
		eleImg.setAttribute('src', "" + items[obj][item].img);
		eleImg.setAttribute('class','product-image');
		div.appendChild(eleImg);
		
		var heading = document.createElement('H2');
		heading.setAttribute('class', 'product-name');
		div.appendChild(heading);
		heading.innerHTML = items[obj][item].title;

		var p = document.createElement('P');
		div.appendChild(p);
		var text = "<b>Cost:</b> $" + items[obj][item].cost + "<br> <b>Shipping: </b> $" + items[obj][item].shipping + " <br> <b>Description: </b>" +  items[obj][item].description;
		p.innerHTML = text;
		
		//mainDiv.innerHTML += '<hr>';
	}
}


function clickRun(cat){
	window.location = document.getElementById('toProduct').href;
	dsplayWhat = displayProducts(cat,true);
}
