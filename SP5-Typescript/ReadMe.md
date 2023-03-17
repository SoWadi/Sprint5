- Exercici 3
L'entreprise commanditaire du projet doit suivre l'utilisation de ce site pour son étude.
Pour cela, il faut connaître le niveau d'acceptation des blagues, un tracking pour savoir 
quand les employés sont de la meilleure humeur, et combien de blagues sont consommées en moyenne.


Comment cette requête se traduit-elle dans notre code ?

Vous devrez générer un tableau appelé reportJokes, dans lequel nous conserverons 
toutes les informations relatives à la blague que le client nous demande.



{

  joke: "...",

  score: 1,

  date: ...

}

const d = new Date();
let text = d.toISOString();
document.getElementById("demo").innerHTML = text;



- Le score du champ va de 1 à 3, 1 étant le pire score. 
Vous devrez implémenter 3 boutons entre la blague et le bouton pour charger la prochaine blague, afin que l'utilisateur puisse la noter.

- Les boutons de vote ne seront pas affichés initialement, uniquement lorsque les blagues commenceront à apparaître.

- Le vote pour la blague par l'utilisateur est facultatif (vous pouvez passer à la blague suivante sans voter).

- Une fois que l'utilisateur a voté, il peut modifier son vote avant de passer à la blague suivante.

- Avec le score de la blague, ainsi que la blague et la génération d'une date, vous devrez remplir le tableau reportJokes.

Lorsque vous mettez à jour ce tableau, il suffira d'afficher son contenu sur la console.


      ____________________________________________________________________________________________________

      -------------------------------------------- Exercici 5 --------------------------------------------
      ____________________________________________________________________________________________________
          

Le client nous a donné la première preuve que les utilisateurs s'ennuieront s'ils continuent à montrer le même type de blagues.

Vous devez trouver une autre API de blague (ou des API) et l'utiliser pour alterner des blagues provenant de différentes sources (soit en alternant une de chacune, soit de manière aléatoire).

Aide : les blagues sur Chuck Norris ne manquent jamais.