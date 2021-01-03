import React from "react";

import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import EmailIcon from '@material-ui/icons/Email';
function Footer(){
    return (
        <div className="footer">
                <div >
                    <FacebookIcon className="footerIcon" />
                    <TwitterIcon className="footerIcon"     />
                    <InstagramIcon  className="footerIcon" />
                    <EmailIcon className="footerIcon" />
                </div>
                <p>Copyright &copy; 2020 . All right reserved</p>
        </div>
    );
}

export default Footer;