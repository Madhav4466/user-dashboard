package ui.testing.setup;
import java.util.logging.*;
import org.openqa.selenium.*;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.edge.EdgeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.ie.InternetExplorerDriver;
import org.openqa.selenium.safari.SafariDriver;
import io.github.bonigarcia.wdm.*;

public class BrowserSetup 
{
	private static WebDriver driver = null;
	private static final Logger LOGGER = Logger.getLogger(BrowserSetup.class.getName());
	
	private BrowserSetup()
	{
		/*this class will no more 
		 * accept instantiation*/
	}
	
	public static WebDriver invoke(String webBrowser, String url)
	{
		try
		{
			if(webBrowser.toString().equalsIgnoreCase("chrome"))
			{
				WebDriverManager.chromedriver().setup();
				driver = new ChromeDriver();
				driver.manage().deleteAllCookies();
				driver.manage().window().maximize();
				driver.get(url);
				return driver;
			}
			else if(webBrowser.toString().equalsIgnoreCase("firefox"))
			{
				WebDriverManager.firefoxdriver().setup();
				driver = new FirefoxDriver();
				driver.manage().deleteAllCookies();
				driver.manage().window().maximize();
				driver.get(url);
				return driver;
			}
			else if(webBrowser.toString().equalsIgnoreCase("edge"))
			{
				WebDriverManager.edgedriver().setup();
				driver = new EdgeDriver();
				driver.manage().deleteAllCookies();
				driver.manage().window().maximize();
				driver.get(url);
				return driver;
			}
			else if(webBrowser.toString().equalsIgnoreCase("safari"))
			{
				WebDriverManager.safaridriver().setup();
				driver = new SafariDriver();
				driver.manage().deleteAllCookies();
				driver.manage().window().maximize();
				driver.get(url);
				return driver;
			}
			else if(webBrowser.toString().equalsIgnoreCase("ie"))
			{
				WebDriverManager.iedriver().setup();
				driver = new InternetExplorerDriver();
				driver.manage().deleteAllCookies();
				driver.manage().window().maximize();
				driver.get(url);
				return driver;
			}
		}
		catch(Exception e)
		{
			LOGGER.log(Level.SEVERE, e.getMessage(), e);
		}
		return driver;
	}
	
	public static WebDriver getDriver() 
	{
		return driver;
	}
}
