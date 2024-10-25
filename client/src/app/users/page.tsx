"use client";

import { useGetUsersQuery } from "@/state/api";
import Header from "../(components)/Header";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

const columns: GridColDef[] = [
  {
    field: "userId",
    headerName: "ID",
    width: 90,
    headerClassName: "bg-gray-300",
  },

  {
    field: "name",
    headerName: "Name",
    width: 200,
    headerClassName: "bg-gray-300",
  },
  {
    field: "email",
    headerName: "Email",
    width: 110,
    headerClassName: "bg-gray-300",
  },
];

function Users() {
  const { data: users, isError, isLoading } = useGetUsersQuery();
  if (isLoading) {
    return <div className="py-4 font-semibold text-center">Loading...</div>;
  }
  if (isError || !users) {
    return <div className="">Failed to fetch users</div>;
  }
  return (
    <div className="flex flex-col">
      <Header name="Users" />
      <DataGrid
        rows={users}
        columns={columns}
        getRowId={(row) => row.userId}
        checkboxSelection
        className="bg-white shadow rounded-lg border border-gray-200mt5 !text-gray-700"
      />
    </div>
  );
}

export default Users;
