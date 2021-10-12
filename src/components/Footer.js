import github from '../images/icon-github.png';
import tistory from '../images/icon-tistory.png';

function Footer() {
  return (
    <div className="footer">
      <div className="footer-info">
        <ul>
          <li>
            <h2>Uzbek / Kazakh Alphabet Converter</h2>
          </li>
          <li>version 0.1.0</li>
        </ul>
      </div>
      <div className="footer-icons">
        <ul className="icon-list">
          <li>
            <a href="https://github.com/tesseractjh" target="_blank" rel="noreferrer noopener">
              <img src={github} width="40px" height="40px" alt="Github" />
            </a>
          </li>
          <li>
            <a href="https://tesseractjh.tistory.com/" target="_blank" rel="noreferrer noopener">
              <img src={tistory} width="40px" height="40px" alt="Tistory" />
            </a>
          </li>
        </ul>
        <p>Github Icon made by Freepik from www.flaticon.com</p>
      </div>
    </div>
  )
}

export default Footer;