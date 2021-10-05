package step_definitions;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.*;
import io.github.bonigarcia.wdm.WebDriverManager;
import pages.TestLeaf_HomePage;

public class TestLeaft_step_definition {
	
	
	TestLeaf_HomePage homePage = new TestLeaf_HomePage();
	String url = "http://testleaf.herokuapp.com/home.html";
	
	@Given("the User is in the homePage")
	
	public void the_User_is_in_the_homePage() {
		homePage.goToHomePage(url);
	   
	}

	@Given("verifying that title is {string}")
	public void verifying_that_title_is(String title) {
		homePage.verifyTitle(title);
	   
	}

	@Then("the User is clicking on the Edit button")
	public void the_User_is_clicking_on_the_Edit_button() {
		homePage.clickOnEditElement();
	    
	}

}
