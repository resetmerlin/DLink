import React from 'react';
import {
  BlockButton,
  UserDetailLikeButton,
  UserDetailsMessageButton,
} from '../../Button';
import './CardDetailsBottom.scss';

interface Props {
  name: string;
  age: string;
  memberId: string;
  department: string;
}

export default function CardDetailsBottomView({
  name,
  age,
  memberId,
  blockAction,
  blockValue,
  introduction,
  likeAction,
  saveValue,
  department,
}: Props) {
  return (
    <div className="card-details__bottom">
      <div className="card-details__bottom__info">
        <div className="card-details__bottom__info-main__name">
          {name}
          <div className="card-details__bottom__info-main__age ">{age}</div>
        </div>

        <label htmlFor="popup-dot" className="card-details__dot">
          <box-icon name="dots-horizontal-rounded" color="black" size="3rem" />
        </label>
        <input type="checkbox" id="popup-dot" name="popup-dot" />
        <div className="card-details__popup-box">
          <button type="button"> 신고하기</button>
          <BlockButton
            memberId={memberId}
            blockValue={blockValue}
            blockAction={blockAction}
          />
        </div>
      </div>
      <div className="card-details__bottom__info-sub__major">{department}</div>

      <div className="card-details__bottom__info-sub">
        <span className="card-details__bottom__info-sub__introduction">
          {introduction}
        </span>
      </div>
      <div className="card-details__bottom__buttons">
        <UserDetailLikeButton
          likeAction={likeAction}
          saveValue={saveValue}
          memberId={memberId}
        />

        <UserDetailsMessageButton />
      </div>
    </div>
  );
}