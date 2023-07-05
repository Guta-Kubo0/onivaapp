import { Box } from "@mui/material";
import {
  DataGrid,
  GridToolbarContainer,
  GridToolbarExport,
  GridToolbarFilterButton,
} from "@mui/x-data-grid";

const claimGridColumns: GridColDef = [
  {
    field: "type",
    headerName: "Type",
    headerClassName: "col-styles",
    width: 100,
  },
  {
    field: "name",
    headerName: "Name",
    headerClassName: "col-styles",
    width: 200,
  },
  {
    field: "usedOnipoints",
    headerName: "Used Onipoints",
    headerClassName: "col-styles",
    width: 160,
  },
  {
    field: "accomplishedGoal",
    headerName: "Accomplished Goal",
    headerClassName: "col-styles",
    width: 220,
  },
  {
    field: "reward",
    headerName: "Reward",
    headerClassName: "col-styles",
    width: 180,
  },
  {
    field: "claimedAt",
    headerName: "Claimed At",
    headerClassName: "col-styles",
    width: 120,
  },
  {
    field: "status",
    headerName: "Status",
    headerClassName: "col-styles",
    width: 100,
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
      <GridToolbarFilterButton />
      <GridToolbarExport />
    </GridToolbarContainer>
  );
}

export default function RewardsClaimsTable() {
  const claimGridRows: GridRowsProp = [
    {
      id: 1,
      type: "Group",
      name: "-",
      usedOnipoints: "5000",
      accomplishedGoal: "Lorem ipsum, lorem ipsum, lorem ipsum",
      reward: "Lorem Ipsum",
      claimedAt: "2023/04/12",
      status: "Finished",
    },
    {
      id: 2,
      type: "Group",
      name: "-",
      usedOnipoints: "6000",
      accomplishedGoal: "Lorem ipsum, lorem ipsum, lorem ipsum",
      reward: "Lorem Ipsum",
      claimedAt: "2023/04/12",
      status: "Cancelled",
    },
    {
      id: 3,
      type: "Individual",
      name: "John Doe",
      usedOnipoints: "5000",
      accomplishedGoal: "Lorem ipsum, lorem ipsum, lorem ipsum",
      reward: "Lorem Ipsum",
      claimedAt: "2023/04/12",
      status: "To Fulfill",
    },
    {
      id: 4,
      type: "Group",
      name: "-",
      usedOnipoints: "5000",
      accomplishedGoal: "Lorem ipsum, lorem ipsum, lorem ipsum",
      reward: "Lorem Ipsum",
      claimedAt: "2023/04/12",
      status: "Finished",
    },
    {
      id: 5,
      type: "Individual",
      name: "John Doe",
      usedOnipoints: "5000",
      accomplishedGoal: "Lorem ipsum, lorem ipsum, lorem ipsum",
      reward: "Lorem Ipsum",
      claimedAt: "2023/04/12",
      status: "Finished",
    },
    {
      id: 6,
      type: "Group",
      name: "-",
      usedOnipoints: "5000",
      accomplishedGoal: "Lorem ipsum, lorem ipsum, lorem ipsum",
      reward: "Lorem Ipsum",
      claimedAt: "2023/04/12",
      status: "Finished",
    },
    {
      id: 7,
      type: "Group",
      name: "-",
      usedOnipoints: "5000",
      accomplishedGoal: "Lorem ipsum, lorem ipsum, lorem ipsum",
      reward: "Lorem Ipsum",
      claimedAt: "2023/04/12",
      status: "Finished",
    },
    {
      id: 8,
      type: "Group",
      name: "-",
      usedOnipoints: "5000",
      accomplishedGoal: "Lorem ipsum, lorem ipsum, lorem ipsum",
      reward: "Lorem Ipsum",
      claimedAt: "2023/04/12",
      status: "Finished",
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
        rows={claimGridRows}
        columns={claimGridColumns}
        sx={{ border: "none" }}
        slots={{
          toolbar: CustomToolbar,
        }}
      />
    </Box>
  );
}
