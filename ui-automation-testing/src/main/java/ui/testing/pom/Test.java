package ui.testing.pom;
import org.assertj.core.api.*;
import org.openqa.selenium.*;
import org.testng.annotations.AfterTest;
import org.testng.annotations.BeforeTest;
import ui.testing.assertions.AssertContainer;
import ui.testing.setup.BrowserSetup;

public class Test 
{
	WebDriver driver;
	Page page;
	SoftAssertions softly;
	@BeforeTest
	public void setup()
	{
		this.driver = BrowserSetup.invoke("Chrome", "http://localhost:3000/");
		this.page = new Page(driver);
		this.softly = new SoftAssertions();
	}
	
	@org.testng.annotations.Test(priority = 0)
	public void dashboarButtonAccessibility()
	{
		WebElement dashboardButton = page.getDashBoardButton();
		softly.assertThat(dashboardButton.getAriaRole()).withFailMessage("Element having xpath='"+AssertContainer.getXPath(dashboardButton)+"', is not a button due to missing a role or semantic tag name '"+ dashboardButton.getAriaRole()+"'").isEqualTo("button");
		softly.assertThat(dashboardButton.getAccessibleName()).withFailMessage("Element having xpath='"+AssertContainer.getXPath(dashboardButton)+"', does not have proper label or text").isNotNull();
		softly.assertThat(dashboardButton.getAccessibleName()).withFailMessage("Element having xpath='"+AssertContainer.getXPath(dashboardButton)+"', expected to have inner text or label='User Managements' but found "+dashboardButton.getAccessibleName()).isEqualTo("User Management");
		softly.assertAll();
	}
	
	@org.testng.annotations.Test(priority = 1)
	public void interactWithDashboardButton()
	{
		WebElement dashboardBtn = page.getDashBoardButton();
		dashboardBtn.sendKeys(Keys.ENTER);
	}
	
	@org.testng.annotations.Test(priority = 2)
	public void gridModalAccessibility()
	{
	}
	
	@org.testng.annotations.Test(priority = 3)
	public void gridModalCloseAccessibility()
	{
	}
	
	@org.testng.annotations.Test(priority = 4)
	public void gridNavigationAccessibility()
	{
	}

	@org.testng.annotations.Test(priority = 5)
	public void gridSorting()
	{
	}
	
	@AfterTest
	public void quit()
	{
		page = null;
		driver.quit();
	}
}
