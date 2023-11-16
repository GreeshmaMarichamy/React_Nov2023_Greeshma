import "./About.css";
const About = () =>{
   
    return(
        <div>
            <h1 className="head">ARTIFICIAL INTELLIGENCE</h1>
            <hr></hr>
            <h3 className="hstyle">INTRODUCTION</h3>
            <p className="pstyle">Artificial intelligence (AI), the ability of a digital computer or computer-controlled robot to
                  perform tasks commonly associated with intelligent beings. The term is frequently applied to the
                  project of developing systems endowed with the intellectual processes characteristic of humans, 
                  such as the ability to reason, discover meaning, generalize, or learn from past experience. 
                  Since the development of the digital computer in the 1940s, it has been demonstrated that computers 
                  can be programmed to carry out very complex tasks—such as discovering proofs for mathematical theorems 
                  or playing chess—with great proficiency. Still, despite continuing advances in computer processing 
                  speed and memory capacity, there are as yet no programs that can match full human flexibility over 
                  wider domains or in tasks requiring much everyday knowledge. On the other hand, some programs have 
                  attained the performance levels of human experts and professionals in performing certain specific 
                  tasks, so that artificial intelligence in this limited sense is found in applications as diverse as 
                  medical diagnosis, computer search engines, voice or handwriting recognition, and chatbots.</p>
            <br/>
            <h3 className="hstyle">TYPES</h3>
            <p className="pstyle1">* Artificial Intelligence Type-1</p>
            <p className="pstyle1">* Artificial Intelligence Type-2</p>
            <br/>
            <p className="pstyle2">Artificial Intelligence Type-1</p>
            <p className="mar">Narrow AI (weak AI): This is designed to perform a specific task with intelligence. It is termed as weak AI because it cannot perform beyond its limitations. It is trained to do a specific task. Some examples of Narrow AI are facial recognition (Siri in Apple phones), speech, and image recognition. IBM’s Watson supercomputer, self-driving cars, playing chess, and solving equations are also some of the examples of weak AI.</p>

            <p className="mar">General AI (AGI or strong AI): This system can perform nearly every cognitive task as efficiently as humans can do. The main characteristic of general AI is to make a system that can think like a human on its own. This is a long-term goal of many researchers to create such machines.</p>

            <p className="mar">Super AI: Super AI is a type of intelligence of systems in which machines can surpass human intelligence and can perform any cognitive task better than humans. The main features of strong AI would be the ability to think, reason, solve puzzles, make judgments, plan and communicate on its own. The creation of strong AI might be the biggest revolution in human history.</p>
            <br/>
            <p className="pstyle2">Artificial Intelligence Type-2</p>
            <p className="mar">Reactive Machines: These machines are the basic types of AI. Such AI systems focus only on current situations and react as per the best possible action. They do not store memories for future actions. IBM’s deep blue system and Google’s Alpha go are the examples of reactive machines.</p>

            <p className="mar">Limited Memory: These machines can store data or past memories for a short period of time. Examples are self-driving cars. They can store information to navigate the road, speed, and distance of nearby cars.</p>

            <p className="mar">Theory of Mind: These systems understand emotions, beliefs, and requirements like humans. These kinds of machines are still not invented and it’s a long-term goal for the researchers to create one. </p>

            <p className="mar">Self-Awareness: Self-awareness AI is the future of artificial intelligence. These machines can outsmart the humans. If these machines are invented then it can bring a revolution in human society.</p>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4bSNahaxU0bDhy26ighAIQkNn_GbY1nuTBw&usqp=CAU" alt="AI"></img>
        </div>
    );
};
export default About;