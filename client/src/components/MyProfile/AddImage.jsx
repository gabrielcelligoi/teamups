import './styles.scss'

export default function AddImage(props) {
  return(
    <section className='profile'>
      <img 
      className='profile-img'
      src='https://cdn3.iconfinder.com/data/icons/eightyshades/512/14_Add-512.png'    
      onClick={props.onEdit}
      />
      </section>
  )
};



