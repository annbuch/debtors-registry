import { Table, TableHead, TableBody, TableRow, TableCell, CircularProgress, Alert, Paper, Link, Typography, Box, Card, CardContent, Chip } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { getRegionName, getProcedureName } from "../../utils/formatters";
import { formatDate } from "../../utils/formatDate";
import Button from "@mui/material/Button";
import { fetchCases } from "../../store/casesSlice";
import { resetFilters } from "../../store/filtersSlice";

interface Props {
    viewMode: "table" | "cards";
}
export default function DebtorsTable({ viewMode }: Props) {
    const dispatch = useAppDispatch();
    const { items, loading, error } = useAppSelector(state => state.cases);

    if (loading) {
        return (
            <Paper sx={{ p: 5, mt: 3, textAlign: "center" }}>
                <CircularProgress />
            </Paper>
        );
    }

    if (error) {
    return (
        <Paper
            sx={{
                mt: 3,
                p: 4,
                textAlign: "center",
            }}
        >
            <Alert
                severity="error"
                sx={{ mb: 2 }}
            >
                {error}
            </Alert>

            <Button
                variant="contained"
                onClick={() => dispatch(fetchCases())}
            >
                Повторить
            </Button>
        </Paper>
    );
}

   if (!loading && items.length === 0) {
    return (
        <Paper
            sx={{
                mt: 3,
                p: 4,
                textAlign: "center",
            }}
        >
            <Typography
                variant="h6"
                sx={{ mb: 1 }}
            >
                Ничего не найдено
            </Typography>

            <Typography
                sx={{
                    color: "#64748b",
                    mb: 3,
                }}
            >
                Попробуйте изменить параметры поиска
            </Typography>

            <Button
                variant="outlined"
                onClick={() => dispatch(resetFilters())}
            >
                Сбросить фильтры
            </Button>
        </Paper>
    );
}
    if (viewMode === "cards") {
        return (
            <Box
                sx={{
                    mt: 3,
                    display: "grid",
                    gap: 3,
                }}
            >
                {items.map(item => (
                    <Card
                        key={item.id}
                        elevation={0}
                        sx={{
                            borderRadius: 4,
                            border: "1px solid #e2e8f0",
                            transition: ".2s",

                            "&:hover": {
                                boxShadow:
                                    "0 12px 30px rgba(15,23,42,.08)",
                                transform: "translateY(-2px)",
                            },
                        }}
                    >
                        <CardContent>
                            <Typography
                                variant="h6"
                                sx={{
                                    mb: 2,
                                }}
                            >
                                <Link
                                    component={RouterLink}
                                    to={`/debtors/${item.id}`}
                                    underline="hover"
                                    sx={{
                                        fontWeight: 700,
                                        color: "#155e75",
                                    }}
                                >
                                    {item.debtorModel.organization.shortName}
                                </Link>
                            </Typography>

                            <Typography>
                                <b>Дата:</b>{" "}
                                {formatDate(item.startDate)}
                            </Typography>

                            <Typography sx={{ mt: 1 }}>
                                <b>Управляющий:</b>{" "}
                                {item.manager.name}
                            </Typography>

                            <Typography sx={{ mt: 1 }}>
                                <b>Регион:</b>{" "}
                                {getRegionName(
                                    item.debtorModel.organization
                                        .legalAddress.region
                                )}
                            </Typography>

                            <Chip
                                sx={{ mt: 2 }}
                                color={
                                    item.status === 0
                                        ? "default"
                                        : "primary"
                                }
                                label={
                                    item.status === 0
                                        ? "Дело закрыто"
                                        : getProcedureName(
                                              item.procedureType,
                                              item.status
                                          )
                                }
                            />
                        </CardContent>
                    </Card>
                ))}
            </Box>
        );
    }

    return (
        <Paper
            elevation={0}
            sx={{
                mt: 3,
                overflow: "hidden",
                borderRadius: 4,
                border: "1px solid #e2e8f0",
            }}
        >
            <Table stickyHeader>
                <TableHead>
                    <TableRow>
                        <TableCell
                            sx={{
                                fontWeight: 700,
                                bgcolor: "#f8fafc",
                            }}
                        >
                            Дата возбуждения
                        </TableCell>

                        <TableCell
                            sx={{
                                fontWeight: 700,
                                bgcolor: "#f8fafc",
                            }}
                        >
                            Должник
                        </TableCell>

                        <TableCell
                            sx={{
                                fontWeight: 700,
                                bgcolor: "#f8fafc",
                            }}
                        >
                            Управляющий
                        </TableCell>

                        <TableCell
                            sx={{
                                fontWeight: 700,
                                bgcolor: "#f8fafc",
                            }}
                        >
                            Регион
                        </TableCell>

                        <TableCell
                            sx={{
                                fontWeight: 700,
                                bgcolor: "#f8fafc",
                            }}
                        >
                            Процедура
                        </TableCell>
                    </TableRow>
                </TableHead>

                <TableBody>
                    {items.map(item => (
                        <TableRow
                            hover
                            key={item.id}
                        >
                            <TableCell>
                                {formatDate(item.startDate)}
                            </TableCell>

                            <TableCell>
                                <Link
                                    component={RouterLink}
                                    to={`/debtors/${item.id}`}
                                    underline="hover"
                                    sx={{
                                        color: "#155e75",
                                        fontWeight: 600,
                                    }}
                                >
                                    {
                                        item.debtorModel.organization
                                            .shortName
                                    }
                                </Link>
                            </TableCell>

                            <TableCell>
                                {item.manager.name}
                            </TableCell>

                            <TableCell>
                                {getRegionName(
                                    item.debtorModel.organization
                                        .legalAddress.region
                                )}
                            </TableCell>

                            <TableCell>
                                {item.status === 0 ? (
                                    <Chip
                                        size="small"
                                        label="Закрыто"
                                    />
                                ) : (
                                    <Chip
                                        size="small"
                                        color="primary"
                                        label={getProcedureName(
                                            item.procedureType,
                                            item.status
                                        )}
                                    />
                                )}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </Paper>
    );
}