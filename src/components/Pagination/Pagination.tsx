import { Pagination, Paper, Typography, Box } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { setPage } from "../../store/filtersSlice";

export default function DebtorsPagination() {
    const dispatch = useAppDispatch();
    const page = useAppSelector(state => state.filters.page);
    const total = useAppSelector(state => state.cases.total);
    const totalPages = useAppSelector(
        state => state.cases.totalPages
    );

    return (
        <Paper
            sx={{
                mt: 3,
                p: 2,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexWrap: "wrap",
                gap: 2,
            }}
        >
            <Box>
                <Typography> Всего: {total} </Typography>
                <Typography> Всего страниц: {totalPages} </Typography>
            </Box>
            <Pagination
                page={page}
                count={totalPages}
                color="primary"
                boundaryCount={2}
                siblingCount={1}
                showFirstButton={false}
                showLastButton={false}
                onChange={(_, value) => dispatch(setPage(value))
                }
            />
        </Paper>
    );
}