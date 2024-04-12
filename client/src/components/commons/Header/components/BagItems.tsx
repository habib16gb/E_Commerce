import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";
import IconButton from "@mui/material/IconButton";
import emptyBag from "@assets/img/empty-bag.png";
import Button from "@mui/material/Button";
import BagItem from "./BagItem";
import React from "react";

interface IProps {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const initialItems = [
  {
    id: 1,
    name: "prod1",
    qte: 1,
    price: 6000,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRny-DAQ3SX6Tb0yffQ3PlTaIbpKpvoQetQhkmWJ0mzLQ&s",
  },
  {
    id: 2,
    name: "prod2",
    qte: 1,
    price: 8000,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRny-DAQ3SX6Tb0yffQ3PlTaIbpKpvoQetQhkmWJ0mzLQ&s",
  },
  {
    id: 3,
    name: " prod3",
    qte: 1,
    price: 9000,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRny-DAQ3SX6Tb0yffQ3PlTaIbpKpvoQetQhkmWJ0mzLQ&s",
  },
];

const BagItems = ({ setOpen }: IProps) => {
  const [items, setItems] = React.useState(initialItems);
  const handleRemoveItem = (id: number) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };
  return (
    <div className='flex flex-col h-screen'>
      <div className='top flex items-center justify-between border-b-2 p-4'>
        <div className='left flex items-center gap-2'>
          <ShoppingBagOutlinedIcon />
          <span>{items.length} items</span>
        </div>
        <IconButton aria-label='cancel' onClick={() => setOpen(false)}>
          <ClearOutlinedIcon />
        </IconButton>
      </div>
      {items.length > 0 ? (
        <div className='items flex-1'>
          {items.map((item) => (
            <BagItem
              key={item.id}
              item={item}
              handleRemoveItem={handleRemoveItem}
            />
          ))}
        </div>
      ) : (
        <div className='noItems flex-1 flex flex-col items-center justify-center'>
          <img src={emptyBag} alt='empty bag' />
          <p className=' text-2xl text-center text-slate-500'>
            Your shopping bag is empty. Start shopping
          </p>
        </div>
      )}
      {items.length > 0 && (
        <div className='btns p-4 flex justify-center flex-col gap-2'>
          <Button
            className='flex items-center justify-center gap-2 py-2'
            variant='contained'
            color='error'
          >
            <span>checkout now</span>
            <span>
              (
              {items
                .reduce((acc, ele) => {
                  return acc + ele.qte * ele.price;
                }, 0)
                .toLocaleString("de-DE", {
                  style: "currency",
                  currency: "EUR",
                })}
              )
            </span>
          </Button>
          <Button variant='outlined' color='error'>
            view cart
          </Button>
        </div>
      )}
    </div>
  );
};

export default BagItems;
