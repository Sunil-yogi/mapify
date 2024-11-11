import React, { useState } from 'react';
import {
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper,
  Switch, IconButton, TextField, Button, TablePagination, InputAdornment
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';

const CategoriesList = () => {
  const categories = [
    { name: 'Pizza & Pasta', foodCount: 32, published: true },
    { name: 'Burgers & Sandwiches', foodCount: 42, published: true },
    { name: 'Salads & Bowls', foodCount: 14, published: false },
    { name: 'Asian Cuisine', foodCount: 75, published: true },
    { name: 'Indian Flavors', foodCount: 34, published: true },
    { name: 'Mexican Fiesta', foodCount: 14, published: true },
    { name: 'Breakfast & Brunch', foodCount: 90, published: true },
   
  ];

 
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

 
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

 
  const paginatedCategories = categories.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

  return (
    <div style={{ width: '80%', margin: 'auto', marginTop: '20px' }}>
      <h2 className="top_head_new">Categories List</h2>
      <div style={{ display: 'flex', justifyContent: 'end', marginBottom: '10px', gap: '15px', }}>
        <TextField
          label="Search"
          variant="outlined"
          size="small"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
        <Button variant="contained" color="primary" startIcon={<AddIcon />}>Add Categories</Button>
      </div>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Food</TableCell>
              <TableCell>Publish</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {paginatedCategories.map((category, index) => (
              <TableRow key={index}>
                <TableCell>{category.name}</TableCell>
                <TableCell>{category.foodCount}</TableCell>
                <TableCell>
                  <Switch checked={category.published} />
                </TableCell>
                <TableCell>
                  <IconButton color="primary">
                    <EditIcon />
                  </IconButton>
                  <IconButton color="secondary">
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        
        <TablePagination
          rowsPerPageOptions={[5, 10, 15]}
          component="div"
          count={categories.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </TableContainer>
    </div>
  );
};

export default CategoriesList;
