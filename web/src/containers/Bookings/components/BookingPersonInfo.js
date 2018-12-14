import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import IntlMessages from '../../../components/utility/IntlMessages';
import { getRecordData } from '../../../helpers/Tools';
import { BookingPersonInfoStyle } from './styles/BookingPersonInfo.style';

export const BookingPersonInfo = props => {
  return (
    <BookingPersonInfoStyle>
      <ul>
        {props.items.map(item => (
          <li key={item.key}>
            <i>
              <IntlMessages id={item.title} />
            </i>
            :{' '}
            <b>
              {item.isLink ? (
                <Link
                  to={`/users/${getRecordData(
                    props.record,
                    item.userIdProps
                  )}/edit`}
                >
                  {getRecordData(props.record, item.valueProps)}
                </Link>
              ) : (
                getRecordData(props.record, item.valueProps)
              )}
            </b>
          </li>
        ))}
      </ul>
    </BookingPersonInfoStyle>
  );
};

BookingPersonInfo.propTypes = {
  items: PropTypes.array,
  record: PropTypes.object
};
