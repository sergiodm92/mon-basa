import styles from './styles.module.css'

const Map = ({t}) =>{
    return(
        <div className={styles.container}>
        {t('map.title')}
        </div>
    )
}
export default Map