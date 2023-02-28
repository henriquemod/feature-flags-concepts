import {
    ContentCopy,
    ContentCut,
    ContentPaste,
    Cloud
} from "@mui/icons-material";
import {
    ListItemIcon,
    ListItemText,
    MenuItem,
    MenuList,
    Paper,
    Typography,
    Divider
} from "@mui/material";

export const ComponentDev = () => {
    return <Paper sx={{ width: 320, maxWidth: "100%" }}>
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
            <Divider />
            <MenuItem>
                <ListItemIcon>
                    <Cloud fontSize="small" />
                </ListItemIcon>
                <ListItemText>Web Clipboard - Version 2</ListItemText>
            </MenuItem>
        </MenuList>
    </Paper>
}
