import User from "./User";
import UserClass from "./UserClass";

const About = () => {
    return (
        <div>
            <h1>About</h1>
            <h3>This is Namste React Series</h3>
            <User name={"Sidhant Singh (function)"} />
            <UserClass  name={"Kartik Singh"}/>
        </div>
    )
}

export default About;