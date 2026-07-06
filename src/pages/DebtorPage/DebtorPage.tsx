import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Paper, Typography, CircularProgress, Alert, Button, Stack } from "@mui/material";
import { getCaseById } from "../../api/cases";
import type { DebtorResponse } from "../../types/debtor";

export default function DebtorPage() {
    const { id } = useParams();
    const [data, setData] = useState<DebtorResponse | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    useEffect(() => {
        async function load() {
            try {
                const response = await getCaseById(id!);
                setData(response);
            } catch {
                setError(true);
            } finally {
                setLoading(false);
            }
        }
        load();
    }, [id]);

    if (loading)
        return (
            <Paper sx={{ p: 5, mt: 5, textAlign: "center" }}>
                <CircularProgress />
            </Paper>
        );

    if (error)
        return (
            <Alert severity="error"> Не удалось загрузить данные </Alert>
        );

    return (

        <Paper
            sx={{
                maxWidth: 900,
                mx: "auto",
                mt: 5,
                p: 4,
                borderRadius: 3,
            }}
        >

            <Stack spacing={3}>
                <Typography variant="h4"> Дело </Typography>
                <Typography>
                    <b>Номер дела:</b>
                    {" "}
                    {data?.number}
                </Typography>
                <Typography>
                    <b>Суд:</b>
                    {" "}
                    {data?.court}
                </Typography>
                <Typography>
                    <b>Тип заявителя:</b>
                    {" "}
                    {data?.declarant.typeName}
                </Typography>
                <Typography>
                    <b>Заявитель:</b>
                    {" "}
                    {data?.declarant.name}
                </Typography>

                <Button
                    component={Link}
                    to="/"
                    variant="contained"
                > 
                Назад
                </Button>
            </Stack>
        </Paper>
    );
}