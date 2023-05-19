import { Card, CardContent, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect } from "react";
import axios from "axios";

interface JSONData {
  name: string;
  number: Number;
  key: string;
}

const Test = () => {
  const [toggle, setToggle] = React.useState(true);
  const [arrayData, setArrayData] = React.useState<JSONData[]>([]);

  useEffect(() => {
    setToggle(false);
    async function getData() {
      if (toggle) {
        await axios.get("/api/example").then((response) => {
          for (let int in response.data) {
            setArrayData((arrayData) => [...arrayData, response.data[int]]);
          }
        });
        return;
      }
    }
    getData();
  }, [arrayData, toggle]);

  return (
    <div className="main-contianer" style={{ paddingTop: "5vh" }}>
      <Card sx={{ ml: "15vw", mr: "15vw" }}>
        <CardContent>
          <Typography variant="h3" style={{ textAlign: "center" }}>
            Download a Demo
          </Typography>
        </CardContent>
      </Card>

      {arrayData.map((element) => (
        <Card variant="outlined" sx={{ m: "5vw" }} key={element.key}>
          <CardContent>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignContent: "flex-start",
                alignItems: "center",
              }}
            >
              <Typography sx={{ ml: "10vw" }}>{element.name}</Typography>
            </Box>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default Test;
