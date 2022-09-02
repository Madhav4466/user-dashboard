package ui.testing.pom;
import org.openqa.selenium.*;
import org.openqa.selenium.support.*;

public class Page 
{
	WebDriver driver;
	
	public Page(WebDriver driver)
	{
		this.driver = driver;
		PageFactory.initElements(driver, this);
	}
	
	@FindBy(css = "#ui-dashboard > div > div > div.modal-body > div > button")
	WebElement dashBoardBtton;
	
	@FindBy(id = "gridContainerModal")
	WebElement gridContainerModal;
	
	@FindBy(id = "grid-modal-title-close")
	WebElement gridModalClose;
	
	@FindBy(xpath = "//*[@id='user-management-grid']")
	WebElement userGrid;

	protected WebElement getDashBoardButton() 
	{
		return dashBoardBtton;
	}

	protected WebElement getGridContainerModal() 
	{
		return gridContainerModal;
	}

	protected WebElement getGridModalClose() 
	{
		return gridModalClose;
	}

	protected WebElement getUserGrid() 
	{
		return userGrid;
	}
}
