                USER
// inscription
 route : http://localhost:5001/api/user/register
 methode:post 
 data :
 {
    "lastname":"", "firstname":"", "email":"", "password":""
    "lastname":"mamie", "firstname":"mamie", "email":"mami@gmail.com", "password":"1234567"

 }

 //connexion
 route : http://localhost:5001/api/user/login
 methode:post 
 data :
 {
   "email":"mami@gmail.com", "password":"1234567"

 }
 //afiicher tous les utilisateurs
 recupere le token
 se  login d'abord
 recuprer le token sans le mot token et sans ""
 va dans authorization
 puis  berer token
 je colle mon token
 puis sur la route ici
 route : http://localhost:5001/api/user/
 methode:get 


 // récupérer des informations sur 1 seul utilisateur
 route : http://localhost:5001/api/user/1
 methode:get 

               RESERVATION
  // création de reservation il faut etre connecté pour reserver
  route : http://localhost:5001/api/voyage/reservation
 methode:post 

 "nbadulte":2,
      "nbbebe":1,
      "nbchambre":3,
      "datearrivee":"2023-09-25T17:11:00.000Z",
      "datedepart":"2023-09-25T17:11:00.000Z",
      "destinationId":1,
      "userId":1

               HOTEL
  // création d'hôtel
  route : http://localhost:5001/api/voyage/hotel
 methode:post 

form data  infos dejà rempli ajoux image

//pour afficher tous les  hotels
http://localhost:5001/api/voyage/hotel
 methode:get 
       
                 VOL
                 
// création  vol
  route : http://localhost:5001/api/voyage/vol
 methode:post

     "numerovol":"2",
      "compagnieaerienne":"2",
      "aeroportdepart":"CDG",
      "aeroport":"miami",
      "aeroportarrivee": "mami",
      "dateheuredepart": "2023-09-25T17:11:00.000Z",
      "dateheurearrivee":"2023-09-25T17:11:00.000Z",
      "destinationId": "1"


      AFFICHER TOUTES LES RESERVATIONS

route http://localhost:5001/api/voyage/reservation
methode get

      adminOnly enlever dans voyages controlleurs


 /*******************/

                 

