import React, { useState } from "react";
import { IMenuPosition } from "../../Models/menu";
import s from "./MenuPosition.module.scss";

type MenuPositionProps = { position: IMenuPosition };
// id: number;
// title: string;
// description: string;
// price: number;
// weight: number;
// image: string;
// bonus_increment: number;
// is_active: boolean;
const MenuPosition: React.FC<MenuPositionProps> = ({
  position: { title, description, price, weight, image, bonus_increment },
}) => {
  const [quantity, setQuantity] = useState<number>(0);

  // return <div className={is_active ? s.activeMenuPosition : s.menuPosition}>
  return (
    <div className={s.menuPosition}>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <div className={s.description}>{description}</div>
      <div className={s.bottomInfo}>
        <div className={s.numberDetails}>
          <span className={s.priceWeight}>
            <h3>{price} грн</h3> / {weight} г
          </span>
          <div className={s.bonus}>+ {bonus_increment} грн бонусів</div>
        </div>
        <div className={s.quantity}>
          <button
            type="button"
            className={`${s.quantityChange} ${s.minus}`}
            onClick={() => setQuantity(quantity - 1)}
          >
            -
          </button>
          <div className={`${s.quantityChange} ${s.amount}`}>{quantity}</div>
          <button
            type="button"
            className={`${s.quantityChange} ${s.plus}`}
            onClick={() => setQuantity(quantity + 1)}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuPosition;
