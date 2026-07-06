import { regionOptions } from "../constants/regionsOptions";
import { procedureOptions } from "../constants/proceduresOptions";

export function getRegionName(region: number) {
    return (
        regionOptions.find(
            item => item.value === region
        )?.label ?? "-"
    );
}

export function getProcedureName(
    procedure: number,
    status: number
) {

    if (status === 0)
        return "Дело закрыто";
    return (
        procedureOptions.find(
            item => item.value === procedure
        )?.label ?? "-"
    );
}

export function formatDate(date: string) {
    return new Intl.DateTimeFormat(
        "ru-RU",
        {
            day: "2-digit",
            month: "long",
            year: "numeric",
        }

    ).format(new Date(date));
}