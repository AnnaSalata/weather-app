import React from 'react';
import './Footer.scss';
import linkedin_logo from '../../assets/images/linkedin_logo_white.png'

export class Footer extends React.Component {
    render() {
        return <footer className='footer'>
            <div className='footer__text'>Powered by Anna Salata</div>
            <a href="https://www.linkedin.com/in/annasalata/">
                <div className='footer__img'><img className='footer__logo' src={linkedin_logo} alt=""/></div>
            </a>
        </footer>
    }
}
