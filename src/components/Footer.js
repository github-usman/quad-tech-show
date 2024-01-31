import "./../style/app.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode, SiTransportforireland } from "react-icons/si";
import { IoIosContacts } from "react-icons/io";

const Footer = () => {
  return (
    <div>
      <footer className=" text-center text-lg-start text-white">
        <div className="container p-3">
          <div className="d-flex justify-content-center align-items-center">
            <a href="https://github.com/github-usman/">
              {" "}
              <FaGithub /> &nbsp; GitHub
            </a>
            &nbsp;&nbsp;
            <a href="https://www.linkedin.com/in/u-s-m-a-n/">
              <FaLinkedin /> LinkedIn
            </a>
            &nbsp;&nbsp;
            <a href="https://leetcode.com/u_s_m_a_n/">
              <SiLeetcode /> LeetCode
            </a>
            &nbsp;&nbsp;
            <a href="/">
              <SiTransportforireland /> Prtfolio
            </a>
            &nbsp;&nbsp;
            <a href="mailto:usman.placement@gmail.com">
              <IoIosContacts /> Contact
            </a>
          </div>
        </div>

        <div className="text-center p-3" style={{ backgroundColor: "#FF9494" }}>
          © {new Date().getFullYear()} 
          <a className="text-white" href="https://github.com/github-usman/">
            &nbsp; Made with ❤️ by  <span> Usman</span>
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
