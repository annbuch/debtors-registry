import { Paper, Typography, TextField, MenuItem, Button } from "@mui/material";
import Box from "@mui/material/Box";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { setFilters, resetFilters } from "../../store/filtersSlice";
import { regionOptions } from "../../constants/regionsOptions";
import { statusOptions } from "../../constants/statusesOptions";
import { organizationTypes } from "../../constants/organizationsOptions";
import { declarantOptions } from "../../constants/declarantsOptions";
import { procedureOptions } from "../../constants/proceduresOptions";
import { fetchCases } from "../../store/casesSlice";
import styles from "./Filters.module.scss";

export default function Filters() {
    const dispatch = useAppDispatch();
    const filters = useAppSelector(state => state.filters);

    function updateFilter(name: string, value: unknown) {
        dispatch(
            setFilters({
                [name]: value,
                page: 1,
            })
        );
    }

    return (
        <Paper className={styles.filtersPanel} elevation={0}>
            <Typography
                variant="h5"
                sx={{
                    fontWeight: 700,
                    mb: 3,
                }}
            >
                Фильтры
            </Typography>

            <Box className={styles.filterGrid}>
                <Box className={styles.filterItem}>
                    <TextField
                        fullWidth
                        label="Наименование должника"
                        value={filters.debtorName}
                        onChange={e => updateFilter("debtorName", e.target.value)}
                    />
                </Box>

                <Box className={styles.filterItem}>
                    <TextField
                        fullWidth
                        label="УНП"
                        value={filters.unp}
                        onChange={e => updateFilter("unp", e.target.value)}
                    />
                </Box>

                <Box className={styles.filterItem}>
                    <TextField
                        fullWidth
                        label="Управляющий"
                        value={filters.manager}
                        onChange={e => updateFilter("manager", e.target.value)}
                    />
                </Box>

                <Box className={styles.filterItem}>
                    <TextField
                        fullWidth
                        label="Номер дела"
                        value={filters.number}
                        onChange={e => updateFilter("number", e.target.value)}
                    />
                </Box>

                <Box className={styles.filterItem}>
                    <TextField
                        select
                        fullWidth
                        label="Регион"
                        value={filters.region}
                        onChange={e => updateFilter("region", e.target.value)}
                    >
                        {regionOptions.map(option => (
                            <MenuItem key={String(option.value)} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                </Box>

                <Box className={styles.filterItem}>
                    <TextField
                        select
                        fullWidth
                        label="Статус"
                        value={filters.status}
                        onChange={e => updateFilter("status", e.target.value)}
                    >
                        {statusOptions.map(option => (
                            <MenuItem key={String(option.value)} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                </Box>

                <Box className={styles.filterItem}>
                    <TextField
                        select
                        fullWidth
                        label="Организация"
                        value={filters.organizationType}
                        onChange={e => updateFilter("organizationType", e.target.value)}
                    >
                        {organizationTypes.map(option => (
                            <MenuItem key={String(option.value)} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                </Box>

                <Box className={styles.filterItem}>
                    <TextField
                        select
                        fullWidth
                        label="Заявитель"
                        value={filters.declarant ? filters.declarant.join(",") : ""}
                        onChange={e =>
                            updateFilter(
                                "declarant",
                                e.target.value ? e.target.value.split(",").map(Number) : null
                            )
                        }
                    >
                        <MenuItem value="">Любой заявитель</MenuItem>
                        {declarantOptions
                            .filter(option => option.value !== null)
                            .map(option => (
                                <MenuItem
                                    key={option.label}
                                    value={(option.value as number[]).join(",")}
                                >
                                    {option.label}
                                </MenuItem>
                            ))}
                    </TextField>
                </Box>

                <Box className={styles.filterItem}>
                    <TextField
                        select
                        fullWidth
                        label="Процедура"
                        value={filters.procedure}
                        onChange={e => updateFilter("procedure", e.target.value)}
                    >
                        {procedureOptions.map(option => (
                            <MenuItem key={String(option.value)} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                </Box>
                <Box />
                <Box />
                <Box />
                <Box className={styles.filterItem}>
                    <TextField
                        fullWidth
                        type="date"
                        label="Возбуждение от"
                        slotProps={{
                            inputLabel: { shrink: true },
                        }}
                        value={filters.startFrom}
                        onChange={e => updateFilter("startFrom", e.target.value)}
                    />
                </Box>

                <Box className={styles.filterItem}>
                    <TextField
                        fullWidth
                        type="date"
                        label="Возбуждение до"
                        slotProps={{
                            inputLabel: { shrink: true },
                        }}
                        value={filters.startTo}
                        onChange={e => updateFilter("startTo", e.target.value)}
                    />
                </Box>

                <Box className={styles.filterItem}>
                    <TextField
                        fullWidth
                        type="date"
                        label="Прекращение от"
                        slotProps={{
                            inputLabel: { shrink: true },
                        }}
                        value={filters.endFrom}
                        onChange={e => updateFilter("endFrom", e.target.value)}
                    />
                </Box>

                <Box className={styles.filterItem}>
                    <TextField
                        fullWidth
                        type="date"
                        label="Прекращение до"
                        slotProps={{
                            inputLabel: { shrink: true },
                        }}
                        value={filters.endTo}
                        onChange={e => updateFilter("endTo", e.target.value)}
                    />
                </Box>
            </Box>

            <Box className={styles.actions}>
                <Button variant="outlined" onClick={() => dispatch(resetFilters())}>
                    Сбросить
                </Button>
                <Button variant="contained" onClick={() => dispatch(fetchCases())}>
                    Найти
                </Button>
            </Box>
        </Paper>
    );
}
