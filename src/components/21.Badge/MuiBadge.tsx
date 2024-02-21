
import { Badge } from '@mui/material';
import MailIcon from '@mui/icons-material/Mail';




function MyBadge() {
  return (
    <div>
      <Badge badgeContent={4} color="primary">
        <MailIcon />
      </Badge>

        <Badge
        badgeContent={4}
        color="primary"
        overlap="circular"
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        variant="dot"
      >
        <MailIcon />
      </Badge>

     
    </div>
  );
}

export default MyBadge;


// invisible: Si vrai, masque le badge. Cela peut être utile si vous voulez rendre le badge visible ou invisible en fonction d'une condition.

// max: Permet de limiter la valeur affichée dans le badge. Si la valeur de badgeContent dépasse max, le badge affichera un signe "+" pour indiquer qu'il y a plus d'éléments que ce qui est affiché.

// overlap: Permet de spécifier comment le badge doit se superposer à son contenu. Les valeurs possibles sont "rectangle" (par défaut) et "circular".

// anchorOrigin: Permet de spécifier l'origine de l'ancre du badge par rapport à son contenu. Cela contrôle où le badge apparaît par rapport à son contenu. Vous pouvez spécifier les propriétés vertical (par exemple, "top", "bottom") et horizontal (par exemple, "left", "right") pour ajuster sa position.

// variant: Permet de spécifier la variante du badge. Les valeurs possibles sont "standard" (par défaut), "dot" et "number". "standard" affiche le badge avec le contenu fourni, "dot" affiche un simple point sans contenu, et "number" affiche le contenu dans un cercle.

// sx ou className: Permet de spécifier des styles en ligne ou des classes CSS pour personnaliser l'apparence du badge.

// children: Permet de spécifier le contenu du badge. Vous pouvez placer n'importe quel élément ou composant à l'intérieur du badge.