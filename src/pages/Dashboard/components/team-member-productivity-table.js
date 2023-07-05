import { Box } from "@mui/material";
import {
  DataGrid,
  GridToolbarContainer,
  GridToolbarExport,
  GridToolbarFilterButton,
} from "@mui/x-data-grid";
import * as React from "react";

const teamMemberProductivityGridColumns: GridColDef = [
  {
    field: "name",
    headerName: "Name",
    headerClassName: "col-styles",
    width: 210,
  },
  {
    field: "assignedGoals",
    headerName: "Assigned Goals",
    headerClassName: "col-styles",
    width: 210,
  },
  {
    field: "achievedOnTime",
    headerName: "Achieved On Time ",
    headerClassName: "col-styles",
    width: 180,
  },

  {
    field: "delayedGoal",
    headerName: "Delayed Goals",
    headerClassName: "col-styles",
    width: 150,
  },
  {
    field: "onipointsReceived",
    headerName: "Onipoints Received",
    headerClassName: "col-styles",
    width: 210,
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
      <GridToolbarFilterButton />
      <GridToolbarExport />
    </GridToolbarContainer>
  );
}

export default function TeamMemberProductivityTable() {
  const teamMemberProductivityGridRows: GridRowsProp = [
    {
      id: 1,
      name: "John Doe",
      assignedGoals: "10",
      achievedOnTime: "6",
      delayedGoal: "4",
      onipointsReceived: "4000",
    },
    {
      id: 2,
      name: "John Doe",
      assignedGoals: "10",
      achievedOnTime: "6",
      delayedGoal: "4",
      onipointsReceived: "4000",
    },
    {
      id: 3,
      name: "John Doe",
      assignedGoals: "10",
      achievedOnTime: "6",
      delayedGoal: "4",
      onipointsReceived: "4000",
    },
    {
      id: 4,
      type: "Group",
      name: "-",
      onipointsEarned: "5000",
      accomplishedGoal: "Lorem ipsum, lorem ipsum, lorem ipsum",
      earnedAt: "2023/04/12",
      status: "Approved",
    },
    {
      id: 4,
      name: "John Doe",
      assignedGoals: "10",
      achievedOnTime: "6",
      delayedGoal: "4",
      onipointsReceived: "4000",
    },
    {
      id: 5,
      name: "John Doe",
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
        rows={teamMemberProductivityGridRows}
        columns={teamMemberProductivityGridColumns}
        sx={{ border: "none" }}
        slots={{
          toolbar: CustomToolbar,
        }}
      />
    </Box>
  );
}
