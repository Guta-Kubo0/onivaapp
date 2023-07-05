import { Box } from "@mui/material";
import {
  DataGrid,
  GridToolbarContainer,
  GridToolbarExport,
} from "@mui/x-data-grid";

const leaderGridColumns: GridColDef = [
  {
    field: "position",
    headerName: "Position",
    headerClassName: "col-styles",
    width: 100,
  },
  {
    field: "name",
    headerName: "Name",
    headerClassName: "col-styles",
    width: 160,
  },
  {
    field: "onipoints",
    headerName: "Onipoints",
    headerClassName: "col-styles",
    width: 150,
  },
];

function CustomToolbar() {
  return (
    <GridToolbarContainer
      sx={{
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "flex-end",
      }}
    >
      <GridToolbarExport />
    </GridToolbarContainer>
  );
}

export default function Leaderboard(props) {
  return (
    <Box
      sx={{
        height: "fit-content",
        width: "fit-content",
        "& .MuiDataGrid-cell:hover": {
          color: "text.secondary",
        },
        "& .col-styles": {
          backgroundColor: "rgba(245,246,250, 1)",
        },
      }}
    >
      <DataGrid
        rows={props.data}
        columns={leaderGridColumns}
        hideFooterPagination={true}
        hideFooter={true}
        hideFooterSelectedRowCount={true}
        sx={{ border: "none" }}
        slots={{
          toolbar: CustomToolbar,
        }}
      />
    </Box>
  );
}
