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
    return(
        <div className={styles.page}>
            <HeroSection/>
            <SectionTwo/>
            <SectionThree/>
            <SectionFour/>
            <SectionFive/>
            <SectionSix/>
            <SectionSeven/>
            <SectionEight/>
            <ContactUs/>
            <Map/>
        </div>
    )
}
export default HomePage