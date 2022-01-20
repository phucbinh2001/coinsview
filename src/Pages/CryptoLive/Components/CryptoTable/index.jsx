import React from "react";
import { Button, Table } from "react-bootstrap";
import TableReact from "../TableReact";
import "./style.scss";

function CryptoTable() {
  const columns = [
    {
      Header: "Coin",
      // accessor: (d) => `<img src=${d.webp32} /> ${d.name} ${d.code}`,
      Cell: (row) => {
        return (
          <div className="d-flex align-items-center">
            <img
              className="coin-avatar"
              height={34}
              src={row.cell.row.original.webp32}
              alt="ds"
            />
            <div>
              <p className="coin-code mb-0"> {row.cell.row.original.code}</p>
              <p className="coin-name text-mute mb-0">
                {" "}
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
    },
    {
      Header: "Market Cap",
      accessor: "cap",
    },
    {
      Header: "Volume 24h",
      accessor: "volume",
    },
    {
      Header: "Liquidity",
      accessor: "pairs",
    },
    {
      Header: "All-time High",
      accessor: "allTimeHighUSD",
    },
  ];

  const data = [
    {
      name: "Bitcoin",
      symbol: "₿",
      color: "#fa9e32",
      png32:
        "https://lcw.nyc3.cdn.digitaloceanspaces.com/production/currencies/32/btc.png",
      png64:
        "https://lcw.nyc3.cdn.digitaloceanspaces.com/production/currencies/64/btc.png",
      webp32:
        "https://lcw.nyc3.cdn.digitaloceanspaces.com/production/currencies/32/btc.webp",
      webp64:
        "https://lcw.nyc3.cdn.digitaloceanspaces.com/production/currencies/64/btc.webp",
      exchanges: 169,
      markets: 4411,
      pairs: 1591,
      allTimeHighUSD: 68780.77475755227,
      circulatingSupply: 18934825,
      totalSupply: 18934825,
      maxSupply: 21000000,
      code: "BTC",
      rate: 41990.408603978874,
      volume: 13443090144,
      cap: 795081038595,
    },
    {
      name: "Ethereum",
      symbol: "Ξ",
      color: "#282a2a",
      png32:
        "https://lcw.nyc3.cdn.digitaloceanspaces.com/production/currencies/32/eth.png",
      png64:
        "https://lcw.nyc3.cdn.digitaloceanspaces.com/production/currencies/64/eth.png",
      webp32:
        "https://lcw.nyc3.cdn.digitaloceanspaces.com/production/currencies/32/eth.webp",
      webp64:
        "https://lcw.nyc3.cdn.digitaloceanspaces.com/production/currencies/64/eth.webp",
      exchanges: 208,
      markets: 4486,
      pairs: 2369,
      allTimeHighUSD: 4861.288700810894,
      circulatingSupply: 119233995,
      totalSupply: 119233995,
      maxSupply: null,
      code: "ETH",
      rate: 3136.330764611192,
      volume: 9790858463,
      cap: 373957246706,
    },
    {
      name: "Binance Coin",
      color: "#f4bc2c",
      png32:
        "https://lcw.nyc3.cdn.digitaloceanspaces.com/production/currencies/32/bnb.png",
      png64:
        "https://lcw.nyc3.cdn.digitaloceanspaces.com/production/currencies/64/bnb.png",
      webp32:
        "https://lcw.nyc3.cdn.digitaloceanspaces.com/production/currencies/32/bnb.webp",
      webp64:
        "https://lcw.nyc3.cdn.digitaloceanspaces.com/production/currencies/64/bnb.webp",
      exchanges: 87,
      markets: 3609,
      pairs: 3164,
      allTimeHighUSD: 691.55924082575,
      circulatingSupply: 165123057,
      totalSupply: 165123057,
      maxSupply: 197192382,
      code: "BNB",
      rate: 476.2913502412539,
      volume: 2191069296,
      cap: 78646683774,
    },
    {
      name: "Tether",
      color: "#24a37c",
      png32:
        "https://lcw.nyc3.cdn.digitaloceanspaces.com/production/currencies/32/usdt.png",
      png64:
        "https://lcw.nyc3.cdn.digitaloceanspaces.com/production/currencies/64/usdt.png",
      webp32:
        "https://lcw.nyc3.cdn.digitaloceanspaces.com/production/currencies/32/usdt.webp",
      webp64:
        "https://lcw.nyc3.cdn.digitaloceanspaces.com/production/currencies/64/usdt.webp",
      exchanges: 180,
      markets: 9408,
      pairs: 3206,
      allTimeHighUSD: 1.053,
      circulatingSupply: 78324569300,
      totalSupply: 78324569300,
      maxSupply: null,
      code: "USDT",
      rate: 0.9997362513274686,
      volume: 32596035595,
      cap: 78303911299,
    },
    {
      name: "USD Coin",
      color: "#eef4f9",
      png32:
        "https://lcw.nyc3.cdn.digitaloceanspaces.com/production/currencies/32/usdc.png",
      png64:
        "https://lcw.nyc3.cdn.digitaloceanspaces.com/production/currencies/64/usdc.png",
      webp32:
        "https://lcw.nyc3.cdn.digitaloceanspaces.com/production/currencies/32/usdc.webp",
      webp64:
        "https://lcw.nyc3.cdn.digitaloceanspaces.com/production/currencies/64/usdc.webp",
      exchanges: 127,
      markets: 884,
      pairs: 532,
      allTimeHighUSD: 1.087,
      circulatingSupply: 46053346914,
      totalSupply: 45736281012,
      maxSupply: null,
      code: "USDC",
      rate: 0.9987946781932135,
      volume: 2011205082,
      cap: 45997837811,
    },
  ];

  return (
    <>
      <TableReact columns={columns} data={data} />
    </>
  );
}

export default CryptoTable;
