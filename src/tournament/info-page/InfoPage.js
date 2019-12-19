import React from "react";
import makeStyles from "@material-ui/core/es/styles/makeStyles";
import Container from "@material-ui/core/es/Container/Container";
import Grid from "@material-ui/core/es/Grid/Grid";

const useStyles = makeStyles(theme => ({
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
    },
    card: {
        height: '100%',
    },
    title: {
        fontSize: 14,
    },
}));

export default function TourInfoPage() {
    const classes = useStyles();

    return (
        <Container className={classes.cardGrid} maxWidth="md">
            <Grid container spacing={4}>
                <Grid item xs={12} sm={6} md={4}>
                    Info
                </Grid>
            </Grid>
        </Container>
    );
}