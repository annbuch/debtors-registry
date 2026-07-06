import { Paper, Typography } from "@mui/material";

export default function Filters() {
    return (
        <Paper
            elevation={0}
            sx={{
                p: 3,
                borderRadius: 3,
                border: "1px solid #E5E7EB",
                mb: 3,
            }}
        >
            <Typography variant="h6" sx ={{ fontWeight: 600 }}>
                Фильтры
            </Typography>
        </Paper>
    );
}