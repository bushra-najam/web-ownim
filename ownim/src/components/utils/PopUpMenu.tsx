import * as React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import Link from 'next/link';


type MenuProps = {
    children: React.ReactNode; // Accepts any valid React node
  };

const FadeMenu  :React.FC<MenuProps> = ({children}) => {

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);

  };

  return (
    <div>
      <div
        id="fade-button"
        aria-controls={open ? 'fade-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        style={{alignContent:'flex-start', justifySelf:'left'}}
      >
        {children}
      </div>
      <Menu
        id="fade-menu"
        MenuListProps={{
          'aria-labelledby': 'fade-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <MenuItem onClick={handleClose }> <Link href={"/services/jenitorials"}>Jenitorials</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link href={"/services/stainless"}>Stainless Steel</Link> </MenuItem>
        <MenuItem onClick={handleClose}><Link href={"/services/leather"}>Leather</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link href={"/services/flexo"}>Flexo Printing</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link href={"/services/gravure"}>Gravure Printing</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link href={"/services/offset"}>Offset Printing</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link href={"/services/logistics"}>Logistics</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link href={"/services/software"}>Software & Digital Marketing Services</Link></MenuItem>
      </Menu>
    </div>
  );
}

export default FadeMenu;