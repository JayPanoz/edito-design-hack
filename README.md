# edito-design-hack

Dépôt public des livres de la série “Édito|Design|Hack”

## Licence

CC-BY-NC-SA 4.0 (voir [LICENSE](LICENSE)).

## Téléchargement

1. [L’Éditorial numérique](https://github.com/JayPanoz/edito-design-hack/raw/master/dist/LEditorialNumerique.epub)
2. [Design du livre numérique](https://github.com/JayPanoz/edito-design-hack/raw/master/dist/DesignDuLivreNumerique.epub)
3. [Hack le livre](https://github.com/JayPanoz/edito-design-hack/raw/master/dist/HackLeLivre.epub)

## Disclaimer

Tout d’abord, un grand merci à Julien Simon, co-auteur de *L’Éditorial numérique*, pour avoir donné son accord au partage de ces essais.

S’ils sont désormais disponibles en Creative Commons, c’est parce qu’une réédition demanderait un travail de mise à jour considérable : beaucoup de projets ont évolué, quelques idées se sont vues confirmer quand d’autres expérimentations n’ont pas su trouver leur public, quelques start-ups ont bien grandi alors que d’autres ont dû fermer.

En outre, après avoir bien voyagé dans le livre numérique (designer puis créateur d’outils, développeur d’app de lecture, etc.), certaines perspectives de l’auteur de 2013 ne sont plus forcément les mêmes qu’aujourd’hui.

Pour ces raisons, il conviendra donc au lecteur interessé de traverser certains contenus avec prudence.

## Package

Lors de votre première utilisation, installez les dépendences avec:

```
npm install
```

Puis, après avoir modifié les `src`, vérifiez que les fichiers passent EPUBCheck:

```
npm test
```

Enfin:

```
npm run package
```

Le script mettra automatiquement à jour les fichiers EPUB dans le dossier `dist`.