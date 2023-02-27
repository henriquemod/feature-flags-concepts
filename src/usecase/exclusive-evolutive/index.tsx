import { Header } from "../../header";
import { Container, ContentWrapper } from "../styles";
import { FormControlLabel, FormGroup, MenuList, Switch } from "@mui/material";

export const ExclusiveEvolutive = () => {
    return (
        <Container>
            <Header />
            <ContentWrapper>
                <h1>Exclusive</h1>
                <h3>A feature also can be both Exclusive and Evolutive</h3>
                {/* <FormGroup>
                    <FormControlLabel
                        control={
                            <Switch defaultChecked checked={available} onChange={toggle} />
                        }
                        label="Available"
                    />
                </FormGroup> */}
            </ContentWrapper>
            <span>ExclusiveEvolutive</span>
        </Container>
    );
};
