import React from 'react';
import { IoCall, IoMail } from 'react-icons/io5';
import { AiOutlineGlobal } from "react-icons/ai";

import { MdHome } from "react-icons/md";

import styles from '../../styles/ContactCard.module.css';
import { ContactCardContent } from './ScreensContent';

function ContactCard({ colorTheme }:{colorTheme:{textColor:string}}) {
  return (
    <div className={styles.container}>
      <h3 style={{ color: colorTheme.textColor }} className={styles.heading}>
        {ContactCardContent.heading}
      </h3>

      <div className={styles.contacts}>
        <MdHome name="home" size={24} color={colorTheme.textColor} className={styles.icon} />
        <div className={styles.desc}>
          <p style={{ color: colorTheme.textColor }} className={styles.iconName}>
            {ContactCardContent.addressLabel}
          </p>
          <p className={styles.details}>{ContactCardContent.addressValue}</p>
        </div>
        <div className={styles.iconWrapper}>
          <IoCall size={24} color={colorTheme.textColor} className={styles.icon} />
        </div>
        <div className={styles.desc}>
          <p style={{ color: colorTheme.textColor }} className={styles.iconName}>
            {ContactCardContent.callLabel}
          </p>
          <p className={styles.details}>{ContactCardContent.callValue}</p>
        </div>
      </div>

      <div className={styles.contacts}>
        <IoMail name="email" size={24} color={colorTheme.textColor} className={styles.icon} />
        <div className={styles.desc}>
          <p style={{ color: colorTheme.textColor }} className={styles.iconName}>
            {ContactCardContent.mailLabel}
          </p>
          <p className={styles.details}>{ContactCardContent.mailValue}</p>
        </div>
        <div className={styles.iconWrapper}>
          <AiOutlineGlobal name="web" size={24} color={colorTheme.textColor} />
        </div>
        <div className={styles.desc}>
          <p style={{ color: colorTheme.textColor }} className={styles.iconName}>
            {ContactCardContent.webAddressLabel}
          </p>
          <p className={styles.details}>{ContactCardContent.webAddressValue}</p>
        </div>
      </div>
    </div>
  );
}

export default ContactCard;
