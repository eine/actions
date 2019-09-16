import * as core from '@actions/core';
import * as github from '@actions/github';

export async function run() {
  try {
    const repoToken: string = core.getInput('repo-token', {required: true});
    const issue: {owner: string; repo: string; number: number} = github.context.issue;

    console.log(github.context);
    console.log(github.context.payload);

    if (github.context.payload.action !== 'opened') {
      console.log('No issue or pull request was opened, skipping');
      return;
    }

    //eventName: 'pull_request',

    const client: github.GitHub = new github.GitHub(repoToken);
    await client.issues.createComment({
      owner: issue.owner,
      repo: issue.repo,
      issue_number: issue.number,
      body: 'Welcome message!'
    });
  }

  catch (error) {
    core.setFailed(error.message);
    throw error;
  }
}

// Manually wrap output
core.startGroup('Do some function')
core.debug(`Hi!`);
console.log('Hi console!');
run();
core.endGroup()

/* pull_request:
assigned
unassigned
labeled
unlabeled
opened
edited
closed
reopened
synchronize
ready_for_review
locked
unlocked
*/

/* issues:
opened
edited
deleted
transferred
pinned
unpinned
closed
reopened
assigned
unassigned
labeled
unlabeled
locked
unlocked
milestoned
demilestoned
*/

/* issue_comment:
created
edited
deleted
*/
