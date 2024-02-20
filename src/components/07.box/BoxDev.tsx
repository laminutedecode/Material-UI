import {Box} from "@mui/material"
// Je vois, vous parlez de l'utilisation de la composante <Box> avec Material-UI. Dans Material-UI, <Box> est une composante polyvalente qui peut être utilisée pour créer des mises en page, des boîtes à contenu, des conteneurs flexibles et bien plus encore. Elle fournit une manière flexible et puissante de styliser et organiser le contenu dans vos applications React.
export default function BoxDev() {
  return (
    <>
      <Box component='span'>Je suis un span</Box>
      <Box component='h1'>Je suis un titre - H1</Box>
      <Box component='h2'>Je suis un titre - H2</Box>
      <Box component='h3'>Je suis un titre - H3</Box>
      <Box component='h4'>Je suis un titre - H4</Box>
      <Box component='h5'>Je su n ttre - H5</Box>
      <Box component='h6'>Je suis un titre - H6</Box>
      <Box 
      component='a' href='https://google.com'
      display="block"
      sx={{
        backgroundColor: 'primary.main',
        color: 'white',
        width: '150px',
        height: '50px',
        paddinh: '16px',
        textAlign: 'center',
        lineHeight: '50px',
        textDecoration: 'none',
        borderRadius: '10px'
      }}
      
      >Je suis un lien</Box>

      <Box display="flex">
        <div>Flex 1</div>
        <div>Flex 2</div>
        <div>Flex 3</div>
      </Box>


      <Box component="ul">
        <Box component="li">Item </Box>
        <Box component="li">Item </Box>
        <Box component="li">Item </Box>
      </Box>
    </>
  )
}


// "div"
// "span"
// "p"
// "h1", "h2", "h3", "h4", "h5", "h6"
// "header"
// "footer"
// "nav"
// "main"
// "section"
// "article"
// "aside"
// "ul", "ol", "li"
// "table", "thead", "tbody", "tr", "th", "td"
// "form", "input", "button", "label", "select", "option"
// "img"