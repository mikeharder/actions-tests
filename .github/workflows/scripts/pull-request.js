// @ts-check

/**
 * @param {import('github-script').AsyncFunctionArguments} AsyncFunctionArguments
 * @param {string} folder
 * @param {string?} label
 */
module.exports = async ({ github, context, core }, folder, label) => {
  const branchRules = await github.rest.repos.getBranchRules();
  core.info(JSON.stringify(branchRules, null, 2));
};
