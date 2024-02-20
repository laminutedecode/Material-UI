// La composante <Stack> vous permet de créer des mises en page flexibles et réactives en empilant verticalement ou horizontalement des éléments enfants. Elle est particulièrement utile pour créer des mises en page simples et cohérentes en utilisant les principes de Material Design. Cela rajoute display flex sous le capot et par default elle a flex direction column
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery'
export default function StackComp() {


  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));



  return (
    <>
    <Stack spacing={2}>
      <Typography>Élément 1</Typography>
      <Typography>Élément 2</Typography>
      <Typography>Élément 3</Typography>
    </Stack>

    <Stack direction="row" spacing={2}>
      <Typography>Élément 1</Typography>
      <Typography>Élément 2</Typography>
      <Typography>Élément 3</Typography>
    </Stack>

    {/* //flexbox */}
    <Stack direction="row" spacing={2} alignItems="center" justifyContent="space-between">
      <Typography>Élément 1</Typography>
      <Typography>Élément 2</Typography>
      <Typography>Élément 3</Typography>
    </Stack>

    {/* text */}

    <Stack textAlign="center">
      <Typography>Élément 1</Typography>
      <Typography>Élément 2</Typography>
      <Typography>Élément 3</Typography>
    </Stack>

    {/* Responsive */}
    <Stack direction={isSmallScreen ? 'column' : 'row'} spacing={2}>
      <Typography>Élément 1</Typography>
      <Typography>Élément 2</Typography>
      <Typography>Élément 3</Typography>
    </Stack>

    {/* /stylisation */}
    <Stack sx={{ backgroundColor: 'primary.main', padding: 2 }}>
      <Typography sx={{ color: 'white' }}>Élément 1</Typography>
      <Typography sx={{ color: 'white' }}>Élément 2</Typography>
      <Typography sx={{ color: 'white' }}>Élément 3</Typography>
    </Stack>

    </>
  )
}
