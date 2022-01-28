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
          limit: 13848,
          meta: true,
        }),
      });
      return response.json(); // parses JSON response into native JavaScript objects
    };

    fetchCoinList().then((data) => {
      setcoinList(data);
    });

    const interval = setInterval(
      () =>
        fetchCoinList().then((data) => {
          setcoinList(data);
        }),
      10000
    );
    return () => {
      clearInterval(interval);
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
      ? "$" +
          (num / item.value).toFixed(2).replace(rx, "$1") +
          " " +
          item.symbol
      : "-";
  };

  //format volume
  const volumeFormat = (num, digits) => {
    const lookup = [
      { value: 1, symbol: "" },
      { value: 1e3, symbol: "K" },
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
      ? "$" +
          (num / item.value).toFixed(2).replace(rx, "$1") +
          " " +
          item.symbol
      : "$0.000";
  };

  //format giá cho tất cả trường hợp
  const FormatCoinPrice = (num, typeOfFormat) => {
    switch (typeOfFormat) {
      case "alltime":
        if (num === null) {
          return "-";
        }
        if (parseFloat(num) >= 1) {
          return "$" + parseFloat(num).toFixed(2);
        } else if (parseFloat(num) <= 0.00000001) {
          return "$<0.00000001";
        } else {
          return "$" + parseFloat(num).toFixed(6);
        }

      default:
        if (parseFloat(num) >= 1) {
          return "$" + parseFloat(num).toFixed(2);
        } else if (parseFloat(num) <= 0.00000001 || num === null) {
          return "$<0.00000001";
        } else {
          return "$" + parseFloat(num).toFixed(6);
        }
    }
  };

  const columns = [
    {
      Header: "Coin",
      sticky: "left",
      accessor: "name",
      // accessor: (d) => `<img src=${d.webp32} /> ${d.name} ${d.code}`,
      Cell: (row) => {
        return (
          <div className="d-flex align-items-center">
            <div className="stt">{row.row.index + 1}</div>

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
      accessor: "rate",
      Cell: (row) => {
        return <>{FormatCoinPrice(row.cell.row.original.rate, "price")}</>;
      },
    },
    {
      Header: "Market Cap",
      accessor: "cap",
      Cell: (row) => {
        return <>{nFormatter(parseFloat(row.cell.row.original.cap, 1))}</>;
      },
    },
    {
      Header: "Volume 24h",
      accessor: "volume",
      Cell: (row) => {
        return (
          <>
            {volumeFormat(parseFloat(row.cell.row.original.volume, 1))}
            <br />
          </>
        );
      },
    },

    {
      Header: "All-time High",
      accessor: "allTimeHighUSD",
      Cell: (row) => {
        return (
          <>
            {FormatCoinPrice(row.cell.row.original.allTimeHighUSD, "alltime")}
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
