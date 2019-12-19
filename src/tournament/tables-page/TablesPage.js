import React from "react";
import makeStyles from "@material-ui/core/es/styles/makeStyles";
import Container from "@material-ui/core/es/Container/Container";

const useStyles = makeStyles(theme => ({
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
    },
}));

export default function TourTablesPage() {
    const classes = useStyles();

    return (
        <Container className={classes.cardGrid} maxWidth="md">
            TABLES
        </Container>
    );
}