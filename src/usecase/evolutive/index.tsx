import React, { useCallback, useMemo } from "react";
import { Button, ButtonGroup } from "@mui/material";
import { Header } from "../../header";
import {
  Label,
  Status,
  Container,
  ContainerRow,
  ContentWrapper,
  ConsoleContainer,
} from "../styles";
import { useFlag } from "./useFlag";
import { ComponentDev } from "./development/component-dev";
import { ComponentStable } from "./stable/component-stable";

const FALLBACK_VERSION = "STABLE";

const makeButtonStyle = (disabled: boolean): React.CSSProperties => ({
  width: "150px",
  backgroundColor: disabled ? "gray" : undefined,
});

const Evolutive = () => {
  const { available, version, toggle } = useFlag();

  const Component = useCallback(() => {
    const allowedVersion = version ?? FALLBACK_VERSION;
    const Component =
      allowedVersion === "DEVELOPMENT" ? ComponentDev : ComponentStable;
    return available ? <Component /> : <ComponentStable />;
  }, [available, version]);

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
      <ButtonGroup variant="contained">
        <Button
          onClick={toggle}
          style={makeButtonStyle(version === "DEVELOPMENT")}
        >
          Stable
        </Button>
        <Button onClick={toggle} style={makeButtonStyle(version === "STABLE")}>
          Development
        </Button>
      </ButtonGroup>
    ),
    [toggle, version]
  );

  return (
    <Container>
      <Header />
      <ContentWrapper>
        <h1>Evolutive</h1>
        <h3>
          Refers to a feature that already implemented and needs to be updated
        </h3>
        {renderActionsComponent()}
        {renderObjectComponent()}
      </ContentWrapper>
      <ContainerRow>
        <Component />
      </ContainerRow>
    </Container>
  );
};

export default Evolutive;
