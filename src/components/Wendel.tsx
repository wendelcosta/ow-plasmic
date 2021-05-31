import React from 'react'
import {
  PlasmicWendel,
} from "./plasmic/blank_project/PlasmicWendel";
import { HTMLElementRefOf } from "@plasmicapp/react-web";


const Wendel_ = (ref: HTMLElementRefOf<"div">) => <PlasmicWendel root={{ ref }}  />

const Wendel = React.forwardRef(Wendel_);
export default Wendel
