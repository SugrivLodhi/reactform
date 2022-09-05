import React,{useEffect} from 'react'
import styled from 'styled-components'
import { GrFormClose } from "react-icons/gr";
import {FaRegFilePdf}  from "react-icons/fa" 

const CriticalWrap = styled.div`
  height: 11.125rem;
  width: 39.625rem;
  border-radius: 4px;
  background-color: #ffffff;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
  `
 const WrapInfo = styled.div`
     display:flex;
     align-item :center;
     justify-content :space-between;
     & .close-popup{
        cursor :pointer;
        margin-top :16px;
        margin-right:14px;
     }
     
 `  
 const H1 = styled.h1`
 color: #464646;
 font-family: Museo;
 font-size: 24px;
 letter-spacing: 0.15px;
 line-height: 36px;
 margin-left :19px;
 margin-top:22px;
;
 ` 
 const Hr = styled.hr`
 height: 1px;
 background-color: #DADADA;
 margin-top:17px
`
 const A =styled.a`
 color: #464646;
 font-family: "Proxima Nova";
 font-size: 14px;
 letter-spacing: 0.09px;
 line-height: 16px;
 margin-left :28px;
 `
const CriticalInfo = () => {
    const closePopup = () =>{
    document.body.classList.remove("mobile-open");
  } 
useEffect(() => document.body.classList.add("mobile-open"));

return(
  <CriticalWrap>
    <WrapInfo>
    <H1>Critical Information Summary</H1>
    <GrFormClose className='close-popup' onClick={closePopup}/>
    </WrapInfo> 
    <Hr />
    <FaRegFilePdf/>
    <A href="aba">critical information summary</A>
 </CriticalWrap>
 
)
}
export default CriticalInfo
