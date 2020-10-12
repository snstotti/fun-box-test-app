import React, { useState } from 'react';
import s from './Card.module.scss';

const Card = ({ taste, bonus, size, description }) => {
  const [hover, setHover] = useState(false)
  const [approve, setApprove] = useState(false)
  const [disableds, setDisabled] = useState(false)


  const disabledFooterText = <span style={{color:'#FFFF66'}}>Печалька, {taste} закончился</span>
  const defaultFooter = <span> Чего сидишь? Порадуй котэ, <em className={s.link}>купи.</em></span>
  const selectedFooter = <span className={s.dsc}>{description}</span>
  const defaultApprove = <>Сказачное заморское явство</>
  const catApprove = <>Котэ не одобряет?</>
  return (
    <div style={{margin:'10px'}}>
      <button className={s.btnDisabled} onClick={!hover ? ()=>setDisabled(!disableds) : null}>d</button>
      
      <div className={s.cards}
        onClick={!disableds ? () => setHover(!hover) : null}
        onMouseEnter={hover ? () => setApprove(true) : null}
        onMouseLeave={() => setApprove(false)}>
        
        <div 
          className={hover 
            ? s.card + ' ' + s.cardSelected 
            : !disableds 
            ? s.card 
            : s.card + ' ' + s.cardDisabled } >

          <section 
            className={
              !disableds 
              ? s.product__description 
              : s.product__description + ' ' + s.descriptionDisabled}>
            <span 
              className={s.name}>{
                !approve 
                ? defaultApprove 
                : catApprove}
            </span>
            <h2 className={s.title}>Нямушка</h2>
            <span className={s.taste}>{taste}</span>
            <p className={s.bonus}>{bonus}</p>
          </section>

          <div 
            className={
              hover 
              ? s.portion + ' ' + s.portionSelected 
              : disableds 
              ? s.portion + ' ' + s.portionDisabled 
              : s.portion }>
            <span>{size} <p>кг</p></span>
          </div>
          <div className={s.photo_block}>
          </div>

        </div>

        <div className={s.footer}>
          {disableds 
            ? disabledFooterText 
            : hover 
            ? selectedFooter 
            : defaultFooter}
        </div>


      </div>
    </div>

  );
}

export default Card;
