import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Icon, Row, Col } from 'antd';
import IntlMessages from '../../../components/utility/IntlMessages';
import { getRecordData } from '../../../helpers/Tools';
import { InputAdditionWrapper } from './InputAdditionWrapper';
import Title from '../../../components/common/Title';

class InputAddition extends Component {
  static getDerivedStateFromProps = (nextProps, prevState) => {
    const data = getRecordData(nextProps.record, nextProps.source);
    if (data !== prevState.data) {
      return { data, formDatas: data || [{ vi: '', en: '' }] };
    }
    return {};
  };

  constructor(props) {
    super(props);
    const { record, source } = props;
    const data = getRecordData(record, source);
    this.state = {
      data,
      formDatas: data || [{ vi: '', en: '' }],
    };
  }

  remove = k => {
    const { form, source } = this.props;
    // can use data-binding to get
    const keys = form.getFieldValue(source);
    // We need at least one passenger
    if (keys.length === 1) {
      return;
    }
    const formDatas = keys.filter((key, index) => index !== k);
    this.setState({ formDatas });
    // can use data-binding to set
    form.setFieldsValue({
      [source]: [...formDatas],
    });
  };

  add = () => {
    const { form, source } = this.props;
    // can use data-binding to get
    const keys = form.getFieldValue(source);
    const formDatas = [...keys, { vi: '', en: '' }];
    this.setState({ formDatas });
    // can use data-binding to set
    // important! notify form to detect changes
    form.setFieldsValue({
      [source]: formDatas,
    });
  };

  render() {
    const { formDatas } = this.state;
    const {
      form,
      source,
      titleClassName,
      titleStyle,
      unShowButtonAdd,
      children,
      numberOfCols,
      record,
      title,
    } = this.props;
    const formItems = formDatas ? (
      formDatas.map((k, index) => {
        const key = index;
        return (
          <Row gutter={16} key={key}>
            <Col xs={24}>
              <Title className={titleClassName} style={titleStyle}>
                <IntlMessages id={title} /> ({index + 1})
                <span style={{ width: 40, paddingLeft: 10 }}>
                  {formDatas.length > 1 ? (
                    <Icon
                      type="delete"
                      disabled={formDatas.length === 1}
                      onClick={() => this.remove(index)}
                      className="btnDelete"
                    />
                  ) : null}
                </span>
              </Title>
            </Col>
            {React.Children.map(children, (node, index2) => {
              const key2 = index2;
              return (
                <Col key={key2} sm={24 / numberOfCols} xs={24}>
                  {React.cloneElement(node, {
                    form,
                    record,
                    key: `${source}[${key}].${node.props.source}`,
                    source: `${source}[${index}].${node.props.source}`,
                  })}
                </Col>
              );
            })}
          </Row>
        );
      })
    ) : (
      <span />
    );
    return (
      <InputAdditionWrapper>
        {formItems}
        {!unShowButtonAdd && (
          <div role="button" className="btnAdd" onClick={this.add}>
            <Icon type="plus" className="iconAdd" />
            <IntlMessages id="button.add" /> <IntlMessages id={title} />
          </div>
        )}
      </InputAdditionWrapper>
    );
  }
}
InputAddition.propTypes = {
  form: PropTypes.object,
  record: PropTypes.object,
  source: PropTypes.string,
  children: PropTypes.any,
  numberOfCols: PropTypes.number,
  title: PropTypes.any,
  unShowButtonAdd: PropTypes.bool,
  titleClassName: PropTypes.string,
  titleStyle: PropTypes.any,
};

InputAddition.defaultProps = {
  numberOfCols: 1,
};

export default InputAddition;
