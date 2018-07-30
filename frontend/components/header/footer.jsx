import React from 'react';

const Footer = () => {
    return(
        <footer>
            <a rel="noopener noreferrer" target="_blank" href="https://github.com/mjohnson324/mockdoc">
                <img id="my-github" alt="github" />
            </a>
            <a rel="noopener noreferrer" target="_blank" href="https://www.Linkedin.com/in/mwjohnson324">
                <img id="my-linkedin" alt="linkedin" />
            </a>
            <a rel="noopener noreferrer" target="_blank" href="https://www.michael-w-johnson.com">Portfolio</a>
            <div>{'\u00A9'} Copyright 2017, Michael Johnson</div>
        </footer>
    );
};

export default Footer;