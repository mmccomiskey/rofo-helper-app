import './App.css';
import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import ArrowDropDownCircleIcon from '@material-ui/icons/ArrowDropDownCircle';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import { ReactComponent as ChickenLeg } from './svgs/chicken-leg.svg';
import { ReactComponent as Chicken } from './svgs/chicken-svg.svg';
import { ReactComponent as Coffee } from './svgs/coffee-svg.svg';
import { ReactComponent as DrinkStraw } from './svgs/drink-straw-svg.svg';
import { ReactComponent as FrenchFries } from './svgs/french-fries-svg.svg';
import { ReactComponent as Soda } from './svgs/soda-svg.svg';
import { ReactComponent as Gas } from './svgs/gas-pump.svg';

import rofo from './rofo.png';


const menuItems = [
    {
        label: 'Chicken Drumstick',
        image: <ChickenLeg width="45px"/>
    },
    {
        label: 'Chicken',
        image: <Chicken width="45px"/>
    },
    {
        label: 'Soda',
        image: <Soda width="45px"/>
    },
    {
        label: 'Fries',
        image: <FrenchFries width="45px"/>
    },
    {
        label: 'Coffee',
        image: <Coffee width="45px"/>
    },
    {
        label: 'Slurpee',
        image: <DrinkStraw width="45px"/>
    },
    {
        label: 'Rofo logo',
        image: <img src={rofo} alt="rofo logo" width="45px"/>
    },
    {
        label: 'Gas',
        image: <Gas width="45px"/>
    },
    {
        label: 'Reset Card',
        image: <ArrowDropDownCircleIcon/>
    }
]

export const Card = ({
    clearCards,
    setClearCards
}) => {
  const [image, setImage] = React.useState(<ArrowDropDownCircleIcon/>);
  const [anchorEl, setAnchorEl] = React.useState(null);

  React.useEffect(() => {
      if (clearCards) {
          setImage(null);
          setClearCards(false);
          setImage(<ArrowDropDownCircleIcon/>)
      }
  }, [clearCards, setClearCards])

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (menuItem) => {
      if (menuItem) {
        setAnchorEl(null);
        setImage(menuItem.image)
      }
  };
  
  return (
    <div className="box">
        <IconButton onClick={(event) => handleClick(event)}>
            {image}
        </IconButton>
        <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={() => setAnchorEl(null)}
        >
            {menuItems.map(menuItem => <MenuItem onClick={() => handleClose(menuItem)}>{menuItem.label}</MenuItem>)}
        </Menu>
    </div>)
}