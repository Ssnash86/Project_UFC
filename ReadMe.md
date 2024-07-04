# UFC

#### À propos:
Projet demander pendant une formation sur le thème de l'UFC  fait seulement à base de JAVASCRIPT, HTML et css  avec des fichier Json comme données.

![Image d’accueil du site](https://i.postimg.cc/g2N9TPc7/index.png)
# Maquettage : 

![Maquette du site](https://i.postimg.cc/nrLvCtm6/Maquettage.png)Les couleur utiliser  : 

Background couleur page : #7a2048 .
Background couleur nav bar et footer : #1e2761 .
Couleur de texte : #1e2761 . 

# Page 1 : Présentation

##  Barre de défilement pour les prochains combats :
Sur mes pages de 'Présentation' et 'Nos combattants' se trouve une barre de défilement des prochains combat à venir .

![Barre de défilement pour les prochains combats ](https://i.postimg.cc/KvHZMqHt/Bar-defilement.png)Code en JavaScript:
![Code Js pour la barre de défilement](https://i.postimg.cc/HkDhRbJf/js-Bar-defilement.png)

      let  link  =  document.getElementById('bar_rencontre');
'let' permet de créer une variable appeler ici 'link'  qui fait référence a un élément de mon document ('').
 

    async  function  even() {

'async function' créer une fonction avec une promesse au nom de 'even'.

    const  reponse  =  await  fetch("date_combat_ufc.json");
    const  even  =  await  reponse.json();
Le 'const' créer une variable qui ne peut pas être modifier  ,
ensuite cela fait appelé au fichier Json et permet de renvoyer une réponse.

    even.forEach(element  => {
J'utilise une boucle forEach qui va parcourir toutes les données qui se trouve dans le fichier Json .

    console.log(element);
Cela me permet d'afficher dans la console tous les éléments qui se trouve dans le tableau de données .

    if (element.Status  ==  "Scheduled") {
Ici je fait un 'If' comme pour condition  que SI l'élément 'Status'  est égale a 'Scheduled',

    link.innerText  +=  element.Name  +  " "  +  element.Day  +  " "
Alors  tu récupère la variable créer au début 'link' (endroit ou le texte sera afficher ) et tu affiche tous les  éléments qui sont dans les données  'Name' et 'Day'.

## Menu de navigation :

![Menu de navigation entre les pages du site en version grand écran](https://i.postimg.cc/T2bT6QRd/menu-version-grand-cran.png)
Le menu de navigation me permet de naviguer entre mes pages html , il est différent quand c'est en version grand écran ou en version mobile .

![Menu de navigation entre les pages du site en version grand écran](https://i.postimg.cc/DyC4j3xD/menu-version-mobile.png) En version mobile , il est responsive  en effet le menu est remplacer par un bouton pour devenir un menu déroulant .
![Menu déroulant en version mobile ](https://i.postimg.cc/1XxRYPTG/menu-deroulant.png)
En cliquant sur le bouton le menu déroulant viens s'ouvrir .

![Code JS pour le menu déroulant ](https://i.postimg.cc/R0kzvdR9/js-menu-version-mobile.png)`menuButton.addEventListener('click',function(){`
Au moment du 'click'  sur le bouton  qui est représenter par le 'menuButton'  cela va créer une fonction : 

    menu.classList.toggle('show-menu');
    menuButton.classList.toggle('close');

Ce qui va permettre de faire appelle au menu ou de fermer celui ci .

## La Rubrique News :

La rubrique new fait appelle à une librairie ici  c'est 'Splide' cela permet de créer un carrousel qui est une suite de rubrique qu' l'on peut faire défiler sur le coter . 

![Rubrique new avec un carrousel ](https://i.postimg.cc/4d5xYpMM/splide-news.png)
Pour faire appelle a cette librairie il faut ajouter cette ligne  dans le fichier Html :

    <script  src=" https://cdn.jsdelivr.net/npm/@splidejs/splide@4.1.4/dist/js/splide.min.js "></script>

ainsi que dans mon fichier JS : 

    new  Splide('.splide').mount();

# Page 2 : Nos Combattants

## Tableau pour rechercher un combattant dans la base de donnée :


![Tableau pour rechercher un combattants](https://i.postimg.cc/4xKfZYg6/Tableau-Combattants.png)
Le tableau a été créer avec la librairie GridJS .
Celui ci  permet  d'afficher les combattant qui se trouve dans le fichier Json , j'ai décider d'afficher  seulement les informations suivant : prénom , nom , surnom et le nombre de victoire .

Ci dessous vous retrouverais le code JavaScript pour faire appelle a ce tableau :

![ Code JS pour le tableau pour rechercher un combattants](https://i.postimg.cc/LXVRvftp/JS-Tableau-Combattants.png)

`fetch("Fighters.json")`
 le fetch qui fait appelle au fichier Json 
 
	   .then(res  =>  res.json())
	.then(res  => {
	new  gridjs.Grid({
Alors si il y a une réponse avec le fichier Json , créer un tableau dans lequelle :


	columns: [{
	name:  "FirstName",}, 
	{id:  'LastName',
	name:  "LastName"}, 
	{id:  'Nickname',
	name:  "Nickname"},
	{id:  'Wins',
	name:  "Wins",
	sort:  true,``}],

Le 'columns' signifie pour créer un tableau avec des colonnes  , ces dernières auront le nom identifier par 'name' et 'id' c'est pour faire afficher les donner en référence à la ligne qui porte le nom de cette id .
Pour finir le  'sort' permet de trié la colonne ici il n'est mis que dans la colonne appelé Wins

Pour faire appelle a cette librairie il faudra mettre ce link dans le head de votre page html : 

    <link  href="https://cdn.jsdelivr.net/npm/gridjs/dist/theme/mermaid.min.css"  rel="stylesheet"  />
et mettre dans le body  le script:

    <script  src="https://cdn.jsdelivr.net/npm/gridjs/dist/gridjs.umd.js"></script>

# Page 3 : Calendrier : 

Le calendrier a été réalisé avec FullCalendar , qui me permet de faire un calendrier  permettant d'afficher les rencontres à venir .

![Calendrier fait avec FullCalendar (GL pour la docs) ](https://i.postimg.cc/XN8qm44K/Calendrier.png)
![Code JS pour le calendrier](https://i.postimg.cc/JhVRt2R4/JS-Calendrier.png)

	fetch("date_combat_ufc.json")
	.then(res  =>  res.json())
	.then(res  => {
On fait toujours appelle a notre fichier Json ou se trouve les données . 
Ensuite on créer la variable :
		
		let data = []
Les [] sont la pour créer un tableau .

	for(let  i  =  0; i  <  res.length; i++){
	

Ici on va faire une boucle 'for',  'i' est égale a notre index  qui est égale à 0 dont on commence au début .  Tant que 'i' est inférieur a la longueur du tableau on fait une boucle en incrémentant de 1.

	data.push({ title:  res[i].Name, start:  res[i].DateTime, color:  '#1e2761',} );} 

Ensuite on met toute ces données dans le tableau  qu'on a créer sous le nom de 'data'  avec 'title' qui aura les information du 'Name' et le 'start' qui contiendra  les 'DateTime' des données récupérer dans le fichier Json.
	
	let  calendar  =  new  FullCalendar.Calendar(calendarEl, {
	initialView:  'dayGridMonth',
	events:  data});
	calendar.render();

Le 'initialView' permet de dire que l'on souhaite afficher le tableau par mois, 'events'  prend les données de notre tableau 'data' et la  ligne calendar.render() nous rend le tableau sur la page . 

Pour apporter FullCalendar au projet il vous faudra mettre ces scripts dans le body de votre page :
 
	<script  src="https://cdn.jsdelivr.net/npm/fullcalendar@6.1.14/index.global.min.js "></script>
	<script  src='https://cdn.jsdelivr.net/npm/fullcalendar/index.global.min.js'></script>




## Construit avec



### Langage:
JavaScript : https://developer.mozilla.org/fr/docs/Web/JavaScript
Html : https://developer.mozilla.org/fr/docs/Web/HTML
Css : https://developer.mozilla.org/fr/docs/Web/CSS#:~:text=CSS%20(pour%20Cascading%20Style%20Sheets,%2C%20MathML%2C%20ou%20XHTML).

### Frameworks:
Tailwind : https://tailwindcss.com/


### Outils

Splide :https://splidejs.com/
FullCalendar : https://fullcalendar.io/
GridJS : https://gridjs.io/


## Logiciel
Visual Studio Code : https://code-visualstudio-com.translate.goog/?_x_tr_sl=en&_x_tr_tl=fr&_x_tr_hl=fr&_x_tr_pto=sc






