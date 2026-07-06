import { Paper, Typography, Grid, TextField, MenuItem, Button, Stack } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { setFilters,resetFilters } from "../../store/filtersSlice";
import { regionOptions } from "../../constants/regionsOptions";
import { statusOptions } from "../../constants/statusesOptions";
import { organizationTypes } from "../../constants/organizationsOptions";
import { declarantOptions } from "../../constants/declarantsOptions";
import { procedureOptions } from "../../constants/proceduresOptions";
import Box from "@mui/material/Box";

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
        <Paper
            elevation={0}
            sx={{
                p: 4,
                borderRadius: 3,
                border: "1px solid #E5E7EB",
                mb: 3,
            }}
        >

            <Typography
                variant="h5"
                sx={{
                    fontWeight: 700,
                    mb: 3,
                }}
            >
                Фильтры
            </Typography>
            
            <Grid container spacing={2}>
                <Grid size={{ xs: 12, md: 6 }}>
                    <TextField
                        fullWidth
                        label="Наименование должника"
                        value={filters.debtorName}
                        onChange={(e) =>
                            updateFilter(
                                "debtorName", e.target.value
                            )
                        }
                    />
                </Grid>

                <Grid size={{ xs: 12, md: 6 }}>
                    <TextField
                        fullWidth
                        label="УНП"
                        value={filters.unp}
                        onChange={(e) =>
                            updateFilter(
                                "unp", e.target.value
                            )
                        }
                    />
                </Grid>

                <Grid size={{ xs: 12, md: 6 }}>
                    <TextField
                        fullWidth
                        label="Управляющий"
                        value={filters.manager}
                        onChange={(e) =>
                            updateFilter(
                                "manager", e.target.value
                            )
                        }
                    />
                </Grid>

                <Grid size={{ xs: 12, md: 6 }}>
                    <TextField
                        fullWidth
                        label="Номер дела"
                        value={filters.number}
                        onChange={(e) =>
                            updateFilter(
                                "number", e.target.value
                            )
                        }
                    />
                </Grid>

                <Grid size={{ xs: 12, md: 4 }}>
                    <TextField
                        select
                        fullWidth
                        label="Регион"
                        value={filters.region}
                        onChange={(e) =>
                            updateFilter(
                                "region", e.target.value
                            )
                        }
                    >
                        {
                            regionOptions.map(option => (
                                <MenuItem
                                    key={String(option.value)}
                                    value={option.value}
                                >
                                    {option.label}
                                </MenuItem>
                            ))
                        }
                    </TextField>
                </Grid>

                <Grid size={{ xs: 12, md: 4 }}>
                    <TextField
                        select
                        fullWidth
                        label="Статус"
                        value={filters.status}
                        onChange={(e) =>
                            updateFilter(
                                "status", e.target.value
                            )
                        }
                    >
                        {
                            statusOptions.map(option => (
                                <MenuItem
                                    key={String(option.value)}
                                    value={option.value}
                                >
                                    {option.label}
                                </MenuItem>
                            ))
                        }
                    </TextField>
                </Grid>

                <Grid size={{ xs: 12, md: 4 }}>
                    <TextField
                        select
                        fullWidth
                        label="Организация"
                        value={filters.organizationType}
                        onChange={(e) =>
                            updateFilter(
                                "organizationType", e.target.value
                            )
                        }
                    >
                        {
                            organizationTypes.map(option => (
                                <MenuItem
                                    key={String(option.value)}
                                    value={option.value}
                                >
                                    {option.label}
                                </MenuItem>
                            ))
                        }
                    </TextField>
                </Grid>

                <Grid size={{ xs: 12, md: 6 }}>
                    <TextField
                        select
                        fullWidth
                        label="Заявитель"
                        value={JSON.stringify(filters.declarant)}
                        onChange={(e) =>
                            updateFilter(
                                "declarant", JSON.parse(e.target.value)
                            )
                        }
                    >
                        {
                            declarantOptions.map(option => (
                                <MenuItem
                                    key={option.label}
                                    value={JSON.stringify(option.value)}
                                >
                                    {option.label}
                                </MenuItem>
                            ))
                        }
                    </TextField>
                </Grid>

                <Grid size={{ xs: 12, md: 6 }}>
                    <TextField
                        select
                        fullWidth
                        label="Процедура"
                        value={filters.procedure}
                        onChange={(e) =>
                            updateFilter(
                                "procedure", e.target.value
                            )
                        }
                    >
                        {
                            procedureOptions.map(option => (
                                <MenuItem
                                    key={String(option.value)}
                                    value={option.value}
                                >
                                    {option.label}
                                </MenuItem>
                            ))
                        }
                    </TextField>
                </Grid>

                <Grid size={{ xs: 12, md: 3 }}>
                    <TextField
                        fullWidth
                        type="date"
                        label="Возбуждение от"
                        slotProps={{
                            inputLabel: { shrink: true },
                        }}
                        value={filters.startFrom}
                        onChange={(e) =>
                            updateFilter(
                                "startFrom", e.target.value
                            )
                        }
                    />
                </Grid>

                <Grid size={{ xs: 12, md: 3 }}>
                    <TextField
                        fullWidth
                        type="date"
                        label="Возбуждение до"
                        slotProps={{
                            inputLabel: { shrink: true },
                        }}
                        value={filters.startTo}
                        onChange={(e) =>
                            updateFilter(
                                "startTo", e.target.value
                            )
                        }
                    />
                </Grid>

                <Grid size={{ xs: 12, md: 3 }}>
                    <TextField
                        fullWidth
                        type="date"
                        label="Прекращение от"
                        slotProps={{
                            inputLabel: { shrink: true },
                        }}
                        value={filters.endFrom}
                        onChange={(e) =>
                            updateFilter(
                                "endFrom", e.target.value
                            )
                        }
                    />
                </Grid>

                <Grid size={{ xs: 12, md: 3 }}>
                    <TextField
                        fullWidth
                        type="date"
                        label="Прекращение до"
                        slotProps={{
                            inputLabel: { shrink: true },
                        }}
                        value={filters.endTo}
                        onChange={(e) =>
                            updateFilter(
                                "endTo", e.target.value
                            )
                        }
                    />
                </Grid>
            </Grid>

            <Box
                sx={{
                display: "flex",
                justifyContent: "flex-end",
                gap: 2,
                mt: 3,
            }}
            >

                <Button
                    variant="outlined"
                    onClick={() => dispatch(resetFilters())}
                >
                    Сбросить
                </Button>

                <Button variant="contained">
                    Найти
                </Button>
            </Box>
        </Paper>
    );
}