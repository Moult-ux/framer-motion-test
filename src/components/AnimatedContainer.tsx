import React from "react";
import { GridSample } from "./GridSample";
import { FormsSample } from "./FormsSample";
import { UsersSample } from "./UsersSample";
import { TableSample } from "./TableSample";
import AnimatedPage from "./AnimatedPage";

export const AnimatedContainer = (props: {
  selectedMenuId: number;
  menuIsGoingDown: number;
}) => {
  return (
    <div className="w-10/12 m-4 overflow-hidden">
      {props.selectedMenuId === 0 && (
        <AnimatedPage menuIsGoingDown={props.menuIsGoingDown}>
          <GridSample />
        </AnimatedPage>
      )}

      {props.selectedMenuId === 1 && (
        <AnimatedPage menuIsGoingDown={props.menuIsGoingDown}>
          <TableSample />
        </AnimatedPage>
      )}
      {props.selectedMenuId === 2 && (
        <AnimatedPage menuIsGoingDown={props.menuIsGoingDown}>
          <FormsSample />
        </AnimatedPage>
      )}
      {props.selectedMenuId === 3 && (
        <AnimatedPage menuIsGoingDown={props.menuIsGoingDown}>
          <UsersSample />
        </AnimatedPage>
      )}
    </div>
  );
};
