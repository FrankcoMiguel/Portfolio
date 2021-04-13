import React from 'react'
import { Image } from 'react-bootstrap'

const Skillbar = (title, percentage, icons) => {

    return (
        <div className="SkillBar">
            <div className="BarTop">
                <p className="BarTitle">{title}</p>
                <ul className="BarIcons">
                    {icons.map(i => (
                        <li>
                            <Image src={i.name} />
                        </li>
                    ))}
                </ul>
            </div>
            <span className="BarContainer">
                <span
                    className="BarStatus"
                    style={{width: `${percentage}%`}}>
                </span>
            </span>
        </div>
    )
}

export default Skillbar