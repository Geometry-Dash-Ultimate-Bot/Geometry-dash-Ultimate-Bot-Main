import net.dv8tion.jda.api.JDABuilder;
import net.dv8tion.jda.api.hooks.ListenerAdapter;
import net.dv8tion.jda.api.entities.Activity;

import java.util.Properties;
import java.io.InputStream;
import java.io.IOException;

import javax.security.auth.login.LoginException;

public class GDbot extends ListenerAdapter {
	
	public static void main(String[] args) throws LoginException {
		try (InputStream input = GDbot.class.getClassLoader().getResourceAsStream("config.properties")) {

            Properties prop = new Properties();

            if (input == null) {
                System.out.println("Sorry, unable to find config.properties");
                return;
            }

            prop.load(input);
		
		JDABuilder builder = JDABuilder.createDefault(prop.getProperty("token"));
		String prefix = prop.getProperty("prefix");
		builder.addEventListeners(new GDbot());
		builder.setActivity(Activity.playing("Geometry Dash " + prefix + "Help"));
		builder.build();
		} catch (IOException ex) {
            ex.printStackTrace();
        }
		 
	}
		 
		 
}