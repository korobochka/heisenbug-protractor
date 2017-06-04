package com.griddynamics.seleniumjava;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.remote.RemoteWebDriver;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.testng.annotations.AfterClass;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.Test;

import java.net.MalformedURLException;
import java.net.URL;
import java.util.List;

import static org.testng.Assert.*;

/**
 * Created by korobochka on 4/12/17.
 */
public class Angular1Test {
	private final WebDriver driver = new RemoteWebDriver(new URL("http://localhost:9515"), DesiredCapabilities.chrome());
	
	public Angular1Test() throws MalformedURLException {
	}
	
	@AfterClass
	public void tearDown() {
		driver.close();
	}
	
	
	@BeforeMethod
	public void setup() {
		driver.get("http://localhost:8001/");
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	@Test
	public void testPageTitle() throws Exception {
		assertEquals(driver.getTitle(), "Nicknames NG1");
	}
	
	@Test
	public void testDocumentTitle() throws Exception {
		assertEquals(driver.findElement(By.tagName("h2")).getText(), "Nicknames NG1");
	}
	
	
	
	
	









	
	
	
	
	
	private void doInputAndClick(String nick, String age) {
		final List<WebElement> inputs = driver.findElements(By.tagName("input"));
		inputs.get(0).clear();
		inputs.get(0).sendKeys(nick);
		inputs.get(1).clear();
		inputs.get(1).sendKeys(age);
		driver.findElement(By.className("input-submit")).click();
	}


	@Test
	public void testResultAddedToHistory() throws Exception {
		doInputAndClick("Korobochka", "17");
		WebElement targetElement = driver.findElement(By.xpath("//tbody/tr[1]/td[last()]"));
		assertEquals(targetElement.getText(), "Korobochka2000");
	}

	
	
	
	




	
	
	/*
	private void waitForAngular() {
		new WebDriverWait(driver, 10).until(webDriver -> {
			return ((JavascriptExecutor)webDriver).executeScript("return window.getAllAngularTestabilities()[0].isStable()").equals(Boolean.TRUE);
		});
	}
	 */
	
}