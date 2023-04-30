import { Box, IconButton, Tooltip } from "@mui/material";
import {
  DataGrid,
  GridDeleteIcon,
  GridToolbarContainer,
  GridToolbarExport,
  GridToolbarFilterButton,
} from "@mui/x-data-grid";
import { useState } from "react";
import CancelOnipoints from "./cancelOnipointsdialog";
import * as React from "react";

const onipointsGridColumns: GridColDef = [
  {
    field: "type",
    headerName: "Type",
    headerClassName: "col-styles",
    width: 120,
  },
  {
    field: "name",
    headerName: "Name",
    headerClassName: "col-styles",
    width: 210,
  },
  {
    field: "onipointsEarned",
    headerName: "Onipoints Earned",
    headerClassName: "col-styles",
    width: 150,
  },

  {
    field: "accomplishedGoal",
    headerName: "Accomplished Goal",
    headerClassName: "col-styles",
    width: 300,
  },
  {
    field: "earnedAt",
    headerName: "Earned At",
    headerClassName: "col-styles",
    width: 150,
  },
  {
    field: "status",
    headerName: "Status",
    headerClassName: "col-styles",
    width: 100,
  },
];

function CustomToolbar(props) {
  const [isCancelOnipointsDialogOpen, setIsCancelOnipointsDialogOpen] =
    React.useState(false);

  const handleCancelDialogDialogOpen = () => {
    setIsCancelOnipointsDialogOpen(true);
  };

  const handleCancelDialogDialogClose = () => {
    setIsCancelOnipointsDialogOpen(false);
  };
  return (
    <GridToolbarContainer
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
      }}
    >
      <GridToolbarFilterButton />
      <CancelOnipoints
        isOpen={isCancelOnipointsDialogOpen}
        handleClose={handleCancelDialogDialogClose}
      />
      <GridToolbarExport />
      {props.showDelete && (
        <Tooltip title="Delete">
          <IconButton onClick={handleCancelDialogDialogOpen}>
            <GridDeleteIcon color="primary" />
          </IconButton>
        </Tooltip>
      )}
    </GridToolbarContainer>
  );
}

export default function PointsDistributedTable() {
  const [selectedRows, setSelectedRows] = useState([]);
  const onipointsGridRows: GridRowsProp = [
    {
      id: 1,
      type: "Group",
      name: "-",
      onipointsEarned: "5000",
      accomplishedGoal: "Lorem ipsum, lorem ipsum, lorem ipsum",
      earnedAt: "2023/04/12",
      status: "Cancelled",
    },
    {
      id: 2,
      type: "Individual",
      name: "John Doe",
      onipointsEarned: "5000",
      accomplishedGoal: "Lorem ipsum, lorem ipsum, lorem ipsum",
      earnedAt: "2023/04/12",
      status: "Approved",
    },
    {
      id: 3,
      type: "Individual",
      name: "John Dow",
      onipointsEarned: "5000",
      accomplishedGoal: "Extra Onipoints",
      earnedAt: "2023/04/12",
      status: "Approved",
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
      id: 5,
      type: "Group",
      name: "-",
      onipointsEarned: "5000",
      accomplishedGoal: "Lorem ipsum, lorem ipsum, lorem ipsum",
      earnedAt: "2023/04/12",
      status: "Approved",
    },
    {
      id: 6,
      type: "Group",
      name: "-",
      onipointsEarned: "5000",
      accomplishedGoal: "Lorem ipsum, lorem ipsum, lorem ipsum",
      earnedAt: "2023/04/12",
      status: "Approved",
    },
    {
      id: 7,
      type: "Group",
      name: "-",
      onipointsEarned: "5000",
      accomplishedGoal: "Lorem ipsum, lorem ipsum, lorem ipsum",
      earnedAt: "2023/04/12",
      status: "Approved",
    },
    {
      id: 8,
      type: "Group",
      name: "-",
      onipointsEarned: "5000",
      accomplishedGoal: "Lorem ipsum, lorem ipsum, lorem ipsum",
      earnedAt: "2023/04/12",
      status: "Approved",
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
        rows={onipointsGridRows}
        columns={onipointsGridColumns}
        checkboxSelection
        onRowSelectionModelChange={(e) => {
          setSelectedRows(e);
        }}
        sx={{ border: "none" }}
        slots={{
          toolbar: CustomToolbar,
        }}
        slotProps={{ toolbar: { showDelete: selectedRows.length > 0 } }}
      />
    </Box>
  );
}
