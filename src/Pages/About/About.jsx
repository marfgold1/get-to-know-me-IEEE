import React, { useEffect, useState } from "react";
import { Layout } from "../../Layout/Layout";
import { Grid, Typography, Button, Box } from "@material-ui/core";
import { ArrowDropDown, Forum, People, PersonAdd, ThumbDown, Warning, Work } from "@material-ui/icons";
import BgImage from '../../images/neon.png';
import { Link } from "react-scroll";

export const About = () => {
    const [titleIdx, setTitleIdx] = useState(0);

    const title = [
        "me",
        "myself",
        "Amar",
        "Fadil"
    ]

    useEffect(() => {
        let timer = setInterval(() => setTitleIdx((x) => (x+1)%title.length), 3000);
        return () => {
            clearInterval(timer);
        }
    }, [title.length])

    return (
        <Layout>
            <Box display="flex" flexDirection="column" className="view-root bgImage" style={{
                backgroundImage: `linear-gradient(225deg, rgb(45 0 19 / 67%), rgb(0 2 49 / 67%)), url(${BgImage})`
            }}>
                <Grid item container direction="column" className="hero">
                    <Typography variant="h1" align="center" fontWeight={600}>So, what special about <span className="animated-text title-text">{title[titleIdx]}</span>?</Typography>
                    <Typography variant="subtitle1">I hope you know me better, I guess?</Typography>
                </Grid>
                <Grid item className="more">
                    <Button component={Link} to="info" smooth={true} duration={300} startIcon={<ArrowDropDown />} gutterBottom>More Info</Button>
                </Grid>
            </Box>
            <Box display="flex" minHeight="100vh" flexDirection={{xs: 'column', sm: 'row'}} className="view-root background-two" id="info">
                <Box className="frame">
                    <Typography variant="h3"><span className="animated-text">Strength</span></Typography>
                    <Box my={3}>
                        <Typography variant="body1">
                            My strength was heavily depend by my ability to learn something quickly and easily to adopting a new technology.
                            With various experience I've built in since years, my self-taught skill was developed significantly.
                            I'm highly comitted into my job, even sometimes people said I've done enough a good job, but I always said that's
                            not enough for my standard.
                        </Typography>
                    </Box>
                    <Typography variant="caption">
                        Yeah, prolly.
                    </Typography>
                </Box>
                <Box className="frame center">
                    <PersonAdd style={{ fontSize: "25vw" }} />
                </Box>
            </Box>
            <Box display="flex" minHeight="100vh" flexDirection={{xs: 'column', sm: 'row'}} className="view-root background-four">
                <Box className="frame center">
                    <ThumbDown style={{ fontSize: "25vw" }} />
                </Box>
                <Box className="frame right">
                    <Typography variant="h3"><span className="animated-text">Weakness</span></Typography>
                    <Box my={3}>
                        <Typography variant="body1">
                            My weakness is that sometimes I'm a bit procrastinating. I was easy to get distracted for something that I
                            can't enjoy <small>(*cough* mafiki *cough*)</small>. I can't really focus into the actual thing that matters
                            just because I don't really like it. I'm a bit moody too.
                        </Typography>
                    </Box>
                    <Typography variant="caption">
                        To be fair, I'm highly dedicated for my passion, which is inversely proportional to something that I didn't like.
                    </Typography>
                </Box>
            </Box>
            <Box display="flex" minHeight="100vh" flexDirection={{xs: 'column', sm: 'row'}} className="view-root background-three">
                <Box className="frame">
                    <Typography variant="h3"><span className="animated-text">Opportunity</span></Typography>
                    <Box my={3}>
                        <Typography variant="body1">
                            Backed up with a skill that I developed for years, people usually prefer me to help them built their website,
                            Such case where I developed 3 websites just for my faculty:
                            <span className="animated-text"><a href="https://dashboard.aksitpb20.com/login" target="_blank" rel="noreferrer"> Dashboard Aksi TPB</a></span>,
                            <span className="animated-text"><a href="https://pilketang.stei20.my.id/" target="_blank" rel="noreferrer"> Pilketang STEI 2020 ITB</a></span> (used two times, for pilketang and pilwatpb) and in the current time,
                            <span className="animated-text"><a href="http://impactitb.com/" target="_blank" rel="noreferrer"> IMPACT 2.0</a></span>.
                            Even better, I can improve my soft skill by volunteering to an open source organization, or obviously, joining
                            IEEE ITB Student Branch Batch 2021 :D
                        </Typography>
                    </Box>
                    <Typography variant="caption">
                        <span className="animated-text"><a href="https://gist.github.com/marfgold1/1890a3eeba9fac978b68ad64cd0f7b27" target="_blank" rel="noreferrer">I've helped folks in OpenWISP during my Google Code-in time, btw!</a></span>
                    </Typography>
                </Box>
                <Box className="frame center">
                    <Work style={{ fontSize: "25vw" }} />
                </Box>
            </Box>
            <Box display="flex" minHeight="100vh" flexDirection={{xs: 'column', sm: 'row'}} className="view-root background-one">
                <Box className="frame center">
                    <Warning style={{ fontSize: "25vw" }} />
                </Box>
                <Box className="frame right">
                    <Typography variant="h3"><span className="animated-text">Threats</span></Typography>
                    <Box my={3}>
                        <Typography variant="body1">
                            In a rapid change of technology, I might found some of it to be troublesome to learn (have a hard time learn DOTS, for example).
                            There are so many talented people out here in my faculty, some might actually compete with me.
                            Additionally, weakness could be my threats too.
                        </Typography>
                    </Box>
                    <Typography variant="caption">
                        In before, my laptop broke thus I'm kind of in rush to make this web LMAO.
                    </Typography>
                </Box>
            </Box>
            <Box display="flex" minHeight="100vh" flexDirection={{xs: 'column', sm: 'row'}} className="view-root background-four">
                <Box className="frame">
                    <Typography variant="h4"><People /> <span className="animated-text">Organizational Experience</span></Typography>
                    <Box my={3}>
                        <Typography variant="body1">
                            My organizational experience consist of:
                            <ul>
                                <li>Smanthree Computer Club</li>
                                <li>ARC ITB</li>
                                <li>Genshiken ITB</li>
                                <li>Ganesha Interactive Media</li>
                            </ul>
                        </Typography>
                    </Box>
                    <Typography variant="caption">
                        Not a whole lot so I'd like to expand it ^^
                    </Typography>
                </Box>
                <Box className="frame right">
                    <Typography variant="h4"><Forum /> <span className="animated-text">Others tell me that I'm...</span></Typography>
                    <Box my={3}>
                        <Typography variant="body1">
                            <ul>
                                <li>caring, lovely, and friendly. -d</li>
                                <li>professional and initiator. -d</li>
                                <li>hardworking, good ethics, and outgoing. -i</li>
                                <li><s>ugly and insecure. -i (lol thanks i)</s></li>
                                <li>critical that allows myself to be better. -a</li>
                            </ul>
                        </Typography>
                    </Box>
                    <Typography variant="caption">
                        I didn't make those statement, I swear.
                    </Typography>
                </Box>
            </Box>
        </Layout>
    )
}