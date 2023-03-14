import { Typography } from "@mui/material";

export const MuiTypography = () => {
  return (
    <div>
    {/* Heading 1 - 6 */}
      <Typography variant="h1">h1 Heading</Typography>
      <Typography variant="h2">h2 Heading</Typography>
      <Typography variant="h3">h3 Heading</Typography>
      <Typography variant="h4">h4 Heading</Typography>
      <Typography variant="h4" component='h1' gutterBottom>type h4 to type h1 Heading</Typography>
      <Typography variant="h5">h5 Heading</Typography>
      <Typography variant="h6">h6 Heading</Typography>

    {/* Subtitle 1 - 2 */}
      <Typography variant="subtitle1">subtitle1</Typography>
      <Typography variant="subtitle2">subtitle2</Typography>

    {/* Body 1 - 2 */}
      <Typography variant="body1">Body1 - Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis eaque earum cupiditate, molestiae obcaecati facere expedita voluptates dicta nisi vero id voluptatum, illum laboriosam eveniet omnis praesentium laborum deserunt alias?</Typography>
      <Typography variant="body2">Body2 - Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur tempora, aut quod eos dolorem fugit quae voluptas. Sint soluta, quo porro dicta dolorum veniam similique voluptatum, vel necessitatibus, praesentium nostrum.</Typography>

    </div>
  )
}
