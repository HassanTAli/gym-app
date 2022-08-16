import { Box } from "@mui/material";
import React from "react";
import Exercise from "../Components/HomeComponents/Exercise";
import HeroBanner from "../Components/HomeComponents/HeroBanner";
import SearchExercise from "../Components/HomeComponents/SearchExercise";

const Home = () => {
  return (
    <Box>
      <HeroBanner />
      <SearchExercise />
      <Exercise />
    </Box>
  );
};

export default Home;
