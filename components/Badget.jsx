export default function Badget(props){

    /* 
        Type status

        -- pending approved
        -- shipped
        -- completed

    */

    const badgetStyle = (status) => { 

        let style = " p-1 px-2 rounded text-sm capitalize "

        switch (status) {
            case "pending approved":
                style += " bg-slate-300 "
                break;
            
            case "shipped":
                style += " bg-yellow-600 text-white "
                break;
            
            case "completed":
                    style += " bg-green-600 text-white "
                    break;
        
            default:
                style += " bg-slate-200 "
                break;
        }

        return style
    }


    return (
        <div className={badgetStyle(props.status)}>
            {props.status}
        </div>
    )
}
  