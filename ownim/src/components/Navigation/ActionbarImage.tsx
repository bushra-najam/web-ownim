
import  Image  from "next/image";
const ActionBarImage = () => {
    return (
      <div style={{flexDirection: 'row', justifyContent:"flex-end", margin:0}}>
        <Image src="/logo.png" 
                alt ="logo"
                width = {100}
                height = {29}
                style={{marginTop:10,justifySelf:"flex-end" }}
        />
      </div>
    );
  };
  
export default ActionBarImage;