import { Card, CardContent, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Animal from "../../types/animal";

const Animals = () => {
  const [toggle, setToggle] = useState(true);
  const [arrayData, setArrayData] = useState<Animal[]>([]);
  const [checkCounter, setCheckCounter] = useState(0);

  setInterval(() => {
    setCheckCounter(checkCounter + 1);
  }, 1510)

  useEffect(() => {
    setToggle(false);
    async function getData() {
      await axios.get("/api/animal").then((response) => {
        for (let int in response.data) {
          setArrayData([...response.data.animals]);
        }
      });
      console.log(arrayData)
      return;
    }
    getData();
  }, [checkCounter]);

  return (
    <div className="main-contianer" style={{ paddingTop: "5vh" }}>
      <Card sx={{ ml: "15vw", mr: "15vw" }}>
        <CardContent>
          <Typography variant="h3" style={{ textAlign: "center" }}>
            There are currently {arrayData.length}.  wut if there wuz moar animals?
          </Typography>
        </CardContent>
        
      </Card>

      {arrayData.map((e) => (
        <Card variant="outlined" sx={{ m: "5vw" }} key={e.key}>
          <CardContent>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignContent: "flex-start",
                alignItems: "center",
              }}
            >
              <Typography sx={{ ml: "10vw" }}>{e.name}</Typography>
            </Box>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default Animals;
