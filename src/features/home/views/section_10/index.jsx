import { GoogleMap, useLoadScript } from '@react-google-maps/api'
import styles from './styles.module.css'

const Map = ({t}) =>{
    const { isLoaded } = useLoadScript({ googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY})
    
    if (!isLoaded) return <div>LOADING</div>


    return(
        <div className={styles.container}>
        {t('map.title')}
        {/* {t("meetUs.values", { returnObjects: true }).map(item => <div>{item}</div>)}   */}
        <GoogleMap zoom={15} center={{ lat: 44, lng: -80 }} mapContainerClassName={styles.Map}></GoogleMap>
        </div>
    )
}
export default Map