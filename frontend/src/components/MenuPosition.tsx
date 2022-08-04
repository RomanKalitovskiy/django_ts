import React, { useState } from "react";
import { IMenuPosition } from "models/menu";
import s from "components/styles/MenuPosition.module.scss";

type MenuPositionProps = { position: IMenuPosition };

const MenuPosition: React.FC<MenuPositionProps> = ({
  position: {
    title,
    description,
    price,
    weight,
    image,
    bonus_increment,
    is_active,
  },
}) => {
  const [quantity, setQuantity] = useState<number>(0);
  const [isActive, setIsActive] = useState<boolean>(is_active);

  return (
    <div className={s.menuPosition}>
      <img className={s.mainProductPhoto} src={image} alt={title} />
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
      <button type="button" className={s.buy}>
        ЗАМОВИТИ
      </button>
      {isActive ? (
        <svg
          className={s.defaultHeart}
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          width="24"
          height="24"
          x="0"
          y="0"
          viewBox="0 0 24 24"
          onClick={() => setIsActive(!isActive)}
        >
          <path
            xmlns="http://www.w3.org/2000/svg"
            d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Zm-3.585,18.4a2.973,2.973,0,0,1-3.83,0C4.947,16.006,2,11.87,2,8.967a4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,11,8.967a1,1,0,0,0,2,0,4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,22,8.967C22,11.87,19.053,16.006,13.915,20.313Z"
            fill="none"
          />
        </svg>
      ) : (
        <svg
          className={s.favourite}
          xmlns="http://www.w3.org/2000/svg"
          id="Filled"
          viewBox="0 0 24 24"
          width="24"
          height="24"
          onClick={() => setIsActive(!isActive)}
        >
          <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Z" />
        </svg>
      )}
    </div>
  );
};

export default MenuPosition;
