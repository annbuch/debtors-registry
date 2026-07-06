import { useEffect } from "react";
import Filters from "../../components/Filters/Filters";
import DebtorsTable from "../../components/DebtorsTable/DebtorsTable";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { fetchCases } from "../../store/casesSlice";
import DebtorsPagination from "../../components/Pagination/Pagination";

export default function DebtorsPage() {
    const dispatch = useAppDispatch();
    const filters = useAppSelector(
        state => state.filters
    );

    useEffect(() => {
        dispatch(fetchCases());
    }, [filters, dispatch]);

    return (
        <>
            <Filters />
            <DebtorsTable />
            <DebtorsPagination />
        </>
    );
}