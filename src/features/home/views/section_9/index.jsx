import styles from './styles.module.css'

const ContactUs = ({t}) =>{
    return(
        <div className={styles.container}>
            {t('contactUs.title')}
        </div>
    )
}
export default ContactUs