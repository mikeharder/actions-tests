// @ts-check

/**
 * @param {import('github-script').AsyncFunctionArguments} AsyncFunctionArguments
 */
module.exports = async ({ github, context, core }) => {
  if (
    context.eventName === "pull_request" ||
    context.eventName === "pull_request_target"
  ) {
    const payload =
      /** @type {import("@octokit/webhooks-types").PullRequestEvent} */ (
        context.payload
      );

    const runUrl =
      `https://github.com/${context.repo.owner}/${context.repo.repo}` +
      `/actions/runs/${context.runId}`;

    await github.rest.repos.createCommitStatus({
      owner: context.repo.owner,
      repo: context.repo.repo,
      sha: payload.pull_request.head.sha,
      state: "pending",
      context: "custom/create-commit-status",
      description: "Check is running...",
      target_url: runUrl,
    });
  } else {
    throw new Error(
      `Context '${context.eventName}:${context.payload.action}' is not yet supported.`
    );
  }
};
