import React, { useEffect, useState } from "react";
import { Layout } from "../../Layout/Layout";
import { Grid, Typography, Button, Box } from "@material-ui/core";
import { ArrowDropDown } from "@material-ui/icons";
import { Link } from "react-scroll";
import BgImage from '../../images/tvss.png';
import Foto from '../../images/foto.jpg';
import './home.scss';

export const Home = () => {
    const [refIdx, setRefIdx] = useState(0);
    const [titleIdx, setTitleIdx] = useState(0);

    const title = [
        "Me",
        "Myself",
        "Amar",
        "Fadil"
    ]

    const references = [
        ["Maximal Poisson-disk Sampling with Rasterization", "https://research.nvidia.com/sites/default/files/pubs/2013-07_PixelPie-Maximal-Poisson-disk/pixelpie.Ip_.hpg13.pdf"],
        ["GPUGems 3", "https://developer.nvidia.com/gpugems/gpugems3"],
        ["The Book of Shaders", "https://thebookofshaders.com/"]
    ]

    useEffect(() => {
        let timer = setInterval(() => setRefIdx((x) => (x+1)%references.length), 3000);
        let timer2 = setInterval(() => setTitleIdx((x) => (x+1)%title.length), 5000);
        return () => {
            clearInterval(timer);
            clearInterval(timer2);
        }
    }, [title.length, references.length])

    return (
        <Layout>
            <Box display="flex" flexDirection="column" className="view-root bgImage" p={3} style={{
                backgroundImage: `linear-gradient(69deg, rgb(2 2 49 / 68%), rgb(35 0 37 / 61%)), url(${BgImage})`
            }}>
                <Grid item container direction="column" className="hero">
                    <Typography variant="h1" align="center" fontWeight={600}>Get to know <span className="animated-text title-text">{title[titleIdx]}</span></Typography>
                    <Typography variant="subtitle1">A little kid passionated for technology and its future.</Typography>
                </Grid>
                <Grid item className="more">
                    <Button component={Link} to="info" smooth={true} duration={300} startIcon={<ArrowDropDown />}>More Info</Button>
                </Grid>
            </Box>
            <Box display="flex" minHeight="100vh" flexDirection={{xs: 'column', sm: 'row'}} className="view-root background-one" id="info">
                <Box className="frame">
                    <Typography variant="h3"><b>Hello!</b> My name is<br /><span className="animated-text">Amar Fadil</span></Typography>
                    <Box my={3}>
                        <Typography variant="body1">
                            I'm 19 years old, currently being a freshman at School of Electrical Engineering and Informatics in Bandung Institute of Technology.
                            Casually love programming, mostly for creative, one-time use purpose (also known as creative coding). I believe that IEEE has
                            the opportunity to open many doors which will enable me to expand my networking and grow my technical skills in preparation
                            for future careers. Being a freshman in STEI 2020 is somewhat a miracle to me, but hey, I consider myself as a quick learner and self-taught, so
                            in the end, I'll eventually study to learn more about computer science.
                        </Typography>
                    </Box>
                    <Typography variant="caption">
                        I mean, who love to read <span className="animated-text"><i><a href={references[refIdx][1]} target="_blank" rel="noreferrer">{references[refIdx][0]}</a></i></span> in his sparetime lol.
                    </Typography>
                </Box>
                <Box className="frame center">
                    <img src={Foto} alt="foto sy"></img>
                </Box>
            </Box>
        </Layout>
    )
}