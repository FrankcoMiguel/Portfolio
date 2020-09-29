import React from "react"
import { Container, Image } from "react-bootstrap"
import "./Skillbar.scss"

const SkillBar = props => {
  let element
  let { singleIcon = false, twoIcons = false, threeIcons = false } = props
  if (props.singleIcon) {
    element = (
      <Container className="SkillBar">
        <div className="BarTop">
          <p className="BarTitle">{props.title}</p>
          <ul className="BarIcons">
            <li>
              <Image src={props.firstIcon} />
            </li>
          </ul>
        </div>
        <span className="BarContainer">
          <span
            className="BarStatus"
            style={{ width: `${props.percentage}%` }}
          ></span>
        </span>
      </Container>
    )
  } else if (props.twoIcons) {
    element = (
      <Container className="SkillBar">
        <div className="BarTop">
          <p className="BarTitle">{props.title}</p>
          <ul className="BarIcons">
            <li>
              <Image src={props.firstIcon} />
            </li>
            <li>
              <Image src={props.secondIcon} />
            </li>
          </ul>
        </div>
        <span className="BarContainer">
          <span
            className="BarStatus"
            style={{ width: `${props.percentage}%` }}
          ></span>
        </span>
      </Container>
    )
  } else if (props.threeIcons) {
    element = (
      <Container className="SkillBar">
        <div className="BarTop">
          <p className="BarTitle">{props.title}</p>
          <ul className="BarIcons">
            <li>
              <Image src={props.firstIcon} />
            </li>
            <li>
              <Image src={props.secondIcon} />
            </li>
            <li>
              <Image src={props.thirdIcon} />
            </li>
          </ul>
        </div>
        <span className="BarContainer">
          <span
            className="BarStatus"
            style={{ width: `${props.percentage}%` }}
          ></span>
        </span>
      </Container>
    )
  }

  return element
}

export default SkillBar
