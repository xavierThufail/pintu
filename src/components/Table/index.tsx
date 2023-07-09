import React from "react";

import MobileTable from "./MobileTable";
import DesktopTable from "./DesktopTable";
import { useSearchContext } from "../../hooks/useSearch";

const Table = () => {
  const { isFocused } = useSearchContext();

  return (
    <React.Fragment>
      {!isFocused && <MobileTable />}
      <DesktopTable />
    </React.Fragment>
  );
};

Table.displayName = 'TableContainer';

export default Table;
