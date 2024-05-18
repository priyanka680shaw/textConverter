

export const Button = ({bg , name , children , dispatch , type}) => {
    console.log("child"  , children)
  return (
    <>
        <button onClick={()=>{
         dispatch({type : type})
        }} className='pt-2 pb-2 pl-4 pr-4 m-4 rounded font-bold text-xl text-[white]' style={{backgroundColor  : bg}}>{children}</button>
    </>
  )
}
