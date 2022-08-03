import React, { useState } from "react";
import { IMenuPosition } from "models/menu";
import s from "components/styles/MenuPosition.module.scss";

type MenuPositionProps = { position: IMenuPosition };

const MenuPosition: React.FC<MenuPositionProps> = ({
  position: { title, description, price, weight, image, bonus_increment },
}) => {
  const [quantity, setQuantity] = useState<number>(0);

  return (
    <div className={s.menuPosition}>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <div className={s.description}>{description}</div>
      <div className={s.bottomInfo}>
        <div className={s.numberDetails}>
          <span className={s.priceWeight}>
            <h3>{price} грн</h3> / {weight}
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
