import styles from './styles.module.css'

const Map = ({t}) =>{
    return(
        <div className={styles.container}>
        {t('map.title')}
        {/* {t("meetUs.values", { returnObjects: true }).map(item => <div>{item}</div>)}   */}
        </div>
    )
}
export default Map