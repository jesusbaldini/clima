import { LoadingButton } from "@mui/lab";
import { Box, Container, TextField, Typography } from "@mui/material";
import { useState } from "react";

//console.log(import.meta.env.VITE_API_KEY);
const api_weather="https://www.weatherapi.com/v1/current.json?key=${import.meta.env.vite_api_key}&q="
export default function app () {
const [city, setcity] =useState ("");
const [loading, setloading] =useState("false");

    const onsubmit = e =>{
e.preventdefault();
console.log("submit")

    }
return (
<Container
maxWidth="xs"
sx={{mt: 2}}
>
<Typography

variant="h3"
component="h1"
align="center"
gutterBottom

>
    weather App
    </Typography>
    <Box
    sx={{display: "grid", gap: 2}}
    component="form"
    autoComplete="off"
    onSubmit={onsubmit}

    >
<TextField
id="city"
label="ciudad"
variant="outlined"
size="small"
required
fullWidth
value={city}
onChange={(e)=> setcity(e.target.value) }
/>
<LoadingButton
type="submit"
variant="contained"
loading={loading}
loadingIndicator="cargando.."

>
    buscar
</LoadingButton>
    </Box>

<Typography
textAlign="center"
sx={{mt:2, fontSize: "10px"}}
>
powered by:{""}
<a
href="https://www.weatherapi.com/"
title="weathear api"

>
weathearapi.com 
</a>

</Typography>
</Container>



);
}

