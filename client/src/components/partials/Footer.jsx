import './Footer.scss';

export default function Footer(props) {
  return (
    <footer>
      <p className='text'>Designed and developed by</p>

      <div className='authors'>

        <a className='author' href='https://github.com/fwang36'>
          <i className="fa-brands fa-github"></i>
          <p className='author-name'>Francis Wang</p>
        </a>
        
        <a className='author' href='https://github.com/gabrielcelligoi'>
          <i className="fa-brands fa-github"></i>
          <p className='author-name'>Gabriel Celligoi</p>
        </a>

        <a className='author' href='https://github.com/keilamari'>
          <i className="fa-brands fa-github"></i>
          <p className='author-name'>Keila Kopvillem</p>
        </a>

      </div>

    </footer>
  )
}