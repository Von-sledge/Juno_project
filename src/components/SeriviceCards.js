import React ,{useState} from "react";
import wave from '../Asah_Images/wave_3.avif'

function SeriviceCards(props) {
  const [hover, setHover] = useState(false);
  // console.log(wave);

  const handleMouseEnter =()=>{
    setHover(true);
  }
  const handleMouseLeave = () =>{
    setHover(false);
  }

  let cardStyle = {
    width: "18.438rem",
    height: "24.625rem",
    borderRadius: ".9rem",
    backgroundColor: "var(--color-white)",
    boxShadow: "1px 1px 10px 1px rgba(0,0,0,0.10)",
    display: "grid",
    transition:'all .2s ease-in'
    // justifyContent:'center',
    // alignItems:'center'
    // flexDirection: "column",
  }

  const cardHoverStyle = {
    // backgroundColor: '',
    boxShadow:'1px 1px 10px 1px rgba(255, 255, 255, 0.1)',
    color:'var(--color-white)',
    backgroundImage:`linear-gradient(rgba(0, 0, 0, .7), rgba(0,0,0,.9)),url(${wave})`,
    backgroundSize:'100%'
  }
  const iconHover = {
    backgroundColor: "var(--color-white)",
    filter:'drop-shadow(1px 1px 10px rgba(255, 255, 255, 0.10))',

  }
  const iconStyle = {

      display: "block",
      width: "4rem",
      height: "4rem",
      borderRadius: "100%",
      backgroundColor: "var(--color-main)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      // margin: "-4rem 14rem",
      position: "absolute",
      transform: "translate(333%, 247%)",
      filter:'drop-shadow(1px 1px 10px rgba(0, 0, 0, 0.10))',
  }
  const imgStyle ={ 
      width: "3rem",
      height: "3rem",
      padding:'.2rem',
  }

  const imgHover = {
    filter:'brightness(50%) hue-rotate(90deg) sepia(80%)',

  }
  const { list } = props;
  // console.log(list);
  return (
    <div
      className="services-card"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={hover ? {...cardStyle, ...cardHoverStyle} : cardStyle}
    >
      <img alt="pictures" src={list.img}></img>
      <div
        style={hover ? {...iconStyle, ...iconHover} : iconStyle}
      >
        <img
          style={hover ? {...imgStyle, ...imgHover} : imgStyle}
          src={list.icon}
        ></img>
      </div>
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          // margin: "0rem -14rem",
        }}
      >
        <h4
          style={{
            fontSize: "1.4rem",
            textAlign: "start",
            marginLeft: "-1.2rem",
            // justifySelf:'start',
            padding: "0rem",

            // paddingLeft: "1.5rem",
            // display: "block",
            // margin: "-1rem 0rem -2.7rem 0rem",
          }}
        >
          {list.title}
        </h4>
        <span
          style={{
            fontSize: "1rem",
            padding: "0.9rem 1rem .5rem 1rem",
            textAlign: "start",
            // marginRight:'13rem'
          }}
        >
          {list.text}
        </span>
      </div>
    </div>
  );
}

export default SeriviceCards;
