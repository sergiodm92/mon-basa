'use client'
import { useTranslation } from 'react-i18next'
import HeroSection from '../views/section_1'
import Map from '../views/section_10'
import SectionTwo from '../views/section_2'
import SectionThree from '../views/section_3'
import SectionFour from '../views/section_4'
import SectionFive from '../views/section_5'
import SectionSix from '../views/section_6'
import SectionSeven from '../views/section_7'
import SectionEight from '../views/section_8'
import ContactUs from '../views/section_9'
import styles from './styles.module.css'

const HomePage = ()=>{
    const {t}= useTranslation()
    return(
        <div className={styles.page}>
            <HeroSection t={t}/>
            <SectionTwo t={t}/>
            <SectionThree t={t}/>
            <SectionFour t={t}/>
            <SectionFive t={t}/>
            <SectionSix t={t}/>
            <SectionSeven t={t}/>
            <SectionEight t={t}/>
            <ContactUs t={t}/>
            <Map t={t}/>
        </div>
    )
}
export default HomePage