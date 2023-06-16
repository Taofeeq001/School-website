import react from 'react'
import './Mission.css'

const Mission =()=>{
    return(
        <div className='mission'>
            <div className='mission-content'>
                <h2>Our Mission</h2>
                <p>We believe that children’s lives change when their natural passion for learning is nurtured and transformed into habits of life-long learning and reflection. We believe that the world changes as these children learn to serve country and community with wisdom, conviction, and compassion.</p>
                <div>
                    <p>In light of these beliefs,</p>
                    <div>
                        <li>We serve students of talent and character, offering them an education that broadens their perspectives, sharpens their minds, strengthens their bodies, and engages their hearts.</li>
                        <li>We commit to creating a caring, inclusive, and just community, using the geography and culture of our home in the Southwest to enrich our educational programs and to foster creativity, personal balance, and a connection to the natural world.</li>
                        <li>We devote our resources to ensure economic accessibility to our students and to support the wider community through outreach and community service.</li>
                        <li>We entrust this mission to our graduates and successors as we preserve our resources and serve the generations of children to come.</li>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Mission;