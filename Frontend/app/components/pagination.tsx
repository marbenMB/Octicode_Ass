import React from "react";
import {Pagination} from "@nextui-org/react";

export default function PagedComp(props: any) {
  return (
    <Pagination loop showControls color="default" total={props.total} initialPage={1} />
  );
}
