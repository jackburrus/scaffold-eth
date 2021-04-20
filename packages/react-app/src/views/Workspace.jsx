import { formatEther, utils } from "@ethersproject/units";
import { Button } from "antd";
import { ethers, BigNumber } from "ethers";
import React, { ReactElement } from "react";
import { useContractLoader, useContractReader } from "../hooks";

export default function Workspace({
  purpose,
  setPurposeEvents,
  address,
  mainnetProvider,
  userProvider,
  localProvider,
  yourLocalBalance,
  price,
  tx,
  // readContracts,
  writeContracts,
}) {
  // Load in your local 📝 contract and read a value from it:
  const readContracts = useContractLoader(localProvider);
  // keep track of a variable from the contract in the local React state:

  const purp = useContractReader(readContracts, "YourContract", "purpose");
  const func = useContractReader(readContracts, "NewContract", "doSomething");
  console.log(func ? func : null);

  return (
    <div>
      <div style={{ border: "1px solid #cccccc", padding: 16, width: 400, margin: "auto", marginTop: 64 }}>
        <p>{purp}!!</p>
        <h2>Your Balance: {yourLocalBalance ? formatEther(yourLocalBalance) : "..."}</h2>
        <h1>{func ? BigNumber.from(func).toString() : null}</h1>
      </div>
    </div>
  );
}
