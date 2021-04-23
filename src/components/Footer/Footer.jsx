import { IconButton, Typography } from "@material-ui/core";
import { Instagram, LinkedIn } from "@material-ui/icons";
import React from "react";
import "./Footer.scss";


export const Footer = () => {
    return (
        <footer>
            <div>
                <Typography variant="caption">
                    Amar Fadil - IEEE SB Branch ITB 2021<br />
                    (c) 2021 All Rights Reserved.
                </Typography>
            </div>
            <div>
                <IconButton href="https://www.instagram.com/marfgold1/" target="_blank" rel="noreferer">
                    <Instagram />
                </IconButton>
                <IconButton href="https://www.linkedin.com/in/amar-fadil-67960a184/" target="_blank" rel="noreferer">
                    <LinkedIn />
                </IconButton>
            </div>
        </footer>
    )
}