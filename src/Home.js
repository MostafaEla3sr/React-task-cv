import react from "react";
import './Home.css'

function Home() {
    return(
        <div>       
            <div className="container">
            <div className="container_left">
                <div className="container_left_top">
                    <h3>Personal Information</h3>
                    <div className="inner">
                    <table>
                            <tr>
                                <th>Name : </th>
                                <td>Mostafa Rabie Al-aasr</td>
                            </tr>
                            <tr>
                                <th>Address : </th>
                                <td>Menofia .. Shbien El-kom</td>
                            </tr>
                            <tr>
                                <th>Phone : </th>
                                <td>01067859354</td>
                            </tr>
                            <tr>
                                <th>Age : </th>
                                <td>20</td>
                            </tr>
                        </table>
                    </div>
                    <h3>Education</h3>
                    <p>Student at faculty of computer and Information science Menofia Universty</p>
                    
                </div>
                <div className="container_left_bottom">
                    <h3>Certifications</h3>
                    <div className="inner">
                    <table>
                            <tr>
                                <th>Online Marketing Basics </th>
                                <td>/ From : Google with TIEC</td>
                            </tr>
                            <tr>
                                <th>Desktop Application </th>
                                <td>/ From : Information Technology Institute (ITI)</td>
                            </tr>
                            <tr>
                                <th>HTML&CSS </th>
                                <td>/ From : Mahara Teac</td>
                            </tr>
                        </table>
                    
                    </div>
                    
                </div>
            </div>
            <div className="container_right">
                <div className="container_right_top">
                </div>
                <div className="container_right_center" >
                    <h3>Languages</h3>
                    <div className="inner">
                        <p>Mother language : Arabic</p>
                        <p>Seconed language : English</p>
                    </div>
                </div>
                <div className="container_right_bottom">
                    <h3>Skills</h3>
                    <div className="inner" >
                        <p>C++</p>
                        <p>java</p>
                        <p>C#</p>
                        <p>OOP</p>
                        <p>HTML</p>
                        <p>CSS</p>
                        <p>Java Script</p>
                        <p>SQL</p>
                        <p>Graphic Design</p>
                        <p>Microsoft Office</p>
                    </div>
                </div>
                
            </div>
        </div>
        <div className="footer">
            <h2>Curriculum Vitae - Mostafa Rabie Al-aasr</h2>
        </div>
        </div>
 
    )
}
export default Home