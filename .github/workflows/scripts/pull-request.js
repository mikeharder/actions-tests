// @ts-check

/**
 * @param {import('github-script').AsyncFunctionArguments} AsyncFunctionArguments
 * @param {string} folder
 * @param {string?} label
 */
module.exports = async ({ github, context, core }, folder, label) => {
  const branchRules = await github.rest.repos.getBranchRules({
    owner: context.repo.owner,
    repo: context.repo.repo,
    branch: context.payload.pull_request?.base.ref,
  });
  core.info(JSON.stringify(branchRules, null, 2));
};
