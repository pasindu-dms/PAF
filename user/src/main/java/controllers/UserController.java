package controllers;

import models.User;
import dataBaseConnector.Connector;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

public class UserController {

	Connector con = Connector.getInstance();

	private UserController() {
	}

	private static final UserController obj = new UserController();

	public static UserController getInstance() {
		return obj;
	}

	public void Save(User data) throws Exception {
		con.getConnection();
		con.aud("INSERT INTO user(first_name,last_name,email,phone,username,password) values ('" + data.getFirst_name()
				+ "','" + data.getLast_name() + "','" + data.getEmail() + "','" + data.getPhone() + "','"
				+ data.getUsername() + "','" + data.getPassword() + "') ");
	}

	public void Update(User data) throws Exception {
		con.getConnection();
		con.aud("UPDATE user SET first_name  = '" + data.getFirst_name() + "',last_name  = '" + data.getLast_name()
				+ "',email  = '" + data.getEmail() + "',phone  = '" + data.getPhone() + "',username  = '"
				+ data.getUsername() + "',password  = '" + data.getPassword() + "' WHERE user_id = '"
				+ data.getUser_id() + "'");
	}

	public void Delete(User data) throws Exception {
		con.getConnection();
		con.aud("DELETE FROM user WHERE user_id = '" + data.getUser_id() + "'");
	}

	public List<User> SearchAll() throws Exception {
		List<User> objList = new ArrayList<User>();
		con.getConnection();
		ResultSet rset = con.srh("SELECT * FROM user");
		while (rset.next()) {
			User obj = new User();
			obj.setUser_id(rset.getInt(1));
			obj.setFirst_name(rset.getString(2));
			obj.setLast_name(rset.getString(3));
			obj.setEmail(rset.getString(4));
			obj.setPhone(rset.getString(5));
			obj.setUsername(rset.getString(6));
			obj.setPassword(rset.getString(7));
			objList.add(obj);
		}

		return objList;
	}

	public List<User> Search(User data) throws Exception {
		List<User> objList = new ArrayList<User>();
		con.getConnection();
		ResultSet rset = con.srh("SELECT * FROM user WHERE user_id = '" + data.getUser_id() + "'");
		while (rset.next()) {
			User obj = new User();
			obj.setUser_id(rset.getInt(1));
			obj.setFirst_name(rset.getString(2));
			obj.setLast_name(rset.getString(3));
			obj.setEmail(rset.getString(4));
			obj.setPhone(rset.getString(5));
			obj.setUsername(rset.getString(6));
			obj.setPassword(rset.getString(7));
			objList.add(obj);
		}

		return objList;
	}
	
	public int Login(User data) throws Exception {
		int return_value = 0;
		con.getConnection();
		ResultSet rset = con.srh("SELECT * FROM user WHERE username = '" + data.getUsername() + "' AND password = '" + data.getPassword() + "'");
		if (rset.next()) {
			return_value++;
		}

		return return_value;
	}

}