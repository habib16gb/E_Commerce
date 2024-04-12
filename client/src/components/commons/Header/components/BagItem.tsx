import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";
import IconButton from "@mui/material/IconButton";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import React from "react";

type TItem = {
  id: number;
  name: string;
  qte: number;
  price: number;
  img: string;
};

interface IProps {
  item: TItem;
  handleRemoveItem: (id: number) => void;
}

const BagItem = ({ item, handleRemoveItem }: IProps) => {
  const [quantity, setQuantity] = React.useState(item.qte);

  return (
    <div className='flex items-center gap-4 p-4 border-b-2'>
      <div className='left flex flex-col items-center gap-2'>
        <IconButton
          disableRipple
          onClick={() => setQuantity((prev) => prev + 1)}
        >
          <AddCircleOutlineIcon className=' cursor-pointer text-red-400 hover:text-red-500 scale-125' />
        </IconButton>
        <span>{quantity}</span>
        <IconButton
          disableRipple
          className='scale-125'
          sx={{
            color: "rgb(248 113 113)",
            transition: "all .2s linear",
            "&:hover": {
              color: "rgb(239 68 68)",
            },
          }}
          disabled={quantity == 1}
          onClick={() => setQuantity((prev) => prev - 1)}
        >
          <RemoveCircleOutlineIcon />
        </IconButton>
      </div>
      <div className='center flex-1'>{item.name}</div>
      <div className='right'>
        <IconButton
          aria-label='remove item'
          onClick={() => handleRemoveItem(item.id)}
        >
          <ClearOutlinedIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default BagItem;
