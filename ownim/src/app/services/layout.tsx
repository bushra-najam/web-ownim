
import "../globals.css";

export default function SLayout(
    {
        children,
      }: Readonly<{
        children: React.ReactNode;
      }>

) {
    return (
  
<div>
{children} 
 </div>

    )
}
