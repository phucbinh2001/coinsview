import React, { useEffect, useState } from "react";
import TableReact from "../TableReact";
import "./style.scss";

function CryptoTable() {
  const [coinList, setcoinList] = useState([]);

  useEffect(() => {
    const fetchCoinList = async () => {
      // Default options are marked with *
      const response = await fetch("https://api.livecoinwatch.com/coins/list", {
        method: "POST",
        headers: new Headers({
          "content-type": "application/json",
          "x-api-key": "a55c9487-40ad-41ca-80ab-b7fe264c7377",
        }),
        body: JSON.stringify({
          currency: "USD",
          sort: "rank",
          order: "ascending",
          offset: 0,
          limit: 1000,
          meta: true,
        }),
      });
      return response.json(); // parses JSON response into native JavaScript objects
    };

    fetchCoinList().then((data) => {
      setcoinList(data);
    });

    // const interval = setInterval(
    //   () =>
    //     fetchCoinList().then((data) => {
    //       setcoinList(data);
    //     }),
    //   10000
    // );
    return () => {
      // clearInterval(interval);
    };
  }, []);

  //format long number to M,B
  const nFormatter = (num, digits) => {
    const lookup = [
      { value: 1, symbol: "" },
      { value: 1e3, symbol: "k" },
      { value: 1e6, symbol: "M" },
      { value: 1e9, symbol: "B" },
      // { value: 1e12, symbol: "T" },
      // { value: 1e15, symbol: "P" },
      // { value: 1e18, symbol: "E" },
    ];
    const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
    var item = lookup
      .slice()
      .reverse()
      .find(function (item) {
        return num >= item.value;
      });
    return item
      ? (num / item.value).toFixed(2).replace(rx, "$1") + " " + item.symbol
      : "0";
  };

  const columns = [
    {
      Header: "#",
      // accessor: (d) => `<img src=${d.webp32} /> ${d.name} ${d.code}`,
      Cell: (row) => {
        return <div className="text-center">{row.row.index + 1}</div>;
      },
    },
    {
      Header: "Coin",
      // accessor: (d) => `<img src=${d.webp32} /> ${d.name} ${d.code}`,
      Cell: (row) => {
        return (
          <div className="d-flex align-items-center">
            <img
              className="coin-avatar"
              width={34}
              height={34}
              src={row.cell.row.original.webp32}
              alt="ds"
            />
            <div>
              <p className="coin-code mb-0"> {row.cell.row.original.code}</p>
              <p className="coin-name text-mute mb-0">
                {row.cell.row.original.name}
              </p>
            </div>
          </div>
        );
      },
    },
    {
      Header: "Price",
      Cell: (row) => {
        return <>{"$" + parseFloat(row.cell.row.original.rate).toFixed(2)}</>;
      },
    },
    {
      Header: "Market Cap",
      Cell: (row) => {
        return (
          <>{"$" + nFormatter(parseFloat(row.cell.row.original.cap, 1))}</>
        );
      },
    },
    {
      Header: "Volume 24h",
      Cell: (row) => {
        return (
          <>
            {"$" + nFormatter(parseFloat(row.cell.row.original.volume, 1))}
            <br />
          </>
        );
      },
    },
    // {
    //   Header: "Liquidity",
    //   Cell: (row) => {
    //     return (
    //       <>
    //         {"$" + nFormatter(parseFloat(row.cell.row.original.pairs, 1))}
    //         <br />
    //         {row.cell.row.original.pairs}
    //       </>
    //     );
    //   },
    //   // accessor: "pairs",
    // },
    {
      Header: "All-time High",

      Cell: (row) => {
        return (
          <>
            {"$" + parseFloat(row.cell.row.original.allTimeHighUSD).toFixed(2)}
          </>
        );
      },
    },
  ];

  const data = coinList;

  return (
    <>
      <TableReact columns={columns} data={data} />
    </>
  );
}

export default CryptoTable;
