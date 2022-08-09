import React from "react";
import s from "./styles/About.module.scss";

const About: React.FC = () => (
  <section>
    <div className={s.aboutBanner}>
      <h1>Про нас</h1>
      <img
        src="https://mapizza.com.ua/wp-content/uploads/2021/09/banner-img-2.jpg"
        alt="Mapizza"
      />
    </div>
    <div className={s.advantages}>
      <div className={s.advantageItem}>
        <img
          src="https://mapizza.com.ua/wp-content/uploads/2021/09/benefits-img-1.svg"
          alt="Висока якість товарів"
        />
        <p>Італійські продукти найвищої якості</p>
        <p>Мамма імпортує продукти топових європейських брендів</p>
      </div>
      <div className={s.advantageItem}>
        <img
          src="https://mapizza.com.ua/wp-content/uploads/2021/09/benefits-img-2.svg"
          alt="Висока якість товарів"
        />
        <p>Неймовірний смак та хрустка скоринка</p>
        <p>Мамма готує тісто для піци лише на італійському борошні Caputo</p>
      </div>
      <div className={s.advantageItem}>
        <img
          src="https://mapizza.com.ua/wp-content/uploads/2021/09/benefits-img-3.svg"
          alt="Висока якість товарів"
        />
        <p>Професійні кухарі та піцайоли майстри своєї справи</p>
        <p>
          У Мамми працюють найкращі! Вболіваємо за розвиток кожного працівника!
        </p>
      </div>
      <div className={s.advantageItem}>
        <img
          src="https://mapizza.com.ua/wp-content/uploads/2021/09/benefits-img-4.svg"
          alt="Висока якість товарів"
        />
        <p>Безкоштовна та швидка доставка у будь-який куточок м. Львів</p>
        <p>Середній час доставки у зеленій зоні – 29 хв.</p>
      </div>
    </div>
    <div className={s.prepare}>
      <div className={s.prepareItem}>
        <span>
          <h1>Як у Львові готують справжню італійську піцу</h1>
          <p>
            Готувати справжню італійську піцу можуть або італійці, або ті, хто в
            них навчалися. Серед нас немає італійців, тож нашим завданням було
            перейняти досвід у віртуозів цієї справи. Вважаємо, що це нам
            вдалося! Щодня ми вдосконалюємося, щоб Ви ще більше закохувалися у
            кулінарну спадщину Італії. Оригінальні італійські рецепти, імпортні
            інгредієнти, трішки фантазії та любов до своєї роботи – наші основні
            пріоритети.
          </p>
        </span>
        <img
          src="https://mapizza.com.ua/wp-content/uploads/2021/09/block-img-1-884x493.jpg"
          alt="Тісто"
        />
      </div>
      <div className={s.prepareItem}>
        <span>
          <h1>Трохи таланту, досвіду та позитиву</h1>
          <p>
            Готувати справжню італійську піцу можуть або італійці, або ті, хто в
            них навчалися. Серед нас немає італійців, тож нашим завданням було
            перейняти досвід у віртуозів цієї справи. Вважаємо, що це нам
            вдалося! Щодня ми вдосконалюємося, щоб Ви ще більше закохувалися у
            кулінарну спадщину Італії. Оригінальні італійські рецепти, імпортні
            інгредієнти, трішки фантазії та любов до своєї роботи – наші основні
            пріоритети.
          </p>
        </span>
        <img
          src="https://mapizza.com.ua/wp-content/uploads/2021/09/block-img-2-884x493.jpg"
          alt="Тісто"
        />
      </div>
      <div className={s.description}>
        <h2>Імпортні продукти та піца з українською душею</h2>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/7toSikYGFNM"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        >
          {" "}
        </iframe>
        <div className={s.descriptionText}>
          <p>
            Mamma Italiana є одним з лідерів на ринку імпортерів харчових
            продуктів. Ми самі обираємо бренди, перевіряємо якість товарів та
            імпортуємо їх до України. Переглянути увесь асортимент та здійснити
            покупку Ви можете у наших маркетах.
          </p>
          <p>
            Мамма імпортує й інгредієнти для піци, яку готують піцайоли у наших
            пекарнях. Запевняємо Вас, що усі продукти, які використовуються для
            приготування піци – найвищої якості. Наприклад: тунець для «Тонно»,
            хамон для «Прошуто Крудо» ми веземо з Іспанії; помідори для
            неаполітанського соусу, борошно для тіста – з Італії; часто
            співпрацюємо з польськими та німецькими виробниками продуктів, які
            чудово смакуватимуть у наших стравах.
          </p>
          <p>
            Ми збирали рецепти в Італії, навчалися у майстрів з Неаполя, щоб
            готувати для Вас справжню піцу у неаполітанському стилі.
          </p>
          <p>
            На жаль, ми ще не доставляємо замовлення дронами, але у львівському
            трафіку наші кур’єри почуваються комфортно і доставляють піцу
            вчасно.
          </p>
          <p>Buon Apettito, наші найдорожчі гурмани!</p>
          <img
            src="https://mapizza.com.ua/wp-content/uploads/2021/09/p-detail-img-2-1.jpg"
            alt="Піцца"
          />
        </div>
      </div>
    </div>
  </section>
);

export default About;
