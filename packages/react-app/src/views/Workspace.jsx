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
  // const am = useContractReader(readContracts, "NewContract", "testCallFoo", [
  //   "0x47Ec97bFC4E57937087cA8B44B60DeEC860d31a4",
  // ]);

  const func = useContractReader(readContracts, "NewContract", "getTransactionCount");

  // // const { x, y } = func;
  console.log(func);
  // console.log(am ? am : null);
  // console.log(func);
  return (
    <div>
      <div style={{ border: "1px solid #cccccc", padding: 16, width: 400, margin: "auto", marginTop: 64 }}>
        <p>{purp}!!</p>
        <h2>Your Balance: {yourLocalBalance ? formatEther(yourLocalBalance) : "..."}</h2>

        <Button onClick={() => tx(writeContracts.Gas.forever())}>Run Forever</Button>
        {/* <h1>User Level {ret ? BigNumber.from(ret).toString() + " 🐕" : null}</h1> */}
      </div>
    </div>
  );
}
