import React from "react";
import PropTypes from "prop-types";
import "./profile.css";

const Profile = (props) => {
    return (
        <>
        <div className="profil">
            <img src={props.Person.picture} alt=""/>
       
        <div className="name">
            <h1 style={{color:"palevioletred",fontweight: "900" }}>FullName</h1>
            <h2>{props.Person.FullName}</h2>
        </div>
        <div className="bio">
            <h1 style={{color:"palevioletred",fontweight: "900" }}>Bio</h1>
            <h2>{props.Person.Bio}</h2>
        </div>
        <div className="pro">
            <h1 style={{color:"palevioletred",fontweight: "900" }}>Profession</h1>
            <h2>{props.Person.Pro}</h2>
        </div>
        <div className="btn">
            <button onClick={props.ClickMe}>Click me</button>
        </div>
        </div>
        </>
    )

}
Profile.prototype={
    FullName: PropTypes.string,
    Bio: PropTypes.string,
    Pro: PropTypes.string,
    ClickMe: PropTypes.func,}

Profile.defaultProps={
    FullName: 'Lazrag Khouloud',
    Bio:'Developer WEb',
    Pro : 'JavaScript Developer',
    ClickMe:()=> alert('Lazrag Khouloud')
}
export default Profile;