//This is the frontend component for the superhero registry. It displays a form to add a superhero and a list of all superheroes.
//Component was created using the Material-UI library.
import {
  Container,
  Typography,
  TextField,
  Button,
  List,
  ListItem,
  ListItemText,
  Box,
} from "@mui/material";

//This interface defines the props for the Superhero component.
interface SuperheroProps {
  heroes: Array<{ name: string; superpower: string; humilityScore: number }>;
  newHero: { name: string; superpower: string; humilityScore: number };
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (event: React.FormEvent) => void;
}

export default function Superhero({
  heroes,
  newHero,
  handleInputChange,
  handleSubmit,
}: SuperheroProps) {
  return (
    <Container maxWidth="md">
      <Box sx={{ mt: 4, mb: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom>
          Superhero Registry
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ mb: 4 }}>
          <Box
            sx={{ display: "flex", justifyContent: "center", gap: 2, mb: 2 }}
          >
            <TextField
              label="Name"
              variant="outlined"
              fullWidth
              name="name"
              value={newHero.name}
              onChange={handleInputChange}
              required
            />
            <TextField
              label="Superpower"
              variant="outlined"
              fullWidth
              name="superpower"
              value={newHero.superpower}
              onChange={handleInputChange}
              required
            />
            <TextField
              label="Humility Score"
              variant="outlined"
              fullWidth
              type="number"
              name="humilityScore"
              value={newHero.humilityScore}
              onChange={handleInputChange}
              inputProps={{ min: "1", max: "10" }}
              helperText="Optional: Rate from 1-10"
              required={false}
            />
          </Box>
          <Button type="submit" variant="contained" color="primary">
            Add Superhero
          </Button>
        </Box>
        <Typography variant="h4" component="h2" gutterBottom>
          Hero Ranking
        </Typography>
        <List sx={{ bgcolor: "background.paper" }}>
          {heroes.map((hero, index) => (
            <ListItem key={index}>
              <ListItemText
                primary={`${hero.name} - ${hero.superpower} - ${hero.humilityScore}`}
              />
            </ListItem>
          ))}
        </List>
      </Box>
    </Container>
  );
}
