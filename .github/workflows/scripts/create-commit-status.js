// @ts-check

const { readFile } = require("fs/promises");
const { join } = require("path");
const { env } = require("process");

/**
 * @param {import('github-script').AsyncFunctionArguments} AsyncFunctionArguments
 */
module.exports = async ({ github, context, core }) => {
  core.info("hello from create commit status");
};
