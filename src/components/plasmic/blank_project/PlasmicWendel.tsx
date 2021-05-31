// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: aZpqwzEqMU83o5JsBEvwHw
// Component: JWuSu6KynG
import * as React from "react";

import * as p from "@plasmicapp/react-web";
import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";

import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_blank_project.module.css"; // plasmic-import: aZpqwzEqMU83o5JsBEvwHw/projectcss
import * as sty from "./PlasmicParagraph.module.css"; // plasmic-import: JWuSu6KynG/css

export type PlasmicWendel__VariantMembers = {};

export type PlasmicWendel__VariantsArgs = {};
type VariantPropType = keyof PlasmicWendel__VariantsArgs;
export const PlasmicWendel__VariantProps = new Array<VariantPropType>();

export type PlasmicWendel__ArgsType = {};
type ArgPropType = keyof PlasmicWendel__ArgsType;
export const PlasmicWendel__ArgProps = new Array<ArgPropType>();

export type PlasmicWendel__OverridesType = {
  root?: p.Flex<"div">;
  box?: p.Flex<"p">;
};

export interface DefaultParagraphProps {
  className?: string;
}

function PlasmicWendel__RenderFunc(props: {
  variants: PlasmicWendel__VariantsArgs;
  args: PlasmicWendel__ArgsType;
  overrides: PlasmicWendel__OverridesType;
  dataFetches?: PlasmicWendel__Fetches;
  forNode?: string;
}) {
  const { variants, args, overrides, forNode, dataFetches } = props;

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(defaultcss.all, projectcss.root_reset, sty.root)}
    >
      <p
        data-plasmic-name={"box"}
        data-plasmic-override={overrides.box}
        className={classNames(defaultcss.all, defaultcss.__wab_text, sty.box)}
      >
        {"Enter some text"}
      </p>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "box"],
  box: ["box"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  box: "p";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicWendel__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicWendel__VariantsArgs;
    args?: PlasmicWendel__ArgsType;
    overrides?: NodeOverridesType<T>;
    dataFetches?: PlasmicWendel__Fetches;
  } & Omit<PlasmicWendel__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicWendel__ArgsType, ReservedPropsType> &
    // Specify overrides for each element directly as props
    Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    // Specify props for the root element
    Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicWendel__ArgProps,
      internalVariantPropNames: PlasmicWendel__VariantProps
    });

    const { dataFetches } = props;

    return PlasmicWendel__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicWendel";
  } else {
    func.displayName = `PlasmicWendel.${nodeName}`;
  }
  return func;
}

export const PlasmicWendel = Object.assign(
  // Top-level PlasmicWendel renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    box: makeNodeComponent("box"),

    // Metadata about props expected for PlasmicWendel
    internalVariantProps: PlasmicWendel__VariantProps,
    internalArgProps: PlasmicWendel__ArgProps
  }
);

export default PlasmicWendel;
/* prettier-ignore-end */
