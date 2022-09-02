package ui.testing.assertions;
import org.assertj.core.api.*;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebElement;

import ui.testing.setup.BrowserSetup;

public class AssertContainer 
{
	protected static SoftAssertions assertions = null;
	
	protected void startSoftAssertions()
	{
		if(assertions == null)
		{
			assertions = new SoftAssertions();
		}
	}
	
	protected static void assertAll()
	{
		SoftAssertionError sae = null;
		try
		{
			assertions.assertAll();
		}
		catch(SoftAssertionError e)
		{
			sae = e;
		}
		assertions = null;
		if(sae != null)
		{
			throw sae;
		}
	}
	public static String getXPath(WebElement element)
	{
		return (String) ((JavascriptExecutor) BrowserSetup.getDriver()).executeScript(
		"function getElementXPath (element) {"
		+ "if (!element) return null;"
		+ "if (element.id) {"
		+ "		return `//*[@id='${element.id}']`;"
		+ "} else if(element.className) {"
		+ "		return `//*[@class='${element.className}']`; "
		+ "} else if (element.tagName === 'BODY') {"
		+ "		return '/html/body';"
		+ "} else {"
		+ "		const sameTagSiblings = Array.from(element.parentNode.childNodes)"
		+ "      .filter(e => e.nodeName === element.nodeName);"
		+ "    	const idx = sameTagSiblings.indexOf(element);"
		+ "    	return getElementXPath(element.parentNode) +"
		+ "      '/' +"
		+ "		element.tagName.toLowerCase() +"
		+ "		(sameTagSiblings.length > 1 ? `[${idx + 1}]` : '')"
		+ "  } }"
		+ "return getElementXPath(arguments[0])", element);
	}
	
	public boolean isFocusable(WebElement element)
	{
		boolean status = false;
		String tagName = element.getTagName();
		String attr = element.getAttribute("tabindex");
		if((tagName == "input" || tagName == "button" || tagName =="a") || (attr != null && attr == "0"))
		{
			status = true;
			return status;
		}
		return status;
	}
}