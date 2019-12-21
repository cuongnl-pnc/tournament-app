import React from "react";
import makeStyles from "@material-ui/core/es/styles/makeStyles";
import Container from "@material-ui/core/es/Container/Container";
import Paper from "@material-ui/core/es/Paper/Paper";
import TableContainer from "@material-ui/core/es/TableContainer/TableContainer";
import Table from "@material-ui/core/es/Table/Table";
import TableBody from "@material-ui/core/es/TableBody/TableBody";
import TableRow from "@material-ui/core/es/TableRow/TableRow";
import TableCell from "@material-ui/core/es/TableCell/TableCell";
import IconButton from "@material-ui/core/es/IconButton/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/es/Fab/Fab";

const useStyles = makeStyles(theme => ({
    container: {
        paddingTop: theme.spacing(2),
        paddingBottom: theme.spacing(4)
    },
    table: {
        width: '100%',
    },
    iconMargin: {
        marginRight: theme.spacing(1)
    },
    fab: {
        position: 'fixed',
        bottom: theme.spacing(3),
        right: theme.spacing(3),
    },
}));

function createData(id, name) {
    return {id, name};
}

const rows = [
    createData(1, 'Huy Dương'),
    createData(2, 'Thành Linh'),
    createData(3, 'Tuấn Quanh'),
];

export default function TourTeamsPage() {
    const classes = useStyles();

    return (
        <Container className={classes.container} maxWidth="md">
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableBody>
                        {rows.map((row, index) => (
                            <TableRow key={row.id}>
                                <TableCell>{index + 1}</TableCell>
                                <TableCell>{row.name}</TableCell>
                                <TableCell align="right">
                                    <IconButton size="small" color="primary" className={classes.iconMargin}>
                                        <EditIcon/>
                                    </IconButton>
                                    <IconButton size="small" color="secondary">
                                        <DeleteIcon/>
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <Fab color="primary" aria-label="add" className={classes.fab}>
                <AddIcon/>
            </Fab>
        </Container>
    );
}