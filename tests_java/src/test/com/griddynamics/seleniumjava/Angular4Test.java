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

import static org.testng.Assert.assertEquals;

/**
 * Created by korobochka on 4/12/17.
 */
public class Angular4Test {
	private final WebDriver driver = new RemoteWebDriver(new URL("http://localhost:9515"), DesiredCapabilities.chrome());

	public Angular4Test() throws MalformedURLException {
	}
	
	@AfterClass
	public void tearDown() {
		driver.close();
	}
	
	
	@BeforeMethod
	public void setup() {
		driver.get("http://localhost:8000/");
	}
	
	
	
	
	
	
	
	





	
	
	
	
	
	
	private void doInputAndClick(String first, String second) {
		final List<WebElement> inputs = driver.findElements(By.tagName("input"));
		inputs.get(0).clear();
		inputs.get(1).clear();
		inputs.get(0).sendKeys(first);
		inputs.get(1).sendKeys(second);
		driver.findElement(By.className("input-submit")).click();
	}
	
	@Test
	public void testLastNickName() throws Exception {
		doInputAndClick("Nick", "17");
		waitForAngular();
		WebElement targetElement =
				driver.findElement(By.xpath("//tbody/tr[1]/td[last()]"));
		assertEquals(targetElement.getText(), "Nick2000");
	}

	public void waitForAngular() {
		new WebDriverWait(driver, 10).until(webDriver ->
				((JavascriptExecutor)webDriver).executeScript(
						"return getAllAngularTestabilities()[0].isStable();").equals(Boolean.TRUE));
	}

















	
}