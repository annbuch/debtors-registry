import Layout from "../../components/Layout/Layout";
import Filters from "../../components/Filters/Filters";
import DebtorsTable from "../../components/DebtorsTable/DebtorsTable";

export default function DebtorsPage() {
    return (
        <Layout>

            <Filters />

            <DebtorsTable />

        </Layout>
    );
}