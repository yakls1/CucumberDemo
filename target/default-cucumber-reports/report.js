$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/features/teastleaf.feature");
formatter.feature({
  "name": "Test bla bla",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Edit functionality",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@TestLeaf"
    },
    {
      "name": "@Edit"
    }
  ]
});
formatter.step({
  "name": "the User is in the homePage",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "verifying that title is \"TestLeaf - Selenium Playground\"",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "the User is clicking on the Edit button",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});