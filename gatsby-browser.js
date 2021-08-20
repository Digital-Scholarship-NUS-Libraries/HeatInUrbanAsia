import React from "react";
import "@fontsource/roboto"
import "@fontsource/bebas-neue"

import {AnimatePresence} from 'framer-motion';
export const wrapPageElement = ({element}) => (
  <AnimatePresence exitBeforeEnter>{element}</AnimatePresence>
);
/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

// You can delete this file if you're not using it
