import Filters from "../../components/Filters/Filters";
import DebtorsTable from "../../components/DebtorsTable/DebtorsTable";
import Pagination from "../../components/Pagination/Pagination";

function DebtorsPage() {
    return (
        <>
            <Filters />
            <DebtorsTable />
            <Pagination />
        </>
    );
}

export default DebtorsPage;