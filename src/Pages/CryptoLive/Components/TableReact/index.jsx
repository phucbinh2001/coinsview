import React from "react";
import { Button, Table } from "react-bootstrap";
import { usePagination, useTable, useSortBy, useFilters } from "react-table";
import { useSticky } from "react-table-sticky";
import DefaultColumnFilter from "./DefaultColumnFilter";
import styled from "styled-components";

const Styles = styled.div`
  .table {
    &.sticky {
      overflow: scroll;

      [data-sticky-last-left-td] {
        width: auto;
        left: -1px !important;
      }
    }
  }
`;

function TableReact({ columns, data }) {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page, // Instead of using 'rows', we'll use page,
    // which has only the rows for the active page

    // The rest of these things are super handy, too ;)
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0, pageSize: 30 },
      autoResetPage: false,
      autoResetSortBy: false,
      DefaultColumnFilter,
    },
    useSticky,
    useFilters,
    useSortBy,
    usePagination
  );

  return (
    <div className="table-wrap">
      <Styles>
        <Table
          className="sticky"
          striped
          bordered
          hover
          variant="dark"
          {...getTableProps()}
        >
          <thead>
            <tr>
              <th colSpan={6}>
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
                  {/* <Button className="m-1 btn-light sort" variant="secondary">
                    <ion-icon name="funnel-outline"></ion-icon>
                  </Button> */}
                </div>
              </th>
            </tr>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                    {column.render("Header")}
                    <span>
                      {column.isSorted
                        ? column.isSortedDesc
                          ? " 🔽"
                          : " 🔼"
                        : ""}
                    </span>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {page.map((row, i) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => {
                    return (
                      <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                    );
                  })}
                </tr>
              );
            })}

            <tr>
              <th colSpan={6}>
                <div className="pagination">
                  <div>
                    <button
                      className="m-1 btn-light btn btn-secondary"
                      onClick={() => gotoPage(0)}
                      disabled={!canPreviousPage}
                    >
                      {
                        <>
                          <ion-icon name="chevron-back-outline"></ion-icon>
                          <ion-icon name="chevron-back-outline"></ion-icon>
                        </>
                      }
                    </button>{" "}
                    <button
                      className="m-1 btn-light btn btn-secondary"
                      onClick={() => previousPage()}
                      disabled={!canPreviousPage}
                    >
                      {<ion-icon name="chevron-back-outline"></ion-icon>}
                    </button>{" "}
                    <button
                      className="m-1 btn-light btn btn-secondary"
                      onClick={() => nextPage()}
                      disabled={!canNextPage}
                    >
                      {<ion-icon name="chevron-forward-outline"></ion-icon>}
                    </button>{" "}
                    <button
                      className="m-1 btn-light btn btn-secondary"
                      onClick={() => gotoPage(pageCount - 1)}
                      disabled={!canNextPage}
                    >
                      {
                        <>
                          <ion-icon name="chevron-forward-outline"></ion-icon>
                          <ion-icon name="chevron-forward-outline"></ion-icon>
                        </>
                      }
                    </button>{" "}
                    <span>
                      Page{" "}
                      <strong>
                        {pageIndex + 1} of {pageOptions.length}
                      </strong>{" "}
                    </span>
                  </div>

                  <select
                    className="form-select"
                    value={pageSize}
                    onChange={(e) => {
                      setPageSize(Number(e.target.value));
                    }}
                  >
                    {[10, 20, 30, 40, 50].map((pageSize) => (
                      <option key={pageSize} value={pageSize}>
                        {pageSize} Coins
                      </option>
                    ))}
                  </select>
                </div>
              </th>
            </tr>
          </tbody>
        </Table>
      </Styles>
    </div>
  );
}

export default TableReact;
