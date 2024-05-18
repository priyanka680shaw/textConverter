import { useReducer, useState } from "react"
import { Button } from "../Button/Button"
import { toast } from 'react-toastify';
const initialState = {
    text : "hhhh"
}
function reducer(state , action){
    console.log("text",state.text)
    console.log("payload",action.payload)
    switch(action.type){
        case  "change" :  return({text : action.payload});
        case "uppercase" : return({text : state.text.toUpperCase()});
        case "lowercase" : return({text : state.text.toLowerCase()});
        case "clear" : return({text : state.text= ""});
        case "spaceremove" : return ({text : state.text.trim()});
        case "copy" : return ({text :  navigator.clipboard.writeText(state.text)},window.navigator.clipboard.writeText(state.text))
        // case "copy" : return ({text :  navigator.clipboard.writeText(state.text)},window.navigator.clipboard.writeText(state.text),toast(`sussess : copied text ${state.text}` , {position :"top-center"} ))
        default :  ({text  : state.text})
    }
}
export const MainScreen = () => {

   
    
    //useReducer
    
    const [state , dispatch] = useReducer(reducer , initialState);

   


  return (
    <>
        <div className="flex  flex-col justify-center  items-center w-full mt-[150px] ">
            <div className="m-4  text-3xl font-bold">
                <h1>TextUtis - Word Counter, Charecter Counter, Remove Extra Space</h1>
            </div>
           
            <div className="   flex  flex-col justify-center  items-center w-full">
                <h2 className="m-4 text-3xl font-bold">Enter Your Text Here:</h2>
                <textarea cols= "150" rows= "8" value = {state.text} className="border-black border-2 resize-none p-4" onChange={(e)=>{
                dispatch({type : "change" , payload : String(e.target.value)})
                    console.log(e)
                }}></textarea>
                <div className="m-4">
                    <Button bg = {"#0D6EFD"} name={"Convert Uppercase"} type = {"uppercase"} dispatch = {dispatch}>{"Convert Uppercase"}</Button>
                    <Button bg = {"#0D6EFD"} type = {"lowercase"} dispatch={dispatch}>{"Convert Lowercase"}</Button>
                    <Button bg = {"#DC3545"} type = {"clear"} dispatch={dispatch}>{"Clear Text"}</Button>
                    <Button bg = {"#189754"} type = {"copy"} dispatch={dispatch}>{"Copy To Clip Board"}</Button>
                    <Button bg = {"#0D6EFD"} type = {"spaceremove"} dispatch={dispatch}>{"Remove Extra Space"}</Button>
                </div>
            </div>

            <div className="flex  w-4/5 flex-col p-4 items-start ml-8">
                <h1 className=" mb-4 text-3xl font-bold" >Summery Of Your Text</h1>
                {/* <p className="text-lg font-bold">Nummber of words : {state.text.split(" ").length-1}</p> 
                <p className="text-lg font-bold">Number of charecters : {state.text.length}</p> */}
                <p className="text-lg font-bold">Reading Time: {99}</p>
            </div>

            <div className="w-full flex justify-center items-center flex-col m-4">
                <h1 className="text-3xl font-bold m-4">Preview Document</h1>
                <div className="border-black border-2 resize-none p-8 w-[900px] h-[150px]">{state.text}</div>
            </div>
        </div>
    </>
  )
}
