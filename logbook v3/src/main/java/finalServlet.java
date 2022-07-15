/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import gr.csd.uoc.cs359.winter2019.logbook.db.UserDB;
import gr.csd.uoc.cs359.winter2019.logbook.model.User;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.Enumeration;
import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 *
 * @author dimme
 */
@WebServlet(name = "finalServlet", urlPatterns = {"/finalServlet"})
public class finalServlet extends HttpServlet {

    /**
     * Processes requests for both HTTP <code>GET</code> and <code>POST</code>
     * methods.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    String username = null, email, pw2, name, subname, bday, gender, address, country, city, job, hobbies, info;
    boolean b1 = false, b2 = false, b3 = false, b4 = false, b5 = false, b6 = false, b7 = false, b8 = false, b9 = false, b10 = false;
    boolean loggedin = false;

    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException, ClassNotFoundException {
        response.setContentType("text/html;charset=UTF-8");
        try ( PrintWriter out = response.getWriter()) {
            /* TODO output your page here. You may use following sample code. */
            out.println("<!DOCTYPE html>");
            out.println("<html>");
            out.println("<head>");
            out.println("<title>Servlet finalServlet</title>");
            out.println("</head>");
            out.println("<body>");

            Enumeration paramNames = request.getParameterNames();
            while (paramNames.hasMoreElements()) {
                String paramName = (String) paramNames.nextElement();
                //out.print("<tr><td>" + paramName + "\n<td>");
                String[] paramValues = request.getParameterValues(paramName);
                if (paramValues.length == 1) {// only one param
                    String paramValue = paramValues[0];
                    if (paramValue.isEmpty()) // without value
                    {
                        out.println("   Invalid Input!");
                    } else // with value
                    {
                        if (paramName.equals("username")) {
                            if (paramValue.matches("[a-zA-Z0-9.\\-_]{8,}")) {
                                out.println("");
                                username = paramValue;
                                if (UserDB.checkValidUserName(username)) {
                                    // Add panagiamou to database
                                    out.print("Nice Username!!");
                                    b1 = true;
                                } else {
                                    out.print("User already exists....");
                                }
                            } else {
                                out.println("Invalid Username!!");

                            }
                        } else if (paramName.equals("email")) {
                            if (paramValue.matches("[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}")) {
                                out.println("");
                                email = paramValue;
                                if (UserDB.checkValidEmail(email)) {
                                    // Add panagiamou to database
                                    out.println("Nice Email!!");
                                    b2 = true;
                                } else {
                                    out.println("Email already exists....");
                                }
                            } else {
                                out.println("Invalid Email!!");

                            }
                        } else if (paramName.equals("pw2")) {
                            pw2 = paramValue;
                            out.println("Password Match");
                            b3 = true;
                        } else if (paramName.equals("name")) {
                            if (paramValue.matches("[a-zA-Z0-9.\\-_]{3,15}")) {
                                out.println("");
                                name = paramValue;
                                b4 = true;
                            } else {
                                out.println("Invalid Name!!");

                            }
                        } else if (paramName.equals("subname")) {
                            if (paramValue.matches("[a-zA-Z0-9.\\-_]{3,15}")) {
                                out.println("");
                                subname = paramValue;
                                b5 = true;
                            } else {
                                out.println("Invalid Subname!!");

                            }
                        } else if (paramName.equals("bday")) {
                            bday = paramValue;
                            b6 = true;
                        } else if (paramName.equals("gender")) {
                            gender = paramValue;
                            b7 = true;
                        } else if (paramName.equals("address")) {
                            address = paramValue;
                        } else if (paramName.equals("country")) {
                            country = paramValue;
                        } else if (paramName.equals("city")) {
                            if (paramValue.matches("[a-zA-Z0-9.\\-_]{2,20}")) {
                                out.println("");
                                city = paramValue;
                                b8 = true;
                            } else {
                                out.println("Invalid City!!");

                            }
                        } else if (paramName.equals("job")) {
                            if (paramValue.matches("[a-zA-Z0-9.\\-_]{3,15}")) {
                                out.println("");
                                job = paramValue;
                                b9 = true;
                            } else {
                                out.println("Invalid Job!!");

                            }
                        } else if (paramName.equals("hobbies")) {
                            if (paramValue.matches("[a-zA-Z0-9.]{0,100}")) {
                                out.println("");
                                hobbies = paramValue;
                                b10 = true;
                            } else {
                                out.println("Invalid Hobbies!!");

                            }
                        } else if (paramName.equals("info")) {
                            info = paramValue;
                        } else if (paramName.equals("button1")) {
                            if (!UserDB.checkValidUserName(username)) {
                                // Add panagiamou to database
                                User user = new User();
                                user = UserDB.getUser(username);
                                if (user != null) {
                                    username = user.getUserName();
                                    email = user.getEmail();
                                    pw2 = user.getPassword();
                                    name = user.getFirstName();
                                    subname = user.getLastName();
                                    bday = user.getBirthDate();
                                    country = user.getCountry();
                                    city = user.getTown();
                                    address = user.getAddress();
                                    job = user.getOccupation();
                                    gender = user.getGender().toString();
                                    hobbies = user.getInterests();
                                    info = user.getInfo();
                                    loggedin = true;
                                }
                                out.println("<B>You have successfully Logged in!</B>");
                                out.println("<br>Username: " + username + "<br>");
                                out.println("Email: " + email + "<br>");
                                out.println("Password: " + pw2 + "<br>");
                                out.println("Name: " + name + "<br>");
                                out.println("Subname: " + subname + "<br>");
                                out.println("Birthday date: " + bday + "<br>");
                                out.println("Country: " + country + "<br>");
                                out.println("City: " + city + "<br>");
                                if (address != null) {
                                    out.println("Address: " + address + "<br>");
                                }
                                out.println("Job: " + job + "<br>");
                                out.println("Gender: " + gender + "<br>");
                                out.println("Hobbies: " + hobbies + "<br>");
                                if (info != null) {
                                    out.println("General Info: " + info + "<br>");
                                }
                            } else {
                                out.println("Not registered Username!");
                            }
                        } else if (paramName.equals("button")) {
                            //out.println(username);

                            User user = new User();
                            user.setUserName(username);
                            user.setEmail(email);
                            user.setPassword(pw2);
                            user.setFirstName(name);
                            user.setLastName(subname);
                            user.setBirthDate(bday);
                            user.setCountry(country);
                            user.setTown(city);
                            user.setAddress(address);
                            user.setOccupation(job);
                            user.setGender(gender);
                            user.setInterests(hobbies);
                            user.setInfo(info);

                            //out.println(user.getUserName());
                            //if (UserDB.checkValidUserName(username)) {
                            // Add panagiamou to database
                            //System.out.println("==>Adding users");
                            if (b1 && b2 && b3 && b4 && b5 && b6 && b7 && b8 && b9 && b10) {
                                UserDB.addUser(user);
                                out.println("<B> User added successfully!</B><br>");
                                out.println("<br>Username: " + username + "<br>");
                                out.println("Email: " + email + "<br>");
                                out.println("Password: " + pw2 + "<br>");
                                out.println("Name: " + name + "<br>");
                                out.println("Subname: " + subname + "<br>");
                                out.println("Birthday date: " + bday + "<br>");
                                out.println("Country: " + country + "<br>");
                                out.println("City: " + city + "<br>");
                                if (address != null) {
                                    out.println("Address: " + address + "<br>");
                                }
                                out.println("Job: " + job + "<br>");
                                out.println("Gender: " + gender + "<br>");
                                out.println("Hobbies: " + hobbies + "<br>");
                                if (info != null) {
                                    out.println("General Info: " + info + "<br>");
                                }
                            } else {
                                out.println(".   <B> Please check your information!!</B>\n");
                            }
                            //System.out.println(user.toString());
                            //System.out.println("==>Added user");
                            //} else {
                            //System.out.println("User already exists.... No more panagiamou please!");
                            //}

                            // Add a wish as info
                            System.out.println("==>Updating");

                            if (user != null) {
                                System.out.println("Updating" + user.getUserName());
                                user.setInfo(info);
                                UserDB.updateUser(user);
                            }

                            user = UserDB.getUser(username);
                            if (user != null) {
                                System.out.println("==>Updated");
                                System.out.println(UserDB.getUser(username));
                            }

                        } else if (paramName.equals("button3")) {
                            User user = new User();
                            user = UserDB.getUser(username);
                            if (UserDB.checkValidEmail(email)) {
                                user.setEmail(email);
                            }
                            user.setPassword(pw2);
                            user.setFirstName(name);
                            user.setLastName(subname);
                            user.setBirthDate(bday);
                            user.setGender(gender);
                            user.setAddress(address);
                            user.setCountry(country);
                            user.setTown(city);
                            user.setOccupation(job);
                            user.setInterests(hobbies);
                            user.setInfo(info);
                            out.println("<B>Updated information.</B>");
                            out.println("<br>Username: " + username + "<br>");
                            out.println("Email: " + user.getEmail() + "<br>");
                            out.println("Password: " + pw2 + "<br>");
                            out.println("Name: " + name + "<br>");
                            out.println("Subname: " + subname + "<br>");
                            out.println("Birthday date: " + bday + "<br>");
                            out.println("Country: " + country + "<br>");
                            out.println("City: " + city + "<br>");
                            if (address != null) {
                                out.println("Address: " + address + "<br>");
                            }
                            out.println("Job: " + job + "<br>");
                            out.println("Gender: " + gender + "<br>");
                            out.println("Hobbies: " + hobbies + "<br>");
                            if (info != null) {
                                out.println("General Info: " + info + "<br>");
                            }
                            UserDB.updateUser(user);
                        } else if (paramName.equals("button4")) {
                            int i = 0;
                            List<User> users = UserDB.getUsers();
                            out.println("<B>Registered Users:</B>");

                            for (User userIt : users) {
                                out.println("<br>" + "userIt:" + i++);
                                out.println(userIt.getUserName());
                            }
                        }
                        //out.println(paramValue);

                    }

                } else { // more than one params
                    out.println("<ul>");
                    for (int i = 0; i < paramValues.length; i++) {
                        out.println("<li>" + paramValues[i]);
                    }
                    out.println("</ul>");
                }
                out.println("</table>\n</body></html>");
            }

            //out.println(request.getParameter("username"));
            //out.println(request.getParameter("email"));
            out.println("</body>");
            out.println("</html>");
        }
    }

// <editor-fold defaultstate="collapsed" desc="HttpServlet methods. Click on the + sign on the left to edit the code.">
    /**
     * Handles the HTTP <code>GET</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        try {
            processRequest(request, response);
        } catch (ClassNotFoundException ex) {
            Logger.getLogger(finalServlet.class.getName()).log(Level.SEVERE, null, ex);
        }
    }

    /**
     * Handles the HTTP <code>POST</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        try {
            processRequest(request, response);
        } catch (ClassNotFoundException ex) {
            Logger.getLogger(finalServlet.class.getName()).log(Level.SEVERE, null, ex);
        }
    }

    /**
     * Returns a short description of the servlet.
     *
     * @return a String containing servlet description
     */
    @Override
    public String getServletInfo() {
        return "Short description";
    }// </editor-fold>

}
