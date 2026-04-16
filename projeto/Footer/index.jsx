ndex,jsx
import './style.css'

export default function Footer(params) {
    return (
        <footer className='footer-pokedex'>
            <p>&copy; {new Date().getFullYear} - Sistema de captura pokemon</p>
        </footer>
    )
    
}

style.css

.footer-pokedex {
    background-color: #222224;
    color: #ffffff;
    text-align: center;
    padding: 24px 16px;
    width: 100%;
    box-sizing: border-box;
    margin-top: 40px;
}

.footer-pokedex p {
    margin: 0;
    font-size: 14px;
}