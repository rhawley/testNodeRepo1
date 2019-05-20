package web;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.URISyntaxException;
import java.net.URL;
import java.net.URLConnection;

public class RequestApp {

	private static String URIForUrl = "http://google.com";

	public static void main(String[] args) throws IOException, URISyntaxException {
		URL oracle = new URL(URIForUrl);
		URLConnection yc = oracle.openConnection();
		BufferedReader in = new BufferedReader(new InputStreamReader(yc.getInputStream()));
		String inputLine;
		while ((inputLine = in.readLine()) != null)
			System.out.println(inputLine);
		in.close();
	}

}