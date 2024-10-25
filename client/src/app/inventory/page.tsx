"use client";

import { useGetProductsQuery } from "@/state/api";
import Header from "../(components)/Header";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

const columns: GridColDef[] = [
  {
    field: "productId",
    headerName: "ID",
    width: 90,
    headerClassName: "bg-gray-300",
  },

  {
    field: "name",
    headerName: "Product Name",
    width: 200,
    headerClassName: "bg-gray-300",
  },
  {
    field: "price",
    headerName: "Price",
    width: 110,
    type: "number",
    valueGetter: (value, row) => `$${row.price}`,
    headerClassName: "bg-gray-300",
  },
  {
    field: "rating",
    headerName: "Rating",
    width: 110,
    type: "number",
    valueGetter: (value, row) => (row.rating ? row.rating : "N/A"),
    headerClassName: "bg-gray-300",
  },
  {
    field: "stockQuantity",
    headerName: "Stock Quantity",
    width: 150,
    type: "number",
    // cellClassName: "bg-gray-300",
    headerClassName: "bg-gray-300",
  },
];

function Inventory() {
  const { data: products, isError, isLoading } = useGetProductsQuery();
  if (isLoading) {
    return <div className="py-4 font-semibold text-center">Loading...</div>;
  }
  if (isError || !products) {
    return <div className="">Failed to fetch products</div>;
  }
  return (
    <div className="flex flex-col">
      <Header name="Inventory" />
      <DataGrid
        rows={products}
        columns={columns}
        getRowId={(row) => row.productId}
        checkboxSelection
        className="bg-white shadow rounded-lg border border-gray-200mt5 !text-gray-700"
      />
    </div>
  );
}

export default Inventory;
