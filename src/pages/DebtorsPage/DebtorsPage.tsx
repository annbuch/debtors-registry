import { useEffect } from "react";

import Filters from "../../components/Filters/Filters";
import DebtorsTable from "../../components/DebtorsTable/DebtorsTable";

import { useAppDispatch, useAppSelector } from "../../store/hooks";

import {
    fetchStart,
    fetchSuccess,
    fetchError,
} from "../../store/cases/casesSlice";

import { loadCases } from "../../services/casesService";

export default function DebtorsPage() {

    const dispatch = useAppDispatch();

    const filters = useAppSelector(state => state.filters);

    useEffect(() => {

        async function fetchData() {

            try {

                dispatch(fetchStart());

                const response = await loadCases(filters);

                dispatch(fetchSuccess({

                    items: response.items,

                    total: response.count,

                }));

            }

            catch {

                dispatch(fetchError("Не удалось получить данные"));

            }

        }

        fetchData();

    }, [filters, dispatch]);

    return (

        <>

            <Filters />

            <DebtorsTable />

        </>

    );

}