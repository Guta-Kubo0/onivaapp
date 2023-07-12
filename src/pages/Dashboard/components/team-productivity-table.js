import { Box } from "@mui/material";
import {
  DataGrid,
  GridToolbarContainer,
  GridToolbarExport,
} from "@mui/x-data-grid";
import * as React from "react";

const teamProductivityGridColumns: GridColDef = [
  {
    field: "assignedGoals",
    headerName: "Assigned Goals",
    headerClassName: "col-styles",
    width: 300,
  },
  {
    field: "achievedOnTime",
    headerName: "Achieved On Time ",
    headerClassName: "col-styles",
    width: 250,
  },

  {
    field: "delayedGoal",
    headerName: "Delayed Goals",
    headerClassName: "col-styles",
    width: 250,
  },
  {
    field: "onipointsReceived",
    headerName: "Onipoints Received",
    headerClassName: "col-styles",
    width: 280,
  },
];

function CustomToolbar(props) {
  return (
    <GridToolbarContainer
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
      }}
    >
      <GridToolbarExport />
    </GridToolbarContainer>
  );
}

export default function TeamProductivityTable() {
  const teamProductivityGridRows: GridRowsProp = [
    {
      id: 1,
      assignedGoals: "10",
      achievedOnTime: "6",
      delayedGoal: "4",
      onipointsReceived: "4000",
    },
  ];
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
        rows={teamProductivityGridRows}
        columns={teamProductivityGridColumns}
        hideFooterPagination={true}
        sx={{ border: "none" }}
        slots={{
          toolbar: CustomToolbar,
        }}
      />
    </Box>
  );
}
