import React from 'react';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

function MyTooltip() {
  return (
    <>
    
    <Tooltip title="Supprimer">
      <IconButton aria-label="delete">
        <DeleteIcon />
      </IconButton>
    </Tooltip>
    

    <Tooltip title="Supprimer" enterDelay={500} leaveDelay={200}>
  <IconButton aria-label="delete">
    <DeleteIcon />
  </IconButton>
</Tooltip>

{/* Dans cet exemple, le tooltip apparaîtra avec un délai de 500 millisecondes après que l'utilisateur a survolé l'élément, et disparaîtra après un délai de 200 millisecondes après que l'utilisateur ait quitté l'élément. */}


<Tooltip title="Supprimer" arrow>
  <IconButton aria-label="delete">
    <DeleteIcon />
  </IconButton>
</Tooltip>

{/* En ajoutant l'attribut arrow avec la valeur true, un petit triangle d'indication sera affiché à côté du tooltip. */}

<Tooltip title="Supprimer" placement="right">
  <IconButton aria-label="delete">
    <DeleteIcon />
  </IconButton>
</Tooltip>

{/* Dans cet exemple, le tooltip apparaîtra en haut de l'élément lorsqu'il sera survolé par l'utilisateur. Vous pouvez également utiliser les valeurs "bottom", "left", "right", etc. pour spécifier différentes positions. */}


<Tooltip
  title="Supprimer"
  disableFocusListener
  disableHoverListener
  disableTouchListener
>
  <IconButton aria-label="delete">
    <DeleteIcon />
  </IconButton>
</Tooltip>

{/* En désactivant certains écouteurs d'événements, vous pouvez contrôler précisément dans quelles circonstances le tooltip est affiché. */}




    
    </>
  );
}

export default MyTooltip;
