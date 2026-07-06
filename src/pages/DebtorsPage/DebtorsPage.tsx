import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Typography, ToggleButton, ToggleButtonGroup, Box } from "@mui/material";
import Filters from "../../components/Filters/Filters";
import DebtorsTable from "../../components/DebtorsTable/DebtorsTable";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { fetchCases } from "../../store/casesSlice";
import DebtorsPagination from "../../components/Pagination/Pagination";
import Container from "../../components/Container/Container";
import { setFilters } from "../../store/filtersSlice";
import type { FiltersState } from "../../store/filtersSlice";
import styles from "./DebtorsPage.module.scss";
import GavelRoundedIcon from "@mui/icons-material/GavelRounded";

function parseSearchParams(params: URLSearchParams): Partial<FiltersState> {
    const declarantValue = params.get("declarant");
    const pageValue = Number(params.get("page") ?? "1");

    return {
        debtorName: params.get("debtorName") ?? "",
        unp: params.get("unp") ?? "",
        manager: params.get("manager") ?? "",
        number: params.get("number") ?? "",
        region: params.get("region") ?? "",
        status: params.get("status") ?? "",
        organizationType: params.get("organizationType") ?? "",
        procedure: params.get("procedure") ?? "",
        declarant:
            declarantValue && declarantValue.length > 0
                ? declarantValue.split(",").map(Number)
                : null,
        startFrom: params.get("startFrom") ?? "",
        startTo: params.get("startTo") ?? "",
        endFrom: params.get("endFrom") ?? "",
        endTo: params.get("endTo") ?? "",
        page: Number.isNaN(pageValue) || pageValue < 1 ? 1 : pageValue,
    };
}

export default function DebtorsPage() {
    const dispatch = useAppDispatch();
    const filters = useAppSelector(state => state.filters);
    const [searchParams, setSearchParams] = useSearchParams();
    const [viewMode, setViewMode] = useState<"table" | "cards">(
        searchParams.get("view") === "cards" ? "cards" : "table"
    );

    useEffect(() => {
        const initialFilters = parseSearchParams(searchParams);
        dispatch(setFilters(initialFilters));
    }, []);

    useEffect(() => {
        dispatch(fetchCases());
    }, [filters, dispatch]);

    useEffect(() => {
        const params = new URLSearchParams();

        if (filters.debtorName) params.set("debtorName", filters.debtorName);
        if (filters.unp) params.set("unp", filters.unp);
        if (filters.manager) params.set("manager", filters.manager);
        if (filters.number) params.set("number", filters.number);
        if (filters.region) params.set("region", filters.region);
        if (filters.status) params.set("status", filters.status);
        if (filters.organizationType) params.set("organizationType", filters.organizationType);
        if (filters.procedure) params.set("procedure", filters.procedure);
        if (filters.declarant?.length) {
            params.set("declarant", filters.declarant.join(","));
        }
        if (filters.startFrom) params.set("startFrom", filters.startFrom);
        if (filters.startTo) params.set("startTo", filters.startTo);
        if (filters.endFrom) params.set("endFrom", filters.endFrom);
        if (filters.endTo) params.set("endTo", filters.endTo);
        if (filters.page > 1) params.set("page", String(filters.page));
        if (viewMode !== "table") params.set("view", viewMode);

        setSearchParams(params, { replace: true });
    }, [filters, viewMode, setSearchParams]);

    return (
        <Container>
        <Box className={styles.pageHeader}>
                <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 2,
                }}
        >
        <Box
            sx={{
                width: 64,
                height: 64,
                borderRadius: 4,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background:
                    "linear-gradient(135deg,#155e75,#0f766e)",
                color: "white",
            }}
        >
            <GavelRoundedIcon
                sx={{
                    fontSize: 34,
                }}
            />
        </Box>

        <Box>
            <Typography
                variant="h4"
                sx={{
                    fontWeight: 700,
                }}
            >
                Реестр должников
            </Typography>

            <Typography
                sx={{
                    mt: .5,
                    color: "#64748b",
                }}
            >
                Поиск сведений о делах о несостоятельности (банкротстве)
            </Typography>
        </Box>
    </Box>

                <ToggleButtonGroup
                    value={viewMode}
                    exclusive
                    onChange={(_, value) => {
                        if (value) {
                            setViewMode(value);
                        }
                    }}
                    className={styles.viewToggle}
                    size="small"
                >
                    <ToggleButton value="table">Таблица</ToggleButton>
                    <ToggleButton value="cards">Карточки</ToggleButton>
                </ToggleButtonGroup>
            </Box>
            <Filters />
            <DebtorsTable viewMode={viewMode} />
            <DebtorsPagination />
        </Container>
    );
}
