import {

    Table,

    TableHead,

    TableBody,

    TableRow,

    TableCell,

    CircularProgress,

    Alert,

    Paper,

    Link,

} from "@mui/material";

import { Link as RouterLink } from "react-router-dom";

import { useAppSelector } from "../../store/hooks";
import {
    getRegionName,
    getProcedureName,
} from "../../utils/formatters";

export default function DebtorsTable() {

    const {

        items,

        loading,

        error,

    } = useAppSelector(state => state.cases);

    if (loading)

        return (

            <Paper sx={{ p: 5, mt: 3, textAlign: "center" }}>

                <CircularProgress />

            </Paper>

        );

    if (error)

        return (

            <Alert severity="error">

                {error}

            </Alert>

        );

    if (!items.length)

        return (

            <Alert severity="info">

                Ничего не найдено

            </Alert>

        );

    return (

        <Paper sx={{ mt: 3 }}>

            <Table>

                <TableHead>

                    <TableRow>

                        <TableCell>

                            Дата возбуждения

                        </TableCell>

                        <TableCell>

                            Должник

                        </TableCell>

                        <TableCell>

                            Управляющий

                        </TableCell>

                        <TableCell>

                            Регион

                        </TableCell>

                        <TableCell>

                            Процедура

                        </TableCell>

                    </TableRow>

                </TableHead>

                <TableBody>

                    {

                        items.map(item => (

                            <TableRow key={item.id}>

                                <TableCell>

                                    {item.startDate}

                                </TableCell>

                                <TableCell>

                                    <Link

                                        component={RouterLink}

                                        to={`/debtors/:id`}

                                    >

                                        {

                                            item.debtorModel.organization.shortName

                                        }

                                    </Link>

                                </TableCell>

                                <TableCell>

                                    {item.manager.name}

                                </TableCell>

                                <TableCell>

                                    {

                                        getRegionName(

                                            item.debtorModel.organization.legalAddress.region

)
                                    }

                                </TableCell>

                                <TableCell>

                                    {

                                        item.status === 0

                                            ? "Дело закрыто"

                                            : getProcedureName(

                                                item.procedureType,

                                                item.status

                                            )

                                    }

                                </TableCell>

                            </TableRow>

                        ))

                    }

                </TableBody>

            </Table>

        </Paper>

    );

}