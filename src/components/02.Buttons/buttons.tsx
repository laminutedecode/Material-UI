// Le "Stack" est un composant dans Material-UI qui est utilisé pour créer des mises en page verticales ou horizontales. Il est particulièrement utile pour empiler des éléments les uns au-dessus des autres ou côte à côte, avec un espacement et un alignement appropriés entre eux.
import {Button, Stack} from "@mui/material"

export default function Buttons(){
  return (
    <>  
        <Stack spacing={2}>
          {/* bouton text */}
          <Button variant="text">Text</Button>
          {/* bouton plein */}
          <Button variant="contained">Contained</Button>
          {/* bouton border */}
          <Button variant="outlined">Outlined</Button>
        </Stack>
    </>
  )
}