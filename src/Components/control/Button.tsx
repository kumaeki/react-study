import React from 'react';
import styled from 'styled-components';
import { Button, ButtonProps } from '@material-ui/core';

/*
 * ボタンコンポーネント
 * MaterialUIのButtonをベースにカスタマイズ
 * ButtonPropsの詳細は下記URLを参照のこと
 * https://material-ui.com/api/Button/
 */

/**
 * 汎用ボタンコンポーネント
 * @param {ButtonProps} props
 * @return {JSX.Element} CustomButton
 */
export const CustomButton = styled((props: ButtonProps) => <Button variant="contained" size="small" {...props} />)`
  /* padding-top: 0px; */
  height: 26px;
  padding: 4px 12px 0px 12px;
  font-weight: bold;
  min-width: 16ch;
  text-transform: none;
`;

/**
 * FilePickerボタンコンポーネント
 * @param {ButtonProps} props
 * @return {JSX.Element} FilePickerButton
 */
// export const FilePickerButton = styled((props: ButtonProps) => (
//   <Button
//     variant="contained"
//     size="small"
//     {...props}
//     onChange={() => {
//       return;
//     }}
//   >
//     参照{' '}
//     <input
//       type="file"
//       accept=".pdf"
//       style={{ opacity: 0, appearance: 'none', position: 'absolute' }}
//       onChange={props.onChange}
//     />
//   </Button>
// ))`
//   height: 26px;
//   padding: 4px 12px 0px 12px;
//   font-weight: bold;
// `;
