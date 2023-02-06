# WebApp  -  ilmastonmuutokseen liittyvän tiedon visualisointityökalu

Tekijät:  Tommi Jouppila, Tommi Kyllönen, Vili Kauhanen ja Juha Nieminen


# Esittely

WebApp on  Oulun ammattikorkeakoulun 2.vuoden syksyn sovellusprojektina neljän hengen ryhmässä  suunniteltu ja toteutettu sovellus, jolla voi tarkastella ilmastonmuutokseen liittyvää tietoa visuaalisesti erilaisten kaavioiden avulla. Sovelluksen frontend on toteutettu Reactilla  ja backend Javalla. Tietokanta on MySQL-pohjainen.

## Käyttöliittymä

Käyttäjän saapuessa sivustolle ensimmäistä kertaa hänen täytyy luoda itselleen käyttäjätili Signup-linkin kautta. Käyttäjätilin luonti vaatii käyttäjältä sähköpostin, käyttäjänimen ja salasanan.  (Kuva 1.)

![](https://media.discordapp.net/attachments/1047466096673947653/1053252381850206218/image.png)
<br></br>
KUVA 1. Asiakaskirjautuminen sekä käyttäjätilin luonti

Kun tili on saatu luotua, käyttäjä voi kirjautua sisään omalla käyttäjätilillään, jonka jälkeen hän  jatkaa kirjautumattomilta piilotettuun näkymään.  Siellä hän  voi tarkastella useita eri kaavioita,  kuten maailmanlaajuista historiallista dataa lämpötilamuutoksista ja  hiilidioksiditasoista Mauna Loa -tulivuorelta, piirakkakaaviota eri teollisuudenalueiden päästöistä sekä muita  kaavioita. (Kuva 2.)

![](https://cdn.discordapp.com/attachments/1047466096673947653/1053252395301347379/image.png)
<br></br>
KUVA 2. Näkymä päästölähteistä

## Tietokanta

Ohjelman tietokanta on MySQL pohjainen. Tietokannasta löytyy kaikkien kaavioiden datat. Tietokantaan myös tallentuu Käyttäjän luomat käyttäjätunnukset. Käyttäjän poistaessa tilinsä, tunnukset poistuvat tietokannasta.

Sovellus pyörii [Google Cloud Platformissa](webproject1-375610.ey.r.appspot.com ".")
