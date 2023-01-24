import Cloud from '@mui/icons-material/Cloud';
import ContentCopy from '@mui/icons-material/ContentCopy';
import ContentCut from '@mui/icons-material/ContentCut';
import ContentPaste from '@mui/icons-material/ContentPaste';
import { FormControlLabel, FormGroup, MenuList, Switch } from '@mui/material';
import Divider from '@mui/material/Divider';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuItem from '@mui/material/MenuItem';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { Header } from "../../header";
import {
  Container, ContainerRow, ContentWrapper
} from "../styles";
import { useFlag } from "./useFlag";

export const Exclusive = () => {
  const { available, toggle } = useFlag();

  return (
    <Container>
      <Header />
      <ContentWrapper>
        <h1>Exclusive</h1>
        <h3>Refers to a feature that is only rendered if available</h3>
        <FormGroup>
          <FormControlLabel control={<Switch defaultChecked checked={available} onChange={toggle} />} label="Available" />
        </FormGroup>
      </ContentWrapper>
      <ContainerRow>
        <Paper sx={{ width: 320, maxWidth: '100%' }}>
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
            {available && (
              <>
                <Divider />
                <MenuItem>
                  <ListItemIcon>
                    <Cloud fontSize="small" />
                  </ListItemIcon>
                  <ListItemText>Web Clipboard</ListItemText>
                </MenuItem>
              </>
            )}

          </MenuList>
        </Paper>
      </ContainerRow>
    </Container>
  );
};
