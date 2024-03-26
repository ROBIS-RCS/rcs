const Custom_img = (props) => {
  return (
    <img src={`${props.imageURL}`} alt="" className={`rounded-full object-contains shadow-xl w-[${props.size}] h-[${props.size}]`} />
  )
}

export default Custom_img


// image size
// image URL