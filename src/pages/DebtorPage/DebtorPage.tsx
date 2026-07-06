import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Paper, Typography, CircularProgress, Alert, Button, Stack, Divider } from "@mui/material";
import { getCaseById } from "../../api/cases";
import type { DebtorResponse } from "../../types/debtor";
import styles from "./DebtorPage.module.scss";

export default function DebtorPage() {
    const { id } = useParams();
    const navigate = useNavigate();
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

    if (loading) {
        return (
            <Paper className={styles.statusBlock}>
                <CircularProgress />
            </Paper>
        );
    }

    if (error) {
        return <Alert severity="error">Не удалось загрузить данные</Alert>;
    }

    return (
        <Paper className={styles.pageCard}>
            <Stack spacing={3}>
                <Typography variant="h4">Дело</Typography>
                <div className={styles.field}>
                    <Typography className={styles.fieldLabel}>Номер дела</Typography>
                    <Typography className={styles.fieldValue}>{data?.number}</Typography>
                </div>
                <Divider />
                <div className={styles.field}>
                    <Typography className={styles.fieldLabel}>Суд</Typography>
                    <Typography className={styles.fieldValue}>{data?.court}</Typography>
                </div>
                <Divider />
                <div className={styles.field}>
                    <Typography className={styles.fieldLabel}>Тип заявителя</Typography>
                    <Typography className={styles.fieldValue}>{data?.declarant.typeName}</Typography>
                </div>
                <Divider />
                <div className={styles.field}>
                    <Typography className={styles.fieldLabel}>Заявитель</Typography>
                    <Typography className={styles.fieldValue}>{data?.declarant.name}</Typography>
                </div>

                <Button variant="outlined" onClick={() => navigate(-1)}>
                    Назад
                </Button>
            </Stack>
        </Paper>
    );
}
