(function () {
  var issueTitle = document.querySelector(
    '[data-test-id="issue.views.issue-base.foundation.summary.heading"]'
  ).innerText;
  var issueId = document.querySelector(
    '[data-test-id="issue.views.issue-base.foundation.breadcrumbs.breadcrumb-current-issue-container"]'
  ).innerText;

  var sluggifiedTitle = issueTitle
    .toLowerCase()
    .replace(/ /g, '-')
    .replace(/[^\w-]+/g, '');

  var branchName = sluggifiedTitle.slice(0, 50) + '-' + issueId;
  alert(branchName);
})();
