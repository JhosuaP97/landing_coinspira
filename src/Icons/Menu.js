import * as React from "react";
import { Svg } from "./styles";
export function Menu(props) {
  return (
    <Svg
      width={50}
      height={50}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M3 11h14V9H3v2zm0 5h14v-2H3v2zM3 4v2h14V4H3z" fill="#000" />
    </Svg>
  );
}
