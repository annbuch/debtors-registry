import { api } from "./client";
import type { CasesRequest, CasesResponse } from "../types/case";
import type { DebtorResponse } from "../types/debtor";

export async function getCases(body: CasesRequest) {
    const response = await api.post<CasesResponse>(
        "/cases",
        body
    );

    return response.data;
}

export async function getCase(id: number) {
    const response = await api.get<DebtorResponse>(
        `/cases/${id}`
    );

    return response.data;
}