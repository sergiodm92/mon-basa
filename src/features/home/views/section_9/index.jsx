'use client'
import styles from './styles.module.css'
import {useTranslation} from 'react-i18next'

const ContactUs = () =>{
    const {t} = useTranslation()
    return(
        <div className={styles.container}>
        {t('map.title')}
        </div>
    )
}
export default ContactUs