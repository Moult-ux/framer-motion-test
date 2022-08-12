import React, { useState } from "react";
import { GridSample } from "./GridSample";
import { FormsSample } from "./FormsSample";
import { UsersSample } from "./UsersSample";
import { TableSample } from "./TableSample";
import AnimatedPage from "./AnimatedPage";
import { AnimatePresence } from "framer-motion";
import { motion, Variants } from "framer-motion";

export const AnimatedContainer = (props: {
  selectedMenuId: number;
  menuIsGoingDown: number;
}) => {
  const [isVisible, setIsVisible] = useState(true);
  return (
    <div
      className="w-10/12 m-4 overflow-hidden "
      onClick={() => setIsVisible(!isVisible)}
    >
      <AnimatePresence exitBeforeEnter>
        {props.selectedMenuId === 0 && (
          <AnimatedPage
            key={"GridSample"}
            menuIsGoingDown={props.menuIsGoingDown}
            selectedMenuId={props.selectedMenuId}
          >
            <GridSample />
          </AnimatedPage>
        )}

        {props.selectedMenuId === 1 && (
          <AnimatedPage
            key={"TableSample"}
            menuIsGoingDown={props.menuIsGoingDown}
            selectedMenuId={props.selectedMenuId}
          >
            <TableSample />
          </AnimatedPage>
        )}
        {props.selectedMenuId === 2 && (
          <AnimatedPage
            key={"FormsSample"}
            menuIsGoingDown={props.menuIsGoingDown}
            selectedMenuId={props.selectedMenuId}
          >
            <FormsSample />
          </AnimatedPage>
        )}
        {props.selectedMenuId === 3 && (
          <AnimatedPage
            key={"UsersSample"}
            menuIsGoingDown={props.menuIsGoingDown}
            selectedMenuId={props.selectedMenuId}
          >
            <UsersSample />
          </AnimatedPage>
        )}
      </AnimatePresence>
    </div>
  );
};
