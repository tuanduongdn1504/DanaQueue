import React from 'react';
import { map, dropRight } from 'lodash';
import PropTypes from 'prop-types';
import { Popover, Icon } from 'antd';
import RestTag from '../RestTag';
import TagsStackWrapper from './style';

const TagsStack = props => {
  const { maxItem, resourceData, source, moreButtonStyle } = props;
  const minusItems = resourceData && resourceData.total - maxItem;
  return (
    <div>
      <TagsStackWrapper>
        {resourceData &&
          map(dropRight(resourceData.list, minusItems > 0 ? minusItems : 0), (item, key) => {
            return (
              <span key={key}>
                {key + 1 < maxItem || resourceData.list.length ? (
                  <RestTag
                    record={item}
                    source={source}
                    color="#ecf9ff"
                    theme={{ color: '#5f5f5f' }}
                  />
                ) : (
                  <span style={moreButtonStyle}>
                    {minusItems > 0 && (
                      <Popover
                        content={
                          <div style={{ width: '300px' }}>
                            {map(resourceData.list, (obj, k) => (
                              <RestTag
                                record={obj}
                                source={source}
                                color="#ecf9ff"
                                key={k}
                                theme={{ color: '#5f5f5f' }}
                              />
                            ))}
                          </div>
                        }
                        trigger="hover"
                        placement="bottom"
                      >
                        <a role="button">
                          <RestTag
                            customText={<Icon type="ellipsis" theme="outlined" />}
                            color="#ecf9ff"
                            theme={{ color: '#5f5f5f' }}
                          />
                        </a>
                      </Popover>
                    )}
                  </span>
                )}
              </span>
            );
          })}
      </TagsStackWrapper>
    </div>
  );
};

TagsStack.propTypes = {
  resourceData: PropTypes.object,
  maxItem: PropTypes.number,
  source: PropTypes.string,
  moreButtonStyle: PropTypes.object,
};

export default TagsStack;
