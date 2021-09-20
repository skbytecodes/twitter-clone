import React from 'react'
import "../styles/Sideoption.css"

function Sideoption({active,Icon, name}) {
    const styles = {
        largeIcon: {
            fontSize:"25px"
        },
      };
    return (
        <div className="side_option">
            <Icon className="icon" style={styles.largeIcon}/>
            <h3 className={`option_name ${active && 'sideoption--active'}`}>{name}</h3>
        </div>
    )
}

export default Sideoption
