import { Container } from "@mui/material";
import type { ReactNode } from "react";

interface Props {
    children: ReactNode;
}

export default function Layout({ children }: Props) {
    return (
        <Container
            maxWidth="xl"
            sx={{
                py: 4,
            }}
        >
            {children}
        </Container>
    );
}