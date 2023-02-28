import { Header } from "../../header";
import {
    Container,
    ContentWrapper,
    ActionsContainer,
    ConsoleContainer,
    Status,
    Label,
    ContainerRow,
} from "../styles";
import {
    FormControlLabel,
    FormGroup,
    ButtonGroup,
    Switch,
    Button,
} from "@mui/material";
import { Version, useFlag } from "./useFlag";
import { useCallback, useMemo } from "react";
import { Component } from "./component";

const makeButtonStyle = (disabled: boolean): React.CSSProperties => ({
    width: "150px",
    backgroundColor: disabled ? "gray" : undefined,
});

export const ExclusiveEvolutive = () => {
    const { available, version, toggleEnabled, handleChangeVersion } = useFlag();

    const validate = (versionToCompare: Version) => {
        return version === "NOT_AVAILABLE" || version === versionToCompare;
    };

    const labelColor = useMemo(() => {
        if (version === "STABLE") {
            return "success";
        }

        if (version === "DEVELOPMENT") {
            return "warning";
        }

        return "error";
    }, [version]);

    const renderObjectComponent = useCallback(
        () => (
            <ConsoleContainer>
                <h4>
                    Available: <Status valid={!!available}>{String(available)}</Status>
                </h4>
                <h4>
                    Version: <Label color={labelColor}>{`${version}`}</Label>
                </h4>
            </ConsoleContainer>
        ),
        [available, labelColor, version]
    );

    const renderActionsComponent = useCallback(
        () => (
            <ButtonGroup disabled={!available} variant="contained">
                <Button
                    onClick={() => handleChangeVersion("STABLE")}
                    style={makeButtonStyle(validate("DEVELOPMENT"))}
                >
                    Stable
                </Button>
                <Button
                    onClick={() => handleChangeVersion("DEVELOPMENT")}
                    style={makeButtonStyle(validate("STABLE"))}
                >
                    Development
                </Button>
            </ButtonGroup>
        ),
        [version, available]
    );

    return (
        <Container>
            <Header />
            <ContentWrapper>
                <h1>Exclusive</h1>
                <h3>A feature also can be both Exclusive and Evolutive</h3>
                <FormGroup>
                    <ActionsContainer>
                        <FormControlLabel
                            control={
                                <Switch
                                    defaultChecked
                                    checked={available}
                                    onChange={toggleEnabled}
                                />
                            }
                            label="Available"
                        />
                        {renderActionsComponent()}
                        {renderObjectComponent()}
                    </ActionsContainer>
                </FormGroup>
            </ContentWrapper>
            <ContainerRow>
                {available && <Component version={version} />}
            </ContainerRow>
        </Container>
    );
};
