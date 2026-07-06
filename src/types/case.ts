export interface Manager {
    id: number;
    name: string;
    type: number;
}

export interface Organization {
    shortName: string;
    legalAddress: {
        region: number;
    };
}

export interface DebtorModel {
    id: number;
    organization: Organization;
}

export interface CaseItem {
    id: number;
    manager: Manager;
    debtorModel: DebtorModel;
    startDate: string;
    procedureType: number;
    status: number;
}

export interface CasesResponse {
    items: CaseItem[];
    count: number;
}

