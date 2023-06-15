import React from 'react'
import after from '../../Images/after.webp'
import './AbtPage.css'
import Arches from '../../Images/Arches.jpg'

const AbtPage = () =>{
    return(
        <div>
            <div className='about-img'>
                <h1>ABOUT THE ACADEMY</h1>
            </div>
            <div className='container'>
                <div className='text'>
                    <p> Albuquerque Academy is a         non-denominational, coeducational, independent day school for approximately 1,150 students in grades six through 12. The Academy offers students an education that is without equal in the Southwest The Academy prides itself on offering an educational program based on creative, independent doing and thinking. The</p>
                    <p></p>
                </div>
                <div className='image'>
                    <img src={Arches} alt="" />
                </div>
                <div>
                school motto, “scientia ad faciendum,” or “knowledge for the sake of doing,” reflects an underlying philosophy of achieving knowledge that is actionable. The Academy’s educational program emphasizes six fundamental academic disciplines: English, history, mathematics, world languages, science, and performing and visual arts. Study in all six disciplines is required each year through grade 9. A decreasing number of requirements in the upper grades allows for a wider choice of electives. Students are organized by grade into three divisions: grades 6-7, grades 8-9, and grades 10-12. These groupings allow for small, close-knit, and nurturing environments able to serve the needs and interests of all students. Each division provides students with a comfortable, supportive atmosphere in which to learn and thrive. The three divisions often come together for all-school assemblies and school-wide activities. The Academy’s 312-acre main campus includes the West Campus (grades 6-7), and the East Campus (grades 8-12).
                </div>

            </div>
        </div>
    )
}
export default AbtPage;