import {
    Paper,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
} from "@mui/material";

export default function DebtorsTable() {
    return (
        <Paper
            elevation={0}
            sx={{
                borderRadius: 3,
                border: "1px solid #E5E7EB",
                overflow: "hidden",
            }}
        >
            <Table>

                <TableHead>

                    <TableRow>

                        <TableCell>Дата возбуждения</TableCell>

                        <TableCell>Должник</TableCell>

                        <TableCell>Управляющий</TableCell>

                        <TableCell>Регион</TableCell>

                        <TableCell>Процедура</TableCell>

                    </TableRow>

                </TableHead>

                <TableBody>

                </TableBody>

            </Table>

        </Paper>
    );
}