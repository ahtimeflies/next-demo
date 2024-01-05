import Select from 'antd/es/select'
import styles from '@/styles/Home.module.css'

export default function Demo() {
  return (
    <main className={styles.main}>
      <Select
        style={{ width: 120 }}
        defaultValue='server-esm'
        options={[{ label: 'server-esm', value: 'server-esm' }]}
      />
    </main>
  )
}
