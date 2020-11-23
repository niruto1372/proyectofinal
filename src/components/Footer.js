import React from 'react'

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer__name">
                Nilton Santos
            </div>
            <div className="footer__copyright">
            <i className="far fa-copyright"></i> {new Date().getFullYear()} Todos los derechos reservados
            </div>
            <nav className="footer__nav">
                <ul className="footer__lista">
                    <li className="footer__item" >
                        <a href="http://twitter.com"><i className="fab fa-twitter-square fa-lg"></i> </a>                     
                    </li>
                    <li className="footer__item">
                        <a href="http://facebook.com"><i className="fab fa-facebook-square fa-lg"></i></a>
                        
                    </li>
                    <li className="footer__item">
                        <a href="mailto:nilton.santos@ucsp.edu.pe"><i className="fas fa-envelope fa-lg"></i></a>
                        
                    </li>
                    
                </ul>
            </nav>
            
        </div>
    )
}

export default Footer
