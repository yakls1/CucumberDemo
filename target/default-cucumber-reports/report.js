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
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the User is in the homePage",
  "keyword": "Given "
});
formatter.match({
  "location": "TestLeaft_step_definition.the_User_is_in_the_homePage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verifying that title is \"TestLeaf - Selenium Playground\"",
  "keyword": "And "
});
formatter.match({
  "location": "TestLeaft_step_definition.verifying_that_title_is(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the User is clicking on the Edit button",
  "keyword": "Then "
});
formatter.match({
  "location": "TestLeaft_step_definition.the_User_is_clicking_on_the_Edit_button()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});