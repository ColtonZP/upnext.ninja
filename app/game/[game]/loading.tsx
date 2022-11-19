import styles from './styles.module.css'

export default function Loading() {
  return (
    <main>
      <div className={styles.banner}>
        <div className="skeleton" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* <section className={styles.section}> */}
      {/*  <Image */}
      {/*    alt={`${game[0].name} Cover`} */}
      {/*    src={`https:${game[0].cover.url.replace('thumb', '720p')}`} */}
      {/*    width={270} */}
      {/*    height={360} */}
      {/*  /> */}

      {/*  /!* <div className={styles.details}> *!/ */}
      {/*  /!*  <h1>{game[0].name}</h1> *!/ */}
      {/*  /!*  <p>{game[0].summary}</p> *!/ */}
      {/*  /!*  <button>Add to list</button> *!/ */}
      {/*  /!* </div> *!/ */}
      {/* </section> */}
    </main>
  )
}
