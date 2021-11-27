import { createIcon as chakraCreateIcon, forwardRef, Icon, IconProps } from "@chakra-ui/react";
import React from "react";

/**
 * Accessibility pattern follows the most reliable pattern from this article about creating accessible SVGs
 *
 * Pattern 11: <svg> + role="img" + <title> + <desc> + aria-labelledby="[ID]"
 *
 * https://www.deque.com/blog/creating-accessible-svgs/
 */

interface CreateIconOptions {
  /**
   * The icon `svg` viewBox
   * @default "0 0 24 24"
   */
  viewBox?: string
  /**
   * The `svg` path or group element
   * @type React.ReactElement | React.ReactElement[]
   */
  path?: React.ReactElement | React.ReactElement[]
  /**
   * If the has a single path, simply copy the path's `d` attribute
   */
  d?: string
  /**
   * The display name useful in the dev tools
   */
  displayName?: string
  /**
   * Default props automatically passed to the component; overwriteable
   */
  defaultProps?: IconProps
	/**
	 * Accessibility:
   * Adds a title tag to the svg with the provided string
   */
	title?: string
	/**
	 * Accessibility:
   * Adds a desc tag to the svg with the provided string
   */
	desc?: string
}

export const createIcon = (options: CreateIconOptions) => {
  const {
    viewBox = "0 0 24 24",
    d: pathDefinition,
    path,
    displayName,
    defaultProps = {},
		title = '',
		desc = ''
  } = options

	const titleId = title && `${displayName}Title`
	const descId = desc && `${displayName}Desc`
	const labelledby = `${titleId} ${descId}`.trim() || undefined

  const Comp = forwardRef<IconProps, "svg">((props, ref) => (
    <Icon ref={ref} viewBox={viewBox} role="img" {...defaultProps} {...props} labelledby={labelledby}>
      {path ?? <path fill="currentColor" d={pathDefinition} />}
			{title && <title id={titleId} key={titleId}>{title}</title>}
			{desc && <desc id={descId} key={descId}>{desc}</desc>}
    </Icon>
  ))

  /* if (__DEV__) { */
    Comp.displayName = displayName
  /* } */

  return Comp
}