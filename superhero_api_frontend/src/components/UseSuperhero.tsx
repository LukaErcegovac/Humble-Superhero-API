//This file contains the logic for the superhero component. Its a functional component that uses hooks to manage state and side effects.
import { useState, useEffect } from "react";
import Superhero from "./Superhero";
import axios from "axios";

export default function UseSuperhero() {
  const [heroes, setHeroes] = useState([]);
  const [newHero, setNewHero] = useState({
    name: "",
    superpower: "",
    humilityScore: 5,
  });

  //This function is used to fetch all the superheroes from the backend.
  const fetchHeroes = async () => {
    const response = await axios.get("http://localhost:3000/superhero");
    setHeroes(response.data);
  };

  //This hook is used to fetch the superheroes when the component mounts.
  useEffect(() => {
    fetchHeroes();
  }, []);

  //This function is used to handle the input change event.
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value =
      event.target.name === "humilityScore"
        ? event.target.value === ""
          ? 5
          : Number(event.target.value)
        : event.target.value;
    setNewHero({ ...newHero, [event.target.name]: value });
  };

  //This function is used to handle the form submit event.
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    axios
      .post("http://localhost:3000/superhero", newHero)
      .then(() => fetchHeroes())
      .catch((error) => console.error("Error adding hero:", error));
  };

  return (
    <Superhero
      heroes={heroes}
      newHero={newHero}
      handleInputChange={handleInputChange}
      handleSubmit={handleSubmit}
    />
  );
}
