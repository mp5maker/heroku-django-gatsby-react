import React from 'react'

import './footer.scss'

const Footer = () => (
    <footer>
        <div>
            &copy; {new Date().getFullYear()} All Rights Reserved &nbsp;
            <a href="https://www.sphotonkhan.com">
                Photon Enterprise
            </a>
        </div>
    </footer>
)

export default Footer;