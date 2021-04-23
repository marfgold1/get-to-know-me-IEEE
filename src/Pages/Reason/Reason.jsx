import React, { useEffect, useState } from "react";
import { Layout } from "../../Layout/Layout";
import { Grid, Typography, Button, Box } from "@material-ui/core";
import { ArrowDropDown } from "@material-ui/icons";
import { Link } from "react-scroll";
import BgImage from '../../images/become.png';

export const Reason = () => {
    const [titleIdx, setTitleIdx] = useState(0);

    const title = [
        "My",
        "Amar",
        "Fadil"
    ]

    useEffect(() => {
        let timer = setInterval(() => setTitleIdx((x) => (x+1)%title.length), 5000);
        return () => {
            clearInterval(timer);
        }
    }, [title.length])

    return (
        <Layout>
            <Box display="flex" flexDirection="column" className="view-root bgImage" p={3} style={{
                backgroundImage: `linear-gradient(169deg, rgb(78 0 33 / 70%), rgb(1 0 43 / 75%)), url(${BgImage})`
            }}>
                <Grid item container direction="column" className="hero">
                    <Typography variant="h1" align="center" fontWeight={600}><span className="animated-text title-text">{title[titleIdx]}</span> Reason</Typography>
                    <Typography variant="subtitle1">Obviously, there was a reason for anything, including the reason why I decided to join IEEE ITB SB.</Typography>
                </Grid>
                <Grid item className="more">
                    <Button component={Link} to="info" smooth={true} duration={300} startIcon={<ArrowDropDown />}>More Info</Button>
                </Grid>
            </Box>
            <Box display="flex" minHeight="100vh" flexDirection={{xs: 'column', sm: 'row'}} className="view-root background-four" id="info">
                <Box className="frame center">
                    <Typography variant="h3"><span className="animated-text">My Reason</span></Typography>
                    <Typography variant="caption">
                        Why did I want to join IEEE ITB SB 2021?
                    </Typography>
                    <Box my={3}>
                        <Typography variant="body1">
                            I decide to join IEEE ITB Student Branch because I eager to learn more about IEEE and achieve
                            the benefit for joining IEEE ITB SB. In IEEE ITB SB, I hope I can acquire more technical knowledge,
                            expand my professional networking and also social or managerial skills to prepare for my future
                            professional career after graduating from ITB.
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </Layout>
    )
}