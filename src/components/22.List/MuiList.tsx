
import { List, ListItem, ListItemText, ListSubheader } from '@mui/material';

function MyList() {
  return (
    <List dense subheader={<ListSubheader>Options</ListSubheader>}>
      <ListItem  onClick={() => console.log('Item 1 clicked')}>
        <ListItemText primary="Item 1" />
      </ListItem>
      <ListItem  onClick={() => console.log('Item 2 clicked')}>
        <ListItemText primary="Item 2" />
      </ListItem>
      <ListItem  onClick={() => console.log('Item 3 clicked')}>
        <ListItemText primary="Item 3" />
      </ListItem>
    </List>
  );
}

export default MyList;

// dense: Si vrai, réduit la hauteur de chaque élément de liste pour obtenir une liste plus compacte.

// disablePadding: Si vrai, supprime la rembourrage standard de la liste. Utile lorsque vous avez besoin de personnaliser le style de rembourrage vous-même.

// subheader: Permet de spécifier un sous-en-tête pour la liste. Le sous-en-tête est un composant React qui apparaît en haut de la liste et peut être utilisé pour afficher des informations supplémentaires ou organiser visuellement la liste.

// component: Permet de spécifier un composant personnalisé à utiliser pour le rendu de la liste. Par exemple, vous pouvez utiliser component="nav" pour indiquer que la liste est une liste de navigation.

// sx ou className: Permet de spécifier des styles en ligne ou des classes CSS pour personnaliser l'apparence de la liste.

// children: Permet de spécifier les éléments de liste en tant qu'enfants du composant List plutôt que d'utiliser des ListItem individuels. Cela peut être utile lorsque vous générez dynamiquement les éléments de liste.

// disableGutters: Si vrai, supprime les marges internes de chaque élément de liste. Cela peut être utile lorsque vous avez besoin d'un contrôle plus fin sur le style de la liste.
