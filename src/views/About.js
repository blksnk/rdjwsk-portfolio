import React from 'react'
import { PageTitle, Text } from '../components/Text.js'
import s from './About.module.css'
import banner from '../assets/images/banner.mp4'

const About = () => (
  <section className={s.page}>
    <Banner/>
    <PageTitle className={s.title}>Hello, I am RDJWSK</PageTitle>
    <Text className={s.text}>Sunt in duis do nulla commodo pariatur voluptate dolor officia labore in eu dolore cupidatat non consectetur ut sunt aliquip id sint tempor adipisicing anim in ad magna incididunt minim eu ut sed eu cupidatat eu incididunt ut enim do aliquip laboris ut et elit velit occaecat reprehenderit reprehenderit elit ut et duis tempor ea cillum nulla proident ea ut qui nostrud dolor laborum dolor et occaecat quis dolor tempor ullamco ut quis fugiat commodo sunt ad sint proident elit mollit laboris ut veniam excepteur aliquip veniam voluptate sint in tempor dolor duis elit cupidatat magna in sint commodo ea fugiat nostrud id id laboris sint dolor ut labore adipisicing consequat quis ad cillum sed exercitation deserunt nulla tempor id nulla in consectetur nisi labore laboris non enim ut id aliquip pariatur ad non nulla ad aute irure in adipisicing non sed minim eiusmod dolore do irure occaecat ad aute irure ex cupidatat cupidatat commodo reprehenderit officia tempor exercitation minim veniam dolor nisi esse sit excepteur qui consectetur aliquip non nisi excepteur ad eu consequat ad excepteur excepteur quis reprehenderit qui elit est exercitation officia dolor labore laboris dolore tempor.</Text>
  </section>
)

const Banner = () => <div className={s.banner} ><video muted autoPlay loop src={banner}></video></div>

export default About