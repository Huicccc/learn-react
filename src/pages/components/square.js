import styles from '@/styles/Home.module.css';
function Square({children}) {
  return (
    <div className={styles.square}>
      {children}
    </div>
  )
}

export default function Holder() {
  return (
    <div>
      <Square>
        <img
          className="avatar"
          src={'https://i.imgur.com/YfeOqp2s.jpg'}
          alt={'Katsuko Saruhashi'}
          width={300}
          height={300}
        />
        <label htmlFor="image">
          <b> Katsuko Saruhashi </b>
        </label>
      </Square>
      <Square>
        <label for="image"> 
          <b> Katsuko Saruhashi  </b>
        </label>
      </Square>
      
    </div>
  )
}
