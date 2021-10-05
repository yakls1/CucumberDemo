package step_definitions;


import org.junit.*;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.*;
import io.github.bonigarcia.wdm.WebDriverManager;


public class Search_step_definitions {
	
	WebDriver driver;
	
	
	@Given("I launch chrome browser")
	public void i_launch_chrome_browser() {
		WebDriverManager.chromedriver().setup();
		driver = new ChromeDriver();
		driver.manage().window().maximize();
		
		
	}

	@When("I open orange hrm homepage")
	public void i_open_orange_hrm_homepage() {
	   driver.get("http://testleaf.herokuapp.com/");
	}

	@Then("I verify that the logo present on page")
	public void i_verify_that_the_logo_present_on_page() {
		
		String title = driver.getTitle();
		System.out.println(title);
		Assert.assertEquals("TestLeaf - Selenium Playground", title);
	   
	}
	@Then("Close the driver")
	public void close_the_driver() {
	   driver.quit();
	}




}
