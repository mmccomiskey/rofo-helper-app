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
        image: <ChickenLeg/>
    },
    {
        label: 'Chicken',
        image: <Chicken/>
    },
    {
        label: 'Soda',
        image: <Soda/>
    },
    {
        label: 'Fries',
        image: <FrenchFries/>
    },
    {
        label: 'Coffee',
        image: <Coffee/>
    },
    {
        label: 'Slurpee',
        image: <DrinkStraw/>
    },
    {
        label: 'Rofo logo',
        image: <img src={rofo} alt="rofo logo" width="45px"/>
    },
    {
        label: 'Gas',
        image: <Gas/>
    }
]

export const Card = ({
    clearCards,
    setClearCards
}) => {
  const [itemPicked, setItemPicked] = React.useState(false);
  const [image, setImage] = React.useState(null);
  const [anchorEl, setAnchorEl] = React.useState(null);

  React.useEffect(() => {
      if (clearCards) {
          setItemPicked(false);
          setImage(null);
          setClearCards(false)
      }
  }, [clearCards, setClearCards])

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (menuItem) => {
      if (menuItem) {
        setAnchorEl(null);
        setItemPicked(true);
        setImage(menuItem.image)
      }
  };
  
  return (
    <div className="box">
        {itemPicked ? image : <>
        <IconButton onClick={(event) => handleClick(event)}>
            <ArrowDropDownCircleIcon/>
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
      </>}
    </div>)
}