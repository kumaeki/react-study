import React from 'react';
import styled from 'styled-components';
import { TextField, TextFieldProps } from '@material-ui/core';

/*
 * Text入力項目用のコンポーネント
 * MaterialUIのTextFieldをベースにカスタマイズ
 * TextFieldPropsの詳細は下記URLを参照のこと
 * https://material-ui.com/api/text-field/
 */

const BaseTextField = styled((props: TextFieldProps) => <TextField {...props} variant={'outlined'} size="small" />)`
  input {
    padding: 5px 5px 3px 10px;
    color: black;
  }

  & .MuiOutlinedInput-root {
    border-radius: 0;
  }

  & .MuiOutlinedInput-multiline {
    padding: 5px 10px;
  }

  & .Mui-disabled {
    background-color: lightcyan;
  }
`;

/**
 * input項目に使うコントロール
 * @param {TextFieldProps} props
 * @return {JSX.Element} EditableTextField
 */
export const EditableTextField = styled((props: TextFieldProps) => <BaseTextField {...props} />)`
  background-color: white;
`;

/**
 * input項目に使うコントロール_強調表示
 * @param {TextFieldProps} props
 * @return {JSX.Element} EmphasizeEditableTextField
 */
export const EmphasizeEditableTextField = styled((props: TextFieldProps) => <BaseTextField {...props} />)`
  background-color: white;
  & .MuiInputBase-root {
    font-size: 24px;
    font-weight: bold;
  }
`;

/**
 * ReadOnly(≒Disabled)なinput項目に使うコントロール
 * @param {TextFieldProps} props
 * @return {JSX.Element} ReadOnlyTextField
 */
export const ReadOnlyTextField = styled((props: TextFieldProps) => <BaseTextField {...props} disabled={true} />)``;

/**
 * ReadOnly(≒Disabled)なinput項目に使うコントロール_強調表示
 * @param {TextFieldProps} props
 * @return {JSX.Element} EmphasizeReadOnlyTextField
 */
export const EmphasizeReadOnlyTextField = styled((props: TextFieldProps) => (
  <BaseTextField {...props} disabled={true} />
))`
  & .MuiInputBase-root {
    font-size: 24px;
    font-weight: bold;
  }
`;
