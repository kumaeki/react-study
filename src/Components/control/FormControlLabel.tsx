import React, { FC } from 'react';
import { FormControlLabel, FormControlLabelProps } from '@material-ui/core';
import ErrorIcon from '@material-ui/icons/Error';
import Tooltip from '@material-ui/core/Tooltip';

/*
 * 入力コンポーネント(例:input/checkbox/radio)に対するラベル用コンポーネント
 * MaterialUIのTextFieldをベースにカスタマイズ
 * FormControlLabelPropsの詳細は下記URLを参照のこと
 * https://material-ui.com/api/form-control-label/
 */

/**
 * 入力コンポーネントにラベル付与する時に使用する汎用コンポーネント
 * デフォルトのラベル位置はTop
 * @param {FormControlLabelProps} props
 * @return {JSX.Element} CustomFormControlLabel
 */
export const CustomFormControlLabel = (props: FormControlLabelProps): JSX.Element => (
  <FormControlLabel labelPlacement="top" {...props} />
);

type ErrorLabelProps = {
  errorMessage: string;
  labelText: string;
};

/**
 * 入力コンポーネントにラベル付与する時に使用する汎用コンポーネント
 * デフォルトのラベル位置はTop
 * @param {FormControlLabelProps} props
 * @return {JSX.Element} CustomFormControlLabel
 */
export const ErrorLabel: FC<ErrorLabelProps> = (ErrorLabelProps) => {
  const { errorMessage, labelText } = ErrorLabelProps;
  if (!errorMessage) {
    return <span>{labelText}</span>;
  } else {
    return (
      <div style={{ display: 'flex' }}>
        <span style={{ color: 'red' }}>{labelText}</span>
        <Tooltip title={errorMessage} placement="right-start">
          <ErrorIcon fontSize="small" color="secondary" />
        </Tooltip>
      </div>
    );
  }
};
