import { ToDo } from './Components/ToDo';
import styles from '../app/page.module.css'
export default function Home() {

  return (
    <main className={styles.main}>
      <ToDo></ToDo>
    </main>
  )
}
