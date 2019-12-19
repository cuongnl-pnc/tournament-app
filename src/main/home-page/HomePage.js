import React from "react";
import Typography from "@material-ui/core/es/Typography/Typography";
import makeStyles from "@material-ui/core/es/styles/makeStyles";
import Container from "@material-ui/core/es/Container/Container";
import Grid from "@material-ui/core/es/Grid/Grid";
import Card from "@material-ui/core/es/Card/Card";
import CardContent from "@material-ui/core/es/CardContent/CardContent";
import CardActions from "@material-ui/core/es/CardActions/CardActions";
import Button from "@material-ui/core/es/Button/Button";

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

export default function HomePage() {
    const classes = useStyles();

    return (
        <Container className={classes.cardGrid} maxWidth="md">
            <Grid container spacing={4}>
                <Grid item xs={12} sm={6} md={4}>
                    <Card className={classes.card}>
                        <CardContent>
                            <Typography className={classes.title} color="textSecondary" gutterBottom>
                                Sap dien ra
                            </Typography>
                            <Typography variant="h5" component="h2">
                                Giai hoi cau
                            </Typography>
                            <Typography variant="body2" component="p">
                                Ktxnn
                            </Typography>
                            <Typography variant="body2" component="p">
                                5/1/2020
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Learn More</Button>
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    );
}