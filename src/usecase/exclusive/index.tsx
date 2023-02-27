import {
  Cloud,
  ContentCopy,
  ContentCut,
  ContentPaste,
} from "@mui/icons-material";
import {
  Divider,
  FormControlLabel,
  FormGroup,
  ListItemIcon,
  ListItemText,
  MenuItem,
  MenuList,
  Paper,
  Switch,
  Typography,
} from "@mui/material";
import { useCallback, useMemo } from "react";
import { Header } from "../../header";
import {
  ConsoleContainer,
  Container,
  ContainerRow,
  ContentWrapper,
  Label,
  Status,
} from "../styles";
import { useFlag, Version } from "./useFlag";

export const Exclusive = () => {
  const { available, toggle } = useFlag();

  const version: Version = available ? "STABLE" : "NOT_AVAILABLE";

  const labelColor = useMemo(() => {
    if (version === "STABLE") {
      return "success";
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

  const ExclusiveComponent = useCallback(() => {
    return (
      <>
        <Divider />
        <MenuItem>
          <ListItemIcon>
            <Cloud fontSize="small" />
          </ListItemIcon>
          <ListItemText>Web Clipboard</ListItemText>
        </MenuItem>
      </>
    );
  }, []);

  return (
    <Container>
      <Header />
      <ContentWrapper>
        <h1>Exclusive</h1>
        <h3>Refers to a feature that is only rendered if available</h3>
        <FormGroup>
          <FormControlLabel
            control={<Switch checked={!!available} onChange={toggle} />}
            label="Available"
          />
        </FormGroup>
        {renderObjectComponent()}
      </ContentWrapper>
      <ContainerRow>
        <Paper sx={{ width: 320, maxWidth: "100%" }}>
          <MenuList>
            <MenuItem>
              <ListItemIcon>
                <ContentCut fontSize="small" />
              </ListItemIcon>
              <ListItemText>Cut</ListItemText>
              <Typography variant="body2" color="text.secondary">
                ⌘X
              </Typography>
            </MenuItem>
            <MenuItem>
              <ListItemIcon>
                <ContentCopy fontSize="small" />
              </ListItemIcon>
              <ListItemText>Copy</ListItemText>
              <Typography variant="body2" color="text.secondary">
                ⌘C
              </Typography>
            </MenuItem>
            <MenuItem>
              <ListItemIcon>
                <ContentPaste fontSize="small" />
              </ListItemIcon>
              <ListItemText>Paste</ListItemText>
              <Typography variant="body2" color="text.secondary">
                ⌘V
              </Typography>
            </MenuItem>
            {available && <ExclusiveComponent />}
          </MenuList>
        </Paper>
      </ContainerRow>
    </Container>
  );
};
