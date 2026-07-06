import type { ReactNode } from "react";
import { Box } from "@mui/material";

interface Props {
    children: ReactNode;
}

export default function Container({ children }: Props) {
    return (
        <Box
            sx={{
                maxWidth: "1320px",
                mx:"auto",
                px:{ xs:2, sm:3, md:4 },
                py:{ xs:2, md:4 }
                }}
        >
            {children}
        </Box>
    );
}