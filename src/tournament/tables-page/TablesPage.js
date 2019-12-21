import React from "react";
import makeStyles from "@material-ui/core/es/styles/makeStyles";
import Container from "@material-ui/core/es/Container/Container";
import Paper from "@material-ui/core/es/Paper/Paper";
import TableHead from "@material-ui/core/es/TableHead/TableHead";
import TableContainer from "@material-ui/core/es/TableContainer/TableContainer";
import Table from "@material-ui/core/es/Table/Table";
import TableBody from "@material-ui/core/es/TableBody/TableBody";
import TableRow from "@material-ui/core/es/TableRow/TableRow";
import TableCell from "@material-ui/core/es/TableCell/TableCell";
import IconButton from "@material-ui/core/es/IconButton/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import Typography from "@material-ui/core/es/Typography/Typography";
import Box from "@material-ui/core/es/Box/Box";

const useStyles = makeStyles(theme => ({
    container: {
        paddingTop: theme.spacing(2),
        paddingBottom: theme.spacing(4),
    },
    table: {
        width: '100%',
    },
}));

function createData(id, name, teams) {
    return {id, name, teams};
}

const rows = [
    createData(1, 'Bảng A', [{id: 1, name: 'Huy + Dương'}, {id: 1, name: 'Tuấn + Quanh'}, {
        id: 1,
        name: 'Thành + Linh'
    }]),
    createData(2, 'Bảng B', [{id: 1, name: 'Huy + Dương'}, {id: 1, name: 'Tuấn + Quanh'}, {
        id: 1,
        name: 'Thành + Linh'
    }]),
    createData(3, 'Bảng C', [{id: 1, name: 'Huy + Dương'}, {id: 1, name: 'Tuấn + Quanh'}, {
        id: 1,
        name: 'Thành + Linh'
    }]),
    createData(4, 'Bảng D', [{id: 1, name: 'Huy + Dương'}, {id: 1, name: 'Tuấn + Quanh'}, {
        id: 1,
        name: 'Thành + Linh'
    }]),
];

export default function TourTablesPage() {
    const classes = useStyles();

    return (
        <Container className={classes.container} maxWidth="md">
            {rows.map(row => (
                <Box mb={3}>
                    <Paper>
                        <Box p={2} textAlign="center">
                            <Typography variant="h6">
                                {row.name}
                            </Typography>
                        </Box>
                        <TableContainer>
                            <Table className={classes.table} aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Đội</TableCell>
                                        <TableCell>Tr</TableCell>
                                        <TableCell>T</TableCell>
                                        <TableCell>H</TableCell>
                                        <TableCell>B</TableCell>
                                        <TableCell>Hs</TableCell>
                                        <TableCell>Đ</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {(row.teams || []).map(team => (
                                        <TableRow key={team.id}>
                                            <TableCell component="th" scope="row">{team.name}</TableCell>
                                            <TableCell>{team.match || 0}</TableCell>
                                            <TableCell>{team.win || 0}</TableCell>
                                            <TableCell>{team.draw || 0}</TableCell>
                                            <TableCell>{team.lost || 0}</TableCell>
                                            <TableCell>{team.goalDiff || 0}</TableCell>
                                            <TableCell>{team.point || 0}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Paper>
                </Box>
            ))}
        </Container>
    );
}