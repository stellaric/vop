Select lastname , firstname ,namedestination from Users JOIN Destinations ON Users.id = Destinations.id;


/*afficher tout les utlisateurs */
select * from Users ;


/*créer un utilisateur*/
INSERT INTO `Users` (`id`, `lastname`, `firstname`, `email`, `isAdmin`, `password`, `createdAt`, `updatedAt`) VALUES ('4', 'Dupont', 'Cédric', 'cedric@gmail.com', '0', 'azerty', '2023-10-02 12:59:37', '2023-11-02 12:59:37');


/*afficher le nom , prenom et detination de l'utilisateur*/
select lastname,firstname,namedestination from Destinations join Users.id = Destinations.id ;

