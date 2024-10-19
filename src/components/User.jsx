const User = (props) => {
    return (
        <div className="border border-black p-2 mb-4">
            <h2>Name :  {props.name}</h2>
            <h3>Location : Noida</h3>
            <h3>Contact : @sidhantrajput1</h3>
        </div>
    )
}

export default User;