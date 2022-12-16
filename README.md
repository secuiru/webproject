#WebApp - ilmastonmuutokseen liittyvän tiedon visualisointityökalu 

Tekijät: Tommi Jouppila, Tommi Kyllönen, Vili Kauhanen ja Juha Nieminen 

 

##Esittely 

WebApp on Oulun ammattikorkeakoulun 2.vuoden syksyn sovellusprojektina neljän hengen ryhmässä suunniteltu ja toteutettu sovellus, jolla voi tarkastella ilmastonmuutokseen liittyvää tietoa visuaalisesti erilaisten kaavioiden avulla. Sovelluksen frontend on toteutettu Reactilla ja backend Javalla. Tietokanta on MySQL-pohjainen. 

###Käyttöliittymä 

Käyttäjän saapuessa sivustolle ensimmäistä kertaa hänen täytyy luoda itselleen käyttäjätili Signup-linkin kautta. Käyttäjätilin luonti vaatii käyttäjältä sähköpostin, käyttäjänimen ja salasanan. (Kuva 1.) 

 

 

KUVA 1.  Asiakaskirjautuminen sekä käyttäjätilin luonti 

Kun tili on saatu luotua, käyttäjä voi kirjautua sisään omalla käyttäjätilillään, jonka jälkeen hän jatkaa kirjautumattomilta piilotettuun näkymään. Siellä hän voi tarkastella useita eri kaavioita, kuten maailmanlaajuista historiallista dataa lämpötilamuutoksista ja hiilidioksiditasoista Mauna Loa -tulivuorelta, piirakkakaaviota eri teollisuudenalueiden päästöistä sekä muita kaavioita. (Kuva 2.) 

 

 

 

 

 

KUVA 2. Näkymä päästölähteistä 

###Tietokanta 

Ohjelman tietokanta on MySQL pohjainen.  Tietokannasta löytyy kaikkien kaavioiden datat.  Tietokantaan myös tallentuu Käyttäjän luomat käyttäjätunnukset. Käyttäjän poistaessa tilinsä, tunnukset poistuvat tietokannasta. 

 

Sovellus pyörii Google Cloud Platformissa: React App (webproject-370907.ew.r.appspot.com). 
