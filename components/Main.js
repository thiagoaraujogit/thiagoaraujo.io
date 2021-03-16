import Typewriter from 'typewriter-effect'
import styles from '../styles/Main.module.css'

function mainPage() {
  return (
    <>
      <div className={styles.mainPage}>
        <img src="/undraw_dev_focus.svg" />
      </div>
      <div className={styles.mainPage}>
        <h1>Disponibilidade e</h1>
        <h1>
          {/* <Typical
            loop={Infinity}
            wrapper="b"
            steps={[
              'performance em nuvem.',
              2000,
              'segurança.',
              2000,
              'produtividade.',
              2000,
              'facilidade.',
              2000,
            ]}
          /> */}
            <Typewriter
                options={{
                    loop: true
                }}
                onInit={(typewriter) => {
                    typewriter
                        .typeString('performance em nuvem.')
                        .pauseFor(2000)
                        .deleteAll()
                        .typeString('segurança.')
                        .pauseFor(2000)
                        .deleteAll()
                        .typeString('produtividade.')
                        .pauseFor(2000)
                        .deleteAll()
                        .typeString('facilidade.')
                        .pauseFor(2000)
                        .deleteAll()
                        .start()  
                }}
            />

        </h1>
        <p>
          Entregue uma ótima experiência para seus usuários com os benefícios da{' '}
          <br />
          computação em nuvem.
        </p>
      </div>
    </>
  )
}

export default mainPage
