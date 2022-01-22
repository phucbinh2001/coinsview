import React from "react";
import { Button, Table } from "react-bootstrap";
import { useTable } from "react-table";

function TableReact({ columns, data }) {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({
      columns,
      data,
    });

  return (
    <Table striped bordered hover variant="dark" {...getTableProps()}>
      <thead>
        <tr>
          <th colSpan={10}>
            <div className="d-flex justify-content-end tool">
              <Button className="m-1 btn-light" variant="secondary">
                <ion-icon name="settings-outline"></ion-icon>
                Customize
              </Button>
              <Button className="m-1 btn-light" variant="secondary">
                <ion-icon name="copy-outline"></ion-icon> Categories
              </Button>
              <Button className="m-1 btn-light" variant="secondary">
                <ion-icon name="repeat-outline"></ion-icon>
                Exchanges
              </Button>
              <Button className="m-1 btn-light sort" variant="secondary">
                <ion-icon name="funnel-outline"></ion-icon>
              </Button>
            </div>
          </th>
        </tr>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps()}>{column.render("Header")}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}

export default TableReact;
