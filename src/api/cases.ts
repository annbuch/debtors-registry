import { api } from "./client";
import type { CasesResponse } from "../types/case";

export async function getCases(body: unknown){
    const response = await api.post<CasesResponse>(
        "/cases",
        body
    );

    return response.data;
}