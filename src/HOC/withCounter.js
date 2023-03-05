import React from "react";

function UpdatedComponent(OrginalComponent){
    function NewComponent(props){
        return <OrginalComponent{...props}/>
    }
    return NewComponent
}
export default UpdatedComponent
