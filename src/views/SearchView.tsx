import { observer } from "mobx-react-lite";
import { Avatar, Box, Button, Grid, List, ListItem, ListItemAvatar, ListItemText, Paper, Stack, TextField, Typography } from '@mui/material';
import ImageIcon from '@mui/icons-material/Image';
import SearchViewModel from "../viewModels/SearchViewModel";
import InventoryItem from "../types/InventoryItem";


interface Props {
  viewModel: SearchViewModel;
} 

const SearchView = ({ viewModel }: Props) => (
  <>
  <Box>
    <Grid container spacing={2}>
    <Grid item md={4}>S
    <Stack direction="row">
    <TextField
      id="outlined-basic-search-field"
      label="Search for an article"
      variant="outlined"
      onChange={viewModel.setSearchValue}
    />
    <Button sx={{ marginLeft: 2 }} variant="contained" onClick={viewModel.search}>Search</Button>
    </Stack>
    { <Box marginTop={2}><Paper sx={{ padding: 2 }}>
      <strong>Title</strong>
      <p>description</p>
      <p style={{ float: 'right'}}>price</p>
      <div style={{ clear: 'both'}}></div>
    </Paper></Box>}
    </Grid>
    <Grid item md={8}>
      <Box alignItems="center" flexGrow={1}>
        <Typography align="center" variant="h5">Search results</Typography>
       </Box>
      {!viewModel.searchResult && <Box>No results</Box>}
      {<List>
          {viewModel.searchResult && viewModel.filteredInventory.map((item: InventoryItem) => (
            <ListItem key={item.id}>
               <ListItemAvatar>
              <Avatar>
                <ImageIcon />
              </Avatar>
            </ListItemAvatar>
              <ListItemText primary={item.title} secondary={item.description} />
            </ListItem>
          ))}
        </List>}
      </Grid>
    </Grid>
    </Box>
  </>
);
export default observer(SearchView);